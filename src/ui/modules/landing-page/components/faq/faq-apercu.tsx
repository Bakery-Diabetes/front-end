import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { FaqAccordion } from "@/ui/modules/faq/faq-accordion";
import { FAQS } from "@/ui/modules/faq/faq.data";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export function FaqApercu() {
  const featured = FAQS.filter((f) => f.featured).slice(0, 5);

  return (
    <Container className="relative py-10 md:py-14" noPadding={true}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="md:col-span-5 flex flex-col gap-5">
          <Typography variant="h2" component="h2">FAQs</Typography>
          <Typography variant="body-base" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique.
          </Typography>

          <Button 
            baseUrl="/faq" 
            variant="secondary"
             icon={{ icon: BsArrowRight }}
        >
            Voir toutes les questions
          </Button>
        </div>

        <div className="md:col-span-7">
          <FaqAccordion items={featured} dense={false} openFirst />
        </div>
      </div>

    <div aria-hidden className="h-24 sm:h-28 md:h-36" />

      <Image
        src="/assets/svg/belmondo.svg"
        alt="belmondo"
        width={420}
        height={320}
        draggable={false}
        aria-hidden
        className="
            pointer-events-none select-none
            absolute left-4 md:left-12
            -bottom-14 sm:-bottom-10 md:-bottom-14 
            w-72 md:w-96 lg:w-[28rem]
            z-20
        "
      />
      
    </Container>
    

  );
}
