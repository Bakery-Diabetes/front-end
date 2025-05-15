// ui/design-system/forms/searchInput.tsx

import clsx from "clsx"
import { FC, ChangeEvent } from "react"

interface SearchInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Rechercher...",
  className = "",
}) => {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(
        "w-full p-2 rounded border border-primary text-primary bg-primary-beige focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
    />
    
  )
}
