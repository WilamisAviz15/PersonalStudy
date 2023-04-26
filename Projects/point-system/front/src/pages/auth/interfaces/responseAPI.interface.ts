import { snackBarClassType } from "../../../shared/components/Snackbar/interfaces/snackbar.interface";

export interface ResponseAPIInterface {
  isError: boolean;
  message: string;
  type: snackBarClassType;
}
