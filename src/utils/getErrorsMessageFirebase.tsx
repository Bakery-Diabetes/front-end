import errors from "@/config/locales/errors.json";

type FirebaseErrorsType = {
    [key: string]: string;
}
type FirebaseErrors = {
    [key: string]:FirebaseErrorsType
}

const firebaseErrors: FirebaseErrors = {
    ...errors,
    an_unknown_error_has_occurred: {
        an_unknown_error_has_occurred: errors.an_unknown_error_has_occurred
    }
}

export function getErrorsMessageFirebase(
    method: string,
    errorCode: string,
): string {
    
    const defaultErrorMessage = errors.an_unknown_error_has_occurred;

    if (!firebaseErrors[method]) {
        return defaultErrorMessage;
    }

    if (!firebaseErrors[method][errorCode]) {
        return defaultErrorMessage;
    }

    const errorMessage = firebaseErrors[method][errorCode]

    return errorMessage;
}