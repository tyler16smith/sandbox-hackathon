import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp ({
    apiKey: "AIzaSyBIYW3eemwRq0RRDYHqv8VlCtWM5Xnzn5s",
    authDomain: "sandbox-hackathon-ae746.firebaseapp.com",
    databaseURL: "https://sandbox-hackathon-ae746.Firebaseio.com",
    projectId: "sandbox-hackathon-ae746",
    storageBucket: "sandbox-hackathon-ae746.appspot.com",
    messagingSenderId: "81298706472",
    appId: "1:81298706472:web:2269aefbd7d810d060651d",
    measurementId: "G-7J6ZK7K552"
  });

const firestore = getFirestore();

// create new document
const patient = doc(firestore, 'patients/patient-1'); //read document)

function writePatient() {
  const docData = {
    fullName: 'Bryson Lichtenberg',
    age: 24,
    phone: 9496144828,
    zipcode: 84606,
    gender: 'male'
  };
  try {
    await updateDoc(patient, docData, { merge: true });
    //updateDoc(patient, docData) will only override the data specified
    console.log("This patient has been submitted to the database.");
  } catch {
    console.log("I got an error! ${error}");
  }
}
