const testimonials = [
  {
    quote:
      "Fixtech handled our 200-store POS refresh flawlessly. Tight timelines, zero downtime.",
    name: "Retail Ops Lead",
    company: "National Retailer",
  },
  {
    quote:
      "Their engineers are dependable and communicative. Exactly what our field projects needed.",
    name: "Project Manager",
    company: "MSP Partner",
  },
  {
    quote:
      "From cabling to Wi‑Fi tuning, they delivered results and solid documentation.",
    name: "IT Director",
    company: "Hospitality Group",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-secondary/40 border-y">
      <div className="container">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold">What Clients Say</h2>
          <p className="text-muted-foreground mt-2">Real feedback from teams we support in the field.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-lg border bg-background p-6 shadow-sm">
              <p className="text-base">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">— {t.name}, {t.company}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
