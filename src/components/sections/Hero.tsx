import hero from "@/assets/hero-fixtech.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="space-y-6 animate-enter">
          <p className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Trusted IT Onsite Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Fixtech Services — Onsite IT, Deployments & Managed Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            From multi-site rollouts to urgent break/fix support. We deliver reliable engineers, clear SLAs, and enterprise-grade results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" variant="hero" className="hover-scale">
              <Link to="/contact">Request a Technician</Link>
            </Button>
            <Button asChild size="lg" variant="subtle">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Abstract technology background for Fixtech Services" className="rounded-xl border shadow-elegant w-full object-cover" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ boxShadow: "var(--shadow-glow)" }} aria-hidden />
        </div>
      </div>
    </section>
  );
}
