import type { DragEvent, MouseEvent } from "react";

/** V30 production: exactly one transparent identity line on protected media. */
export function MediaSecurityOverlay({ number, compact = false }: { number: number; compact?: boolean }) {
  return (
    <span className={compact ? "media-security media-security-compact" : "media-security"} aria-hidden="true">
      <span className="media-security-line">SURYA SURVEY SOLUTIONS · 7036892959 · {number}</span>
    </span>
  );
}

export function blockMediaContextMenu(event: MouseEvent<HTMLElement>) { event.preventDefault(); }
export function blockMediaDrag(event: DragEvent<HTMLElement>) { event.preventDefault(); }
