// TYPES
import { AppLinks } from "@/types/app-links";
// ICONS
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "À Propos",
        baseUrl: "/about",
        type: "internal"
    },
    {
        label: "Boutiques",
        baseUrl: "/boutiques",
        type: "internal"
    },
    {
        label: "Blog",
        baseUrl: "/blog",
        type: "internal"
    },
];

export const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/mon-espace",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal"
    },
];

export const footerInformationLinks: AppLinks[] = [
    {
        label: "Nous contacter",
        baseUrl: "/contact",
        type: "internal"
    },
    {
        label: "FAQ",
        baseUrl: "/faq",
        type: "internal"
    },
];

export const footerSocialLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://www.youtube.com/",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Facebook",
        baseUrl: "https://www.facebook.com/",
        type: "external",
        icon: RiFacebookFill,
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/",
        type: "external",
        icon: RiInstagramFill,
    },
];

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks,
    },
    {
        label: "Besoin d’aide ?",
        links: footerInformationLinks,
    },
]