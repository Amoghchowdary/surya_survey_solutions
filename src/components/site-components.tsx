import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats, type Project } from "@/lib/site-data";

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-3xl"><div className={`mb-4 flex items-center gap-3 text-xs font-extrabold uppercase ${light ? "text-accent" : "text-primary"}`}><span className="h-px w-8 bg-accent"/>{eyebrow}</div><h2 className={`text-3xl font-extrabold leading-tight md:text-5xl ${light ? "text-hero-foreground" : "text-foreground"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-hero-foreground/70" : "text-muted-foreground"}`}>{text}</p>}</div>
}

export function Stats({ compact = false }: { compact?: boolean }) {
  return <div className={`grid grid-cols-2 border-y border-border ${compact ? "lg:grid-cols-4" : "md:grid-cols-4"}`}>{stats.map((s) => <div key={s.label} className="border-r border-border px-5 py-8 last:border-r-0 md:px-8"><div className="text-3xl font-extrabold text-primary md:text-5xl">{s.value}</div><div className="mt-2 text-xs font-bold uppercase text-muted-foreground">{s.label}</div></div>)}</div>
}

export function ProjectCard({ project, onOpen }: { project: Project; onOpen?: (p: Project) => void }) {
  const content = <><div className="relative aspect-[4/3] overflow-hidden bg-muted"><img src={project.image} alt={`Replaceable placeholder for ${project.title} civil survey fieldwork`} width={1408} height={1008} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute left-4 top-4 bg-hero px-3 py-1 text-[10px] font-extrabold text-hero-foreground">{project.status}</span><span className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 text-[10px] font-bold text-foreground">PLACEHOLDER IMAGE</span></div><div className="border border-t-0 border-border bg-card p-5"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold uppercase text-primary">{project.type} Survey</span><ArrowRight className="size-4 text-accent"/></div><h3 className="text-xl font-bold">{project.title}</h3><p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4"/>{project.location}</p></div></>;
  return onOpen ? <button type="button" onClick={() => onOpen(project)} className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{content}</button> : <div className="group">{content}</div>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="relative overflow-hidden bg-hero pb-20 pt-36 text-hero-foreground md:pb-28 md:pt-44"><div className="engineering-grid absolute inset-0 opacity-[0.07]"/><div className="page-wrap relative"><div className="text-xs font-extrabold uppercase text-accent">{eyebrow}</div><h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/70">{text}</p></div></section>
}

export function CtaBand() {
  return <section className="bg-accent py-14"><div className="page-wrap flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><h2 className="text-3xl font-extrabold text-accent-foreground">Planning a Civil Engineering Project?</h2><p className="mt-2 text-accent-foreground/75">Talk to our surveying team about your site, project scope and surveying requirements.</p></div><Button asChild size="lg"><Link to="/contact">Request a survey <ArrowRight/></Link></Button></div></section>
}