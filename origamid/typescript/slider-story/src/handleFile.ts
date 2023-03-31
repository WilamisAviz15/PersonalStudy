import IStories from "./interfaces/IStories";

export default function handleFiles(image: File, user?: string) {
  try {
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = () => {
      const imagesArray = localStorage.getItem("stories");
      let images: IStories[] = [];

      if (imagesArray) {
        images = [...JSON.parse(imagesArray)];
        images.push({ userId: 1, img: reader.result });
      } else {
        images.push({ userId: 1, img: reader.result });
      }

      localStorage.setItem("stories", JSON.stringify(images));
    };
  } catch (err) {
    console.error("Local Storage is full, Please empty data");
  }
}
