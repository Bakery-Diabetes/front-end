import { Typography } from "@/ui/design-system/typography/typography";
import { ProfileForm } from "./profile.form";
import { FormsType } from "@/types/forms";

interface Props {
    form: FormsType;
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number;
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileView = ({ 
    form, 
    imagePreview,
    uploadProgress,
    handleImageSelect,
}: Props) => {

    return (
        <div className="space-y-5">
            <Typography variant="h2" component="h1">
                Mon compte
            </Typography>
            <ProfileForm 
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                handleImageSelect={handleImageSelect}
                form={form} 
            />
        </div>
    );
}