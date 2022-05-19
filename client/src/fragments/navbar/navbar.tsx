import React from "react";
import { TextInput } from "../../components/form/inputs/text-input";
import { Logo } from "../../components/logo";

import "./navbar.scss";
import { INavbarProps } from "./navbar.types";

export const Navbar = ({ search }: INavbarProps) => {
  return (
    <div className="navbar">
      <Logo color="black" width={10} />
      <TextInput {...search} placeholder="What do we make today?" />
    </div>
  );
};
