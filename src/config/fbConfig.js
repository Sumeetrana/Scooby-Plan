import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA1hmqZ-dM6zxJlVsBLFGRz8YtrEwtVXiU",
    authDomain: "scoobyplan-24a47.firebaseapp.com",
    databaseURL: "https://scoobyplan-24a47.firebaseio.com",
    projectId: "scoobyplan-24a47",
    storageBucket: "scoobyplan-24a47.appspot.com",
    messagingSenderId: "1005654830748",
    appId: "1:1005654830748:web:f9d1913b940774b1ba4759",
    measurementId: "G-9ZY17MGY6X"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;