import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site-components";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Surya Survey Solutions | Survey Enquiry" },
      { name: "description", content: "Contact Surya Survey Solutions at 7036892959 or suryamovva@gmail.com for civil engineering survey requirements." },
      { property: "og:title", content: "Request a Survey | Surya Survey Solutions" },
      { property: "og:description", content: "Share your site location and civil engineering survey requirement." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const types = [
  "Topographical Survey",
  "Total Station Survey",
  "DGPS/GNSS Survey",
  "Boundary Survey",
  "Construction Layout",
  "Road / Infrastructure Survey",
  "As-Built Survey",
  "Other",
];

const contactItems: Array<{
  Icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}> = [
  { Icon: Phone, label: "Phone", value: "7036892959", href: "tel:7036892959" },
  { Icon: Mail, label: "Email", value: "suryamovva@gmail.com", href: "mailto:suryamovva@gmail.com" },
  { Icon: MapPin, label: "Office Address", value: "To be added" },
  { Icon: Clock, label: "Working Hours", value: "To be added" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Survey enquiry"
        title="Let's Discuss Your Survey Requirement."
        text="Share your project location, approximate area and survey needs. You can also reach Surya Survey Solutions directly by phone or email."
      />

      <section className="section-pad">
        <div className="page-wrap grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <aside>
            <h2 className="text-2xl font-extrabold">Company contact information</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              For survey enquiries and project discussions, contact Surya Survey Solutions using the details below.
            </p>

            <ul className="mt-8 space-y-3">
              {contactItems.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-4 border-b border-border py-5">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-surface">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="mt-1 block break-all font-semibold hover:text-primary">{value}</a>
                    ) : (
                      <div className="mt-1 font-semibold">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-2">
              <a href="tel:7036892959" className="flex min-h-20 flex-col items-center justify-center gap-2 border border-border text-xs font-bold text-foreground hover:border-primary hover:text-primary">
                <Phone className="size-5" />Call
              </a>
              <button disabled title="WhatsApp number to be confirmed" className="flex min-h-20 flex-col items-center justify-center gap-2 border border-border text-xs font-bold text-muted-foreground disabled:cursor-not-allowed">
                <MessageCircle className="size-5" />WhatsApp
              </button>
              <a href="mailto:suryamovva@gmail.com" className="flex min-h-20 flex-col items-center justify-center gap-2 border border-border text-xs font-bold text-foreground hover:border-primary hover:text-primary">
                <Mail className="size-5" />Email
              </a>
            </div>
          </aside>

          <div className="bg-surface p-6 md:p-10">
            <h2 className="text-2xl font-extrabold">Survey Enquiry Form</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>

            {sent ? (
              <div role="status" className="mt-8 border-l-4 border-accent bg-background p-6">
                <h3 className="font-bold">Your enquiry details are ready.</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  For immediate follow-up, call 7036892959 or email suryamovva@gmail.com.
                </p>
                <Button className="mt-5" onClick={() => setSent(false)}>Send another enquiry</Button>
              </div>
            ) : (
              <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field id="name" label="Full Name *"><Input id="name" required /></Field>
                <Field id="company" label="Company Name"><Input id="company" /></Field>
                <Field id="phone" label="Phone Number *"><Input id="phone" type="tel" required /></Field>
                <Field id="email" label="Email *"><Input id="email" type="email" required /></Field>
                <Field id="location" label="Project Location *"><Input id="location" required /></Field>
                <Field id="survey" label="Type of Survey *">
                  <select id="survey" required defaultValue="" className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="" disabled>Select survey type</option>
                    {types.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
                <Field id="area" label="Project Area / Approximate Size"><Input id="area" /></Field>
                <div className="md:col-span-2">
                  <Field id="description" label="Project Description / Requirement *"><Textarea id="description" required rows={6} /></Field>
                </div>
                <Button variant="amber" size="lg" type="submit" className="md:col-span-2">Submit survey request</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="page-wrap">
          <div className="flex min-h-64 items-center justify-center border border-dashed border-border bg-background text-center">
            <div>
              <MapPin className="mx-auto size-7 text-primary" />
              <h2 className="mt-4 font-bold">Google Map location reserved</h2>
              <p className="mt-2 text-sm text-muted-foreground">Map will be added when the verified office address is provided.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-border bg-background lg:hidden">
        <a href="tel:7036892959" className="flex min-h-14 items-center justify-center border-r border-border text-xs font-bold uppercase">Call</a>
        <button disabled title="WhatsApp number to be confirmed" className="min-h-14 border-r border-border text-xs font-bold uppercase text-muted-foreground disabled:cursor-not-allowed">WhatsApp</button>
        <button onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })} className="min-h-14 border-r border-border text-xs font-bold uppercase">Enquire</button>
      </div>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
