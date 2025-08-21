import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fixtech handled our 200-store POS refresh flawlessly. Tight timelines, zero downtime.",
    name: "Marco Angelo",
    company: "CEO, TechCorp",
    initials: "MA",
  },
  {
    quote:
      "Their engineers are dependable and communicative. Exactly what our field projects needed.",
    name: "Sarah Johnson",
    company: "Project Manager, MSP Partner",
    initials: "SJ",
  },
  {
    quote:
      "From cabling to Wi‑Fi tuning, they delivered results and solid documentation.",
    name: "David Francesco",
    company: "Director, Global Systems",
    initials: "DF",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-secondary/40 border-y">
      <div className="container">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold">What Clients Say</h2>
          <p className="text-muted-foreground mt-2">
            Real feedback from teams we support in the field.
          </p>
        </div>
        {/* whole grid system starts here */}
        <div className="grid gap-6  sm:grid-cols-2 md:grid-cols-3 ">
          {testimonials.map((t, i) => (
            //  card structure started here
            <blockquote
              key={i}
              className="rounded-lg border bg-background p-6 shadow-lg"
            >
              {/* stars for reviews */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* quote mentioned */}
              <p className="text-base mb-6">“{t.quote}”</p>

              {/* <footer className="mt-4 text-sm text-muted-foreground">
                — {t.name}, {t.company}
              </footer> */}
              {/* Footer with avatar and name, company */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.company}
                  </div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
