export default function handleFiles(image: File) {
  const reader = new FileReader();

  reader.readAsDataURL(image);
  console.log(reader.result);
  localStorage.setItem("story", String(reader.result));
}
