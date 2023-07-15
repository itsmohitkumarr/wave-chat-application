import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDh3WiFcLPB7JXzivEgdKDEWVDP-tzrxsw",
	authDomain: "fir-chat-app-afc5d.firebaseapp.com",
	projectId: "fir-chat-app-afc5d",
	storageBucket: "fir-chat-app-afc5d.appspot.com",
	messagingSenderId: "215531089846",
	appId: "1:215531089846:web:68e1ee88cb16f2b813db17",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
