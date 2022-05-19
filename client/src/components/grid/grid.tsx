import React from "react";
import { IGridProps } from "./grid.types";

import "./grid.scss";

export const Grid = ({ elements }: IGridProps) => {
  return <div className="grid">{elements}</div>;
};
