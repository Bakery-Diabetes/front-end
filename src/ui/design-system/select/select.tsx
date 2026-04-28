// UTILS
import clsx from "clsx";
import { FC, ChangeEvent } from "react";
// ICONS
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  label: string
  value: string
}

interface SelectProps {
  id?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  label?: string;
}

export const Select: FC<SelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder = "",
  className = "",
  label,
}) => {
  return (
    <div className={clsx("relative w-full md:w-auto", className)}>
      {label && (
        <label htmlFor={id} className="mb-1 text-sm text-primary">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={clsx(
            "w-full pr-10 text-caption3 font-medium bg-primary-beige border text-primary rounded px-[14px] py-[12px] appearance-none",
            className
        )}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
            <IoIosArrowDown />
        </div>
    </div>
  )
}
