import React from "react";
import { Avatar } from "../../components/avatar";
import { Banner } from "../../components/banner";
import { BigBox } from "../../components/big-box";
import { ICardContainerProps } from "./card-container.types";

import "./card-container.scss";

export const CardContainer = ({
  banner,
  avatar,
  body,
}: ICardContainerProps) => {
  return (
    <div className="cardContainer">
      <BigBox>
        <div className="header">
          <Banner {...banner} size={30} />
          <Avatar {...avatar} size={15} shadow border={0.125} />
        </div>
        <div className="body">{body}</div>
      </BigBox>
    </div>
  );
};
