// COMPONENT
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo 
        title="Bakery & Diabetes" 
        description="Le guide en ligne des boulangeries et pâtisseries pour diabétiques" 
      />

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageContainer />
      </Layout>
      
    </>
  );
}
