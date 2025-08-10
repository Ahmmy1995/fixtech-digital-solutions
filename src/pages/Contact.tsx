import SEO from "@/components/site/SEO";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Contact Fixtech Services" description="Tell us about your project or support need and we’ll respond promptly." canonicalPath="/contact" />
      <Header />
      <main className="container py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">We’ll review your request and connect you with the right specialist.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        <aside className="lg:pl-6">
          <div className="rounded-lg border p-6 bg-secondary/30">
            <h3 className="font-semibold">Prefer email?</h3>
            <p className="text-sm text-muted-foreground">Reach us directly at <a href="mailto:hello@fixtech.services" className="underline">hello@fixtech.services</a></p>
            <div className="mt-4 text-sm text-muted-foreground">Response within 1 business day.</div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
