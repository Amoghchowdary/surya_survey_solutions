import type { DragEvent, MouseEvent } from "react";

export function MediaWatermark({ compact = false }: { compact?: boolean }) {
  const src = `${import.meta.env.BASE_URL}images/brand/surya-watermark-tm.png`;

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={compact ? "media-watermark media-watermark-compact" : "media-watermark"}
    />
  );
}

export function MediaCornerLogo({ compact = false }: { compact?: boolean }) {
  const src = `${import.meta.env.BASE_URL}images/brand/surya-watermark-logo.png`;

  return (
    <span className={compact ? "media-corner-logo media-corner-logo-compact" : "media-corner-logo"} aria-hidden="true">
      <img src={src} alt="" draggable={false} />
    </span>
  );
}

export function blockMediaContextMenu(event: MouseEvent<HTMLElement>) {
  event.preventDefault();
}

export function blockMediaDrag(event: DragEvent<HTMLElement>) {
  event.preventDefault();
}
