import { Boutique } from "@/types/boutique-types";
import { Button } from "@/ui/design-system/button/button";
import { Select } from "@/ui/design-system/select/select";
import { Typography } from "@/ui/design-system/typography/typography";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  allBoutiques: Boutique[];
  onFilter: (filtered: Boutique[]) => void;
  setShowMap: (value: boolean) => void;
  showMap: boolean;
}

const TAGS = ["boulangerie", "patisserie"]

const COMMUNES = [
  "anderlecht",
  "auderghem",
  "berchem-sainte-agathe",
  "bruxelles-ville",
  "etterbeek",
  "evere",
  "forest",
  "ganshoren",
  "ixelles",
  "jette",
  "koekelberg",
  "laeken",
  "molenbeek-saint-jean",
  "saint-gilles",
  "saint-josse-ten-noode",
  "schaerbeek",
  "uccle",
  "watermael-boitsfort",
  "woluwe-saint-lambert",
  "woluwe-saint-pierre",
]

const SORT_OPTIONS = [
  { value: "alpha", label: "Trier par nom" },
  { value: "recent", label: "Plus récentes" },
]


export default function FilterBar({ allBoutiques, onFilter, setShowMap, showMap }: Props) {

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCommune, setSelectedCommune] = useState<string | null>(null)
  const [sort, setSort] = useState<string>("alpha");
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    let filtered = [...allBoutiques];
  
    if (selectedTag) {
      filtered = filtered.filter((b) =>
        b.categorie?.includes(selectedTag)
      );
    }
  
    if (selectedCommune) {
      filtered = filtered.filter(
        (b) => b.location?.commune?.toLowerCase() === selectedCommune.toLowerCase()
      );
    }

    if (sort === "alpha") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    onFilter(filtered);
  }, [selectedTag, selectedCommune, sort, allBoutiques, onFilter]);  
  
  

  return (
    <div className="sticky top-0 z-10 bg-primary-beige border-b border-primary pb-4 py-3">

      {/* Toggle mobile */}
      <div className="flex justify-between items-center md:hidden mb-6">
        <Typography variant="caption2" weight="medium">
          Filtres
        </Typography>
        <button onClick={() => setOpen(!open)} aria-label="toggle">
          {open ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>

      {/* Contenu */}
      <div className={`${open ? "flex" : "hidden"} flex-col gap-6 md:flex-row md:items-center md:justify-between md:flex`}>
      {/* Catégories */}
        <div className="flex flex-col gap-2">
          <Typography variant="caption2" weight="medium">Catégories</Typography>
          <div className="flex flex-wrap gap-2">
            <Button
              size="small"
              variant={selectedTag === null ? "primary" : "secondary"}
              onClick={() => setSelectedTag(null)}
            >Tout</Button>
            {TAGS.map((tag) => (
              <Button
                key={tag}
                size="small"
                variant={selectedTag === tag ? "primary" : "secondary"}
                onClick={() => setSelectedTag(tag)}
              >
                {tag[0].toUpperCase() + tag.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Commune */}
        <div className="flex flex-col gap-2 min-w-[180px]">
          <Typography variant="caption2" weight="medium">Communes</Typography>
          <Select
            value={selectedCommune || ""}
            onChange={(e) => setSelectedCommune(e.target.value || null)}
            placeholder="Toutes les communes"
            options={COMMUNES.map((c) => ({
              label: c.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
              value: c,
            }))}
          />
        </div>

        {/* Trier */}
        <div className="flex flex-col gap-2 min-w-[160px]">
          <Typography variant="caption2" weight="medium">Trier par</Typography>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            options={SORT_OPTIONS}
          />
        </div>

        {/* Carte */}
        <div className="flex flex-col gap-2">
          <Typography variant="caption2" weight="medium">Afficher la carte</Typography>
          <div className="flex gap-2">
            <Button size="small" onClick={() => setShowMap(true)} variant={showMap ? "primary" : "secondary"}>Oui</Button>
            <Button size="small" onClick={() => setShowMap(false)} variant={!showMap ? "primary" : "secondary"}>Non</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
