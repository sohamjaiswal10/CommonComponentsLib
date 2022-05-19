import React from "react";
import { lightGrey } from "../../common/colors";
import { Section } from "../../components/section";
import { Typography } from "../../components/typography";
import { IRecipeDetailsProps } from "./recipe-details.types";

import "./recipe-details.scss";

export const RecipeDetails = ({
  username,
  nickname,
  recipeName,
  recipeInstructions,
}: IRecipeDetailsProps) => {
  return (
    <div className="recipeDetails">
      <div className="userDetails">
        <Typography label={nickname} weight={700} size={2} />
        <Typography
          label={`@${username}`}
          weight={700}
          size={1.5}
          color={lightGrey}
        />
      </div>
      <Section
        heading={recipeName}
        content={
          <Typography label={recipeInstructions} weight={400} size={1.75} />
        }
      />
    </div>
  );
};
