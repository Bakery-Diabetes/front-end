// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { CardBoutique } from "@/ui/design-system/card-boutique/cardBoutique";
// UTILS
import { useState, useEffect } from "react";
// ICONS
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
// COMPONENTS
import { Container } from "@/ui/components/container/container";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase-config";


  function extractCommuneAdresse(adresses?: string | null): string | null {
    if (!adresses) return null;
    const m = adresses.match(/\b(\d{4})\s+([^,]+)/);
    if (!m) return null;
    return m[2].trim().toLowerCase().replace(/\s+/g, "-");
  }

type ShopCard = {
  uid: string;
  displayName: string;
  photoURL?: string | null;
  adresse?: string;
  categories?: string[];
  creation_date?: string;
  commune?: string;
};

export const BoutiquesOverviewView = () => {

  const [boutiques, setBoutiques] = useState<ShopCard[]>([]);
  
  

  useEffect(() => {
    const fetchLatest = async () => {
    
    const q = query(
      collection(db, "shops"),
      orderBy("creation_date", "desc"),
      limit(4)
    );

    const snap = await getDocs(q);
    const rows: ShopCard[] = snap.docs.map(d => {
      const data = d.data() as any;
      return {
        uid: d.id,
        displayName: data.displayName ?? "Boutique",
        photoURL: data.photoURL ?? undefined,
        adresse: data.adresse ?? "",
        categories: data.categories ?? [],
        creation_date: data.creation_date ?? undefined,
        commune: extractCommuneAdresse(data.adresse) || "",
      };
    });

      setBoutiques(rows);
    };

    fetchLatest().catch(console.error);
  }, []);

  return (
    <Container className="bg-primary-beige py-10 space-y-6" noPadding={true}>
      <div className="flex justify-between items-center">
        <Typography variant="h2" component="h2">
            Visitez les boutiques
        </Typography>
        
      </div>

      {/*==== mobile =====*/}
      <div className="mx-6 md:hidden">
        <div className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-4">
          {boutiques.map((b) => (
            <div key={b.uid} className="snap-start min-w-[85%] sm:min-w-[60%]">
              <CardBoutique
                uid={b.uid}
                name={b.displayName}
                image={b.photoURL || "/assets/placeholder.jpg"}
                tags={b.categories || []}
                commune={b.commune || ""}
              />
            </div>
          ))}
        </div>
      </div>

      {/*==== desktop =====*/}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {boutiques.map((b) => (
            <CardBoutique
              key={b.uid}
              uid={b.uid}
              name={b.displayName}
              image={b.photoURL || "/assets/placeholder.jpg"}
              tags={b.categories || []}
              commune={b.commune || ""}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button 
          baseUrl="/boutiques"
          size="medium" 
          variant="secondary" 
          icon={{ icon: BsArrowRight }}
        >
            Voir les boutiques
        </Button>
      </div>
      
    </Container>
  );
};
