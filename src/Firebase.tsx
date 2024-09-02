import firebase from "firebase/app";
import "firebase/database"; // Add this line to include the Realtime Database module

const firebaseConfig = {
  apiKey: "AIzaSyCfZRSflHsk0xwbV4vr52uy3SdbbMq78fI",
  authDomain: "rent-management-bbf93.firebaseapp.com",
  databaseURL: "https://rent-management-bbf93-default-rtdb.firebaseio.com",
  projectId: "rent-management-bbf93",
  storageBucket: "rent-management-bbf93.appspot.com",
  messagingSenderId: "588713862458",
  appId: "1:588713862458:web:f56a69347467be9c719c03",
  measurementId: "G-S1BH7EW45L",
};
firebase.initializeApp(firebaseConfig);

var realtimeDatabase = firebase.database();

export default realtimeDatabase;
