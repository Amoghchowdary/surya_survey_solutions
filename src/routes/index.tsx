import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Crosshair,
  DraftingCompass,
  Gauge,
  Map,
  Plane,
  Ruler,
  Satellite,
  ScanLine,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientLogoMarquee, CtaBand, ProjectCard, SectionHeading, Stats } from "@/components/site-components";
import { EquipmentCarousels } from "@/components/equipment-carousels";
import { images, projects, services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surya Survey Solutions | Land & Civil Surveying Services India" },
      { name: "description", content: "Surya Survey Solutions provides land and civil engineering surveying services across India, including topographical, Total Station, DGPS/GNSS, drone, boundary, construction layout, as-built and infrastructure surveys." },
      { property: "og:title", content: "Surya Survey Solutions | Land & Civil Surveying Services" },
      { property: "og:description", content: "Professional land, topographical, Total Station, DGPS/GNSS, drone and construction surveying for civil engineering and infrastructure projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.suryasurveysolutions.in/" },
      { property: "og:image", content: "https://www.suryasurveysolutions.in/images/survey-hero-1920.webp" },
      { property: "og:image:alt", content: "Surya Survey Solutions civil engineering surveying fieldwork" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.suryasurveysolutions.in/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://www.suryasurveysolutions.in/#organization",
        name: "Surya Survey Solutions",
        url: "https://www.suryasurveysolutions.in/",
        logo: "https://www.suryasurveysolutions.in/images/surya-logo-mark.png",
        description: "Land and civil engineering surveying services including topographical, Total Station, DGPS/GNSS, drone, boundary, construction layout, as-built and infrastructure surveys.",
        telephone: "7036892959",
        email: "suryamovva@gmail.com",
        contactPoint: { "@type": "ContactPoint", telephone: "+91-7036892959", email: "suryamovva@gmail.com", contactType: "customer service", availableLanguage: ["English"] },
        foundingDate: "2019",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 25 },
        areaServed: { "@type": "Country", name: "India" },
        knowsAbout: ["Land Surveying", "Topographical Survey", "Total Station Survey", "DGPS Survey", "GNSS Survey", "Drone Surveying", "Construction Layout", "Boundary Survey", "As-Built Survey", "Road and Infrastructure Survey"],
      }),
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://www.suryasurveysolutions.in/#website",
            url: "https://www.suryasurveysolutions.in/",
            name: "Surya Survey Solutions",
            publisher: { "@id": "https://www.suryasurveysolutions.in/#organization" }
          },
          {
            "@type": "ItemList",
            name: "Surveying Services",
            itemListElement: [
              "Topographical Survey", "Total Station Survey", "DGPS / GNSS Survey", "Boundary & Demarcation",
              "Construction Layout", "Road & Infrastructure Survey", "As-Built Survey", "Contour & Level Survey", "Drone Surveying"
            ].map((name, index) => ({ "@type": "ListItem", position: index + 1, name }))
          }
        ]
      }),
    }],
  }),
  component: HomePage,
});

const icons: LucideIcon[] = [Map, Crosshair, Satellite, ScanLine, DraftingCompass, Ruler, Target, Gauge, Plane];
const process = [
  "Understand Project Requirements",
  "Site Inspection & Reconnaissance",
  "Control Points & Benchmark Establishment",
  "Field Survey & Data Collection",
  "Data Processing & Engineering Drawings",
  "Final Survey Deliverables",
];
const industries = ["Buildings & Construction", "Roads & Highways", "Residential Layouts", "Commercial Development", "Industrial Projects", "Infrastructure", "Land Development", "Utilities / Alignment"];
const heroBenefits = [
  [Crosshair, "High Accuracy", "Reliable survey data"],
  [Users, "Experienced Team", "Skilled field execution"],
  [Wrench, "Modern Equipment", "Project-fit technology"],
  [ShieldCheck, "On-Time Delivery", "Dependable project support"],
] as const;

