import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHsarELtkfnWn965KR4D_doiKV2p8PLwE",
    authDomain: "hiossen-b9d4e.firebaseapp.com",
    databaseURL: "https://hiossen-b9d4e.firebaseio.com",
    projectId: "hiossen-b9d4e",
    storageBucket: "hiossen-b9d4e.appspot.com",
    messagingSenderId: "171049612144"
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // databaseURL: process.env.EACT_APP_FIREBASE_DATABASE,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SEND_ID
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { app, base };