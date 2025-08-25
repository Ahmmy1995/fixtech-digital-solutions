import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        {/* first column in footer */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Link to="/">
              <img
                src="/brand/new_logo.png"
                alt="Fixtech Services logo"
                className="h-20 w-auto"
              />
            </Link>
            <span className="sr-only">Fixtech Services</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm font-medium">
            Reliable IT onsite services, deployments, and managed support for
            growing businesses.
          </p>
        </div>

        {/* second columm */}
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
        {/* Third column */}
        <div>
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="text-sm text-muted-foreground font-medium">
            Email:{" "}
            <Link
              to="mailto:info@fixtech.services"
              className="text-primary hover:underline"
            >
              info@fixtech.services
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
          {/* social icons inside and below third column content */}
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
      </div>

      {/* all rights reserver horizontal bar below */}
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fixtech Services. All rights reserved.
      </div>
    </footer>
  );
}
