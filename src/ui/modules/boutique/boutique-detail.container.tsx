// ui/modules/boutique/boutique-detail.container.tsx

import { BoutiqueDetailView } from "./boutique-detail.view";
import { GetServerSideProps } from "next";
import { sanityFetch } from "@/lib/sanity";
import { Boutique } from "@/types/boutique-types";

interface Props {
    boutique: Boutique
  }

export const BoutiqueDetailContainer = ({ boutique }: Props) => {
  if (!boutique) return <p className="p-4 text-red-500">Boutique introuvable.</p>

  return <BoutiqueDetailView boutique={boutique} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug

  const query = `*[_type == \"boutique\" && slug.current == $slug][0] {
    name,
    description,
    location {
      address,
      commune,
      lat,
      lng
    },
    categorie,
    produitPhare,
    horaires,
    email,
    siteWeb,
    reseauxSociaux,
    photos[]{ 
      asset->{url} 
    }
  }`

  const boutique = await sanityFetch(query, { slug })

  if (!boutique) {
    return {
      notFound: true,
    }
  }


  return {
    props: {
      boutique,
    },
  }
}