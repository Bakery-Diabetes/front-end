// pages/a-propos.tsx
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

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
                    hello@jbakeryanddiabetes.be
                  </Button>
              </div>

            </div>

            
          </Container>
      </Layout>
    </>
  );
}