import { FormsType } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { Typography } from "@/ui/design-system/typography/typography";
import { useRef } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

const CATEGORIES = ["Boulangerie","Pâtisserie"] as const;

interface Props {
    form: FormsType;

}

export const ProfileStepForm = ({ form }: Props) => {

    const { register, errors, isLoading, setValue, trigger, } = form;

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
        trigger("adresse");
    };




    return (
        <form className="w-full max-w-md space-y-4">
            <Input 
                label="Nom de la boutique"
                isLoading={isLoading}
                placeholder="indique le nom de ta boutique"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner le nom de ta boutique"
                id="displayName"
            />
            <Textarea 
                label="Description"
                isLoading={isLoading}
                placeholder="Indique une description de la boutique"
                rows={5}
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner une description de ta boutique"
                id="description"
            />

            

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

            <div className="space-y-2">
                <Typography variant="caption3" component="div">
                    Adresse
                </Typography>
                

                {isLoaded ? (
                    <Autocomplete
                        onLoad={(ac) => (autocompleteRef.current = ac)}
                        onPlaceChanged={onPlaceChanged}
                        options={{
                            types: ["address"],
                            componentRestrictions: { country: "be" },
                        }}
                    >
                        <input
                            {...register("adresse", { required: "Adresse requise" })}
                            id="adresse"
                            name="adresse"
                            type="text"
                            placeholder="Indique l'adresse de ta boutique"
                            className="w-full p-4 rounded border border-primary bg-primary-beige focus:outline-none"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") e.preventDefault();
                            }}
                            disabled={isLoading}
                            autoComplete="off"
                        />
                    </Autocomplete>
                ) : (
                    <input
                        {...register("adresse", { required: "Adresse requise" })}
                        id="adresse"
                        name="adresse"
                        type="text"
                        placeholder="Chargement de l’autocomplétion…"
                        className="w-full p-4 rounded border border-primary opacity-60"
                        disabled
                    />
                )}

                {errors.adresse && (
                <p className="text-alert-danger text-sm">
                    {String(errors.adresse.message)}
                </p>
                )}
            </div>


        </form>

    )
}  