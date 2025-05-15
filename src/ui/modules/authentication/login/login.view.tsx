import { Container } from "@/ui/components/container/container";
import { LoginForm } from "./login-form";
import { FormsType } from "@/types/forms";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";

interface Props {
  form: FormsType;
}

export const LoginView = ({ form }: Props) => {

  return (
    <Container className="mb-32">
      <div className="flex items-center justify-center py-96">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h3" component="h1">
              Connexion
            </Typography>

            <div className="flex items-center gap-2">
              <Typography variant="caption3" component="span">
                Tu n'as pas de compte ?
              </Typography>
              <Typography
                variant="caption3"
                component="span"
                className="hover:text-secondary"
              >
                <Link href="/connexion/inscription">S'inscrire</Link>
              </Typography>
            </div>
          </div>

          <LoginForm form={form} />

          <Typography variant="caption4" theme="primary" >
              <Link 
                href="/connexion/mot-de-passe-perdu" 
                className=" flex justify-center"
              >
                Mot de passe perdu ?
              </Link>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};
