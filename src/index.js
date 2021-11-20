import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyBIYW3eemwRq0RRDYHqv8VlCtWM5Xnzn5s",
    authDomain: "sandbox-hackathon-ae746.firebaseapp.com",
    databaseURL: "https://sandbox-hackathon-ae746.Firebaseio.com",
    projectId: "sandbox-hackathon-ae746",
    storageBucket: "sandbox-hackathon-ae746.appspot.com",
    messagingSenderId: "81298706472",
    appId: "1:81298706472:web:2269aefbd7d810d060651d",
    measurementId: "G-7J6ZK7K552"
  });

const firestore = getFirestore(firebaseConfig);

const users = collection(firestore, "users"); //retrieving the users on our page

const user = getDoc(firestore, "users", user)
