import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sections = [
  {
    title: "Information we collect",
    points: [
      "Contact details you provide (name, email, company, and call notes).",
      "Basic usage data from website interactions used for service improvement.",
      "Business context shared during discovery and onboarding conversations.",
    ],
  },
  {
    title: "How we use information",
    points: [
      "To respond to inquiries and schedule strategy calls.",
      "To deliver, operate, and improve outbound services.",
      "To provide updates on service delivery and account support.",
    ],
  },
  {
    title: "Data sharing and retention",
    points: [
      "We do not sell personal information.",
      "Data is shared only with essential service providers for delivery and operations.",
      "Information is retained only as long as needed for service, legal, and security purposes.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            LEGAL // PRIVACY_POLICY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Privacy policy
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            This page explains how Botlane collects, uses, and protects business
            information. This is a general policy template and should be reviewed
            by legal counsel before production use.
          </p>
        </section>

        <section className="grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="border border-white/12 bg-white/[0.01] p-7">
              <h2 className="text-xl font-bold uppercase mb-4">{section.title}</h2>
              <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
                {section.points.map((point) => (
                  <li key={point}>&gt; {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="border border-white/12 bg-white/[0.01] p-7">
          <h2 className="text-xl font-bold uppercase mb-4">Contact for privacy matters</h2>
          <p className="font-mono text-xs text-white/45 leading-relaxed normal-case">
            For privacy-related questions, contact
            {" "}
            <a href="mailto:admin@botlane.io" className="text-white/75 hover:text-white transition-colors">
              admin@botlane.io
            </a>
            .
          </p>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
