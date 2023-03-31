import handleFiles from "./handleFile";

export default function createStory() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/png, image/jpeg";
  input.onchange = (event) => {
    if (
      event &&
      event.target instanceof HTMLInputElement &&
      event.target.files
    ) {
      const file = event.target.files[0];
      console.log(file);
      handleFiles(file);
    }
  };
  input.click();
}
