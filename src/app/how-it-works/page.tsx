import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const workflow = [
  {
    step: "01",
    title: "Strategy and targeting",
    detail:
      "We define ICP, geographies, and messaging angles based on your offer and sales goals.",
  },
  {
    step: "02",
    title: "Infrastructure and setup",
    detail:
      "Domains, sending systems, tracking, and safety controls are configured before launch.",
  },
  {
    step: "03",
    title: "Campaign launch",
    detail:
      "Outbound goes live across agreed channels with monitored deliverability and reply handling.",
  },
  {
    step: "04",
    title: "Optimization loop",
    detail:
      "Weekly review cycles improve list quality, messaging response, and meeting conversion.",
  },
];

const ownership = [
  {
    title: "What we handle",
    points: [
      "Target list sourcing and validation",
      "Sequence writing and channel execution",
      "Reply triage and qualification support",
      "Reporting and optimization recommendations",
    ],
  },
  {
    title: "What you provide",
    points: [
      "Offer positioning and exclusions",
      "Calendar and handoff preferences",
      "Feedback on lead quality and call outcomes",
      "Fast approval turnaround during setup",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            02 // HOW_IT_WORKS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            A clear system from setup to meetings
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            This is the operational path we use to build predictable outbound.
            Every phase has defined ownership, expected outputs, and review points.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-5">
          {workflow.map((item) => (
            <article key={item.step} className="border border-white/12 bg-white/[0.01] p-6">
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                Step {item.step}
              </p>
              <h2 className="text-xl font-bold uppercase mb-2">{item.title}</h2>
              <p className="font-mono text-xs text-white/45 leading-relaxed">
                {item.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          {ownership.map((group) => (
            <article key={group.title} className="border border-white/12 bg-white/[0.01] p-7">
              <h2 className="text-xl font-bold uppercase mb-4">{group.title}</h2>
              <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
                {group.points.map((point) => (
                  <li key={point}>&gt; {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="border border-white/15 bg-white/[0.015] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            Want this process for your firm?
          </h2>
          <p className="font-mono text-xs text-white/45 max-w-2xl mx-auto mb-6">
            We will map your current outbound maturity and show the right plan
            and timeline before any commitment.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-7 py-3 border border-white/50 text-white font-mono text-xs uppercase tracking-widest cta-glow"
          >
            Book a strategy call
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
