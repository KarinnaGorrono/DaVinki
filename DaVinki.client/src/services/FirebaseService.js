// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpWVCOTxJHg-_X3UUaUe-tg8PYHFBXQO4",
  authDomain: "davinki-c6a76.firebaseapp.com",
  projectId: "davinki-c6a76",
  storageBucket: "davinki-c6a76.appspot.com",
  messagingSenderId: "837566518810",
  appId: "1:837566518810:web:a4d733e3823e6bf33ae3a3",
  measurementId: "G-P8RJLLGD55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


class FirebaseService {
  async uploadFile(file, piece) {
    try {
      const userId = AppState.account.id
      const pieceRef = ref(storage, `${userId}/${piece.name}/${file.name}`)
      const res = await uploadBytes(pieceRef, file)
      return 'https://firebasestorage.googleapis.com/v0/b/davinki-c6a76.appspot.com/o/' + pieceRef.fullPath.replace(/\//ig, '%2F') + '?alt=media'
    } catch (error) {
      Pop.toast(error.message, 'error')
    }

  }

}

export const firebaseService = new FirebaseService()
