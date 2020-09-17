import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'





const config = {
    apiKey: "AIzaSyBCq7nZwcjl17SGL43SUO_paWCpDyNVlUc",
    authDomain: "netflix-clone-fc4e4.firebaseapp.com",
    databaseURL: "https://netflix-clone-fc4e4.firebaseio.com",
    projectId: "netflix-clone-fc4e4",
    storageBucket: "netflix-clone-fc4e4.appspot.com",
    messagingSenderId: "985618783997",
    appId: "1:985618783997:web:d797b471f0e6675e20a894",
    measurementId: "G-TQZR4NZ4KV"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };