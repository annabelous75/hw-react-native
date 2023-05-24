import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4VMRjU7vGWeNSL2WlMkxEvXMHfk2tz5g",
    authDomain: "project-22a10.firebaseapp.com",
    projectId: "project-22a10",
    storageBucket: "project-22a10.appspot.com",
    messagingSenderId: "879468962577",
    appId: "1:879468962577:web:acc5d4271e6256ce1ee2b0",
    measurementId: "G-LS6QQX95ZZ"
  };
  

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export default auth;