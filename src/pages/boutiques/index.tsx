import { GetStaticProps } from "next"
import { Layout } from "@/ui/components/layout/layout"
import { Seo } from "@/ui/components/seo/seo"
import { BoutiquesListContainer } from "@/ui/modules/boutiques/boutiques-list.container"
import { Boutique } from "@/types/boutique-types"
import { getBoutiques } from "@/lib/sanityQueries"

interface Props {
  boutiques: Boutique[]
}

export default function BoutiquesPage({ boutiques }: Props) {
  return (
    <>
      <Seo
        title="Les boutiques - Bakery & Diabetes"
        description="Découvrez toutes les boulangeries et pâtisseries référencées sur Bakery & Diabetes."
      />
      <Layout>
        <BoutiquesListContainer boutiques={boutiques} />
      </Layout>
    </>
  )
}

// Ce fichier peut rester vide si t'as déjà le fetch ailleurs
export const getStaticProps: GetStaticProps = async () => {
    const boutiques = (await getBoutiques()) ?? []

  return {
    props: { boutiques },
    revalidate: 60,
  }
}
