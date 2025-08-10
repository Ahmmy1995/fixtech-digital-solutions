import SEO from "@/components/site/SEO";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Testimonials from "@/components/sections/Testimonials";

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Client Reviews — Fixtech Services" description="Hear from teams who trust Fixtech for onsite IT projects and ongoing support." canonicalPath="/reviews" />
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <h1 className="text-4xl font-bold">Reviews</h1>
          <p className="mt-2 text-muted-foreground max-w-prose">We value long-term partnerships built on quality and communication.</p>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
