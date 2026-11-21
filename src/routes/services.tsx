import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Crosshair, DraftingCompass, Map, Plane, Ruler, Satellite, ScanLine, Target, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHeading } from "@/components/site-components";
import { EquipmentCarousels } from "@/components/equipment-carousels";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Land Surveying Services | Surya Survey Solutions India" },
      { name: "description", content: "Explore Surya Survey Solutions services: land and topographical surveying, Total Station, DGPS/GNSS, drone surveying, boundary demarcation, construction layout, as-built, contour and infrastructure surveys." },
      { property: "og:title", content: "Land & Civil Engineering Surveying Services | Surya Survey Solutions" },
      { property: "og:description", content: "Professional topographical, Total Station, DGPS/GNSS, drone, boundary, construction layout, as-built and infrastructure surveying services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.suryasurveysolutions.in/services" },
      { property: "og:image", content: "https://www.suryasurveysolutions.in/images/survey-equipment.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.suryasurveysolutions.in/services" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Surya Survey Solutions Surveying Services",
        url: "https://www.suryasurveysolutions.in/services",
        itemListElement: services.map(([name, description], index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@type": "Service", name, description, provider: { "@type": "Organization", name: "Surya Survey Solutions", url: "https://www.suryasurveysolutions.in/" }, areaServed: "India" },
        })),
      }),
    }],
  }),
  component: ServicesPage,
});

const icons: LucideIcon[] = [Map, Crosshair, Satellite, ScanLine, DraftingCompass, Ruler, Target, Ruler, Plane];

function ServicesPage() {
  return <>
    <PageHero eyebrow="Surveying services" title="Land & Civil Engineering Surveying Services" text="Surya Survey Solutions supports construction, land development and infrastructure projects with field measurement, engineering survey control and reliable site data." />
    <section className="section-pad bg-background"><div className="page-wrap">
      <SectionHeading eyebrow="Professional survey solutions" title="Surveying Services for Land, Construction & Infrastructure" text="Our capabilities cover site planning, construction positioning, geospatial control, verification and project documentation using project-appropriate survey methods and equipment." />
      <div className="services-grid mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map(([name, desc], i) => { const Icon = icons[i] ?? Map; return <article key={name} className="bg-background p-7"><Icon className="size-7 text-emerald-600" strokeWidth={1.6}/><div className="mt-7 text-xs font-bold text-emerald-600">{String(i+1).padStart(2,"0")}</div><h2 className="mt-2 text-xl font-bold">{name}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p></article>})}
      </div>
      <div className="mt-16 border-t border-border pt-12"><SectionHeading eyebrow="Survey equipment" title="Equipment Used in Our Surveying Work" text="Real equipment galleries from Surya Survey Solutions field operations, including Total Station and DGPS equipment."/><EquipmentCarousels className="mt-10"/></div>
      <div className="mt-12 flex flex-wrap gap-3"><Button asChild><Link to="/contact">Request a Survey <ArrowRight/></Link></Button><Button asChild variant="outline"><Link to="/projects">View Survey Projects</Link></Button></div>
    </div></section>
    <CtaBand/>
  </>;
}
