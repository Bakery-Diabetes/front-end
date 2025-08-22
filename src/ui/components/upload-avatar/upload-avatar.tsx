import { useAuth } from "@/context/authUserContext";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import clsx from "clsx";
import { RiCamera2Fill } from "react-icons/ri";

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number;
    isLoading: boolean;
    variant?: "primary" | "secondary";
}

export const UploadAvatar = ({ 
    handleImageSelect,
    imagePreview,
    uploadProgress,
    isLoading,
    variant = "primary",
}: Props) => {

    const { authUser } = useAuth();

    const uploadProgressBarStyle = `fixed top-0 left-0 w-full h-1 bg-secondary animate ${uploadProgress > 0 ? "" : "hidden"}`

    return (
      <div className="flex items-center gap-5">
        <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%` }} />
        <label
          className={clsx(
            isLoading ? "cursor-not-allowed" : "cursor-pointer",
            variant === "primary" &&  "bg-primary hover:bg-secondary hover:border hover:border-primary text-white",
            variant === "secondary" && "bg-primary-beige hover:bg-secondary border text-primary",
            "inline-block  hover:text-primary rounded px-[18px] py-[15px] text-caption2 font-medium animate"
          )}
        >
          <div className="flex items-center gap-2">
            <RiCamera2Fill />
            <span> Choisir un fichier</span>
          </div>
          <input 
            type="file" 
            disabled={isLoading}
            className="hidden" 
            onChange={handleImageSelect} 
        />
        </label>

        <Avatar
          size="extra-large"
          alt="avatar"
          isLoading={isLoading}
          src={
            imagePreview
              ? typeof imagePreview === "string"
                ? imagePreview
                : String(imagePreview)
                : authUser.shopDocument.photoURL 
                ? authUser.shopDocument.photoURL
              : "/assets/svg/camera.svg"
          }
        />
      </div>
    );
}