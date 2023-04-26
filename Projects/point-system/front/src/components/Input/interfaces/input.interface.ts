import { CustomStyles } from "../../Card/interfaces/custom-style.interface";

export type HTMLInputTypes = "text" | "password";

export interface InputInterface {
  placeholder: string;
  type: HTMLInputTypes;
  styles?: CustomStyles;
  value: string | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
