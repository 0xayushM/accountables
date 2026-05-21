"use client";

import type { Key } from "react";
import LogoLoop, { type LogoItem } from "./LogoLoop";

type Brand = { file: string; name: string; industry?: string };

const brands: Brand[] = [
  { file: "A & Co Accountants Ltd.png", name: "A & Co Accountants", industry: "Accounting Firm" },
  { file: "Aberrant Gene Films Ltd.png", name: "Aberrant Gene Films", industry: "Film Production" },
  { file: "actor door studio.png", name: "Actors Door Studio", industry: "Acting School" },
  { file: "Alexandra Boutique (Lexi).png", name: "Alexandra Boutique", industry: "Retail/Boutique" },
  { file: "Aqwire Pte Ltd.png", name: "Aqwire", industry: "Payment Gateway" },
  { file: "Baseify LLC.png", name: "Baseify", industry: "Tech Product" },
  { file: "battle golf.png", name: "Battle Royale Golf", industry: "Ecommerce" },
  { file: "beds co uk.png", name: "Beds.co.uk", industry: "Ecommerce" },
  { file: "beekin.png", name: "Beekin", industry: "Tech" },
  { file: "Careerhigher Ltd.png", name: "Careerhigher", industry: "Tech/Service" },
  { file: "Chargewheel.png", name: "Chargewheel", industry: "EV Industry" },
  { file: "dominoes.png", name: "Domino's", industry: "F&B/Retail" },
  { file: "dracup and patterson.png", name: "Dracup & Patterson", industry: "Law Firm" },
  { file: "ducis group.png", name: "Ducis Group", industry: "Service" },
  { file: "Earcandy Enterainment Ltd.png", name: "Earcandy", industry: "Entertainment" },
  { file: "Faad Network Pvt Ltd.png", name: "Faad Network", industry: "Venture Capital" },
  { file: "Fifth Start Logo.png", name: "Fifth Start", industry: "Ecommerce" },
  { file: "flutterwave.png", name: "Flutterwave", industry: "Payment Gateway" },
  // { file: "Giomani Designs Ltd.png", name: "Giomani Designs", industry: "Retail/Manufacturing" },
  { file: "ikari.png", name: "Ikari", industry: "Service/Pest Control" },
  { file: "Inclusion Scotland.png", name: "Inclusion Scotland", industry: "Charity" },
  { file: "Maker&Son Private Limited.png", name: "Maker & Son", industry: "Ecommerce" },
  { file: "Myhealth Specialist Ltd.png", name: "Myhealth Specialist", industry: "Tech Product" },
  { file: "Nexus Consulting Firm Ltd.png", name: "Nexus Consulting", industry: "Law Firm" },
  { file: "Nutkase Accessories Limited.png", name: "Nutkase", industry: "Ecommerce" },
  { file: "Once upon a Whisky Ltd.png", name: "Once Upon a Whisky", industry: "Service" },
  { file: "postscriptum ventures.png", name: "Postscriptum Ventures", industry: "Venture Capital" },
  { file: "primitive-logo.png", name: "Primitive Company", industry: "Ecommerce" },
  { file: "rainforest collective.png", name: "Rainforest Collective", industry: "Ecommerce" },
  { file: "ROUTE ONE LLC.png", name: "Route One", industry: "Fractional CFO" },
  { file: "Trevisan Social Media Marketing.png", name: "Trevisan", industry: "Digital Marketing" },
  { file: "Trollbeads Australia New Zealand Pty Ltd.png", name: "Trollbeads ANZ", industry: "Ecommerce/Retail" },
  { file: "Vistabee Limited.png", name: "Vistabee", industry: "Tech Product" },
  { file: "Ward Divecha Limited.png", name: "Ward Divecha", industry: "Audit Firm" },
  { file: "west coast harley davidson.png", name: "West Coast Harley Davidson", industry: "Retail" },
  { file: "Wizz Accounting Ltd.png", name: "Wizz Accounting", industry: "Accounting Firm" },
  { file: "WOOTZWORK LABS PRIVATE LIMITED.png", name: "Wootzwork Labs", industry: "Manufacturing" },
  { file: "Your Airhost Ltd.png", name: "Your Airhost", industry: "Tech Product" },
];

const toLogoItem = (b: Brand): LogoItem => ({
  src: `/logos/${b.file}`,
  alt: b.name,
  title: b.industry ?? "",
});

// Split into two non-overlapping halves so the rows always show different logos
const half = Math.ceil(brands.length / 2);
const logoItems: LogoItem[] = brands.slice(0, half).map(toLogoItem);
const logoItemsRow2: LogoItem[] = brands.slice(half).map(toLogoItem);

const renderBrand = (item: LogoItem, key: Key) => {
  const src = "src" in item ? item.src : "";
  const alt = "alt" in item ? item.alt ?? "" : "";
  const industry = "title" in item ? item.title ?? "" : "";

  return (
    <div
      key={key}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="h-12 md:h-14 flex items-center justify-center">
        {/* Plain <img> here (LogoLoop measures images via load events) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-12 md:h-14 w-auto max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        {/* <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-primary)] text-center leading-tight max-w-[160px]">
        {alt}
      </span> */}
      <span
        className="text-[10.5px] tracking-wide text-center leading-tight max-w-[160px] min-h-[14px]"
        style={{
          background: "linear-gradient(90deg, var(--brand-navy) 0%, var(--brand-blue) 55%, var(--brand-accent) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {industry}
      </span>
      </div>
    </div>
  );
};

export function TrustedBy() {
  return (
    <section className="py-14 md:py-20 border-y border-black/[0.06] bg-[var(--surface-soft)]/40">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <p className="text-center text-[12px] tracking-[0.18em] uppercase text-[var(--text-muted)] mb-12">
          Trusted by 100+ businesses worldwide
        </p>
        <div className="flex flex-col gap-12">
          <LogoLoop
            logos={logoItems}
            speed={40}
            direction="left"
            gap={80}
            fadeOut
            pauseOnHover
            renderItem={renderBrand}
            ariaLabel="Trusted by"
          />
          <LogoLoop
            logos={logoItemsRow2}
            speed={40}
            direction="right"
            gap={80}
            fadeOut
            pauseOnHover
            renderItem={renderBrand}
            ariaLabel="Trusted by (reverse)"
          />
        </div>
      </div>
    </section>
  );
}
