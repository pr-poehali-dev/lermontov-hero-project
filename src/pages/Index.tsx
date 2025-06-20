import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-literary-light via-white to-classical-cream">
      <Navigation />
      <Hero />
      <QuoteSection />
    </div>
  );
};

export default Index;
