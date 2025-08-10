import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Testimonials from "@/components/sections/Testimonials";
import SEO from "@/components/site/SEO";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="Fixtech Services — IT Onsite Support & Managed Services" description="Onsite IT services across deployments, networking, cabling, and break/fix. Request certified technicians with clear SLAs." />
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
