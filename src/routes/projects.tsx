import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Building2, CalendarDays, Images, MapPin, PlayCircle, Wrench } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHero, ProjectCard, Stats } from "@/components/site-components";
import { MediaSecurityOverlay, blockMediaContextMenu, blockMediaDrag } from "@/components/media-protection";
import { projects, type Project, type ProjectMedia } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Surya Survey Solutions" },
      { name: "description", content: "Explore Surya Survey Solutions project fieldwork across Amaravati, Bheemaa, Greater Infra, Yashoda, Mallampet and Advaita Properties project sites." },
      { property: "og:title", content: "Survey Projects | Surya Survey Solutions" },
      { property: "og:description", content: "Civil engineering survey projects with field measurement evidence, photographs and project videos from real sites." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters = ["All Projects", "Amaravati", "Bheemaa", "Bengaluru", "Shamshabad", "Greater Infra", "Yashoda", "Mallampet", "Advaita", "Residential", "Industrial"];

function MediaTile({ media, project, index }: { media: ProjectMedia; project: Project; index: number }) {
  const displayNumber = index + 1;

  if (media.kind === "video") {
    return (
      <figure
        className="project-media-tile project-media-video protected-media"
        onContextMenu={blockMediaContextMenu}
      >
        <div className="project-media-visual">
          <video
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            muted
            playsInline
            preload="metadata"
            poster={media.poster}
            aria-label={`${project.title} field video ${displayNumber}`}
            onContextMenu={blockMediaContextMenu}
            onDragStart={blockMediaDrag}
          >
            <source src={media.src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <MediaSecurityOverlay number={displayNumber} compact />
        </div>
      </figure>
    );
  }

  return (
    <figure
      className="project-media-tile protected-media"
      onContextMenu={blockMediaContextMenu}
    >
      <div className="project-media-visual">
        <img
          src={media.src}
          alt={`${project.title} project fieldwork photograph ${displayNumber}`}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          draggable={false}
          onContextMenu={blockMediaContextMenu}
          onDragStart={blockMediaDrag}
        />
        <MediaSecurityOverlay number={displayNumber} compact />
      </div>
    </figure>
  );
}

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
        document.getElementById(`project-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
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
    if (filter === "Bengaluru") return project.location.includes("Bengaluru");
    if (filter === "Shamshabad") return project.location.includes("Shamshabad");
    if (filter === "Greater Infra") return project.client === "Greater Infra";
    if (filter === "Yashoda") return project.client?.includes("Yashoda");
    if (filter === "Mallampet") return project.slug === "mallampet-site";
    if (filter === "Advaita") return project.slug === "advaita-properties-site";
    if (filter === "Residential") return project.type.includes("Residential");
    if (filter === "Industrial") return project.type.includes("Industrial");
    return true;
  });

  const totalImages = useMemo(() => projects.reduce((n, p) => n + p.media.filter((m) => m.kind === "image").length, 0), []);
  const totalVideos = useMemo(() => projects.reduce((n, p) => n + p.media.filter((m) => m.kind === "video").length, 0), []);

  return (
    <>
      <PageHero
        eyebrow="Project proof"
        title="Our Projects"
        text={`Explore the complete supplied project media library: ${totalImages} unique images and ${totalVideos} field videos across ${projects.length} civil engineering project groups.`}
      />

      <div className="page-wrap pt-14"><Stats compact /></div>

      <section id="projects" className="section-pad scroll-mt-28 pt-14">
        <div className="page-wrap">
          <div className="project-filters flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`min-h-11 border px-4 text-xs font-bold uppercase ${filter === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary"}`}
              >{item}</button>
            ))}
          </div>

          <p className="mt-5 max-w-4xl text-sm leading-6 text-muted-foreground">
            Client-priority ordering is preserved exactly from the supplied project folders. Images and videos remain in the exact client-defined order. The small number shown on each media tile is only a clean visual position marker; it does not change the underlying client sequence.
          </p>

          <div className="projects-grid mt-8 grid gap-6 md:grid-cols-2">
            {shown.map((project) => (
              <div id={`project-${project.slug}`} className="scroll-mt-28" key={project.id}>
                <ProjectCard project={project} onOpen={setSelected} />
                <div className="project-media-counts">
                  <span><Images className="size-4" /> {project.media.filter((m) => m.kind === "image").length} images</span>
                  {project.media.some((m) => m.kind === "video") && <span><PlayCircle className="size-4" /> {project.media.filter((m) => m.kind === "video").length} videos</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        {selected && (
          <DialogContent className="project-dialog max-h-[94vh] max-w-6xl overflow-y-auto p-0">
            {selected.slug !== "bheemaa-amaravati-gad-tower" && (
              <div
                className="protected-media project-dialog-hero-wrap"
                onContextMenu={blockMediaContextMenu}
              >
                <img
                  src={selected.image}
                  alt={`${selected.title} fieldwork cover`}
                  width={1800}
                  height={1200}
                  draggable={false}
                  onContextMenu={blockMediaContextMenu}
                  onDragStart={blockMediaDrag}
                  className="project-dialog-hero aspect-[16/8] w-full object-cover"
                />
                <MediaSecurityOverlay number={1} />
              </div>
            )}
            <div className={`project-dialog-body p-5 md:p-8 ${selected.slug === "bheemaa-amaravati-gad-tower" ? "pt-8 md:pt-10" : ""}`}>
              <DialogHeader>
                <div className="mb-3 text-xs font-extrabold text-accent">{selected.status}</div>
                <DialogTitle className="project-dialog-title text-2xl md:text-3xl">{selected.title}</DialogTitle>
                <DialogDescription className="leading-6">{selected.description}</DialogDescription>
              </DialogHeader>

              <dl className="project-dialog-meta mt-7 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                {selected.client && <div className="bg-background p-4"><dt className="text-xs font-bold uppercase text-muted-foreground">Client</dt><dd className="mt-2 flex items-start gap-2 font-semibold"><Building2 className="mt-0.5 size-4 shrink-0"/>{selected.client}</dd></div>}
                <div className="bg-background p-4"><dt className="text-xs font-bold uppercase text-muted-foreground">Location</dt><dd className="mt-2 flex items-start gap-2 font-semibold"><MapPin className="mt-0.5 size-4 shrink-0"/>{selected.location}</dd></div>
                <div className="bg-background p-4"><dt className="text-xs font-bold uppercase text-muted-foreground">Survey type</dt><dd className="mt-2 flex items-start gap-2 font-semibold"><Wrench className="mt-0.5 size-4 shrink-0"/>{selected.type}</dd></div>
                <div className="bg-background p-4"><dt className="text-xs font-bold uppercase text-muted-foreground">Project media</dt><dd className="mt-2 flex items-start gap-2 font-semibold"><CalendarDays className="mt-0.5 size-4 shrink-0"/>{selected.year}</dd></div>
                <div className="bg-background p-4 sm:col-span-2"><dt className="text-xs font-bold uppercase text-muted-foreground">Scope visible in supplied media</dt><dd className="mt-2 font-semibold leading-6">{selected.scope}</dd></div>
                <div className="bg-background p-4 sm:col-span-2 lg:col-span-3"><dt className="text-xs font-bold uppercase text-muted-foreground">Equipment / evidence</dt><dd className="mt-2 font-semibold leading-6">{selected.equipment}</dd></div>
              </dl>

              <div className="mt-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase">Project Media</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Source folder: {selected.sourceAlbum}</p>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  {selected.media.filter((m) => m.kind === "image").length} images · {selected.media.filter((m) => m.kind === "video").length} videos
                </span>
              </div>

              <div className="project-complete-media mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4">
                {selected.media.map((media, index) => <MediaTile media={media} project={selected} index={index} key={`${selected.slug}-${media.kind}-${index}`} />)}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
