// COMPONENT
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";
import { GUEST } from "@/lib/session-status";
import Image from "next/image";

export default function Register() {
  return (
    <>
      <Seo 
        title="Inscription sur Bakery & Diabetes" 
        description="Page d'inscription" 
      />

      <Layout sessionStatus={GUEST}>
        <RegisterContainer />
        <div className="relative">
          <Image
              src="/assets/svg/coluche.svg"
              alt="coluche"
              width={420}
              height={320}
              draggable={false}
              aria-hidden
              className="
              pointer-events-none select-none
              absolute left-4 md:left-12
              -bottom-14 sm:-bottom-10 md:-bottom-14 
              w-72 md:w-96 lg:w-[28rem]
              z-20"
            />
        </div>
      </Layout>
      
      
    </>
  );
}