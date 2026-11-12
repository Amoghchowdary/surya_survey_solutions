import type { DragEvent, MouseEvent } from "react";
const PHONE = "703692959";
export function MediaSecurityOverlay({ number, compact = false }: { number: number; compact?: boolean }) { const src = `${import.meta.env.BASE_URL}images/brand/surya-watermark-logo.png`; return <span className={compact ? "media-security media-security-compact" : "media-security"} aria-hidden="true"><span className="media-security-logo"><img src={src} alt="" draggable={false} /></span><span className="media-security-line">SURYA SURVEY SOLUTIONS · {PHONE} · {number}</span></span>; }
export function blockMediaContextMenu(event: MouseEvent<HTMLElement>) { event.preventDefault(); }
export function blockMediaDrag(event: DragEvent<HTMLElement>) { event.preventDefault(); }
