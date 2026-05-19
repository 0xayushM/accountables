"use client";

import type { Key } from "react";
import LogoLoop, { type LogoItem } from "./LogoLoop";

type Brand = { file: string; name: string; industry?: string };

const brands: Brand[] = [
  { file: "A & Co Accountants Ltd.png", name: "A & Co Accountants", industry: "Accounting Firm" },
  { file: "AL Kaman Global Company Limited.png", name: "AL Kaman Global" },
  { file: "Aberrant Gene Films Ltd.png", name: "Aberrant Gene Films", industry: "Film Production" },
  { file: "actor door studio.png", name: "Actors Door Studio", industry: "Acting School" },
  { file: "Agico Ltd.png", name: "Agico" },
  { file: "Alexandra Boutique (Lexi).png", name: "Alexandra Boutique", industry: "Retail / Boutique" },
  { file: "Aqwire Pte Ltd.png", name: "Aqwire", industry: "Payment Gateway" },
  { file: "Baseify LLC.png", name: "Baseify", industry: "Tech Product" },
  { file: "battle golf.png", name: "Battle Royale Golf", industry: "Ecommerce" },
  { file: "Careerhigher Ltd.png", name: "Careerhigher", industry: "Tech / Service" },
  { file: "Chargewheel.png", name: "Chargewheel", industry: "EV Charging" },
  { file: "Earcandy Enterainment Ltd.png", name: "Earcandy Entertainment", industry: "Entertainment" },
  { file: "Faad Network Pvt Ltd.png", name: "Faad Network", industry: "Venture Capital" },
  { file: "Fifth Start Logo.png", name: "Fifth Start", industry: "Ecommerce" },
  { file: "flutterwave.png", name: "Flutterwave", industry: "Payment Gateway" },
  { file: "Giomani Designs Ltd.png", name: "Giomani Designs", industry: "Retail / Manufacturing" },
  { file: "Inclusion Scotland.png", name: "Inclusion Scotland", industry: "Charity" },
  { file: "Maker&Son Private Limited.png", name: "Maker & Son", industry: "Ecommerce" },
  { file: "Myhealth Specialist Ltd.png", name: "Myhealth Specialist", industry: "Tech Product" },
  { file: "Nexus Consulting Firm Ltd.png", name: "Nexus Consulting", industry: "Law Firm" },
  { file: "Nutkase Accessories Limited.png", name: "Nutkase", industry: "Ecommerce" },
  { file: "Once upon a Whisky Ltd.png", name: "Once Upon a Whisky", industry: "Service" },
  { file: "primitive-logo.png", name: "Primitive Company", industry: "Ecommerce" },
  { file: "ROUTE ONE LLC.png", name: "Route One", industry: "Fractional CFO" },
  { file: "Trevisan Social Media Marketing.png", name: "Trevisan", industry: "Digital Marketing" },
  { file: "Trollbeads Australia New Zealand Pty Ltd.png", name: "Trollbeads ANZ", industry: "Ecommerce / Retail" },
  { file: "Vistabee Limited.png", name: "Vistabee", industry: "Tech Product" },
  { file: "WOOTZWORK LABS PRIVATE LIMITED.png", name: "Wootzwork Labs", industry: "Manufacturing" },
  { file: "Ward Divecha Limited.png", name: "Ward Divecha", industry: "Audit Firm" },
  { file: "Wizz Accounting Ltd.png", name: "Wizz Accounting", industry: "Accounting Firm" },
  { file: "Your Airhost Ltd.png", name: "Your Airhost", industry: "Tech Product" },
  { file: "akay.png", name: "Akay" },
  { file: "at home baking.png", name: "At Home Baking" },
  { file: "beds co uk.png", name: "Beds.co.uk" },
  { file: "beekin.png", name: "Beekin" },
  { file: "dominoes.png", name: "Domino's" },
  { file: "dracup and patterson.png", name: "Dracup & Patterson" },
  { file: "ducis group.png", name: "Ducis Group" },
  { file: "halo security group.png", name: "Halo Security Group" },
  { file: "ikari.png", name: "Ikari" },
  { file: "postscriptum ventures.png", name: "Postscriptum Ventures" },
  { file: "tarini stoneworks.png", name: "Tarini Stoneworks" },
  { file: "purposesync.png", name: "Purposesync" },
  { file: "rainforest collective.png", name: "Rainforest Collective" },
  { file: "tapeking.png", name: "Tapeking" },
  { file: "west coast harley davidson.png", name: "West Coast Harley Davidson" },
  { file: "zugo bike.png", name: "Zugo Bike" },
  { file: "zugopet.png", name: "Zugopet" },
];

// Convert brand list to LogoLoop items, embedding the brand metadata in `title`
// so we can recover it inside renderItem.
const logoItems: LogoItem[] = brands.map((b) => ({
  src: `/logos/${b.file}`,
  alt: b.name,
  title: b.industry ?? "",
}));

const renderBrand = (item: LogoItem, key: Key) => {
  const src = "src" in item ? item.src : "";
  const alt = "alt" in item ? item.alt ?? "" : "";
  const industry = "title" in item ? item.title ?? "" : "";

  return (
    <div
      key={key}
      className="flex flex-col items-center justify-center gap-2"
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
      <span className="text-[10.5px] tracking-[0.06em] uppercase text-[var(--text-muted)] text-center leading-tight min-h-[14px] max-w-[160px]">
        {industry}
      </span>
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
            logos={logoItems}
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
