// TYPES
import { LoginFormFieldType } from "@/types/forms";
// HOOKS
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
// API'S
import { firebaseSignInUser } from "@/api/authentication";
// UTILS
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { LoginView } from "./login.view";

export const LoginContainer = () => {

    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();


  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldType>();

  const handleSignInUser = async ({ email, password }: LoginFormFieldType) => {
    const { error } = await firebaseSignInUser(email, password);

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur Bakery & Diabetes !");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }

    handleSignInUser(formData);
  };

  return (
    <LoginView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  );
};
