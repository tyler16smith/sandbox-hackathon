// import React, { useRef, useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBIYW3eemwRq0RRDYHqv8VlCtWM5Xnzn5s",
  authDomain: "sandbox-hackathon-ae746.firebaseapp.com",
  // databaseURL: "https://sandbox-hackathon-ae746.Firebaseio.com",
  projectId: "sandbox-hackathon-ae746",
  storageBucket: "sandbox-hackathon-ae746.appspot.com",
  messagingSenderId: "81298706472",
  appId: "1:81298706472:web:2269aefbd7d810d060651d",
  measurementId: "G-7J6ZK7K552"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const patient = doc(firestore, 'patients/patient-1'); //read document

function addPatient() {
  debugger
  const docData = {
    fullName: "Bryson Lichtenberg",
    age: 23,
    phone: 9496144828,
    zipcode: 84606,
    gender: 'male'
  };
  try {
    await updateDoc(patient, docData, { merge: true });
    //updateDoc(patient, docData) will only override the data specified
    console.log("This patient has been submitted to the database.");
  } catch (error) {
    console.log("Error: could not import");
  }
};
