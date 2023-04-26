export interface SnackbarInterface {
  message: string;
  type: snackBarClassType;
  duration?: number;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export type snackBarClassType = "success" | "danger";
