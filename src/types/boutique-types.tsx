

export interface Horaire {
  jour: string;
  ferme: boolean;
  ouverture?: string;
  fermeture?: string;
}

export interface Photo {
  asset: {
    url: string;
  }
}

export interface Boutique {
  uid: string;
  displayName: string;
  description: string;
  categories: string[];
  adresse: string;
  website?: string;
  must?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  facebook?: string;
  phoneNumber?: string;
  photoURL?: string;
  email?: string;
  how_did_hear?: string;
  horaires?: Horaire[];
  onboardingIsCompleted?: boolean;
  creation_date?: string;
}
  