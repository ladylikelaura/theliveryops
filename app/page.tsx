import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetSection from "@/components/MeetSection";
import ProblemSection from "@/components/ProblemSection";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import ComparisonGrid from "@/components/ComparisonGrid";
import FeatureTable from "@/components/FeatureTable";
import StickyFeatures from "@/components/StickyFeatures";
import DeliveryTimeline from "@/components/DeliveryTimeline";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero />
        <MeetSection />
        <ProblemSection />
        <HorizontalCarousel />
        <ComparisonGrid />
        <FeatureTable />
        <StickyFeatures />
        <DeliveryTimeline />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
