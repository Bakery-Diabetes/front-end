// TYPES
import { FormsType } from "@/types/forms";
// COMPONENTS
import { Container } from "@/ui/components/container/container";
// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
// UTILS
import Link from "next/link";
import { RegisterForm } from "./register.form";

interface Props {
    form: FormsType;
}

export const RegisterView = ({ form }: Props) => {

    return (
        <Container>
            <div className="flex items-center justify-center py-32">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h3" component="h1">
                            Inscription
                        </Typography>

                        <div className="flex items-center gap-2">
                            <Typography 
                                variant="caption3" 
                                component="span"
                            >
                                Tu as déjà un compte ?
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
                    
                    <RegisterForm form={form} />

                </Box>
            </div>
        </Container>
    )
}