function HomePage() {
  const base = import.meta.env.BASE_URL;
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <picture className="home-hero-picture" aria-hidden="true">
          <source media="(max-width: 767px)" srcSet={`${base}images/survey-hero-mobile-v12.webp`} type="image/webp" />
          <source media="(max-width: 1199px)" srcSet={`${base}images/survey-hero-tablet.webp`} type="image/webp" />
          <source
            srcSet={`${base}images/survey-hero-1920.webp 1920w, ${base}images/survey-hero-2560.webp 2560w, ${base}images/survey-hero-4k.webp 3840w, ${base}images/survey-hero-8k.webp 7680w`}
            sizes="100vw"
            type="image/webp"
          />
          <img src={`${base}images/survey-hero-4k.webp`} alt="" width={3840} height={2160} fetchPriority="high" className="home-hero-media" />
        </picture>
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="home-hero-bottom-shade" aria-hidden="true" />

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-hero-eyebrow">Land&nbsp;&nbsp;|&nbsp;&nbsp;Construction&nbsp;&nbsp;|&nbsp;&nbsp;Infrastructure</p>
            <h1 id="home-hero-title" className="home-hero-title">
              <span className="home-hero-title-strong">Surveying</span><br />
              <span className="home-hero-title-light">For a stronger</span><br />
              <span className="home-hero-title-accent">Tomorrow</span>
            </h1>
            <p className="home-hero-description">Land and civil engineering surveying with accurate field data for construction, infrastructure and development projects across India.</p>
            <div className="home-hero-actions">
              <Button asChild size="lg" className="home-hero-primary"><a href={`${base}#services`}>Our Services <ArrowRight /></a></Button>
              <Button asChild variant="inverse" size="lg" className="home-hero-secondary"><Link to="/projects">View Projects</Link></Button>
            </div>
          </div>

          <div className="home-hero-mobile-stage" aria-hidden="true">
            <img src={`${base}images/survey-hero-mobile-stage.webp`} alt="" width={1600} height={2000} />
          </div>

          <div className="home-hero-benefits" aria-label="Surya Survey Solutions strengths">
            {heroBenefits.map(([Icon, title, text]) => (
              <div key={title} className="home-hero-benefit">
                <span className="home-hero-benefit-icon"><Icon strokeWidth={1.75} /></span>
                <span><strong>{title}</strong><small>{text}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-stats"><div className="page-wrap py-8"><Stats /></div></section>
      <ClientLogoMarquee />

      <section className="section-pad bg-background">
        <div className="page-wrap home-two-col grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About the company" title="Engineering Begins With Accurate Measurement." />
            <p className="mt-6 leading-7 text-muted-foreground">Surya Survey Solutions provides professional civil-engineering surveying services that help clients understand, plan, position and execute projects with dependable field information.</p>
            <ul className="home-about-list mt-7 grid gap-3 sm:grid-cols-2">
              {["Accurate field measurements", "Reliable survey data", "Engineering-oriented execution", "Modern surveying methods", "Site-specific solutions"].map(x => <li key={x} className="flex items-center gap-3 text-sm font-semibold"><span className="flex size-6 items-center justify-center bg-emerald-500 text-white"><Check className="size-4" /></span>{x}</li>)}
            </ul>
            <Button asChild className="mt-8 bg-[#071d2f] text-white hover:bg-[#0b2d48]" size="lg"><Link to="/about">About Surya Survey Solutions <ArrowRight /></Link></Button>
          </div>
          <div className="relative overflow-hidden bg-[#071d2f]">
            <video
              className="aspect-[4/3] w-full object-cover"
              src={`${base}videos/drone-surveying-home-v32.mp4`}
              poster={`${base}videos/drone-surveying-home-v32.jpg`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Drone surveying field operations by Surya Survey Solutions"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-pad scroll-mt-28 bg-surface">
        <div className="page-wrap">
          <SectionHeading eyebrow="Technical services" title="Our Surveying Capabilities" text="Land and civil engineering survey services for planning, construction and verification, including topographical, Total Station, DGPS/GNSS, drone, boundary, layout, as-built and infrastructure surveying." />
          <div className="services-grid mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, desc], i) => { const Icon: LucideIcon = icons[i] ?? Map; return <article key={name} className="group bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><Icon className="size-7 text-emerald-600" strokeWidth={1.6} /><h3 className="mt-2 text-lg font-bold">{name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p></article>; })}
          </div>
          <div className="mt-16 border-t border-border pt-12">
            <SectionHeading eyebrow="Equipment gallery" title="Equipment Behind the Survey" text="Three continuously rotating equipment galleries from real field operations." />
            <EquipmentCarousels className="mt-10" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#04111d] text-white">
        <div className="page-wrap">
          <SectionHeading eyebrow="Field to final output" title="From Ground Measurement to Engineering Data" light />
          <div className="process-grid relative mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
            {process.map((x, i) => <div key={x} className="relative"><span className="relative z-10 flex size-12 items-center justify-center border border-emerald-400/50 bg-[#04111d] text-sm font-extrabold text-emerald-400">0{i + 1}</span><h3 className="mt-5 text-sm font-bold leading-6">{x}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="page-wrap technology-grid grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="overflow-hidden"><img src={images.equipmentImage} alt="Total Station, GNSS receiver and auto level used for civil surveying" width={1408} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]" /></div>
          <div>
            <SectionHeading eyebrow="Technology & equipment" title="Precision Powered by Modern Surveying Technology" />
            <p className="mt-6 leading-7 text-muted-foreground">Survey methodology and equipment are selected to suit each site and the accuracy appropriate to project requirements.</p>
            <div className="technology-tags mt-7 grid grid-cols-2 gap-3">{["Total Station", "DGPS / GNSS", "Auto Level", "CAD Data Processing"].map(x => <div key={x} className="border-l-2 border-emerald-500 bg-surface p-4 text-sm font-bold">{x}<span className="mt-1 block text-xs font-normal text-muted-foreground">Project-specific use</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="page-wrap">
          <SectionHeading eyebrow="Project sectors" title="Surveying Across Civil Engineering Projects" />
          <div className="industries-grid mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-4">{industries.map((x, i) => <div key={x} className="bg-background p-6 transition-colors hover:bg-emerald-50"><h3 className="mt-7 font-bold">{x}</h3></div>)}</div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="page-wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Featured projects" title="Surveying in the Field" text="Complete project evidence from client-supplied field photographs and videos across real civil engineering sites." /><Button asChild variant="outline"><Link to="/projects">View all projects <ArrowRight /></Link></Button></div>
          <div className="featured-projects-grid mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{projects.map(p => <ProjectCard key={p.id} project={p} />)}</div>
        </div>
      </section>

      <section id="why-us" className="section-pad scroll-mt-28 bg-[#061622] text-white">
        <div className="page-wrap">
          <SectionHeading eyebrow="Why Surya Survey Solutions" title="Accuracy You Can Build On." light />
          <div className="why-grid mt-10 grid gap-px bg-white/10 md:grid-cols-5">{["Precision-Focused Surveying", "Experienced Field Execution", "Modern Survey Methods", "Reliable Engineering Data", "On-Time Project Support"].map((x, i) => <div key={x} className="bg-[#071b29] p-6 transition-colors hover:bg-[#0b2638]"><h3 className="mt-10 font-bold leading-6">{x}</h3></div>)}</div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
