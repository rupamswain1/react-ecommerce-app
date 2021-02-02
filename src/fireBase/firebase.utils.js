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

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    console.log(userAuth.uid);
    const userRef=firestore.doc(`users/${userAuth.uid}`);

    const snapShot=await userRef.get();
    if(!snapShot.exists){
      const{displayName, email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }

  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;