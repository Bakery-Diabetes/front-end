import { Horaire } from "./boutique-types";


export interface FormsType {
    control?: any;
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
    setValue?: any;
    trigger?: any;

}

export interface RegisterFormFieldType {
    email: string;
    password: string;
    how_did_hear: string;

}

export interface LoginFormFieldType {
    email: string;
    password: string;
}

export interface ForgetPasswordFormFieldType {
    email: string;
}

export interface OnboardingProfileFormFieldsType {
    displayName: string;
    description: string;
    adresse: string;
    categories: string[];
}

export interface ShopProfileFormFieldsType {
    displayName: string;
    description: string;
    must: string;
    instagram: string;
    facebook: string;
    twitter: string;
    tiktok: string;
    phoneNumber?: string;
    categories?: string[]; 
    adresse: string;
    website?: string;
    horaires?: Horaire[];
}