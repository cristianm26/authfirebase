import firebase from "firebase";
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAdCVTfgFgtsMvD-NEmRb-zLNko2csmr1E",
    authDomain: "pruebasreact-6c5cf.firebaseapp.com",
    projectId: "pruebasreact-6c5cf",
    storageBucket: "pruebasreact-6c5cf.appspot.com",
    messagingSenderId: "277463668271",
    appId: "1:277463668271:web:e27468d2ab15d203d4d8da"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();


export { auth };