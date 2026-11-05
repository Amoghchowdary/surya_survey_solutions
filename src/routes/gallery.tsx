import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Camera, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHero } from "@/components/site-components";
import { celebrationMedia, type CelebrationMedia } from "@/lib/gallery-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Surya Survey Solutions" },
      { name: "description", content: "Celebrations, team moments and company gatherings at Surya Survey Solutions." },
      { property: "og:title", content: "Celebrations Gallery | Surya Survey Solutions" },
      { property: "og:description", content: "A visual gallery of celebrations and team moments at Surya Survey Solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selected, setSelected] = useState<CelebrationMedia | null>(null);
  const images = useMemo(() => celebrationMedia.filter((item) => item.kind === "image"), []);
  const videos = useMemo(() => celebrationMedia.filter((item) => item.kind === "video"), []);
  return <>
    <PageHero eyebrow="Life at Surya" title="Celebrations & Team Moments" text="A visual collection of celebrations, team gatherings and memorable moments at Surya Survey Solutions." />
    <section className="section-pad bg-background"><div className="page-wrap">
      <div className="gallery-summary grid grid-cols-2 gap-4">
        <div className="border border-border bg-card p-5"><Camera className="size-6 text-accent"/><div className="mt-3 text-3xl font-extrabold text-primary">{images.length}</div><div className="mt-1 text-xs font-bold uppercase text-muted-foreground">Celebration Photos</div></div>
        <div className="border border-border bg-card p-5"><PlayCircle className="size-6 text-accent"/><div className="mt-3 text-3xl font-extrabold text-primary">{videos.length}</div><div className="mt-1 text-xs font-bold uppercase text-muted-foreground">Celebration Video</div></div>
      </div>
      {videos.length > 0 && <div className="mt-10"><h2 className="text-xl font-extrabold">Celebration Video</h2><div className="gallery-feature-video mt-4 max-w-3xl overflow-hidden border border-border bg-black"><video controls muted playsInline preload="metadata" poster={videos[0].poster} className="w-full"><source src={videos[0].src} type="video/mp4"/>Your browser does not support HTML5 video.</video></div></div>}
      <div className="mt-12"><div className="text-xs font-extrabold uppercase text-primary">Photo Gallery</div><h2 className="mt-2 text-2xl font-extrabold md:text-3xl">Celebrations at Surya</h2></div>
      <div className="gallery-masonry mt-7 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((media,index)=><button type="button" key={`${media.src}-${index}`} onClick={()=>setSelected(media)} className="gallery-photo mb-4 block w-full break-inside-avoid overflow-hidden border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Open celebration photograph"><img src={media.src} alt="Surya Survey Solutions celebration and team moment" loading="lazy" decoding="async" className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"/></button>)}
      </div>
    </div></section>
    <Dialog open={!!selected} onOpenChange={(open)=>{if(!open)setSelected(null)}}>{selected?.kind==="image"&&<DialogContent className="gallery-lightbox max-w-6xl overflow-hidden border-0 bg-black p-2 text-white"><DialogHeader className="sr-only"><DialogTitle>Celebration photograph</DialogTitle><DialogDescription>Surya Survey Solutions celebrations gallery photograph.</DialogDescription></DialogHeader><img src={selected.src} alt="Surya Survey Solutions celebration" className="max-h-[88vh] w-full object-contain"/></DialogContent>}</Dialog>
  </>;
}
