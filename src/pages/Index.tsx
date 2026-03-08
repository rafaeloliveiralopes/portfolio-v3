import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SeoHead } from "@/components/SeoHead";
import { Suspense, lazy, useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useLocation } from "react-router-dom";

// Lazy-load non-critical sections to improve initial bundle
const ServicesSection = lazy(() =>
  import("@/components/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  }))
);
const PortfolioSection = lazy(() =>
  import("@/components/PortfolioSection").then((m) => ({
    default: m.PortfolioSection,
  }))
);
// const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() =>
  import("@/components/ContactSection").then((m) => ({
    default: m.ContactSection,
  }))
);
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);

interface IndexProps {
  locale: string;
}

const Index = ({ locale }: IndexProps) => {
  const location = useLocation();
  useAnalytics();

  // Handle scroll to section when coming from blog
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Wait for content to load, then scroll
      const timer = setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // Clear the state after scrolling to prevent re-scrolling on re-renders
        window.history.replaceState({}, document.title);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <>
      <SeoHead locale={locale} />
      <main className="min-h-screen bg-mesh">
        <Navigation />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="projects">
            <PortfolioSection />
          </div>
          {/* <TestimonialsSection /> */}
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
