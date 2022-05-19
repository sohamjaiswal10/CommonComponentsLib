import React, { SyntheticEvent, useState } from "react";
import { black, darkGrey, grey, white } from "../../common/colors";
import { BigBox } from "../../components/big-box";
import { Form } from "../../components/form";
import { SubmitInput } from "../../components/form/inputs/submit-input";
import { TextInput } from "../../components/form/inputs/text-input";
import { Typography } from "../../components/typography";

import "./login-form.scss";

import Axios from "axios";
import { Link } from "react-router-dom";
import { USERNAME_LIMIT, PASSWORD_LIMIT } from "../../common/global";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password,
    };

    Axios.post("http://localhost:3001/api/login", { credentials }).then(
      (serverResponse) => {
        if (serverResponse.data) {
          localStorage.setItem(
            "userToken",
            JSON.stringify(serverResponse.data.token)
          );
          window.location.href = "/dashboard"; // -> instead of dashboard it's user profile thing
        }
      }
    );
  };
  return (
    <div className="login">
      <BigBox>
        <div className="greeting">
          <Typography label="Welcome Back!" weight={700} size={2} />
          <Typography
            label="We were expecting you."
            weight={700}
            size={1.5}
            color={grey}
          />
        </div>
        <Form onSubmit={handleSubmit}>
          <TextInput
            label={username}
            onChange={setUsername}
            placeholder={"Username"}
            maxLength={USERNAME_LIMIT}
          />
          <TextInput
            label={password}
            onChange={setPassword}
            placeholder={"Password"}
            type="password"
            maxLength={PASSWORD_LIMIT}
          />
          <SubmitInput
            button={{
              onClick: () => null,
              typography: {
                label: "Login",
                color: white,
                weight: 600,
                size: 1.5,
              },
            }}
          />
        </Form>
        <div className="signUpRedirect">
          <Typography label="Not a member?" color={darkGrey} weight={500} />
          <Link to="/api/signup">
            <Typography
              label="Signup now"
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
