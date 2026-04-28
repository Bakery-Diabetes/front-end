// COMPONENT
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";
import { GUEST } from "@/lib/session-status";
import Image from "next/image";

export default function ForgetPassword() {
  return (
    <>
      <Seo 
        title="Inscription sur Bakery & Diabetes" 
        description="Page d'inscription" 
      />

      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />
        <div className="relative">
          <Image
              src="/assets/svg/depardieu.svg"
              alt="depardieu"
              width={420}
              height={320}
              draggable={false}
              aria-hidden
              className="
              pointer-events-none select-none
              absolute right-4 md:right-14
              -bottom-14 sm:-bottom-10 md:-bottom-14 
              w-64 md:w-72 lg:w-80
              z-20"
            />
        </div>
      </Layout>
      
    </>
  );
}