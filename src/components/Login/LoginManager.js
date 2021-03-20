import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      const { displayName, email } = res.user;
      const signInUser = {
        signIn: true,
        name: displayName,
        email: email,
        success: true
      }
      return signInUser;
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode,errorMessage,email,credential);
    });
}