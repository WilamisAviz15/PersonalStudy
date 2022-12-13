import { db } from "../shared/util/firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const handleSubmit = async () => {
  // try {
  //   await addDoc(collection(db, "tasks"), {
  //     title: title,
  //     description: description,
  //     completed: false,
  //     created: Timestamp.now(),
  //   });
  // } catch (err) {
  //   alert(err);
  // }
};
