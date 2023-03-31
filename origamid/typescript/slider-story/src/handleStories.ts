import IStories from "./interfaces/IStories";

export default function handleStories(elements: Element, userId: number) {
  const currentLocalStorage = localStorage.getItem("stories");

  if (currentLocalStorage) {
    while (elements.firstChild) elements.firstChild.remove();
    const stories: IStories[] = [...JSON.parse(currentLocalStorage)];
    stories
      .filter((story) => story.userId === userId)
      .forEach((story) => {
        const newImg = document.createElement("img");
        newImg.src = story.img as string;
        elements.appendChild(newImg);
      });
  }
}
