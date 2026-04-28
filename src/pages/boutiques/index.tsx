import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { BoutiquesListContainer } from "@/ui/modules/boutiques/boutiques-list.container";


export default function BoutiquesPage() {
  return (
    <>
      <Seo
        title="Les boutiques - Bakery & Diabetes"
        description="Découvrez toutes les boulangeries et pâtisseries référencées sur Bakery & Diabetes."
      />
      
      <Layout>
        <BoutiquesListContainer />
      </Layout>
    </>
  )
}
