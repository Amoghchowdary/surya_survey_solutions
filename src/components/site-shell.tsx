import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const primaryNav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020a12]/58 text-white shadow-[0_8px_30px_rgba(0,0,0,.10)] backdrop-blur-[8px]">
      <div className="relative flex min-h-[86px] w-full items-center justify-between gap-5 px-[clamp(1.25rem,3.25vw,3.5rem)] py-2">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Surya Survey Solutions home">
          <span className="flex size-[66px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black shadow-lg">
            <img
              src={`${base}images/surya-logo.png`}
              alt="Surya Survey Solutions official logo"
              className="h-[74px] w-[74px] max-w-none object-cover object-top"
            />
          </span>
          <span className="hidden min-w-0 sm:block">
            <strong className="block truncate text-[15px] font-extrabold tracking-[0.02em] text-white md:text-lg">SURYA SURVEY SOLUTIONS</strong>
            <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.08em] text-white/55 md:text-[11px]">PRECISION IN EVERY MEASUREMENT.</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex">
          <Link to="/" activeOptions={{ exact: true }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>Home</Link>
          <Link to="/about" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>About</Link>
          <a href={`${base}#services`} className="nav-link">Services</a>
          <Link to="/projects" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>Projects</Link>
          <a href={`${base}#why-us`} className="nav-link">Why Us</a>
          <Link to="/contact" className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>Contact</Link>
        </nav>

        <Button asChild size="lg" className="hidden bg-emerald-500 text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-400 xl:inline-flex">
          <Link to="/contact"><Send /> Get a Quote</Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white xl:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-[#020a12]/95 px-4 py-5 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-1 text-white">
            {primaryNav.slice(0, 2).map(([label, to]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-white/10 px-3 py-4 text-base font-semibold">{label}</Link>
            ))}
            <a href={`${base}#services`} onClick={() => setOpen(false)} className="border-b border-white/10 px-3 py-4 text-base font-semibold">Services</a>
            <Link to="/projects" onClick={() => setOpen(false)} className="border-b border-white/10 px-3 py-4 text-base font-semibold">Projects</Link>
            <a href={`${base}#why-us`} onClick={() => setOpen(false)} className="border-b border-white/10 px-3 py-4 text-base font-semibold">Why Us</a>
            <Link to="/contact" onClick={() => setOpen(false)} className="border-b border-white/10 px-3 py-4 text-base font-semibold">Contact</Link>
            <Button asChild size="lg" className="mt-4 bg-emerald-500 text-white hover:bg-emerald-400">
              <Link to="/contact" onClick={() => setOpen(false)}><Send /> Get a Quote</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const base = import.meta.env.BASE_URL;
  return (
    <footer className="bg-[#020a12] text-white">
      <div className="page-wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <img src={`${base}images/surya-logo.png`} alt="Surya Survey Solutions logo" className="h-24 w-24 rounded-full object-cover object-top" />
            <div>
              <strong className="text-sm leading-5">SURYA SURVEY<br />SOLUTIONS</strong>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-white/50">Since 2019</span>
            </div>
          </div>
          <p className="text-sm leading-6 text-white/65">Professional civil engineering surveying and field measurement solutions.</p>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-emerald-400">Quick Links</h2>
          <ul className="space-y-3 text-sm text-white/65">
            {primaryNav.map(([label, to]) => <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-emerald-400">Surveying</h2>
          <ul className="space-y-3 text-sm text-white/65"><li>Topographical Survey</li><li>Total Station Survey</li><li>DGPS / GNSS Survey</li><li>Construction Survey</li></ul>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-emerald-400">Contact</h2>
          <ul className="space-y-4 text-sm text-white/65"><li className="flex gap-3"><Phone className="mt-0.5 size-4 text-emerald-400" />Phone to be added</li><li className="flex gap-3"><Mail className="mt-0.5 size-4 text-emerald-400" />Email to be added</li><li className="flex gap-3"><MapPin className="mt-0.5 size-4 text-emerald-400" />Office address to be added</li></ul>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="page-wrap py-5 text-xs text-white/45">© Surya Survey Solutions. All Rights Reserved.</div></div>
    </footer>
  );
}
