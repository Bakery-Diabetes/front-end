"use client";

import { ReactNode, use } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Typography } from "@/ui/design-system/typography/typography";
import { Spinner } from "@/ui/design-system/spinner/spinner";

export default function GoogleMapsProvider({ children }: { children: ReactNode }) {
    const { isLoaded } = useJsApiLoader({
        id: "google-maps-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        libraries: ["places"],
    });

    if (!isLoaded) {
        return <Spinner size="large" className="mx-auto mt-20 " />;
    };

    return <>{children}</>;
}