import React from "react";
import { CardContainer } from "../../fragments/card-container";
import { RecipeDetails } from "../../fragments/recipe-details";
import { IRecipeCardProps } from "./recipe-card.types";

export const RecipeCard = ({ avatar, banner, details }: IRecipeCardProps) => {
  return (
    <div className="recipeCard">
      <CardContainer
        avatar={avatar}
        banner={banner}
        body={<RecipeDetails {...details} />}
      />
    </div>
  );
};
