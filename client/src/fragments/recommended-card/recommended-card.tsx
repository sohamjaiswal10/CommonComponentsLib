import React from "react";
import { Avatar } from "../../components/avatar";
import { Banner } from "../../components/banner";
import { Box } from "../../components/box";
import { IRecommendedCardProps } from "./recommended-card.types";

import "./recommended-card.scss";
import { Typography } from "../../components/typography";
import { darkGrey } from "../../common/colors";

export const RecommendedCard = ({
  banner,
  author,
  avatar,
  title,
}: IRecommendedCardProps) => {
  return (
    <div className="recommendedCard">
      <Box>
        <div className="header">
          <Banner {...banner} size={10} />
          <Avatar {...avatar} size={5} shadow border={0.125} />
        </div>
        <div className="body">
          <Typography label={title} weight={700} size={2} />
          <div className="by">
            <Typography label="by" weight={600} color={darkGrey} />
            <Typography label={author} weight={600} />
          </div>
        </div>
      </Box>
    </div>
  );
};
