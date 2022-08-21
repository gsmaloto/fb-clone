import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = ({
  apiKey: process.env.API_KEY,
  authDomain: "facebook-clone-53770.firebaseapp.com",
  projectId: "facebook-clone-53770",
  storageBucket: "facebook-clone-53770.appspot.com",
  messagingSenderId: "9493905605",
  appId: "1:9493905605:web:d91a90ea8ce8a078b870ac",
  measurementId: "G-P6CVK2SXPP"
});
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
// const db = app.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();
// export { db, auth, storage };
