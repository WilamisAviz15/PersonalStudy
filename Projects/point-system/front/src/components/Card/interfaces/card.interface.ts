import { IconType } from "react-icons";

export interface IParamsCard {
  title: string;
}
export interface IParamsSimpleCard extends IParamsCard {
  description: string;
}
export interface IParamsDoubleCard extends IParamsCard {
  img: keyof IconType;
}

export type TypeCard = "simple" | "double" | "textCard";
export type ParamsTypeCard<T> = T extends "simple" ? IParamsSimpleCard : IParamsDoubleCard;
