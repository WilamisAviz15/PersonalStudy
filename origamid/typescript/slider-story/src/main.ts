import { Slide } from "./Slide";

const $ = (id: string) => document.getElementById(id);

const container = $("slide");
const elements = $("slide-elements");
const controls = $("controls");

if (container && elements && controls && elements.children.length) {
  const slide = new Slide(container, Array.from(elements.children), controls);

  container.addEventListener("click", () => {
    slide.show(2);
  });
}
