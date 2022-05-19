import React from "react";
import { Avatar } from "../../components/avatar";
import { Typography } from "../../components/typography";
import { IUserProfileProps } from "./user-profile.types";

import "./user-profile.scss";
import { Box } from "../../components/box";
import { lightGrey } from "../../common/colors";

export const UserProfile = ({
  avatar,
  nickname,
  username,
}: IUserProfileProps) => {
  return (
    <div className="userProfile">
      <Box>
        <Avatar {...avatar} size={5} />
        <div className="userDetails">
          <Typography label={nickname} weight={700} size={2} />
          <Typography label={`@${username}`} weight={700} color={lightGrey} />
        </div>
      </Box>
    </div>
  );
};
