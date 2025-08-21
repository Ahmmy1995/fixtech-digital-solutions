import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Link to="/">
              <img
                src="/brand/logo_new.png"
                alt="Fixtech Services logo"
                className="h-32 w-auto"
              />
            </Link>
            <span className="sr-only">Fixtech Services</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm font-medium">
            Reliable IT onsite services, deployments, and managed support for
            growing businesses.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="font-medium hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="font-medium hover:text-foreground"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="font-medium hover:text-foreground">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="text-sm text-muted-foreground font-medium">
            Email:{" "}
            <Link
              to="mailto:support@fixtech.services"
              className="text-primary hover:underline"
            >
              support@fixtech.services
            </Link>
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            Hours:{" "}
            <span className="text-sm text-blue-500">Mon–Fri, 9:00–18:00</span>
          </p>
          <a>
            <p className="text-sm text-muted-foreground font-medium">
              Contact:{" "}
              <Link
                to="tel:+393481700672"
                className="text-primary hover:underline"
              >
                +39 348 1700 672
              </Link>
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
