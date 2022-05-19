import React from "react";
import { Typography } from "../../components/typography";
import { ISidebarElementProps } from "./sidebar-element.types";
import { lightGrey, black } from "../../common/colors";
import { Link } from "react-router-dom";

export const SidebarElement = ({ label, link }: ISidebarElementProps) => {
  return (
    <div className="sidebarElement">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Typography label={label} color={black} weight={700} size={2} />
      </Link>
    </div>
  );
};
