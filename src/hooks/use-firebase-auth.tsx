import { auth, db } from "@/config/firebase-config";
import { ShopDocument, userInterface } from "@/types/shop";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";

export default function useFirebaseAuth() {

    const [authUser, setAuthUser] = useState<userInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    // reload authUserData fonction
    const reloadAuthUserData = () => {
        if (auth.currentUser) {
            auth.currentUser.reload().then(() => {
                authStateChanged(auth.currentUser)
            })
        }
    }


    const formatAuthUser = useCallback(
        (user: userInterface | User) =>
        ({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
        } as userInterface),
        []
    );

    const getUserDocument = useCallback( async (user: userInterface) => {
        if (auth.currentUser) {
            const documentRef = doc(db, "shops", auth.currentUser.uid);
            const compactUser = user;
            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.shopDocument = doc.data() as ShopDocument;
                }
                setAuthUser((prevAuthUser) => (
                    {
                        ...prevAuthUser,
                        ...compactUser,
                    }
                ));
                setAuthUserIsLoading(false);
            })
        }
    }, []);

    const authStateChanged = useCallback( 
        async (authState: userInterface | User | null) => {
            if (!authState) {
                setAuthUser(null);
                setAuthUserIsLoading(false);
                return;
            }

            setAuthUserIsLoading(true);
            const formattedUser = formatAuthUser(authState);
            await getUserDocument(formattedUser);
        }, [formatAuthUser, getUserDocument]);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, [authStateChanged]);

    return {
        authUser,
        authUserIsLoading,
        reloadAuthUserData,
    };
}