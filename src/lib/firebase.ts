import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
	apiKey: "AIzaSyDqV8rhdlnx74m_XF311IaX_shNdS3Bntc",
	authDomain: "forum-b2b70.firebaseapp.com",
	projectId: "forum-b2b70",
};
 
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
 
