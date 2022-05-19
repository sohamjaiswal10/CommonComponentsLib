import { IAvatarProps } from "../../components/avatar/avatar.types";
import { IBannerProps } from "../../components/banner/banner.types";
export interface ICardContainerProps {
  avatar: IAvatarProps;
  banner: IBannerProps;
  body?: ReactElement;
}
