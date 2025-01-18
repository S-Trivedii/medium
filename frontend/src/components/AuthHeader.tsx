import { Link } from "react-router-dom";

interface AuthHeader {
  type: "signup" | "signin";
}

export const AuthHeader = ({ type }: AuthHeader) => {
  return (
    <div className="mb-2">
      <h1 className="font-bold text-4xl">
        {type === "signup" ? "Create an Account" : "Login"}
      </h1>
      <p className="text-center font-normal text-slate-400 text-xl">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <Link
          className="text-blue-400 underline"
          to={type === "signup" ? "/signin" : "/signup"}
        >
          {type === "signup" ? "Sign in" : "Sign up"}
        </Link>{" "}
      </p>
    </div>
  );
};
