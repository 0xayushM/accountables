"use client";

import { useState } from "react";
import { RevealBlock } from "./RevealBlock";

const faqs = [
  {
    q: "How does bookkeeping work at Accountables?",
    a: "Your books are reconciled continuously. We connect to your bank, accounting software, and tools - then a real bookkeeper categorises and reviews every transaction so your numbers stay accurate.",
  },
  {
    q: "Do I need to review transactions every month?",
    a: "Only if you want to. We send a monthly close summary, and you can ask questions any time. No more digging through spreadsheets.",
  },
  {
    q: "What accounting software do you support?",
    a: "Xero, QuickBooks, FreeAgent, and Sage - plus a wide range of integrations for payments, invoicing, and inventory.",
  },
  {
    q: "Can I get year-end accounts and tax returns too?",
    a: "Yes. We file statutory accounts with Companies House, corporation tax with HMRC, and handle VAT, PAYE, and self-assessment.",
  },
  {
    q: "What does it cost?",
    a: "Pricing starts at £20/hour. For ongoing support we offer fixed monthly plans tailored to your transaction volume and reporting needs.",
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
