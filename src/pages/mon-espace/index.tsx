// COMPONENTS
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
// MODULES
import { ProfileContainer } from "@/ui/modules/user-profile/profile/profile.container";
// LIBRARY
import { REGISTERED } from "@/lib/session-status";

export default function ShopAccount() {
  return (
    <>
      <Seo 
        title="Mon espace" 
        description="Dashboard utilisateur" 
      />

      <Layout withSidebar sessionStatus={REGISTERED}>
        <ProfileContainer />
      </Layout>
      
    </>
  );
}
