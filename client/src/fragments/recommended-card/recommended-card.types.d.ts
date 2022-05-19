import { IBannerProps } from "../../components/banner/banner.types";
import { IAvatarProps } from "../../components/avatar/avatar.types";
export interface IRecommendedCardProps {
  banner: IBannerProps;
  avatar: IAvatarProps;
  title: string;
  author: string;
}
