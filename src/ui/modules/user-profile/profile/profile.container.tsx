import { useAuth } from "@/context/authUserContext";
import { ProfileView } from "./profile.view";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShopProfileFormFieldsType } from "@/types/forms";
import { useEffect, useState } from "react";
import { firesoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage";
import { storage } from "@/config/firebase-config";
import { updateShopIdentificationData } from "@/api/authentication";



export const ProfileContainer = () => {

  const { authUser, reloadAuthUserData } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
    watch,
    trigger, 
  } = useForm<ShopProfileFormFieldsType>();

  const { 
    displayName, 
    must, 
    description, 
    instagram, 
    facebook, 
    tiktok, 
    phoneNumber, 
    adresse, 
    website, 
    horaires, 
    categories
  } = authUser.shopDocument;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  
  useEffect(() => {
    const fieldsToUpdate: (
      | "displayName"
      | "must"
      | "description"
      | "instagram"
      | "facebook"
      | "tiktok"
      | "phoneNumber"
      | "adresse"
      | "website"
      | "horaires"
      | "categories"
    )[] = [
      "displayName", "must", "description", "instagram", "facebook", "tiktok", "phoneNumber", "adresse", "website", "horaires", "categories"];

    for (const field of fieldsToUpdate ) {
      setValue(field, authUser.shopDocument[field]);
    }
  }, [authUser?.shopDocument, setValue]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("file", file);
    
    if (file) {
        setSelectedImage(file);    

        const reader = new FileReader();
        reader.onload = (e) => {
            let imgDataUrl: string | ArrayBuffer | null = null;
            if (e.target) {
                imgDataUrl = e.target.result;
            }
            setImagePreview(imgDataUrl);
        };
        reader.readAsDataURL(file);
    }
    
  };

  const handleImageUpload = () => {
      
      let storageRef: StorageReference;
      let uploadTask: UploadTask;

      if (selectedImage !== null) {
          setLoading(true);
          storageRef = ref(
              storage,
              `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
          );
          uploadTask = uploadBytesResumable(storageRef, selectedImage);

          uploadTask.on(
              "state_changed", (snapshot) => {
                  const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setUploadProgress(progress);
              },
              (error) => {
                  setLoading(false);
                  toast.error("une erreur inconnue est survenue");
                  setUploadProgress(0);
              },
              () => {
                  getDownloadURL(uploadTask.snapshot.ref).then(
                      (downloadURL) => {
                          updateUserAvatar(downloadURL); 
                          setSelectedImage(null);
                          setTimeout(() => {
                            setUploadProgress(0);
                          }, 1000);
                          
                      }
                  )
              }
          );
      }
  };
  
  const updateUserAvatar = async (photoURL: string) => {
    const body = {
      photoURL: photoURL,
    };

    await updateShopIdentificationData(authUser.uid, body);

    const { error } = await firesoreUpdateDocument(
      "shops",
      authUser.uid,
      body
    );

    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    reloadAuthUserData();    
    setLoading(false);

  }

  const handleUpdateShopDocument = async (
    formData: ShopProfileFormFieldsType
  ) => {
    setLoading(true);
    
    const { error } = await firesoreUpdateDocument(
        "shops",
        authUser.uid,
        formData
    );

    if (error) {
        setLoading(false);
        toast.error(error.message);
        return;
    }

    toast.success("Ton profil a été mis à jour avec succès");
    setLoading(false);
    
  }
  
  const onSubmit: SubmitHandler<ShopProfileFormFieldsType> = async (
    formData
  ) => {

    if (selectedImage) {
      handleImageUpload();
    }

    if (formData.instagram && !formData.instagram.includes("instagram.com/")) {
      setError("instagram", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil Instagram",
      });
      return; 
    }

    if (formData.tiktok && !formData.tiktok.includes("tiktok.com/")) {
      setError("tiktok", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil Tiktok",
      });
      return; 
    }

    if (formData.facebook && !formData.facebook.includes("facebook.com/")) {
      setError("facebook", {
        type: "manual",
        message: "Cet URL ne correspond pas à un profil Facebook",
      });
      return; 
    }

    if (formData.website && !formData.website.includes("http")) {
      setError("website", {
        type: "manual",
        message: "L'URL du site web doit commencer par http:// ou https://",
      });
      return;
    }

    if (
        displayName !== formData.displayName ||
        must !== formData.must || 
        description !== formData.description || 
        instagram !== formData.instagram ||
        facebook !== formData.facebook ||
        tiktok !== formData.tiktok ||
        phoneNumber !== formData.phoneNumber ||
        website != formData.website ||
        horaires !== formData.horaires ||
        categories !== formData.categories ||
        adresse !== formData.adresse
      ) {

        if (
          displayName !== formData.displayName || 
          authUser.displayName !== formData.displayName
        ) {
          const body = {
            displayName: formData.displayName,
          };

          const { error } = await updateShopIdentificationData(
              authUser.uid,
              body
          );
          if (error) {
            setLoading(false);
            toast.error(error.message);
            return;
          }

          reloadAuthUserData();
        }

        for (const key in formData) {
          if (
            formData.hasOwnProperty(key) &&
            formData[key as keyof ShopProfileFormFieldsType] === undefined
          ) {
            delete formData[key as keyof ShopProfileFormFieldsType];
          }
        }

        handleUpdateShopDocument(formData);
        return;
    }
  };


  return (
    <ProfileView 
      imagePreview={imagePreview}
      uploadProgress={uploadProgress}
      handleImageSelect={handleImageSelect}
      form={{
        errors,
        control,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
        setValue,
        trigger, 
      }}
    />
  );
};
