import { auth } from "@/config/firebase-config";
import { getErrorsMessageFirebase } from "@/utils/getErrorsMessageFirebase";
import { FirebaseError } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,

} from "firebase/auth";


export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth, 
            email, 
            password
        );
        return { data: userCredential.user }
    } catch (error) {

        const firebaseError = error as FirebaseError;

        const errorMessage = getErrorsMessageFirebase(
            "createUserWithEmailAndPassword", 
            firebaseError.code
        );

        return { error: {
            code: firebaseError.code, 
            message: errorMessage
        }};
    }
};

export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user}
    } catch (error) {

        const firebaseError = error as FirebaseError;

        const errorMessage = getErrorsMessageFirebase(
            "signInWithEmailAndPassword", 
            firebaseError.code
        );

        return { 
            error: {
                code: firebaseError.code, 
                message: errorMessage,
            }
        };
    }
};

export const firebaseLogoutUser = async () => {
    try {
        await signOut(auth);
        return { data: true };
    } catch (error) {

        const firebaseError = error as FirebaseError;

        const errorMessage = getErrorsMessageFirebase(
            "signOut", 
            firebaseError.code
        );

        return { error: {
            code: firebaseError.code, 
            message: errorMessage
        }};
    }
};

export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { data: true };
    } catch (error) {

        const firebaseError = error as FirebaseError;
        
        const errorMessage = getErrorsMessageFirebase(
            "sendPasswordResetEmail", 
            firebaseError.code
        );

        return { error: {
            code: firebaseError.code, 
            message: errorMessage
        }};
    }
};

export const sendEmailVerifProcess = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser);
            return { data: true };
        } catch (error) {

            const firebaseError = error as FirebaseError;

            const errorMessage = getErrorsMessageFirebase(
                "sendEmailVerification", 
                firebaseError.code
            );

            return { error: {
                code: firebaseError.code, 
                message: errorMessage
            }};
        }
    } else {
        return {
            error: {
                code: "unknown",
                message: "Une erreur est survenue",
            }
        }
    }
};

export const updateShopIdentificationData = async (uid: string, data: any) => {
    const result = await fetch('https://updateuser-t7job7rcwq-uc.a.run.app', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            uid: uid,
            data: data
        })
    })

    if (!result.ok) {
        const errorResponse = await result.json();
        
        const firebaseError = errorResponse as FirebaseError;

        return ({
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }
        })
    }
    return { data: true }
}