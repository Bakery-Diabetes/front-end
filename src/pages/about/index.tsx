// pages/a-propos.tsx
import { Container } from "@/ui/components/container/container";
import { Pattern } from "@/ui/components/decoration/pattern";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Seo title="À Propos" description="Page À propos" />

      <Layout>
        <Container className="py-12 space-y-28">
          {/* Hero */}
          <div className=" space-y-8">
            <div className="text-center mx-auto max-w-3xl space-y-8">
              <Typography variant="h1" component="h1">
                Bien plus qu’un guide : une madeleine de Proust
              </Typography>
              <Typography variant="body-lg" component="p" className="leading-6">
                Derrière ce projet, il y a une conviction simple : chacun mérite
                de profiter pleinement malgré le diabète. Cet espace à été créer pour partager des sélections fiables et pratiques, et
                ainsi offrir une alternative à toutes
                celles et ceux qui en ont besoin.
              </Typography>
            </div>

            {/* Video */}
            <div className="rounded overflow-hidden relative w-full">
              <video
                src="/assets/videos/presentation.mp4"
                className="object-cover w-full h-full"
                controls
              />
              
            </div>
          </div>

          <Pattern
            repeat="repeat-x"
            src="/assets/svg/pattern.svg"
            className="w-full h-32 md:h-28"
          />
        </Container>

        <Container className="py-12 space-y-28">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1 space-y-4">
              <Typography variant="h2" component="h2">
                Le projet
              </Typography>
              <Typography
                variant="body-lg"
                component="p"
                className="leading-loose"
              >
                Bakery & Diabetes est un guide en ligne qui répertorie les
                boulangeries et pâtisseries de Bruxelles proposant des produits
                adaptés aux personnes diabétiques et à celles soucieuses de leur
                santé. L’objectif est simple : centraliser des informations
                souvent éparpillées afin de permettre à chacun de trouver
                facilement des alternatives gourmandes et équilibrées, sans
                compromis sur le plaisir. Chaque commerce inscrit dispose d’un
                espace dédié pour partager ses produits et mettre à jour ses
                informations, garantissant ainsi une base de données fiable,
                utile et toujours à jour.
              </Typography>
            </div>
            <Image
              src="/assets/images/phone_mockup.jpg"
              alt="mockup projet"
              width={500}
              height={400}
              className="rounded object-cover w-full order-1 md:order-2 max-h-[500px] mx-auto"
            />
          </div>
        </Container>

        <Container className="py-12 space-y-28">
          <div className="relative grid md:grid-cols-2 gap-8 items-stretch">
            <Pattern
              src="/assets/svg/pattern2.svg"
              className="w-full h-full rounded"
              repeat="repeat-y"
              imageSrc="/assets/images/msenhaji-v2.png"
            />
            <div className="space-y-4">
              <Typography variant="h2" component="h2">
                Histoire et valeurs
              </Typography>
              <Typography
                variant="body-lg"
                component="p"
                className="leading-loose"
              >
                Bakery & Diabetes est né d’une histoire personnelle. Hamza
                Senhaji l&apos;initiateur du projet a grandi dans une famille où le
                diabète faisait partie du quotidien. Entre les douceurs
                partagées lors des petits-déjeuners en famille et les
                contraintes imposées par la maladie, il a pris conscience très
                tôt de la difficulté de concilier gourmandise et santé. Cette
                expérience l’a inspiré à créer un projet qui réconcilie ces deux
                mondes trop souvent opposés.
                <br />
                <br />
                Au-delà d’un simple guide, Bakery & Diabetes est une démarche
                humaine qui défend des valeurs fortes. C’est un projet qui
                cherche à faciliter le quotidien des personnes diabétiques, à
                valoriser le savoir-faire des artisans et à redonner de la place
                à la convivialité. Il reflète aussi une conviction personnelle :
                il est possible de continuer à se faire plaisir, à partager des
                moments et des souvenirs, tout en prenant soin de soi.
              </Typography>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
