import SEO from "@/components/site/SEO";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Fixtech Services"
        description="Tell us about your project or support need and we’ll respond promptly."
        canonicalPath="/contact"
      />
      <Header />
      <main className="container py-16 grid lg:grid-cols-2 gap-12">
        {/* contact us left side */}
        <div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">
            We’ll review your request and connect you with the right specialist.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
        {/* right side of contact form */}
        <aside className="lg:pl-6">
          <div className="rounded-lg border p-6 bg-secondary/30">
            <h3 className="font-semibold">Prefer email?</h3>
            <p className="text-sm text-muted-foreground">
              Reach us directly at{" "}
              <a href="mailto:info@fixtech.services" className="underline">
                info@fixtech.services
              </a>
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Response within 1 business day.
            </div>
            {/* social icons */}

            <div className="flex gap-3 mt-4">
              {/* LinkedIn */}
              <Link
                to="https://www.linkedin.com/company/fixtech_services"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0A66C2] hover:bg-white border border-[#0A66C2] transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white hover:text-[#0A66C2]" />
              </Link>
              {/* Instagram */}
              <Link
                to="https://www.instagram.com/fixtech.services/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:from-white hover:via-white hover:to-white border transition-colors"
              >
                <Instagram className="h-5 w-5 text-white hover:text-pink-500" />
              </Link>
              {/* Facebook */}
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1877F2] hover:bg-white border border-[#1877F2] transition-colors"
              >
                <Facebook className="h-5 w-5 text-white hover:text-[#1877F2]" />
              </Link>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
