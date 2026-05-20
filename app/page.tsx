import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { VirtualFinanceDept } from "./components/VirtualFinanceDept";
import { FinanceOrganized } from "./components/FinanceOrganized";
import { TrustedBy } from "./components/TrustedBy";
import { CaseStudiesPreview } from "./components/CaseStudiesPreview";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <VirtualFinanceDept />
        <FinanceOrganized />
        <CaseStudiesPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
