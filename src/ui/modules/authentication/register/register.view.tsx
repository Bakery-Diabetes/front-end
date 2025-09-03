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
import Image from "next/image";

interface Props {
    form: FormsType;
}

export const RegisterView = ({ form }: Props) => {

    return (
        <Container>
            <div className="min-h-screen flex items-center justify-center py-10 md:py-24">
                <Box padding_y="py-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6 ">
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