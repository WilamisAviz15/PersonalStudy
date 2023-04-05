export function getCardColor(nameColor: string): string {
  switch (nameColor) {
    case "color-1":
      return "#05c091";
    case "color-2":
      return "#3498db";
    case "color-3":
      return "#ff8a45";
    case "color-4":
      return "#ff6e76";
    case "color-5":
      return "#8d48e3";
    default:
      return "#05c091";
  }
}

export const CLIENT_ID_GOOGLE = process.env["REACT_APP_API_GOOGLE"]!;
