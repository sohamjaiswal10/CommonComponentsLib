import { IRecipeDetailsProps } from "../../fragments/recipe-details/recipe-details.types";
import { IAvatarProps } from "../../components/avatar/avatar.types";
import { IBannerProps } from "../../components/banner/banner.types";
export interface IRecipeCardProps {
  avatar: IAvatarProps;
  banner: IBannerProps;
  details: IRecipeDetailsProps;
}
