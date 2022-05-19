import { ITypographyProps } from "../typography/typography.types";

export interface IButtonProps {
  typography?: ITypographyProps;
  backgroundColor?: string;
  onClick: () => void;
}
