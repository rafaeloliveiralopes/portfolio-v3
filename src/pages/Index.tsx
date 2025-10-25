import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";
import React, { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import { useAnalytics } from "@/hooks/useAnalytics";

// Lazy-load non-critical sections to improve initial bundle
const AboutSection = lazy(() =>
  import("@/components/AboutSection").then((m) => ({ default: m.AboutSection }))
);
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

const Index = () => {
  const { t } = useTranslation(["seo", "common"]);
  useAnalytics();
  const title = t("seo.title");
  const description = t("seo.description");

  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className="min-h-screen bg-mesh">
        <Navigation />
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          {/* <TestimonialsSection /> */}
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
