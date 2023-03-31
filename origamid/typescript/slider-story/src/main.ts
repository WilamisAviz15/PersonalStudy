import createStory from "./createStory";
import initSession from "./handleSessionStorage";
import handleStories from "./handleStories";
import IUser from "./interfaces/IUser";
import { Slide } from "./Slide";

const $ = (id: string) => document.getElementById(id);

const container = $("slide");
const elements = $("slide-elements")!;
const controls = $("slide-controls");
const stories = $("story")!;
const storiesChildren = $("story")!.children;
const addStory = storiesChildren[0];

const { currentUser, friends } = initSession();

if (currentUser) {
  generateElement(currentUser);
  if (friends) {
    generateElement(friends);
  }
}

function showStory() {
  if (
    container &&
    elements &&
    controls &&
    elements.children.length &&
    currentUser
  ) {
    handleStories(elements, 1);

    new Slide(container, Array.from(elements.children), controls, 2000);
  }
}

Array.from(storiesChildren).forEach((el) => {
  if (el instanceof HTMLDivElement) el.onclick = showStory;
});

addStory?.addEventListener("click", createStory);

function generateElement(user: IUser) {
  const storyItem = document.createElement("div");
  storyItem.id = "story-item";
  storyItem.innerHTML = `<span>${user.name[0]}</span>`;
  stories.appendChild(storyItem);
}
