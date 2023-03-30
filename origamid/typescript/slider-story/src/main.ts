import handleFiles from "./handleFile";
import { Slide } from "./Slide";

const $ = (id: string) => document.getElementById(id);

const container = $("slide");
const elements = $("slide-elements");
const controls = $("slide-controls");
const addStory = $("story")?.children[0];

if (container && elements && controls && elements.children.length) {
  // const slide = new Slide(
  //   container,
  //   Array.from(elements.children),
  //   controls,
  //   2000
  // );
}

function createStory() {
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

addStory?.addEventListener("click", createStory);
