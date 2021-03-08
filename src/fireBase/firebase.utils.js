import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { batch } from 'react-redux';

const config={
    apiKey: "AIzaSyAIuoyjbJOFI0gDtucXJfnERcVMqbpnbU0",
    authDomain: "react-ecomm-4f435.firebaseapp.com",
    projectId: "react-ecomm-4f435",
    storageBucket: "react-ecomm-4f435.appspot.com",
    messagingSenderId: "753146556520",
    appId: "1:753146556520:web:a60f9569bf17781e3b0bdd"
  };
 //add user to firestore
  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    //console.log('additional data : '+additionalData)
    if(!userAuth) return;
    //console.log(userAuth.uid);
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot=await userRef.get();
    if(!snapShot.exists){
      const{displayName, email}=userAuth;
      const createdAt=new Date();
      //console.log(displayName)
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
    return userRef;
   
    }
  //google authenticaton
  firebase.initializeApp(config);
  
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
 
  export const googleProvider=new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=(googleProvider)=>auth.signInWithPopup(googleProvider);

  // util to add shop data to Firebase
  export const addCollectionAndDocument=async (collectionKey, objectsToAdd)=>{
     const collectionRef=firestore.collection(collectionKey);
     //console.log(collectionRef);
      const batch=firestore.batch()
      objectsToAdd.forEach(obj=>{
        //console.log(obj)
        const newDocRef=collectionRef.doc();
        batch.set(newDocRef,obj);
      }
      );
      return await batch.commit()
  }

  //Get collectionData from Firestore
  export const convertCollectionsSnapshotToMap=collections=>{
    //console.log(collections)
    const transformedCollection=collections.docs.map(doc=>{
      const {title,items}=doc.data();
      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator,collection)=>
    {accumulator[collection.title.toLowerCase()]=collection
      //console.log(accumulator)      
      return accumulator;
    },
    {})
    //console.log(transformedCollection);
    

  }

  export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
      const unsubscribe=auth.onAuthStateChanged(userAuth=>{unsubscribe();
      resolve(userAuth);
      },reject)
    }

    )
  }
  export default firebase;