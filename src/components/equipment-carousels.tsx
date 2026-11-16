import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

const equipmentSets = [
  {
    title: "Survey Equipment",
    subtitle: "Field equipment in active site conditions",
    images: Array.from({ length: 7 }, (_, i) => `${base}images/equipment/equipment/${String(i + 1).padStart(2, "0")}.webp`),
  },
  {
    title: "Total Station Equipment",
    subtitle: "Precision instruments used for construction and engineering surveys",
    images: Array.from({ length: 6 }, (_, i) => `${base}images/equipment/total-station/${String(i + 1).padStart(2, "0")}.webp`),
  },
  {
    title: "DGPS Equipment",
    subtitle: "GNSS and DGPS equipment for positioning and control work",
    images: Array.from({ length: 12 }, (_, i) => `${base}images/equipment/dgps/${String(i + 1).padStart(2, "0")}.webp`),
  },
] as const;

function AutoImageCarousel({ title, subtitle, images, delayOffset = 0 }: { title: string; subtitle: string; images: readonly string[]; delayOffset?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    let timer: number | undefined;
    const first = window.setTimeout(() => {
      setActive(1 % images.length);
      timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), 4200);
    }, 4200 + delayOffset);
    return () => {
      window.clearTimeout(first);
      if (timer !== undefined) window.clearInterval(timer);
    };
  }, [delayOffset, images.length]);

  return (
    <article className="equipment-carousel-card">
      <div className="equipment-carousel-stage" aria-label={`${title} image carousel`}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${title} - image ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            className={index === active ? "equipment-carousel-image is-active" : "equipment-carousel-image"}
          />
        ))}
        <div className="equipment-carousel-counter" aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</div>
      </div>
      <div className="equipment-carousel-copy">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}

export function EquipmentCarousels({ className = "" }: { className?: string }) {
  return (
    <div className={`equipment-carousel-grid ${className}`.trim()}>
      {equipmentSets.map((set, index) => <AutoImageCarousel key={set.title} {...set} delayOffset={index * 650} />)}
    </div>
  );
}
