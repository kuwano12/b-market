import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmdg2nIdorAWrXHtOt2gZoo_D5ZfAQYS0",
    authDomain: "blissim-db.firebaseapp.com",
    projectId: "blissim-db",
    storageBucket: "blissim-db.appspot.com",
    messagingSenderId: "465629558722",
    appId: "1:465629558722:web:23cd4f19b41f4088b5c85b"
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;