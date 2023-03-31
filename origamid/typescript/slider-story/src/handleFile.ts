export default function handleFiles(image: File, user?: string) {
  try {
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = () => {
      const imagesArray = localStorage.getItem("stories");
      let images = [];

      if (imagesArray) {
        images = [...JSON.parse(imagesArray)];
        images.push({ user: "test", img: reader.result });
      } else {
        images.push({ user: "test", img: reader.result });
      }

      localStorage.setItem("stories", JSON.stringify(images));
    };
  } catch (err) {
    console.error("Local Storage is full, Please empty data");
    // fires When localstorage gets full
    // you can handle error here or empty the local storage
  }
}
