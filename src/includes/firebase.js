import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDl5a07lRzDowpOzL7eVEyperaQFUQC2U',
  authDomain: 'music-5b4a5.firebaseapp.com',
  projectId: 'music-5b4a5',
  storageBucket: 'music-5b4a5.appspot.com',
  messagingSenderId: '1085678914019',
  appId: '1:1085678914019:web:2b35218aea58700553f8d6'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
