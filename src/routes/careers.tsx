import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BriefcaseBusiness, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CtaBand, PageHero, SectionHeading } from "@/components/site-components";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Surveyor Careers | Surya Survey Solutions" },
      { name: "description", content: "Explore current Surveyor and Surveyor Assistant opportunities at Surya Survey Solutions. Submit a career enquiry for field surveying roles." },
      { property: "og:title", content: "Careers at Surya Survey Solutions" },
      { property: "og:description", content: "Current field openings for Surveyors and Surveyor Assistants." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.suryasurveysolutions.in/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.suryasurveysolutions.in/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  {
    role: "Surveyor",
    experience: "3–5 years",
    points: ["Steel structures template setting", "Buildings and villas", "DGPS"],
  },
  {
    role: "Surveyor Assistant",
    experience: "0–1 year",
    points: ["Field survey assistance", "Instrument setup support", "Site execution support"],
  },
] as const;

function CareersPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Surveying Career in the Field."
        text="Join a field-focused surveying team working across civil engineering, construction and infrastructure assignments."
      />

      <section className="section-pad bg-background">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Current openings"
            title="Open Field Roles"
            text="These openings reflect the current requirements shared by Surya Survey Solutions."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {openings.map((opening) => (
              <article key={opening.role} className="border border-border bg-card p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center bg-emerald-50 text-emerald-700">
                    <BriefcaseBusiness className="size-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold">{opening.role}</h2>
                    <p className="mt-1 text-sm font-semibold text-emerald-700">Experience: {opening.experience}</p>
                  </div>
                </div>
                <ul className="mt-7 space-y-3">
                  {opening.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="page-wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Career inquiry" title="Apply to Surya Survey Solutions" />
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Share your field experience and current location. Your application email will open pre-addressed to our team so you can attach your resume before sending.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm font-semibold">
              <Mail className="size-5 text-primary" />
              <a href="mailto:suryamovva@gmail.com" className="hover:text-primary">suryamovva@gmail.com</a>
            </div>
          </div>

          <div className="bg-background p-6 md:p-10">
            {sent ? (
              <div role="status" className="border-l-4 border-emerald-500 bg-surface p-6">
                <h2 className="text-xl font-bold">Application email prepared.</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Attach your resume/CV in the email window before sending.</p>
                <Button className="mt-5" onClick={() => setSent(false)}>Submit another inquiry</Button>
              </div>
            ) : (
              <form
                className="grid gap-5 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const role = String(data.get("role") || "");
                  const name = String(data.get("name") || "");
                  const phone = String(data.get("phone") || "");
                  const email = String(data.get("email") || "");
                  const experience = String(data.get("experience") || "");
                  const location = String(data.get("location") || "");
                  const skills = String(data.get("skills") || "");
                  const subject = encodeURIComponent(`Career Inquiry - ${role} - ${name}`);
                  const body = encodeURIComponent(`Career Inquiry\n\nName: ${name}\nRole: ${role}\nPhone: ${phone}\nEmail: ${email}\nExperience: ${experience}\nCurrent Location: ${location}\nSkills / Project Experience: ${skills}\n\nPlease find my resume/CV attached.`);
                  window.location.href = `mailto:suryamovva@gmail.com?subject=${subject}&body=${body}`;
                  setSent(true);
                }}
              >
                <Field id="career-name" label="Full Name *"><Input id="career-name" name="name" required /></Field>
                <Field id="career-phone" label="Phone Number *"><Input id="career-phone" name="phone" type="tel" required /></Field>
                <Field id="career-email" label="Email *"><Input id="career-email" name="email" type="email" required /></Field>
                <Field id="career-role" label="Applying For *">
                  <select id="career-role" name="role" required defaultValue="" className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="" disabled>Select role</option>
                    <option>Surveyor</option>
                    <option>Surveyor Assistant</option>
                  </select>
                </Field>
                <Field id="career-experience" label="Experience *"><Input id="career-experience" name="experience" placeholder="e.g. 4 years" required /></Field>
                <Field id="career-location" label="Current Location *"><Input id="career-location" name="location" required /></Field>
                <div className="md:col-span-2"><Field id="career-skills" label="Skills / Project Experience *"><Textarea id="career-skills" name="skills" rows={6} required /></Field></div>
                <Button variant="amber" size="lg" type="submit" className="md:col-span-2">Prepare application email</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}
