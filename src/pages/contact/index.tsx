// pages/a-propos.tsx
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Seo 
        title="Contact" 
        description="Page de Contact" 
      />

      <Layout>
          <Container className="py-32 space-y-28 h-[90vh] flex flex-col items-center justify-center">

            <div className=" space-y-12">
              <div className="text-center mx-auto max-w-2xl ">
                <Typography variant="h1" component="h1">
                  Une question ?
                </Typography>
                <Typography variant="body-lg">
                  Vous pouvez nous joindre à l&apos;adresse 👇
                </Typography>
              </div>

              <div className="text-center">
                  <Button 
                    variant="secondary" 
                    size="large" 
                    baseUrl="mailto:hamzasenhaji0@gmail.com"
                >
                    hello@bakeryanddiabetes.be
                  </Button>
              </div>

            </div>

            
          </Container>
          <Image
              src="/assets/svg/dalida.svg"
              alt="dalida"
              width={420}
              height={320}
              draggable={false}
              aria-hidden
              className="
              pointer-events-none select-none
              absolute left-4 md:left-48
              -bottom-20 sm:-bottom-10 md:-bottom-14 
              w-72 md:w-80 lg:w-80
              z-20"
            />
      </Layout>
    </>
  );
}