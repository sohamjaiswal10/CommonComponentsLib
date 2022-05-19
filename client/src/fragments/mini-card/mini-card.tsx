import React from "react";
import { Avatar } from "../../components/avatar";
import { Typography } from "../../components/typography";
import { IMiniCardProps } from "./mini-card.types";
import "./mini-card.scss";
import { Box } from "../../components/box";
import { darkGrey } from "../../common/colors";
import { textLimiter } from "../../common/text-limiter";
import { TEXT_LIMIT } from "../../common/global";

export const MiniCard = ({ avatar, name, tagLine = "" }: IMiniCardProps) => {
  return (
    <div className="miniCard">
      <Box>
        <Avatar {...avatar} size={10} />
        <Typography label={name} weight={700} size={1.5} />
        <Typography label={textLimiter(tagLine, TEXT_LIMIT)} color={darkGrey} />
      </Box>
    </div>
  );
};
