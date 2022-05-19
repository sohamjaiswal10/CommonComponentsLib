import React from "react";
import { lightGrey } from "../../common/colors";
import { Section } from "../../components/section";
import { Typography } from "../../components/typography";
import { IProfileDetailsProps } from "./profile-details.types";

import "./profile-details.scss";

export const ProfileDetails = ({
  username,
  nickname,
  about,
  tagline,
}: IProfileDetailsProps) => {
  return (
    <div className="profileDetails">
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
        heading="Tagline"
        content={<Typography label={tagline} weight={400} size={1.75} />}
      />
      <Section
        heading="About"
        content={<Typography label={about} weight={400} size={1.75} />}
      />
    </div>
  );
};
