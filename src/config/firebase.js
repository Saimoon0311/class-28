import * as firebase from 'firebase/app'
import 'firebase/database'
import'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyAlG4QFCHcdmDCoJDuR00ueoSXi92rKwYQ",
    authDomain: "assignment-4-a9b93.firebaseapp.com",
    databaseURL: "https://assignment-4-a9b93.firebaseio.com",
    projectId: "assignment-4-a9b93",
    storageBucket: "assignment-4-a9b93.appspot.com",
    messagingSenderId: "494643022596",
    appId: "1:494643022596:web:4821023c639e6adf589e51",
    measurementId: "G-E6VCRTRBBM"
  };
  // Initialize Firebase
export default  firebase.initializeApp(firebaseConfig);