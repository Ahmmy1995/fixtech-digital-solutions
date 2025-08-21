import SEO from "@/components/site/SEO";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About Fixtech Services — Your Onsite IT Partner"
        description="We deliver dependable onsite IT services with experienced engineers and clear communication."
        canonicalPath="/about"
      />
      <Header />
      <main className="container py-16 space-y-6">
        <h1 className="text-4xl font-bold">About Fixtech Services</h1>
        <p className="text-lg text-muted-foreground max-w-prose">
          Fixtech Services is built by field engineers and project managers who
          understand the realities of onsite work. We support nationwide
          rollouts, reactive break/fix, and ongoing operations for retail,
          hospitality, and corporate environments.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* first card */}
          <div
            className="rounded-lg border p-6 shadow shadow-red-900 transition duration-300 ease-in-out 
                hover:shadow-lime-950 hover:scale-105"
          >
            <h3 className="font-semibold">Coverage</h3>
            <p className="text-sm text-muted-foreground">
              Multi-city coverage with vetted technicians and flexible
              scheduling.
            </p>
          </div>
          {/* second card */}
          <div
            className="rounded-lg border p-6 shadow shadow-cyan-900 transition duration-300 ease-in-out 
                hover:shadow-sky-900 hover:scale-105"
          >
            <h3 className="font-semibold">Quality</h3>
            <p className="text-sm text-muted-foreground">
              Standardized checklists, signoffs, and photo documentation.
            </p>
          </div>
          {/* third card */}
          <div
            className="rounded-lg border p-6 shadow shadow-fuchsia-900 transition duration-300 ease-in-out 
                hover:shadow-orange-900 hover:scale-105"
          >
            <h3 className="font-semibold">Communication</h3>
            <p className="text-sm text-muted-foreground">
              Clear updates before, during, and after every task—no surprises.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
