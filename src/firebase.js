import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqJP5LQrXVMNUEDVONP4Xv18jRA8rTTKQ",
  authDomain: "shop-clone-3a028.firebaseapp.com",
  projectId: "shop-clone-3a028",
  storageBucket: "shop-clone-3a028.appspot.com",
  messagingSenderId: "126721070310",
  appId: "1:126721070310:web:e3071902dc087d325d9727",
  measurementId: "G-VFVX277GFE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
export { db, auth }
