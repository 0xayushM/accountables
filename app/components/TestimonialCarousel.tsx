"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  { quote: "They have thorough knowledge of all the processes and have constantly reminded me of various legal deadlines.", name: "Ari Ghosh", role: "Agile Coach and Delivery Consultant, Fidelity International", img: "/testimonials/ari-ghosh.png" },
  { quote: "The team are very attentive to the client's needs and demands. Solid work on this project.", name: "Dan Trznadel", role: "Chief Financial Officer, Verde Industrial Properties, Inc.", img: "/testimonials/dan-trznadel.png" },
  { quote: "Their experience and knowledge came in handy when I had to present to Shark Tank. I recommend the entire team at Accountables without a doubt.", name: "Juls Bindi", role: "Founder, ZuGoPet", img: "/testimonials/juls-bindi.png" },
  { quote: "They helped me with my annual VAT UK return. Good stuff. They got the job done quickly and were very responsive.", name: "Dimitar Tsonev", role: "Founder, Purrfect Video", img: "/testimonials/dimitar-tsonev.png" },
  { quote: "I would have no hesitation in recommending the team to work with new clients to provide a Best in Class solution.", name: "Deborah Walker", role: "Director, In The Black MGT Ltd", img: "/testimonials/deborah-walker.png" },
  { quote: "Instrumental in helping us procure timely funding, cost cutting, budgeting and maintaining the books of accounts.", name: "Raj Lakkaraju", role: "CEO & Founder, BEEKER", img: "/testimonials/raj-lakkaraju.png" },
  { quote: "Very professional and rigorous. I can't recommend enough.", name: "Pierre Guglielmi", role: "Co Founder & Director, WeeWash Ltd.", img: "/testimonials/pierre-gugilielmi.png" },
  { quote: "I am very happy with the work being performed now and would like to recommend them to my peers.", name: "Sheryl Ang", role: "CEO, Ikari Services Pte Ltd", img: "/testimonials/sheryi-ang.png" },
  { quote: "Semi-complex EU VAT Rules were understood almost instantly and later audit confirmed 100% correct treatment.", name: "Tim De Visser", role: "CEO & Founder, Van Chefs", img: "/testimonials/tim-de-visser.png" },
  { quote: "Has been very helpful. I am very happy about the service.", name: "Ruby He", role: "Financial Controller, Command Auto Group Pty Ltd.", img: "/testimonials/ruby-he.png" },
  { quote: "Phenomenal service, intelligent and professional – Accountables are epic.", name: "Nico Black", role: "CEO & Founder, iLeviathan", img: "/testimonials/nico-black.png" },
  { quote: "Excellent work, extremely helpful, available at short notice and gone above and beyond what was asked.", name: "Milena Cvijanovich", role: "Owner, Milena C Designs", img: "/testimonials/milena-cvijanovich.png" },
  { quote: "Fantastic & easy to work with. I will be hiring for ongoing tax work. Highly recommended.", name: "Lexi Mcneil", role: "Director, Alexandra", img: "/testimonials/lexi-mcneil.png" },
  { quote: "They completed the task exactly as expected and did so in a timely manner, with great communication along the way.", name: "Charlie Centa", role: "Owner, Rainforest Collective Ltd", img: "/testimonials/charlie-centa.png" },
  { quote: "A reliable business partner to our firm, showing over this time flexibility, expertise and ability to offer us solutions.", name: "Nadia Kozyreva", role: "COO, Bluegrove Capital Management Ltd", img: "/testimonials/nadia-kozyreva.png" },
  { quote: "Extremely knowledgeable, extremely patient and on top of every aspect of the project.", name: "Jayson Gibson", role: "Director, Phoenix Online Media", img: "/testimonials/jayson-gibson.png" },
  { quote: "I would have no hesitation in recommending Accountables.", name: "Melanie Goodman", role: "Owner, Trevisan", img: "/testimonials/melanie-goodman.png" },
  { quote: "In addition, they have provided excellent strategic business and tax advice. Highly recommended!!", name: "Leo Shortland", role: "Director, Nutkase Accessories Ltd", img: "/testimonials/leo-shortland.png" },
  { quote: "Accountables have been valuable members of our team. They are highly capable and have helped develop our financial systems.", name: "Chad McWhorter", role: "Wahrheit Ventures, United States", img: "/testimonials/chad-mcwhorter.png" },
  { quote: "Accountables have greatly assisted me in getting control of my business.", name: "Kym Lester", role: "Owner, Red Fashion Marketing (Australia)", img: "/testimonials/kym-lester.png" },
];

const PER_SLIDE = 2;
const TOTAL_SLIDES = Math.ceil(QUOTES.length / PER_SLIDE);
const INTERVAL = 5000;

function QuoteCard({ q }: { q: typeof QUOTES[0] }) {
  return (
    <div className="flex-1 rounded-xl p-6 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}>
      <div className="flex items-center gap-3">
        <img
          src={q.img}
          alt={q.name}
          className="h-11 w-11 rounded-full object-cover flex-shrink-0"
          style={{ border: "2px solid rgba(255,255,255,0.2)" }}
        />
        <div>
          <div className="text-[14px] font-semibold text-white leading-snug">{q.name}</div>
          <div className="text-[11px] text-white/50 leading-snug mt-0.5">{q.role}</div>
        </div>
      </div>
      <p className="text-[13.5px] leading-[1.65] text-white/80 flex-1">&ldquo;{q.quote}&rdquo;</p>
    </div>
  );
}

export function TestimonialCarousel() {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setSlide((prev) => (prev + 1) % TOTAL_SLIDES);
        setFading(false);
      }, 350);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const go = (i: number) => {
    if (i === slide) return;
    setFading(true);
    setTimeout(() => { setSlide(i); setFading(false); }, 350);
  };

  const pair = QUOTES.slice(slide * PER_SLIDE, slide * PER_SLIDE + PER_SLIDE);

  return (
    <div
      className="mt-12 md:mt-16 relative overflow-hidden rounded-2xl md:rounded-3xl p-8 md:p-12"
      style={{ background: "linear-gradient(135deg, var(--brand-navy) 0%, #14305f 60%, #1d4ed8 100%)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 60px, transparent 60px, transparent 120px)",
        }}
      />

      <div
        className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {pair.map((q) => <QuoteCard key={q.name} q={q} />)}
      </div>

      {/* Dot indicators */}
      <div className="relative flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === slide ? 20 : 6,
              height: 6,
              background: i === slide ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
