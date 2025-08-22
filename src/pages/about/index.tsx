// pages/a-propos.tsx
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Seo title="À Propos" description="Page À propos" />

      <Layout>
          <Container className="py-12 space-y-28">
            {/* Hero */}
            <div className=" space-y-8">
              <div className="text-center mx-auto max-w-2xl space-y-8">
                <Typography variant="h1" component="h1">
                  Long heading is what you see here in this feature section
                </Typography>
                <Typography variant="body-lg" component="p" className="leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius, consectetur adipiscing elit ipsum dolor sit adipiscing elit.
                  Suspendisse varius,...
                </Typography>
              </div>

              {/* Video */}
              <div className="aspect-video rounded overflow-hidden relative w-full">
                {/* @video here */}
                <Image
                  src="/assets/images/hero.jpg"
                  alt="Vidéo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button>
                    <FaPlay size={60} color="white" />
                  </button>
                </div>
              </div>
            </div>
        </Container>

            <div className="bg-primary">

                <Container  className="py-12 space-y-28" >
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <Typography variant="h2" component="h2" theme="secondary">
                            Short heading
                            </Typography>
                            <Typography variant="body-base" component="p" theme="primary-beige" className="leading-loose">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                                id cursus mi pretium tellus duis convallis. Tempus leo eu
                                aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
                                nec metus bibendum egestas. Iaculis massa nisl malesuada
                                lacinia integer nunc posuere. Ut hendrerit semper vel class
                                aptent taciti sociosqu. Ad litora torquent per conubia nostra
                                inceptos himenaeos.<br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                                sem placerat. In id cursus mi pretium tellus duis convallis.
                                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                                fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
                                malesuada lacinia integer nunc posuere. Ut hendrerit semper
                                vel class aptent taciti sociosqu. Ad litora torquent per
                                conubia nostra inceptos himenaeos.
                            </Typography>
                        </div>
                        <Image
                            src="/assets/images/about_1.png"
                            alt="image about 1"
                            width={500}
                            height={400}
                            className="rounded object-cover w-full"
                        />
                    </div>
                </Container>
            
            </div>

        <Container className="py-12 space-y-28">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Image
                src="/assets/images/about_1.png"
                alt="image about 1"
                width={500}
                height={400}
                className="rounded object-cover w-full"
              />
              <div className="space-y-4">
                <Typography variant="h2" component="h2">
                  Short heading
                </Typography>
                <Typography variant="body-base" component="p" className="leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat. In
                    id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
                    nec metus bibendum egestas. Iaculis massa nisl malesuada
                    lacinia integer nunc posuere. Ut hendrerit semper vel class
                    aptent taciti sociosqu. Ad litora torquent per conubia nostra
                    inceptos himenaeos.<br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur
                    adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                    sem placerat. In id cursus mi pretium tellus duis convallis.
                    Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                    fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                </Typography>
              </div>
            </div>
          </Container>
      </Layout>
    </>
  );
}
