import { FormsType } from "@/types/forms";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { Typography } from "@/ui/design-system/typography/typography";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";



interface Props {
    form: FormsType;
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number;
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DAYS = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
] as const;

const CATEGORIES = ["Boulangerie","Pâtisserie"] as const;


export const ProfileForm = ({ 
    form,
    imagePreview,
    uploadProgress,
    handleImageSelect,
}: Props) => {

    const { register, errors, isLoading, onSubmit, handleSubmit, setValue, trigger } = form;

    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        libraries: ["places"],
        id: "gmaps-places",
        
    });

    const onPlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        const addr = place?.formatted_address ?? "";
        setValue("adresse", addr, { shouldDirty: true, shouldValidate: true });
        trigger?.("adresse");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4" >

            <div className="flex items-center justify-between py-5">
                <div>
                    <UploadAvatar 
                        handleImageSelect={handleImageSelect} 
                        imagePreview={imagePreview}
                        uploadProgress={uploadProgress}
                        isLoading={isLoading}
                        variant="secondary"
                    />
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 space-y-4">
                    <Input 
                        label="Nom de la boutique"
                        isLoading={isLoading}
                        placeholder="Nom de la boutique"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner le nom de la boutique"
                        id="displayName"
                    />

                    <div className="space-y-2">
                        <Typography variant="caption3" component="div">
                            Adresse
                        </Typography>

                        {isLoaded ? (
                            <Autocomplete
                                onLoad={(ac) => (autocompleteRef.current = ac)}
                                onPlaceChanged={onPlaceChanged}
                                options={{ types: ["address"], componentRestrictions: { country: "be" } }}
                            >
                                <input
                                    {...register("adresse", { required: false })}
                                    id="adresse"
                                    name="adresse"
                                    type="text"
                                    placeholder="Ex : Rue Royale 10, 1000 Bruxelles"
                                    className="w-full p-4 rounded border border-primary bg-primary-beige focus:outline-none"
                                    autoComplete="off"
                                    onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }}
                                    disabled={isLoading}
                                />
                            </Autocomplete>
                        ) : (
                            <input
                                {...register("adresse", { required: false })}
                                id="adresse"
                                name="adresse"
                                type="text"
                                placeholder="Chargement de l’autocomplétion…"
                                className="w-full p-4 rounded border border-primary opacity-60"
                                disabled
                            />
                        )}

                        {errors.adresse && (
                            <Typography variant="caption4" component="div" theme="danger">
                                {String(errors.adresse.message)}
                            </Typography>
                        )}
                    </div>
 

                    <Input
                        label="Numéro de téléphone"
                        isLoading={isLoading}
                        placeholder="04 XX XX XX XX"
                        type="text"
                        register={register}
                        errors={errors}
                        id="phoneNumber"
                        required={false}
                    />
                    <Input 
                        label="Le must"
                        isLoading={isLoading}
                        placeholder="Le produit must"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner le produit phare de la boutique"
                        id="must"
                        required={false}
                    />
                </div>

                {/*==== URL ====*/}
                <div className="lg:col-span-6 space-y-4">
                    <Input 
                        label="Site web"
                        isLoading={isLoading}
                        placeholder="Indiquer votre site web"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner l'URL de ton site web"
                        id="website"
                        required={false}
                    />
                    <Input 
                        label="Instagram"
                        isLoading={isLoading}
                        placeholder="url instagram"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner l'URL de ta page Instagram"
                        id="instagram"
                        required={false}
                    />
                    <Input 
                        label="Tiktok"
                        isLoading={isLoading}
                        placeholder="url Tiktok"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner l'URL de ta page Tiktok"
                        id="tiktok"
                        required={false}
                    />
                    <Input 
                        label="Facebook"
                        isLoading={isLoading}
                        placeholder="indique l'URL de ta page Facebook"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner l'URL de ta page Facebook"
                        id="facebook"
                        required={false}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Typography variant="caption3" component="div">
                    Catégories
                </Typography>
                <div className="grid grid-cols-2 gap-3">
                    {CATEGORIES.map((cat) => (
                        <label
                            key={cat}
                            className="flex items-center gap-2 px-3 py-2"
                        >
                            <input
                                type="checkbox"
                                value={cat}
                                {...register("categories")}
                                disabled={isLoading}
                                className="h-4 w-4 rounded border-primary"
                            />
                            <Typography variant="caption3" component="span">
                                {cat}
                            </Typography>
                        </label>
                    ))}
                </div>
            </div>

            <Textarea 
                label="Description"
                rows={16}
                isLoading={isLoading}
                placeholder="Indique la desctription de ta boutique"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner une description de ta boutique"
                id="description"
            />

            <div className="space-y-4">
                <Typography variant="lead">Horaires</Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {DAYS.map((jour, index) => (
                        <div key={jour} className="border border-primary rounded px-5 md:px-6 py-4 space-y-3">
                            <input
                                type="hidden"
                                {...register(`horaires.${index}.jour`)}
                                defaultValue={jour}
                            />

                            <Typography variant="body-base" className="font-semibold">
                                {jour}
                            </Typography>

                            <div className="flex items-end gap-3 ">
                                <div>
                                    <Input
                                        label="Ouverture"
                                        type="time"
                                        id={`horaires.${index}.ouverture`}
                                        register={register}
                                        errors={errors}
                                        required={false}
                                        isLoading={isLoading}
                                        placeholder="HH:MM"
                                    />
                                </div>

                                <div>
                                    <Input
                                        label="Fermeture"
                                        type="time"
                                        id={`horaires.${index}.fermeture`}
                                        register={register}
                                        errors={errors}
                                        required={false}
                                        isLoading={isLoading}
                                        placeholder="HH:MM"
                                    />
                                </div>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        {...register(`horaires.${index}.ferme`)}
                                        className="h-5 w-5 rounded border-primary"
                                    />
                                    <span>Fermé</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="md:flex md:justify-end">
                <Button
                    isLoading={isLoading}
                    type="submit"
                    fullWidth
                    className="md:!w-auto"
  
                >
                    Enregistrer
                </Button>
            </div>
        </form>
    );
}