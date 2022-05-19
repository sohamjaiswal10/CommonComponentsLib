import React, { useState } from "react";
import { BigBox } from "../../components/big-box";
import { ImageInput } from "../../components/form/inputs/image-input";
import { SyntheticEvent } from "react";
import { Form } from "../../components/form";

import "./create-recipe-form.scss";
import { TextInput } from "../../components/form/inputs/text-input";
import { Typography } from "../../components/typography";
import { black, darkGrey, white } from "../../common/colors";
import { Section } from "../../components/section";
import { TextAreaInput } from "../../components/form/inputs/text-area-input";
import {
  TAGLINE_LIMIT,
  RECIPE_NAME_LIMT,
  RECIPE_LIMIT,
} from "../../common/global";
import { ICreateRecipeFormProps } from "./create-recipe-form.types";
import { Avatar } from "../../components/avatar";
import { SubmitInput } from "../../components/form/inputs/submit-input";

export const CreateRecipeForm = ({
  avatar,
  username,
  nickname,
}: ICreateRecipeFormProps) => {
  const [currentBanner, setBanner] = useState("");
  const [currentRecipeSteps, setRecipeSteps] = useState("");
  const [currentRecipeName, setRecipeName] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      avatar: avatar,
      banner: currentBanner,
      username: username,
      nickname: nickname,
      about: currentRecipeSteps,
      tagline: currentRecipeName,
    };
    console.log(data);
  };

  return (
    <div className="createRecipeForm">
      <BigBox>
        <Form onSubmit={handleSubmit}>
          <div className="header">
            <ImageInput
              extraClassnames={["banner"]}
              radius="0%"
              image={currentBanner}
              onChange={setBanner}
              previewWidth={"100%"}
              previewHeight={"30rem"}
            />
            <Avatar size={15} image={avatar} border={0.125} shadow />
          </div>
          <div className="body">
            <div className="userDetails">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  paddingLeft: "2.5rem",
                }}
              >
                <Typography
                  label={nickname}
                  color={black}
                  weight={700}
                  size={2}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  paddingLeft: "2rem",
                }}
              >
                <Typography
                  label={`@${username}`}
                  weight={700}
                  size={2}
                  color={darkGrey}
                />
              </div>
            </div>
            <Section
              heading="Recipe Name"
              content={
                <TextInput
                  required
                  label={currentRecipeName}
                  onChange={setRecipeName}
                  placeholder={"Recipe Name"}
                  maxLength={RECIPE_NAME_LIMT}
                />
              }
            />
            <Section
              heading="Recipe"
              content={
                <TextAreaInput
                  label={currentRecipeSteps}
                  onChange={setRecipeSteps}
                  maxlength={RECIPE_LIMIT}
                  placeholder={
                    "Requirements: Oven, sugar, patience \nSteps: a one and a two and a three"
                  }
                  required
                />
              }
            />
            <SubmitInput
              button={{
                onClick: () => null,
                typography: {
                  label: "Upload Recipe!",
                  color: white,
                  weight: 600,
                  size: 1.5,
                },
              }}
            />
          </div>
        </Form>
      </BigBox>
    </div>
  );
};
