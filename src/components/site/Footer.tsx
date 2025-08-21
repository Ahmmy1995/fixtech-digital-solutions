export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/brand/logo_new.png"
              alt="Fixtech Services logo"
              className="h-32 w-auto"
            />
            <span className="sr-only">Fixtech Services</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Reliable IT onsite services, deployments, and managed support for
            growing businesses.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/about" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-foreground">
                Reviews
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="text-sm text-muted-foreground">
            Email:{" "}
            <a
              href="mailto:support@fixtech.services"
              className="text-primary hover:underline"
            >
              support@fixtech.services
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            Hours: Mon–Fri, 9:00–18:00
          </p>
          <a>
            <p className="text-sm text-muted-foreground">
              Contact:{" "}
              <a
                href="tel:+393481700672"
                className="text-primary hover:underline"
              >
                +39 348 1700 672
              </a>
            </p>
          </a>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fixtech Services. All rights reserved.
      </div>
    </footer>
  );
}
