import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBKogD0lRn9k1eZSKQ8hPL4Vz1NFvdpf3s",
    authDomain: "reminder-487b4.firebaseapp.com",
    projectId: "reminder-487b4",
    storageBucket: "reminder-487b4.appspot.com",
    messagingSenderId: "161888920620",
    appId: "1:161888920620:web:6c266992516bd364401d89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 export default firebase.firestore()