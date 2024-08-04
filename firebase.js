import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDW9CZh1_DTJj3oJEnt7Hga8rP99CLP2Fo",
 authDomain: "inventory-management-app-7b7fd.firebaseapp.com",
 projectId: "inventory-management-app-7b7fd",
 storageBucket: "inventory-management-app-7b7fd.appspot.com",
 messagingSenderId: "492036951422",
 appId: "1:492036951422:web:10c4af38992963fec9f72f",
 measurementId: "G-3DP6PFV29H",
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
