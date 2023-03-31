import createStory from "./createStory";
import handleCurrentStory from "./handleCurrentStory";
import { Slide } from "./Slide";

const $ = (id: string) => document.getElementById(id);

const container = $("slide");
const elements = $("slide-elements");
const controls = $("slide-controls");
const addStory = $("story")?.children[0];
const selectedStory = $("story-item");

selectedStory?.addEventListener("click", () =>
  handleCurrentStory(selectedStory)
);

if (container && elements && controls && elements.children.length) {
  // const slide = new Slide(
  //   container,
  //   Array.from(elements.children),
  //   controls,
  //   2000
  // );
}

addStory?.addEventListener("click", createStory);
