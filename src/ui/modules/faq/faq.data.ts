export type Faq = {
    id: string;
    question: string;
    reponse: string;
    featured?: boolean;
};

export const FAQS: Faq[] = [
    {
        id: "inscription",
        question: "Comment puis-je créer un compte ?",
        reponse: "Pour créer un compte, cliquez sur le bouton 'S'inscrire",
        featured: true,
    },
    {
        id: "diabètes",
        question: "Vos produits sont-ils adaptés aux personnes diabétiques ?",
        reponse: "Oui. Nos partenaires proposent une sélection de produits à index glycémique bas. Pour plus d'infos contactez les boutiques.",
        featured: true,
    },
    {
        id: "compte",
        question: "Ai-je besoin d’un compte pour voir les boutiques ?",
        reponse: "Non. Le compte sert uniquement aux commerçants pour gérer leur page (horaires, photos, produits, etc.).",
        featured: true,
    },
    {
        id: "modificationprofil",
        question: "Comment modifier mon profil ?",
        reponse: "Pour modifier votre profil, allez dans les paramètres de votre compte.",
        featured: true,
    },
    {
        id: "ipsum",
        question: "Comment modifier mon profil ?",
        reponse: "Pour modifier votre profil, allez dans les paramètres de votre compte.",
        featured: true,
    },
    {
        id: "lorem",
        question: "Comment modifier mon profil ?",
        reponse: "Pour modifier votre profil, allez dans les paramètres de votre compte.",
    },
]