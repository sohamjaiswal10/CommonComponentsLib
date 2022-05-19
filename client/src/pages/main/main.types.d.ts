import { ReactElement } from "react";
export interface IMainProps {
  view: ReactElement;
  setView: (e) => void;
  search: string;
  setSearch: (e) => void;
}
