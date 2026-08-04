import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIsJBI from '../components/WhatIsJBI';
import Personas from '../components/Personas';
import EcosystemGrid from '../components/EcosystemGrid';
import AIAssistantShowcase from '../components/AIAssistantShowcase';
import KnowledgeHubSection from '../components/KnowledgeHubSection';
import BusinessToolkitSection from '../components/BusinessToolkitSection';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="bg-brand-surface dark:bg-brand-dark-bg min-h-screen text-slate-800 dark:text-slate-100 font-sans selection:bg-brand-primary-500 selection:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <WhatIsJBI />
        <Personas />
        <EcosystemGrid />
        <AIAssistantShowcase />
        <KnowledgeHubSection />
        <BusinessToolkitSection />
        <Statistics />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
