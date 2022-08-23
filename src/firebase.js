import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDE7G7hk7wqf9gd2F-7OJ2fps3gm0maabc",
	authDomain: "clone-aab9d.firebaseapp.com",
	projectId: "clone-aab9d",
	storageBucket: "clone-aab9d.appspot.com",
	messagingSenderId: "917341172819",
	appId: "1:917341172819:web:fe5df89db03747a24ec2a6",
	measurementId: "G-YEL2FY0HTT",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
