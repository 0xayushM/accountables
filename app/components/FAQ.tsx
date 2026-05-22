"use client";

import { useState } from "react";
import { RevealBlock } from "./RevealBlock";

const faqs = [
  {
    q: "What is Accountables One?",
    a: "Accountables One is our connected operational environment designed around finance visibility, workflow coordination and ongoing communication. It brings reporting, tasks, finance updates and operational support into one connected environment.",
  },
  {
    q: "How does Accountables work with growing businesses?",
    a: "Accountables operates as an extension of your business - supporting bookkeeping, reporting, compliance and ongoing finance coordination through a structured operating environment designed around visibility and embedded support.",
  },
  {
    q: "Do I need to change my accounting software?",
    a: "No. Accountables works alongside existing accounting environments including Xero and QuickBooks, while integrating operational coordination through Accountables One.",
  },
  {
    q: "Can Accountables work alongside my existing finance team?",
    a: "Yes. Accountables can operate as a fully outsourced finance function or work alongside internal finance teams by supporting reporting, coordination, operational workflows and ongoing finance activities.",
  },
  {
    q: "Does Accountables support businesses operating internationally?",
    a: "Yes. Accountables supports businesses operating across the United Kingdom, United States and India, including businesses managing cross-border operations and multi-region finance environments.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is structured around operational complexity, transaction volume and reporting requirements - with support environments designed for businesses at different stages of growth.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <RevealBlock delay={0}>
            <span className="pill">FAQs</span>
          </RevealBlock>
          <RevealBlock delay={80}>
            <h2 className="display mt-5 text-[36px] sm:text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)]">
              Questions, <span className="accent">answered</span>.
            </h2>
          </RevealBlock>
        </div>

        <div className="mt-12 md:mt-16 divide-y divide-[var(--border)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-6 md:py-7 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[16px] md:text-[18px] font-medium text-[var(--text-primary)]">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-7 w-7 rounded-full border border-[var(--border-strong)] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-400 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)] pr-12">
                    {f.a}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
