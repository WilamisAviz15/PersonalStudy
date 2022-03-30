const firebaseConfig = {
  apiKey: "AIzaSyDSJsJ5oBEkb1jEv16Aby-euCfTJDD6DnY",
  authDomain: "colegio-e7c52.firebaseapp.com",
  projectId: "colegio-e7c52",
  storageBucket: "colegio-e7c52.appspot.com",
  messagingSenderId: "177035213291",
  appId: "1:177035213291:web:607f345603c36d426401ae",
  measurementId: "G-NG05FLSXNF",
};

firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();

// db.collection("turmaA")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome);
//     });
//   });
