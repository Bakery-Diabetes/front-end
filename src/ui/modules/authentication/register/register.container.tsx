// API'S
import { firebaseCreateUser, sendEmailVerifProcess } from "@/api/authentication";
import { firesoreCreateDocument } from "@/api/firestore";
// HOOKS
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
// TYPES
import { RegisterFormFieldType } from "@/types/forms";
import { serverTimestamp } from "firebase/firestore";
// UTILS
import { toast } from 'react-toastify';
import { RegisterView } from "./register.view";


export const RegisterContainer = () => {

    const { value: isLoading, setValue: setIsLoading, } = useToggle();
     
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset
    } = useForm<RegisterFormFieldType>();

    // Création doc db
    const handleCreateUserDocument = async (
        collectionName: string,
        documentID: string,
        document: object
    ) => {
        const { error } = await firesoreCreateDocument(
            collectionName, 
            documentID, 
            document
        );

        if (error) {
            toast.error(error.message);
            setIsLoading(false);
            return;
        }

        toast.success("Bienvenue sur Bakery & Diabetes");
        setIsLoading(false);
        reset();
        sendEmailVerifProcess();
    };

    // Création user
    const handleCreateUserAuthentication = async ({
        email, 
        password, 
        how_did_hear
    }: RegisterFormFieldType) => {
        const { error, data } = await firebaseCreateUser(email, password);

        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }

        const shopDocumentData = {
            email: email,
            how_did_hear: how_did_hear,
            uid: data.uid,
            creation_date: serverTimestamp() 
        }

        handleCreateUserDocument("shops", data.uid, shopDocumentData);
    };

    // Formatage données
    const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
        setIsLoading(true);

        const { password } = formData;

        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: 
                    "Ton mot de passe doit comporter au minimum 6 caractères",
            });
            return;
        }

        handleCreateUserAuthentication(formData);

    };

    return (

        <RegisterView 
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />

        
    );
}