import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import bcrypt from "bcrypt";
import { signinInput, signupInput } from "@shub_03/medium-common"; // my own npm package

// generics
export const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Register
userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const password = body.password;
  const hashPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email: body.email, // from user
      password: hashPassword, // from user
    },
  });

  // sign = payload + secret key
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({
    jwt: token,
  });
});

// Login
userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json(); // body from user side
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Input not correct",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email, // form db
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }

  // Comparing password
  const isPasswordValid = await bcrypt.compare(body.password, user.password);

  if (!isPasswordValid) {
    c.status(403);
    return c.json({ error: "Invalid credentials" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});
