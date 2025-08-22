import { db } from "@/config/firebase-config";
import { doc, setDoc, updateDoc } from "firebase/firestore";    
import { FirebaseError } from "firebase/app";

// creation shop db
export const firesoreCreateDocument = async (
    collectionName: string, 
    documentID: string, 
    data: object
) => {
    try {
        const documentRef = doc(db, collectionName, documentID);

        await setDoc(documentRef, data);
        return { data: true };
    } catch (error) {
        const firebaseError = error as FirebaseError;

        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            },
        };
    }
};

// update shop db
export const firesoreUpdateDocument = async (
    collectionName: string, 
    documentID: string, 
    data: object
) => {
    try {
        const documentRef = doc(db, collectionName, documentID);

        await updateDoc(documentRef, data);
        return { data: true };
    } catch (error) {
        const firebaseError = error as FirebaseError;

        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            },
        };
    }
};