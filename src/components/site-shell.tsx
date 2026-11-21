import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const primaryNav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-brand" aria-label="Surya Survey Solutions home">
          <span className="site-brand-logo">
            <img
              src={`${base}images/surya-logo-mark.png`}
              alt="Surya Survey Solutions official logo"
            />
          </span>
          <span className="site-brand-copy">
            <strong>SURYA SURVEY SOLUTIONS</strong>
            <span className="site-brand-tagline">PRECISION IN EVERY MEASUREMENT.</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="site-desktop-nav">
          {primaryNav.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              activeOptions={to === "/" ? { exact: true } : undefined}
              className="nav-link"
              activeProps={{ className: "nav-link nav-link-active" }}
            >
              {label}
            </Link>
          ))}
          <a href={`${base}#why-us`} className="nav-link">Why Us</a>
        </nav>

        <Button asChild size="lg" className="site-quote-button">
          <Link to="/contact"><Send /> Get a Quote</Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="site-menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="site-mobile-nav">
          <div className="site-mobile-nav-inner">
            {primaryNav.map(([label, to]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="site-mobile-link">{label}</Link>
            ))}
            <a href={`${base}#why-us`} onClick={() => setOpen(false)} className="site-mobile-link">Why Us</a>
            <Button asChild size="lg" className="site-mobile-quote">
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
    <footer className="site-footer bg-[#020a12] text-white">
      <div className="page-wrap site-footer-grid grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <img src={`${base}images/surya-logo-mark.png`} alt="Surya Survey Solutions logo" className="site-footer-logo h-24 w-24 rounded-full object-cover object-top" />
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
          <ul className="space-y-3 text-sm text-white/65"><li><Link to="/services" className="hover:text-white">Topographical Survey</Link></li><li><Link to="/services" className="hover:text-white">Total Station Survey</Link></li><li><Link to="/services" className="hover:text-white">DGPS / GNSS Survey</Link></li><li><Link to="/services" className="hover:text-white">Construction Survey</Link></li></ul>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-emerald-400">Contact</h2>
          <ul className="space-y-4 text-sm text-white/65">
            <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-emerald-400" /><a href="tel:7036892959" className="break-all hover:text-white">7036892959</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-emerald-400" /><a href="mailto:suryamovva@gmail.com" className="break-all hover:text-white">suryamovva@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="page-wrap py-5 text-xs text-white/45">© Surya Survey Solutions. All Rights Reserved.</div></div>
    </footer>
  );
}
