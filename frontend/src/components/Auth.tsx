import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { LabelledInput } from "./LabelledInput";
import { Button } from "./Button";
import { AuthHeader } from "./AuthHeader";
import { SignupType } from "@shub_03/medium-common";

// import { SigninType } from "@shub_03/medium-common";

export const Auth = ({ authType }: { authType: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });

  // SigninType is not defined. There should be seperate component.
  //   const [loginInput, setLoginInput] = useState<SigninType>({
  //     email: "",
  //     password: "",
  //   });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${
          authType === "signup" ? "signup" : "signin"
        }`
      );

      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing up. " + error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <AuthHeader type={authType === "signup" ? "signup" : "signin"} />

      {authType === "signup" ? (
        <LabelledInput
          label="Name"
          placeholder="John Doe"
          type="text"
          onChange={(e) => {
            setPostInput({
              ...postInput,
              name: e.target.value,
            });
          }}
        />
      ) : null}

      <LabelledInput
        label="Email"
        placeholder="ab@example.com"
        type="email"
        onChange={(e) => {
          setPostInput({
            ...postInput,
            email: e.target.value,
          });
        }}
      />
      <LabelledInput
        label="Password"
        type="password"
        onChange={(e) => {
          setPostInput({
            ...postInput,
            password: e.target.value,
          });
        }}
      />

      <Button
        onClick={sendRequest}
        btnType={authType === "signup" ? "Sign up" : "Sign in"}
      />
    </div>
  );
};
