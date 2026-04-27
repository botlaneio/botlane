import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

const metricCards = [
  {
    label: "LEADS_FOUND",
    value: "1,240",
    note: "Verified ICP-matched contacts sourced this cycle.",
  },
  {
    label: "OUTREACH_SENT",
    value: "4,500",
    note: "Total sends across active email and LinkedIn sequences.",
  },
  {
    label: "REPLIES",
    value: "84",
    note: "Human responses captured and categorized by intent.",
  },
  {
    label: "MEETINGS_BOOKED",
    value: "12",
    note: "Qualified calls confirmed on calendar.",
  },
];

const qualitySignals = [
  { label: "Data verification", value: "Multi-step validation before send" },
  { label: "Reporting cadence", value: "Weekly updates + monthly review" },
  { label: "Primary KPI", value: "Qualified meetings booked" },
  { label: "Attribution", value: "Tracked by campaign, channel, and account" },
];

const methodology = [
  "Metrics are tied to a defined ICP and active campaign scope.",
  "Replies are categorized to separate noise from genuine buying intent.",
  "Booked meetings only count once qualification criteria are met.",
  "Trend changes are reviewed with messaging and list-level context.",
];

const metricFaqs = [
  {
    q: "What matters most: reply rate or meetings booked?",
    a: "Meetings booked is the north-star KPI. Reply rate is a supporting diagnostic signal.",
  },
  {
    q: "Do these numbers include unqualified meetings?",
    a: "No. Meetings are counted after matching agreed qualification criteria.",
  },
  {
    q: "How often are metrics reviewed?",
    a: "Weekly for tactical adjustments and monthly for strategic optimization.",
  },
];

const reportingCadence = [
  {
    window: "Weekly",
    deliverables: [
      "Campaign volume, reply quality, and meeting movement",
      "Channel-level blockers and quick wins",
      "Action list for next 7 days",
    ],
  },
  {
    window: "Monthly",
    deliverables: [
      "Trend analysis across lists, messaging, and segments",
      "Pipeline impact review tied to qualified meetings",
      "Strategic recommendations for the next cycle",
    ],
  },
];

const optimizationActions = [
  {
    trigger: "Reply quality drops",
    action: "Refine targeting filters and tighten personalization logic.",
  },
  {
    trigger: "High opens, low replies",
    action: "Rework offer framing and CTA language across sequences.",
  },
  {
    trigger: "Replies up, bookings flat",
    action: "Improve qualification flow and calendar handoff process.",
  },
  {
    trigger: "Channel underperforming",
    action: "Shift volume mix and test new angle by segment.",
  },
];

export default function MetricsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />
        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            03 // TRUSTED_SYSTEM_METRICS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Metrics built for decision making
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            We report performance in a way that is auditable and actionable.
            Every number is tied to campaign scope, qualification logic, and a
            clear improvement loop.
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {qualitySignals.map((signal) => (
            <article
              key={signal.label}
              className="border border-white/12 bg-white/[0.01] p-5"
            >
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                {signal.label}
              </p>
              <p className="font-mono text-sm text-white/85">{signal.value}</p>
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
            Live campaign snapshot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {metricCards.map((card) => (
              <article
                key={card.label}
                className="p-5 border border-white/12 bg-white/[0.01] flex flex-col gap-3"
              >
                <p className="font-mono text-[10px] text-white/35 tracking-widest">
                  {card.label}
                </p>
                <p className="font-mono text-3xl font-bold">{card.value}</p>
                <p className="font-mono text-[11px] text-white/45 leading-relaxed">
                  {card.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">How numbers are governed</h2>
            <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
              {methodology.map((point) => (
                <li key={point}>&gt; {point}</li>
              ))}
            </ul>
          </article>
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">Metric FAQ</h2>
            <div className="space-y-4">
              {metricFaqs.map((faq) => (
                <div key={faq.q}>
                  <p className="font-bold text-sm mb-1">{faq.q}</p>
                  <p className="font-mono text-xs text-white/45 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">
              Reporting cadence and deliverables
            </h2>
            <div className="space-y-5">
              {reportingCadence.map((block) => (
                <div key={block.window}>
                  <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                    {block.window}
                  </p>
                  <ul className="flex flex-col gap-2 font-mono text-xs text-white/45">
                    {block.deliverables.map((item) => (
                      <li key={item}>&gt; {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">
              How we act on metric changes
            </h2>
            <div className="space-y-4">
              {optimizationActions.map((item) => (
                <div key={item.trigger} className="border border-white/10 p-4">
                  <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                    Trigger: {item.trigger}
                  </p>
                  <p className="font-mono text-xs text-white/45 leading-relaxed">
                    {item.action}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="border border-white/15 bg-white/[0.015] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            Want these metrics for your pipeline?
          </h2>
          <p className="font-mono text-xs text-white/45 max-w-2xl mx-auto mb-6">
            Book a strategy call and we will map your current outbound baseline,
            target benchmarks, and reporting plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-7 py-3 border border-white/50 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Book a strategy call
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
