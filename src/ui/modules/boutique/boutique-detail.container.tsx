import { BoutiqueDetailView } from "./boutique-detail.view";
import { GetServerSideProps } from "next";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { firestore } from "@/config/firebase-config";
import { Boutique } from "@/types/boutique-types";

interface Props {
    boutique: Boutique;
}

export const BoutiqueDetailContainer = ({ boutique }: Props) => {
  if (!boutique) return <p className="p-4 text-red-500">Boutique introuvable.</p>

  return <BoutiqueDetailView boutique={boutique} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const uid = params?.uid as string;

  if (!uid) {
    return { notFound: true };
  }

  const docRef = doc(firestore, "shops", uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { notFound: true };
  }

  const data = docSnap.data();

  const creation_date =
    data.creation_date instanceof Timestamp
      ? data.creation_date.toDate().toISOString()
      : data.creation_date instanceof Date
      ? data.creation_date.toISOString()
      : data.creation_date ?? null;

  return {
    props: {
      boutique: {
        ...docSnap.data(),
        uid: docSnap.id,
        creation_date
      },
    },
  };
};