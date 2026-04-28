import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/config/firebase-config";
import type { Boutique } from "@/types/boutique-types";
import { BoutiquesListView } from "./boutiques-list.view";

export const BoutiquesListContainer = () => {
  const [boutiques, setBoutiques] = useState<Boutique[]>([]);
  const [filtered, setFiltered] = useState<Boutique[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const db = getFirestore(app);
        const snap = await getDocs(collection(db, "shops"));
        const rows: Boutique[] = snap.docs.map((d) => ({
          ...(d.data() as Boutique),
          uid: d.id,
        }));
        if (!cancelled) {
          setBoutiques(rows);
          setFiltered(rows);
        }
      } catch (e) {
        console.error("Erreur Firestore shops:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <BoutiquesListView
      boutiques={boutiques}
      filtered={filtered}
      onFilter={setFiltered}
    />
  );
};