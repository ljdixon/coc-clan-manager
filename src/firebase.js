import firebase from 'firebase'

// Initialize Firebase
 const config = {
   apiKey: "AIzaSyB5x_Mry1_09dveP1wZ99gDiTArj1IYgH4",
   authDomain: "clanfog-a337a.firebaseapp.com",
   databaseURL: "https://clanfog-a337a.firebaseio.com",
   projectId: "clanfog-a337a",
   storageBucket: "clanfog-a337a.appspot.com",
   messagingSenderId: "74129954531"
 };

 firebase.initializeApp(config);

 export default firebase;
