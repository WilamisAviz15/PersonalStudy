export interface IParamsSimpleCard {
  title: string;
  description: string;
}
export interface IParamsDoubleCard {
  title: string;
  img: string;
}

export type TypeCard = "simple" | "double";
export type ParamsTypeCard<T> = T extends "simple" ? IParamsSimpleCard : IParamsDoubleCard;

export interface IGenericInterface<T> {
  new (): T;
  prototype: T;
}
