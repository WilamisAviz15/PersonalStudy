import firebase from "../shared/util/firebase.config";

const db = firebase.ref("/my-expenses");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(tutorial: any) {
    return db.push(tutorial);
  }

  update(key: string, value: any) {
    return db.child(key).update(value);
  }

  delete(key: string) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();
