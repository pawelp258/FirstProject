  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {

  };
  
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore();
  export const storage = firebase.storage()


  export default firebase;