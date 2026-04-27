import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

const studies = [
  {
    segment: "Managed IT Services",
    before: "Referral-heavy growth with no predictable outbound volume.",
    after: "Consistent monthly meetings with owner-level decision makers.",
    highlight: "From sporadic outreach to weekly qualified call flow.",
    metrics: ["Reply quality improved within first 3 optimization cycles", "Meeting flow stabilized by month 2"],
  },
  {
    segment: "Cybersecurity Consulting",
    before: "Low reply quality despite broad cold email activity.",
    after: "Improved targeting and positioning increased qualified responses.",
    highlight: "Higher intent conversations from narrower ICP focus.",
    metrics: ["Lower noise replies after ICP narrowing", "Higher conversion from reply to booked meeting"],
  },
  {
    segment: "Cloud Services Provider",
    before: "Outbound handled ad hoc with little campaign visibility.",
    after: "Structured reporting and optimization cycle tied to KPIs.",
    highlight: "Leadership gained pipeline clarity by channel and segment.",
    metrics: ["Weekly reporting reduced decision lag", "Clear channel attribution for planning spend"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            04 // CASE_SIGNALS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Real campaign patterns across IT segments
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            These snapshots show common before/after shifts we see once outbound
            is systemized. Results vary by market and offer, but patterns in
            process and decision quality are consistent.
          </p>
        </section>

        <section className="grid gap-5">
          {studies.map((study) => (
            <article key={study.segment} className="border border-white/12 bg-white/[0.01] p-7">
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                {study.segment}
              </p>
              <p className="font-mono text-xs text-white/45 mb-2">
                <span className="text-white/70">Before:</span> {study.before}
              </p>
              <p className="font-mono text-xs text-white/45 mb-3">
                <span className="text-white/70">After:</span> {study.after}
              </p>
              <p className="font-mono text-xs text-white/70">{study.highlight}</p>
              <ul className="mt-3 flex flex-col gap-2 font-mono text-[11px] text-white/45">
                {study.metrics.map((metric) => (
                  <li key={metric}>&gt; {metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="border border-white/15 bg-white/[0.015] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            Want a case study for your exact niche?
          </h2>
          <p className="font-mono text-xs text-white/45 max-w-2xl mx-auto mb-6">
            We can walk you through similar account patterns and expected ramp
            behavior based on your service category.
          </p>
          <TrackedLink
            href="/book-call"
            eventName="cta_click"
            eventMeta={{ location: "case_studies_final_cta", target: "/book-call" }}
            className="inline-flex px-7 py-3 border border-white/50 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Book a call
          </TrackedLink>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
