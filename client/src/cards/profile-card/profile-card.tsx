import React from "react";
import { CardContainer } from "../../fragments/card-container";
import { ProfileDetails } from "../../fragments/profile-details";
import { IProfileCardProps } from "./profile-card.types";

export const ProfileCard = ({ avatar, banner, details }: IProfileCardProps) => {
  return (
    <div className="profileCard">
      <CardContainer
        avatar={avatar}
        banner={banner}
        body={<ProfileDetails {...details} />}
      />
    </div>
  );
};
