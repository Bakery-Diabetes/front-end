export interface Horaire {
    jour: string
    ferme: boolean
    ouverture?: string
    fermeture?: string
  }
  
  export interface ReseauSocial {
    plateforme: "instagram" | "facebook" | "twitter" | "linkedin" | "tiktok" | "website"
    url: string
  }
  
  export interface Photo {
    asset: {
      url: string
    }
  }
  
  export interface Boutique {
    name: string
    slug: { current: string }
    description: string
    location: {
      address: string;
      commune: string;
      lat: number;
      lng: number;
    }
    email?: string
    siteWeb?: string
    produitPhare?: string
    horaires?: Horaire[]
    reseauxSociaux?: ReseauSocial[]
    photos?: Photo[]
    categorie: string[]
  }
  