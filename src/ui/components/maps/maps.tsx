'use client';
// TYPES
import { Boutique } from "@/types/boutique-types";
import { Button } from "@/ui/design-system/button/button";
// DESIGN SYSTEM
import { Typography } from '@/ui/design-system/typography/typography';
// UTILS
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrLocation } from "react-icons/gr";
// STYLES
// NEXT

const center = { lat: 50.8503, lng: 4.3517 };

const extractCommune = (adresse?: string) => {
  if (!adresse) return "";
  const part = adresse.split(",").map(s => s.trim()).filter(Boolean);
  const communePart = part.length >= 2 ? part[part.length - 2] : part[0];
  return communePart.replace(/^\d{3,5}\s*/, "");
};

export default function Map({ boutiques }: { boutiques: Boutique[] }) {

  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const handleMarker = (uid: string) => {
    if (uid === activeMarker) {
      setActiveMarker(null);
    } else {
      setActiveMarker(uid);
    }
  };

  return (
    <GoogleMap 
      mapContainerStyle={{ width: "100%", height: "90vh", borderRadius: "12px" }}
      center={center}
      zoom={13}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: true,
        clickableIcons: false,
      }}
    >
      {boutiques.map((boutique, i) => 
        boutique.location?.lat &&  boutique.location?.lng ? (
          <Marker 
            key={boutique.uid || i}
            position={{ lat: boutique.location.lat, lng: boutique.location.lng }}
            onClick={() => handleMarker(boutique.uid)}
            icon={{
              url: "/assets/svg/location_icon.svg", 
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 40),
            }}

          >
            {activeMarker === boutique.uid && (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>

                  <Image 
                    src={boutique.photoURL || "https://placehold.co/400x300"}
                    alt={`photos de ${boutique.displayName}`} 
                    className="w-full max-h-[120px] object-cover rounded mb-2"
                    width={400}
                    height={400}
                  />

                  <Typography variant="h6" component="h6">{boutique.displayName}</Typography>
                  <div className="flex gap-1 mt-1">
                    <GrLocation className="text-secondary text-2xl" />
                    <Typography 
                      variant='caption4' 
                      theme='gray' 
                      className='mt-2 mb-2'
                    >
                      {extractCommune(boutique.adresse)}
                    </Typography>  
                  </div>
                  
                  <Link href={`/boutiques/${boutique.uid}`}>
                    <Button 
                      variant="primary" 
                      className="mt-2 w-full" 
                    >
                      Voir la boutique
                    </Button>
                  </Link>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ): null
      )}
    </GoogleMap>
  );

}
