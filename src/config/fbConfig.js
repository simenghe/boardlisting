import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAIGHKkp2_VBkcW4LoL-XdcE2EaqUGuEPU",
  authDomain: "boardroom-23b0d.firebaseapp.com",
  databaseURL: "https://boardroom-23b0d.firebaseio.com",
  projectId: "boardroom-23b0d",
  storageBucket: "boardroom-23b0d.appspot.com",
  messagingSenderId: "407159197061",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 