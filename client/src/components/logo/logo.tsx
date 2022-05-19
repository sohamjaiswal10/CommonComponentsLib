import React from "react";

import { WhiteLogo } from "../../assets/images/SmartCB-logos_white.png";
import { BlackLogo } from "../../assets/images/SmartCB-logos_black.png";
import { ILogoProps } from "./logo.types";
import { ReactElement } from "react";

export const Logo = ({ color = "black", width, ...props }: ILogoProps) => {
  const logoMap = new Map<"white" | "black", string>();
  logoMap.set("white", "https://i.imgur.com/OoCueJj.png");
  logoMap.set("black", "https://i.imgur.com/9ZHSIga.png");
  return (
    <div className="logo" {...props}>
      <img src={logoMap.get(color)} alt="f" style={{ width: `${width}rem` }} />
    </div>
  );
};
