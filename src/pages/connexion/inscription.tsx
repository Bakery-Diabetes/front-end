// COMPONENT
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
  return (
    <>
      <Seo 
        title="Inscription sur Bakery & Diabetes" 
        description="Page d'inscription" 
      />

      <Layout>
        <RegisterContainer />
      </Layout>
      
    </>
  );
}