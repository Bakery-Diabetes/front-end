import { Horaire } from "./boutique-types";

export interface userInterface {
    uid: string;
    email: string | null;
    displayName: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL: string | null;
    shopDocument?: ShopDocument;
}

export interface ShopDocument {
    uid: string;
    email: string;
    how_did_hear: string;
    creation_date: string;
    onboardingIsCompleted: boolean;
    displayName: string;
    description: string;
    photoURL: string | null;
    instagram: string;
    facebook: string;
    tiktok: string;
    must: string;
    phoneNumber: string;
    adresse: string;
    website?: string; 
    horaires?: Horaire[];
    categories?: string[];
    location?: {
        lat: number;
        lng: number;
    };
}