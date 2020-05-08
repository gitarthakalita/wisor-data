import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyDAIOHJDYM4xt5VRfopeiBB-MGYR2qji-U",
    authDomain: "crowndb-a5250.firebaseapp.com",
    databaseURL: "https://crowndb-a5250.firebaseio.com",
    projectId: "crowndb-a5250",
    storageBucket: "crowndb-a5250.appspot.com",
    messagingSenderId: "1088793454764",
    appId: "1:1088793454764:web:80e4d64628e3c16e745709",
    measurementId: "G-9FJFPSGJWY"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log( 'error creating user', error.message);
            
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});



export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;