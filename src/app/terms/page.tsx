import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const termsSections = [
  {
    title: "Service scope",
    points: [
      "Botlane provides outbound pipeline services as defined in written agreements.",
      "Deliverables, timelines, and channels are scoped before campaign launch.",
      "Results can vary based on market, offer quality, and client responsiveness.",
    ],
  },
  {
    title: "Client responsibilities",
    points: [
      "Provide accurate business information and timely approvals.",
      "Maintain legal compliance for your offer, messaging claims, and sales operations.",
      "Support handoff processes to maximize qualified meeting conversion.",
    ],
  },
  {
    title: "Commercial and legal terms",
    points: [
      "Billing terms, setup fees, and renewals follow the signed order agreement.",
      "Either party may terminate based on the notice period defined in contract terms.",
      "Liability and warranty limitations are governed by the final master agreement.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            LEGAL // TERMS_OF_SERVICE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Terms of service
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            These terms describe baseline expectations for using Botlane services.
            This page is a practical placeholder and should be finalized with
            legal review before formal publication.
          </p>
        </section>

        <section className="grid gap-6">
          {termsSections.map((section) => (
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

        <SiteFooter />
      </div>
    </main>
  );
}
