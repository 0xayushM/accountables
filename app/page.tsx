import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MetricsStrip } from "./components/MetricsStrip";
import { IntegrationsMarquee } from "./components/IntegrationsMarquee";
import { ProblemSolution } from "./components/ProblemSolution";
import { AiTeaser } from "./components/AiTeaser";
import { ServicesPreview } from "./components/ServicesPreview";
import { Differentiators } from "./components/Differentiators";
import { Testimonials } from "./components/Testimonials";
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
        <MetricsStrip />
        <IntegrationsMarquee />
        <ProblemSolution />
        <AiTeaser />
        <ServicesPreview />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
