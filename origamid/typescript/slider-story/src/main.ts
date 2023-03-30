import { Slide } from "./Slide";

const $ = (id: string) => document.getElementById(id);

const container = $("slide");
const elements = $("slide-elements");
const controls = $("slide-controls");

if (container && elements && controls && elements.children.length) {
  const slide = new Slide(
    container,
    Array.from(elements.children),
    controls,
    2000
  );

  container.addEventListener("click", () => {});
}
