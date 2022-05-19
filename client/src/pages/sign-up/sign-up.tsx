import React from "react";
import { SignUpGraphic } from "../../assets/svgs";
import { SignUpForm } from "../../forms/sign-up-form";

export const SignUp = () => {
  return (
    <div
      className="signUp"
      // style={{ backgroundImage: `url(${SignUpGraphic("5rem")})` }}
    >
      <SignUpForm />
    </div>
  );
};
