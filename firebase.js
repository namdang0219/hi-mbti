import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyCueA7ToI8wLVnQlSO7KsD7rysDEkVZqJo',
  authDomain: "bigcityboy-56f60.firebaseapp.com",
  projectId: "bigcityboy-56f60",
  storageBucket: "bigcityboy-56f60.appspot.com",
  messagingSenderId: "421190111468",
  appId: "1:421190111468:web:7a7be6afe6df6805f015c9",
  databaseURL: "https://bigcityboy-56f60-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const storage = getStorage();
export const db = getFirestore()




