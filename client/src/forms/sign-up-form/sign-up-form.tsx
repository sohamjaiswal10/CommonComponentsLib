import React, { useState } from "react";
import { Form } from "../../components/form";
import { TextInput } from "../../components/form/inputs/text-input";
import { Typography } from "../../components/typography";
import { SyntheticEvent } from "react";
import { SubmitInput } from "../../components/form/inputs/submit-input";
import { white, grey, darkGrey, black } from "../../common/colors";

import "./sign-up-form.scss";
import { BigBox } from "../../components/big-box";

import Axios from "axios";
import { Link } from "react-router-dom";
import { USERNAME_LIMIT, PASSWORD_LIMIT } from "../../common/global";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const credentials = {
      username: username,
      email: email,
      password: password,
    };
    Axios.post("http://localhost:3001/api/register", { credentials }).then(
      (serverResponse) => {
        if (serverResponse.data) {
          window.location.href = "/api/login";
        }
      }
    );
  };
  return (
    <div className="signUp">
      <BigBox>
        <div className="greeting">
          <Typography label="Nice to meet you!" weight={700} size={2} />
          <Typography
            label="Glad to have you onboard."
            weight={700}
            size={1.5}
            color={grey}
          />
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            label={username}
            onChange={setUsername}
            placeholder={"Username"}
            maxLength={USERNAME_LIMIT}
          />
          <TextInput label={email} onChange={setEmail} placeholder={"Email"} />
          <TextInput
            label={password}
            onChange={setPassword}
            placeholder={"Password"}
            type={"password"}
            maxLength={PASSWORD_LIMIT}
          />
          <SubmitInput
            button={{
              onClick: () => null,
              typography: {
                label: "Signup",
                color: white,
                weight: 600,
                size: 1.5,
              },
            }}
          />
        </Form>
        <div className="loginRedirect">
          <Typography label="Already a member?" color={darkGrey} weight={500} />
          <Link to="/api/login">
            <Typography
              label="Log in"
              color={black}
              weight={500}
              onClick={() => null}
            />
          </Link>
        </div>
      </BigBox>
    </div>
  );
};
