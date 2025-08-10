import SEO from "@/components/site/SEO";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ServicesPreview from "@/components/sections/ServicesPreview";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="IT Onsite Services — Fixtech Services" description="Deployments, networking, cabling, break/fix, and workplace services tailored to your operations." canonicalPath="/services" />
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-2 text-muted-foreground max-w-prose">We provide comprehensive onsite IT coverage—project-based or ongoing—following your runbooks or ours.</p>
        </section>
        <ServicesPreview />
      </main>
      <Footer />
    </div>
  );
}
