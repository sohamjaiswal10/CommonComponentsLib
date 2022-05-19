import React, { useState } from "react";
import { Typography } from "../../components/typography";
import { Navbar } from "../../fragments/navbar";
import { Sidebar } from "../../fragments/sidebar";
import { ISidebarElementProps } from "../../fragments/sidebar-element/sidebar-element.types";

import "./main.scss";
import { IMainProps } from "./main.types";

export const Main = ({ view, setView, search, setSearch }: IMainProps) => {
  const links: ISidebarElementProps[] = [
    {
      link: "/recommended",
      label: "Recommended",
    },
    {
      link: "/your-recipes",
      label: "Your Recipes",
    },
  ];
  return (
    <div className="main">
      <Navbar search={{ label: search, onChange: setSearch }} />
      <div className="page">
        <Sidebar links={links} />
        {view}
      </div>
    </div>
  );
};
