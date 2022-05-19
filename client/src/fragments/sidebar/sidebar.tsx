import React from "react";
import { SidebarElement } from "../sidebar-element/sidebar-element";
import { ISidebarProps } from "./sidebar.types";

import "./sidebar.scss";

export const Sidebar = ({ links }: ISidebarProps) => {
  return (
    <div className="sidebar">
      {links.map((link) => {
        return <SidebarElement label={link.label} link={link.link} />;
      })}
    </div>
  );
};
