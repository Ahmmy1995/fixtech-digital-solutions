import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`New inquiry from ${name} (${company})`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}\nCompany: ${company}`
    );

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Opening your email client…",
        description: "If it doesn't open, write to info@fixtech.services.",
      });
      window.location.href = `mailto:info@fixtech.services?subject=${subject}&body=${body}`;
    }, 300);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Name</label>
          <Input name="name" required placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <Input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label className="text-sm">Company</label>
        <Input name="company" placeholder="Company name" />
      </div>
      <div>
        <label className="text-sm">Message</label>
        <Textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us about your project or support need"
        />
      </div>
      <Button type="submit" size="lg" variant="hero" disabled={loading}>
        {loading ? "Preparing…" : "Send Inquiry"}
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our response via email. No spam, ever.
      </p>
    </form>
  );
}
