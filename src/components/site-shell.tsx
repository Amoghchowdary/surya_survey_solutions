import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [["Home", "/"], ["About Us", "/about"], ["Project Gallery", "/projects"], ["Contact Us", "/contact"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
    <div className="page-wrap flex h-20 items-center justify-between gap-6">
      <Link to="/" className="flex items-center gap-3" aria-label="Surya Service Solution home">
        <img
          src={`${import.meta.env.BASE_URL}images/surya-logo.png`}
          alt="Surya Survey Solutions logo"
          className="h-16 w-16 shrink-0 object-contain"
        />
        <span className="max-w-44 text-sm font-extrabold leading-tight text-primary">SURYA SERVICE<br/>SOLUTION</span>
      </Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
        {nav.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-sm font-bold text-primary" }}>{label}</Link>)}
      </nav>
      <Button asChild variant="amber" size="lg" className="hidden lg:inline-flex"><Link to="/contact">Request a survey</Link></Button>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-4 py-5 lg:hidden">
      <div className="mx-auto flex max-w-lg flex-col gap-1">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border px-3 py-4 text-base font-semibold">{label}</Link>)}<Button asChild variant="amber" size="lg" className="mt-4"><Link to="/contact" onClick={() => setOpen(false)}>Request a survey</Link></Button></div>
    </nav>}
  </header>
}

export function SiteFooter() {
  return <footer className="bg-hero text-hero-foreground">
    <div className="page-wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div><div className="mb-5 flex items-center gap-3"><img src={`${import.meta.env.BASE_URL}images/surya-logo.png`} alt="Surya Survey Solutions logo" className="h-16 w-16 shrink-0 object-contain"/><strong className="text-sm">SURYA SERVICE<br/>SOLUTION</strong></div><p className="text-sm leading-6 text-hero-foreground/70">Professional civil engineering surveying and field measurement solutions.</p></div>
      <div><h2 className="mb-5 text-sm font-bold uppercase">Quick Links</h2><ul className="space-y-3 text-sm text-hero-foreground/70">{nav.map(([label,to]) => <li key={to}><Link to={to} className="hover:text-hero-foreground">{label}</Link></li>)}</ul></div>
      <div><h2 className="mb-5 text-sm font-bold uppercase">Surveying</h2><ul className="space-y-3 text-sm text-hero-foreground/70"><li>Topographical Survey</li><li>Total Station Survey</li><li>DGPS / GNSS Survey</li><li>Construction Survey</li></ul></div>
      <div><h2 className="mb-5 text-sm font-bold uppercase">Contact</h2><ul className="space-y-4 text-sm text-hero-foreground/70"><li className="flex gap-3"><Phone className="mt-0.5 size-4"/>Phone to be added</li><li className="flex gap-3"><Mail className="mt-0.5 size-4"/>Email to be added</li><li className="flex gap-3"><MapPin className="mt-0.5 size-4"/>Office address to be added</li></ul></div>
    </div>
    <div className="border-t border-hero-foreground/15"><div className="page-wrap py-5 text-xs text-hero-foreground/60">© Surya Service Solution. All Rights Reserved.</div></div>
  </footer>
}