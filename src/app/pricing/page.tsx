import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

const tiers = [
  {
    tier: "LAUNCH",
    price: "$1,500/mo",
    fit: "Best for early outbound testing",
    details: [
      "500 contacts/mo",
      "Cold email only",
      "2 sending domains",
      "Weekly performance summary",
    ],
  },
  {
    tier: "GROWTH",
    price: "$2,500/mo",
    fit: "Best for consistent pipeline creation",
    details: [
      "1,000 contacts/mo",
      "Email + LinkedIn",
      "4 sending domains",
      "Reply handling + meeting qualification",
    ],
    featured: true,
  },
  {
    tier: "SCALE",
    price: "$5,000/mo",
    fit: "Best for teams ready to scale fast",
    details: [
      "2,000+ contacts/mo",
      "Multi-channel outbound",
      "Dedicated support",
      "Custom reporting + strategic reviews",
    ],
  },
];

const trustSignals = [
  { label: "Average setup time", value: "14-21 days" },
  { label: "Reporting cadence", value: "Weekly + monthly" },
  { label: "Contract model", value: "Month-to-month" },
  { label: "Primary KPI", value: "Qualified meetings booked" },
];

const guarantees = [
  "No long-term lock-ins. Continue only if delivery stays strong.",
  "Clear scope before launch: target profile, channels, and volume.",
  "Access to campaign data and activity logs from day one.",
];

const faqs = [
  {
    q: "How quickly can campaigns go live?",
    a: "Most clients are live in 2-3 weeks after onboarding assets are approved.",
  },
  {
    q: "What do we track each week?",
    a: "Lead quality, sends, replies, positive intent, meetings booked, and conversion trends.",
  },
  {
    q: "Is there a setup fee?",
    a: "Yes, a one-time setup fee applies based on infrastructure and channel scope.",
  },
];

const fitGuide = [
  {
    tier: "LAUNCH",
    idealFor: "Founder-led teams starting outbound for the first time.",
    checks: [
      "Need initial pipeline consistency",
      "Prefer lower monthly commitment",
      "Single-channel testing is enough for now",
    ],
  },
  {
    tier: "GROWTH",
    idealFor: "Service firms that need predictable meetings every month.",
    checks: [
      "Ready for email + LinkedIn together",
      "Need stronger qualification support",
      "Want the best cost-to-volume balance",
    ],
  },
  {
    tier: "SCALE",
    idealFor: "Teams with sales capacity that can absorb higher lead flow.",
    checks: [
      "Need multi-channel volume at speed",
      "Require deeper strategic support",
      "Optimizing for aggressive pipeline goals",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />
        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            05 // TRUST_FIRST_PRICING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Pricing built for confidence, not confusion
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            Every plan is transparent about scope, output, and accountability.
            We optimize for qualified meetings booked, share performance data
            regularly, and avoid long lock-in commitments.
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustSignals.map((signal) => (
            <article
              key={signal.label}
              className="border border-white/12 bg-white/[0.01] p-5"
            >
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                {signal.label}
              </p>
              <p className="font-mono text-lg md:text-xl text-white/90 font-bold">
                {signal.value}
              </p>
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
            Plan comparison
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <article
                key={tier.tier}
                className={`border p-7 ${
                  tier.featured
                    ? "border-white/45 bg-white/[0.03]"
                    : "border-white/12 bg-white/[0.01]"
                }`}
              >
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                  {tier.fit}
                </p>
                <h3 className="font-bold uppercase text-lg">{tier.tier}_TIER</h3>
                <p className="font-mono text-3xl font-bold my-5">{tier.price}</p>
                <ul className="flex flex-col gap-3 font-mono text-xs text-white/45 mb-7">
                  {tier.details.map((detail) => (
                    <li key={detail}>&gt; {detail}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex px-4 py-2 border border-white/30 text-white/75 text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Discuss {tier.tier} plan
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-white/12 bg-white/[0.01] p-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            Which plan is right for you?
          </h2>
          <p className="font-mono text-xs text-white/45 mb-6">
            Use this quick fit guide to shortlist the most practical tier
            before booking your strategy call.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {fitGuide.map((item) => (
              <article key={item.tier} className="border border-white/10 p-5">
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                  {item.tier}
                </p>
                <p className="font-mono text-xs text-white/50 leading-relaxed mb-4">
                  {item.idealFor}
                </p>
                <ul className="flex flex-col gap-2 font-mono text-xs text-white/45">
                  {item.checks.map((check) => (
                    <li key={check}>&gt; {check}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">Trust guarantees</h2>
            <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
              {guarantees.map((item) => (
                <li key={item}>&gt; {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">Frequently asked</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
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

        <section className="border border-white/15 bg-white/[0.015] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            Want to see if this fits your firm?
          </h2>
          <p className="font-mono text-xs text-white/45 max-w-2xl mx-auto mb-6">
            We walk through your current outbound, expected meeting targets, and
            recommended tier before you commit.
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
