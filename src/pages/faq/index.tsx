import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { FAQS } from "@/ui/modules/faq/faq.data";
import { FaqAccordion } from "@/ui/modules/faq/faq-accordion";

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ - Bakery & Diabetes"
        description="Toutes les réponses aux questions fréquentes sur Bakery & Diabetes."
      />
      <Layout>
        <Container className="py-12 space-y-16">

          <div className="max-w-3xl flex flex-col gap-5">
            <Typography variant="h1" component="h1">FAQs</Typography>
            <Typography variant="body-base">
              Retrouvez ici les questions les plus fréquentes. Si vous ne trouvez pas votre
              réponse, contactez-nous.
            </Typography>

            <Button
              baseUrl="/contact"
              linkType="internal"
              variant="secondary"
              size="small"
            >
              Contact
            </Button>
          </div>

          <FaqAccordion items={FAQS} />
        </Container>
      </Layout>
    </>
  );
}
