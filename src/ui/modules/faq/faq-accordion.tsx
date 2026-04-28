import { useState } from "react";
import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import type { Faq } from "./faq.data";
import { FaPlus, FaMinus } from "react-icons/fa6";

type FaqAccordionProps = {
  items: Faq[];
  dense?: boolean;
  openFirst?: boolean;
};

export function FaqAccordion({
  items,
  dense = false,
  openFirst = true,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    openFirst ? 0 : null
  );

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FaqItem
          key={item.id ?? i}
          item={item}
          dense={dense}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}

type FaqItemProps = {
  item: Faq;
  dense?: boolean;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ item, dense, isOpen, onToggle }: FaqItemProps) {
  const safeId = String(item.id ?? Math.random());
  const btnId = `faq-btn-${safeId}`;
  const panelId = `faq-panel-${safeId}`;

  return (
    <div className="border border-primary rounded">
      <button
        type="button"
        id={btnId}
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={onToggle}
        className={clsx(
          "w-full text-left flex items-center justify-between",
          dense ? "px-4 py-3" : "px-5 py-4"
        )}
      >
        <Typography variant="body-base" className="font-semibold">
          {item.question}
        </Typography>
        <span className="text-2xl leading-none select-none text-primary" aria-hidden>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={btnId}
          className={clsx(dense ? "px-4 pb-4 pt-1" : "px-5 pb-5 pt-1")}
        >
          <Typography variant="body-base">{item.reponse}</Typography>
        </div>
      )}
    </div>
  );
}
