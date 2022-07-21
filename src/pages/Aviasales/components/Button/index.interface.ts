import { ButtonProps } from "antd";

export interface IButton extends ButtonProps {
   label: string;
   onClickHandler: () => void;
};