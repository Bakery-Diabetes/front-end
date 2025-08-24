// TYPES
import { FormsType } from "@/types/forms";
// COMPONENTS
import { Container } from "@/ui/components/container/container";
// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
// UTILS
import Link from "next/link";
import { ForgetPasswordForm } from "./forget-password-form";

interface Props {
  form: FormsType;
}

export const ForgetPasswordView = ({ form }: Props) => {
    return (
        <Container>
            <div className="min-h-screen flex items-center justify-center py-10 md:py-24">
                <Box padding_y="py-6">
                    <div className="">
                        <Typography variant="h3" component="h3">
                            Mot de passe oublié ?
                        </Typography>

                        <div className="flex items-center gap-2">
                            <Typography 
                                variant="caption3" 
                                component="span"
                            >
                                Tu souhaites te connecter ?
                            </Typography>
                            <Typography 
                                variant="caption3" 
                                component="span"
                                className="hover:text-secondary"
                            >
                                <Link href="/connexion">Connexion</Link>
                            </Typography>
                        </div> 

                    </div>

                    <ForgetPasswordForm form={form} />
                </Box>
            </div>
        </Container>
    )
}