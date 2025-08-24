// TYPES
import { FormsType } from "@/types/forms";
// COMPONENTS
import { Container } from "@/ui/components/container/container";
// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
// UTILS
import Link from "next/link";
import { LoginForm } from "./login-form";

interface Props {
  form: FormsType;
}

export const LoginView = ({ form }: Props) => {

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center py-10 md:py-24">
        <Box padding_y="py-0">
          <div className="w-full max-w-sm md:max-w-lg rounded p-6 ">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
              <Typography
                variant="h3"
                component="h1"
              >
                Connexion
              </Typography>

              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                <Typography variant="caption3" component="span">
                  Tu n&apos;as pas de compte ?
                </Typography>
                <Typography
                  variant="caption3"
                  component="span"
                  className="hover:text-secondary underline underline-offset-2"
                >
                  <Link href="/connexion/inscription">S&apos;inscrire</Link>
                </Typography>
              </div>
            </div>

            {/* Formulaire */}
            <div className="mt-6">
              <LoginForm form={form} />
            </div>

            {/* Mot de passe oublié */}
            <Typography variant="caption4" theme="primary" className="mt-4">
              <Link href="/connexion/mot-de-passe-perdu" className="flex justify-center">
                Mot de passe perdu ?
              </Link>
            </Typography>
          </div>
        </Box>
      </div>
    </Container>
  );
};
