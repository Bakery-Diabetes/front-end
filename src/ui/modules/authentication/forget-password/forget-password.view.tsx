import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"
import { Container } from "@/ui/components/container/container"
import { ForgetPasswordForm } from "./forget-password-form"
import { FormsType } from "@/types/forms"

interface Props {
  form: FormsType;
}

export const ForgetPasswordView = ({ form }: Props) => {
    return (
        <Container className="mb-32">
            <div className="flex items-center justify-center py-96">
                <Box padding_y="py-5">
                    <div className="">
                        <Typography variant="h3" component="h1">
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