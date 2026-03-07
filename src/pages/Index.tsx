import { useState } from "react";

import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import GlowCursor from "@/components/GlowCursor";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemeSection from "@/components/ThemeSection";
import TimelineSection from "@/components/TimelineSection";
import DomainsSection from "@/components/DomainsSection";
import TeamSection from "@/components/TeamSection";
import PrizesSection from "@/components/PrizesSection";
import JudgingSection from "@/components/JudgingSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import OurTeamSection from "@/components/OurTeamSection";

import Footer from "@/components/Footer";

const Index = () => {

  const [introComplete, setIntroComplete] = useState(false);

  return (

    <div className="relative w-full min-h-screen overflow-x-hidden">

      {/* Custom Cursor */}
      <GlowCursor />

      {/* Intro Screen */}
      {!introComplete && (
        <IntroScreen onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main Website */}
      {introComplete && (

        <div className="relative w-full">

          {/* Background Effects */}
          <ParticleBackground />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="relative w-full flex flex-col">

            <HeroSection />

            <AboutSection />

            <ThemeSection />

            <TimelineSection />

            <DomainsSection />

            <TeamSection />

            <PrizesSection />

            <JudgingSection />

            <OurTeamSection />

            <RulesSection />

            <FAQSection />

            <ContactSection />

          </main>

          {/* Footer */}
          <Footer />

        </div>

      )}

    </div>

  );

};

export default Index;