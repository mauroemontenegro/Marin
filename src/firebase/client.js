import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyDYe1ucuEN8U1eyx2cwMYfM5AwV9QFAG5s",
    authDomain: "marin-3fc77.firebaseapp.com",
    projectId: "marin-3fc77",
    storageBucket: "marin-3fc77.appspot.com",
    messagingSenderId: "419836499895",
    appId: "1:419836499895:web:4bfa9eb880009c1eebba32",
    measurementId: "G-KHR7HPF5Z9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);