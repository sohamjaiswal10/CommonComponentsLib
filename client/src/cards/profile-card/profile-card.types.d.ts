import { IProfileDetailsProps } from "../../fragments/profile-details/profile-details.types";
import { IAvatarProps } from "../../components/avatar/avatar.types";
import { IBannerProps } from "../../components/banner/banner.types";
export interface IProfileCardProps {
  avatar: IAvatarProps;
  banner: IBannerProps;
  details: IProfileDetailsProps;
}
