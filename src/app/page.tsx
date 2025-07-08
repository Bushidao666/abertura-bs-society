import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import VSLSection from "@/components/Sections/VSLSection";
import PatternSection from "@/components/Sections/PatternSection";
import GameRuleSection from "@/components/Sections/GameRuleSection";
import OfferSection from "@/components/Sections/OfferSection";
import TimingSection from "@/components/Sections/TimingSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <VSLSection />
      <PatternSection />
      <GameRuleSection />
      <OfferSection />
      <TimingSection />
      <Footer />
    </main>
  );
} 