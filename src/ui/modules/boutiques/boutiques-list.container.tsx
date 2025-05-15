// ui/modules/boutiques/boutiques-list.container.tsx

import { useState } from "react"
import { Boutique } from "@/types/boutique-types"
import { BoutiquesListView } from "./boutiques-list.view"

interface Props {
  boutiques: Boutique[]
}

export const BoutiquesListContainer = ({ boutiques }: Props) => {
  const [filtered, setFiltered] = useState<Boutique[]>(boutiques)

  return (
    <BoutiquesListView
      boutiques={boutiques}
      filtered={filtered}
      onFilter={setFiltered}
    />
  )
}
