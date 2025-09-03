// COMPONENTS
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";
import { GUEST } from "@/lib/session-status";
import Image from "next/image";

export default function Connexion() {
  return (
    <>
      <Seo 
        title="Connexion sur Bakery & Diabetes" 
        description="Page de connexion" 
      />

      <Layout sessionStatus={GUEST}>
        <LoginContainer />
        <div className="relative">
            <Image
                src="/assets/svg/funes.svg"
                alt="funes"
                width={420}
                height={320}
                draggable={false}
                aria-hidden
                className="
                pointer-events-none select-none
                absolute right-4 md:right-12
                -bottom-14 sm:-bottom-10 md:-bottom-14 
                w-60 md:w-72 lg:w-80
                z-20"
              />
          </div>
      </Layout>
      
    </>
  );
}
