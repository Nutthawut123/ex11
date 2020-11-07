import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyB-CJhwGLkrA7LP5HH4ip4CHDlLEDjGjmY",
  authDomain: "ex11-86f7a.firebaseapp.com",
  databaseURL: "https://ex11-86f7a.firebaseio.com",
  projectId: "ex11-86f7a",
  storageBucket: "ex11-86f7a.appspot.com",
  messagingSenderId: "717643906152",
  appId: "1:717643906152:web:77cf10f1e04dcf71bdcfdd",
  measurementId: "G-0GP5ZBJFKV"
}
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
