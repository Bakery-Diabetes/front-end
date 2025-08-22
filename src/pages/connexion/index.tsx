// COMPONENTS
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";
import { GUEST } from "@/lib/session-status";

export default function Connexion() {
  return (
    <>
      <Seo 
        title="Connexion sur Bakery & Diabetes" 
        description="Page de connexion" 
      />

      <Layout sessionStatus={GUEST}>
        <LoginContainer />
      </Layout>
      
    </>
  );
}
