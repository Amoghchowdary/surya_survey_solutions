import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Building2, CalendarDays, MapPin, Wrench } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHero, ProjectCard, Stats } from "@/components/site-components";
import { projects, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Surya Survey Solutions" },
      { name: "description", content: "Explore client-supplied civil engineering survey fieldwork from Amaravati, Bheemaa, Greater Infra and Yashoda project sites." },
      { property: "og:title", content: "Survey Project Gallery | Surya Survey Solutions" },
      { property: "og:description", content: "Civil engineering survey work, field measurement and project evidence supplied from real project sites." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters = [
  "All Projects",
  "Amaravati",
  "Bheemaa",
  "Greater Infra",
  "Yashoda",
  "Residential",
  "Industrial",
];

function ProjectsPage() {
  const [filter, setFilter] = useState("All Projects");
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash);
      if (!hash.startsWith("#project-")) return;
      const slug = hash.replace("#project-", "");
      const project = projects.find((item) => item.slug === slug);
      if (!project) return;

      setSelected(project);
      window.setTimeout(() => {
        document.getElementById(`project-${slug}`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 80);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const shown = projects.filter((project) => {
    if (filter === "All Projects") return true;
    if (filter === "Amaravati") return project.location.includes("Amaravati");
    if (filter === "Bheemaa") return project.client?.includes("Bheemaa");
    if (filter === "Greater Infra") return project.client === "Greater Infra";
    if (filter === "Yashoda") return project.client?.includes("Yashoda");
    if (filter === "Residential") return project.type.includes("Residential");
    if (filter === "Industrial") return project.type.includes("Industrial");
    return true;
  });

  return (
    <>
      <PageHero
        eyebrow="Project proof"
        title="Our Projects"
        text="Explore curated client-supplied field photographs from civil engineering surveying and construction assignments."
      />

      <div className="page-wrap pt-14">
        <Stats compact />
      </div>

      <section id="projects-gallery" className="section-pad scroll-mt-28 pt-14">
        <div className="page-wrap">
          <div className="project-filters flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`min-h-11 border px-4 text-xs font-bold uppercase ${
                  filter === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">
            These galleries use project photographs supplied for the website. Where a client or location was not identified by the supplied folder name, the website does not invent that association.
          </p>

          <div className="projects-grid mt-8 grid gap-6 md:grid-cols-2">
            {shown.map((project) => (
              <div id={`project-${project.slug}`} className="scroll-mt-28" key={project.id}>
                <ProjectCard project={project} onOpen={setSelected} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        {selected && (
          <DialogContent className="project-dialog max-h-[92vh] max-w-5xl overflow-y-auto p-0">
            <img
              src={selected.image}
              alt={`${selected.title} fieldwork cover`}
              width={1800}
              height={1200}
              className="project-dialog-hero aspect-[16/8] w-full object-cover"
            />

            <div className="project-dialog-body p-5 md:p-8">
              <DialogHeader>
                <div className="mb-3 text-xs font-extrabold text-accent">{selected.status}</div>
                <DialogTitle className="project-dialog-title text-2xl md:text-3xl">{selected.title}</DialogTitle>
                <DialogDescription className="leading-6">{selected.description}</DialogDescription>
              </DialogHeader>

              <dl className="project-dialog-meta mt-7 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                {selected.client && (
                  <div className="bg-background p-4">
                    <dt className="text-xs font-bold uppercase text-muted-foreground">Client</dt>
                    <dd className="mt-2 flex items-start gap-2 font-semibold"><Building2 className="mt-0.5 size-4 shrink-0"/>{selected.client}</dd>
                  </div>
                )}
                <div className="bg-background p-4">
                  <dt className="text-xs font-bold uppercase text-muted-foreground">Location</dt>
                  <dd className="mt-2 flex items-start gap-2 font-semibold"><MapPin className="mt-0.5 size-4 shrink-0"/>{selected.location}</dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="text-xs font-bold uppercase text-muted-foreground">Survey type</dt>
                  <dd className="mt-2 flex items-start gap-2 font-semibold"><Wrench className="mt-0.5 size-4 shrink-0"/>{selected.type}</dd>
                </div>
                <div className="bg-background p-4">
                  <dt className="text-xs font-bold uppercase text-muted-foreground">Project media</dt>
                  <dd className="mt-2 flex items-start gap-2 font-semibold"><CalendarDays className="mt-0.5 size-4 shrink-0"/>{selected.year}</dd>
                </div>
                <div className="bg-background p-4 sm:col-span-2">
                  <dt className="text-xs font-bold uppercase text-muted-foreground">Scope visible in supplied media</dt>
                  <dd className="mt-2 font-semibold leading-6">{selected.scope}</dd>
                </div>
                <div className="bg-background p-4 sm:col-span-2 lg:col-span-3">
                  <dt className="text-xs font-bold uppercase text-muted-foreground">Equipment / evidence</dt>
                  <dd className="mt-2 font-semibold leading-6">{selected.equipment}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase">Project Image Gallery</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Curated from: {selected.sourceAlbum}</p>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">{selected.gallery.length} selected images</span>
              </div>

              <div className="project-dialog-gallery mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {selected.gallery.map((image, index) => (
                  <a href={image} target="_blank" rel="noreferrer" key={`${selected.slug}-${index}`}>
                    <img
                      src={image}
                      alt={`${selected.title} fieldwork view ${index + 1}`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-opacity hover:opacity-90"
                    />
                  </a>
                ))}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
