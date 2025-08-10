import { Server, Network, Cable, Headset, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Server,
    title: "Deployments & Rollouts",
    desc: "Imaging, staging, and onsite installation for POS, PCs, and peripherals at scale.",
  },
  {
    icon: Network,
    title: "Networking & Wireless",
    desc: "Switches, routers, access points, site surveys, and performance optimization.",
  },
  {
    icon: Cable,
    title: "Cabling & Rack",
    desc: "Structured cabling, terminations, rack builds, patching and labeling with reports.",
  },
  {
    icon: Headset,
    title: "Break/Fix & Helpdesk",
    desc: "Rapid response technicians, hardware replacement, user support and diagnostics.",
  },
  {
    icon: Laptop,
    title: "Workplace & Endpoints",
    desc: "Device provisioning, OS migrations, MDM enrollments and asset lifecycle.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold">Our Core Services</h2>
          <p className="text-muted-foreground mt-2">End-to-end onsite IT services designed for reliability and scale.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="transition-transform hover:translate-y-[-2px]">
              <CardHeader>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon />
                </div>
                <CardTitle className="mt-3">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
