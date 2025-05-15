// pages/boutique/[slug].tsx

import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { BoutiqueDetailContainer } from "@/ui/modules/boutique/boutique-detail.container";

export default function BoutiquePage(props: any) {
  return (
    <>
      <Seo
        title={`Boutique – ${props.boutique?.nom || "Introuvable"}`}
        description={props.boutique?.description?.slice(0, 150)}
      />

      <Layout>
        <BoutiqueDetailContainer {...props} />
      </Layout>
    </>
  );
}

export { getServerSideProps } from "@/ui/modules/boutique/boutique-detail.container";
