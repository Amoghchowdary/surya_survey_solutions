import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clientLogos, stats, type Project } from "@/lib/site-data";
import { blockMediaContextMenu, blockMediaDrag } from "@/components/media-protection";

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="section-heading max-w-3xl"><div className={`mb-4 flex items-center gap-3 text-xs font-extrabold uppercase ${light ? "text-accent" : "text-primary"}`}><span className="h-px w-8 bg-accent"/>{eyebrow}</div><h2 className={`section-heading-title text-3xl font-extrabold leading-tight md:text-5xl ${light ? "text-hero-foreground" : "text-foreground"}`}>{title}</h2>{text && <p className={`section-heading-text mt-5 max-w-2xl text-base leading-7 ${light ? "text-hero-foreground/70" : "text-muted-foreground"}`}>{text}</p>}</div>
}

export function Stats({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`stats-grid grid grid-cols-2 border-y border-border ${compact ? "lg:grid-cols-5" : "md:grid-cols-5"}`}>
      {stats.map((s) => (
        <div key={s.label} className="stats-cell border-r border-border px-5 py-8 md:px-7 lg:px-8">
          <div className="text-3xl font-extrabold text-primary md:text-4xl lg:text-5xl">{s.value}</div>
          <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.02em] text-muted-foreground lg:text-xs">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ClientLogoMarquee() {
  const base = import.meta.env.BASE_URL;

  const renderLogoCard = (logo: (typeof clientLogos)[number], copy: number) => {
    const href = logo.projectSlug
      ? `${base}projects#project-${logo.projectSlug}`
      : `${base}projects#projects`;

    return (
      <a
        href={href}
        className="client-logo-card client-logo-link"
        data-client-logo={logo.name === "Mahitha Projects" ? "mahitha-projects" : undefined}
        key={`${copy}-${logo.name}`}
        tabIndex={copy === 1 ? -1 : undefined}
        aria-label={copy === 0 ? `View projects for ${logo.name}` : undefined}
      >
        <img
          src={logo.src}
          alt={copy === 0 ? logo.alt : ""}
          width={240}
          height={110}
          loading={copy === 0 ? "eager" : "lazy"}
        />
        <span className="client-logo-name">{logo.name}</span>
      </a>
    );
  };

  return (
    <section className="client-logo-section" aria-labelledby="client-logo-heading">
      <div className="page-wrap client-logo-heading-wrap">
        <div>
          <p className="client-logo-eyebrow">Project Experience</p>
          <h2 id="client-logo-heading" className="client-logo-title">Previously Worked With</h2>
        </div>
        <p className="client-logo-note">Select a company to open available project evidence and field photographs.</p>
      </div>

      <div className="client-logo-marquee" role="region" aria-label="Continuously scrolling previously worked with company logos">
        <div className="client-logo-track">
          {[0, 1].map((copy) => (
            <div className="client-logo-group" aria-hidden={copy === 1} key={copy}>
              {clientLogos.map((logo) => renderLogoCard(logo, copy))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, onOpen }: { project: Project; onOpen?: (p: Project) => void }) {
  const content = (
    <>
      <div
        className="protected-media relative aspect-[4/3] overflow-hidden bg-muted"
        onContextMenu={blockMediaContextMenu}
      >
        <img
          src={project.image}
          alt={`${project.title} client-supplied civil survey fieldwork`}
          width={1600}
          height={1200}
          loading="lazy"
          draggable={false}
          onContextMenu={blockMediaContextMenu}
          onDragStart={blockMediaDrag}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 z-20 bg-hero px-3 py-1 text-[10px] font-extrabold text-hero-foreground">{project.status}</span>
      </div>
      <div className="border border-t-0 border-border bg-card p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase text-primary">{project.type}</span>
          <ArrowRight className="size-4 shrink-0 text-accent"/>
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        {project.client && <p className="mt-2 text-sm font-semibold text-foreground">{project.client}</p>}
        <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0"/>
          <span>{project.location}</span>
        </p>
      </div>
    </>
  );

  return onOpen
    ? <button type="button" onClick={() => onOpen(project)} className="project-card group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{content}</button>
    : (
      <Link
        to="/projects"
        hash={`project-${project.slug}`}
        className="project-card group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View ${project.title}`}
      >
        {content}
      </Link>
    );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero relative overflow-hidden bg-hero pb-20 pt-36 text-hero-foreground md:pb-28 md:pt-44"><div className="engineering-grid absolute inset-0 opacity-[0.07]"/><div className="page-wrap page-hero-inner relative"><div className="page-hero-eyebrow text-xs font-extrabold uppercase text-accent">{eyebrow}</div><h1 className="page-hero-title mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1><p className="page-hero-text mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/70">{text}</p></div></section>
}

export function CtaBand() {
  return <section className="cta-band bg-accent py-14"><div className="page-wrap cta-band-inner flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><h2 className="cta-band-title text-3xl font-extrabold text-accent-foreground">Planning a Civil Engineering Project?</h2><p className="cta-band-text mt-2 text-accent-foreground/75">Talk to our surveying team about your site, project scope and surveying requirements.</p></div><Button asChild size="lg"><Link to="/contact">Request a survey <ArrowRight/></Link></Button></div></section>
}