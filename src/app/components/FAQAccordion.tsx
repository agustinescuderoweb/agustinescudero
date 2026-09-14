"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { FaqItem } from "@/data/faq"

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.question} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <p className="min-h-0 text-sm leading-relaxed text-ink/55">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
