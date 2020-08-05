import firebase from "@react-native-firebase/app";
import database from '@react-native-firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBWJ8xvuW1ub3qrKCXG3iEuPIBK4oBT_RQ",
    authDomain: "safetyapp-c0d5d.firebaseapp.com",
    databaseURL: "https://safetyapp-c0d5d.firebaseio.com",
    projectId: "safetyapp-c0d5d",
    storageBucket: "safetyapp-c0d5d.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:869696006270:android:bc308cacc6047d31f7102f"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase, database}; 