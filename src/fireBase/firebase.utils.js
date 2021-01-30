import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAIuoyjbJOFI0gDtucXJfnERcVMqbpnbU0",
    authDomain: "react-ecomm-4f435.firebaseapp.com",
    projectId: "react-ecomm-4f435",
    storageBucket: "react-ecomm-4f435.appspot.com",
    messagingSenderId: "753146556520",
    appId: "1:753146556520:web:a60f9569bf17781e3b0bdd"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;