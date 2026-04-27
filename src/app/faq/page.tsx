import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const faqItems = [
  {
    q: "How long until we see campaign activity?",
    a: "Most teams are operational in 2-3 weeks depending on approval speed and setup inputs.",
  },
  {
    q: "Do you guarantee a specific number of meetings?",
    a: "We align on targets and optimize toward them, but exact outcomes depend on market conditions and offer strength.",
  },
  {
    q: "What channels do you run?",
    a: "Typically email and LinkedIn, mapped to your plan and audience behavior.",
  },
  {
    q: "How is performance reported?",
    a: "Weekly execution updates and monthly strategic review with KPI trend context.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No fixed long-term lock-in by default; commercial terms are defined in your agreement.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            SUPPORT // FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Frequently asked questions
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            Quick answers to common questions about setup, delivery, reporting,
            and expectations.
          </p>
        </section>

        <section className="grid gap-4">
          {faqItems.map((item) => (
            <article key={item.q} className="border border-white/12 bg-white/[0.01] p-6">
              <h2 className="text-lg font-bold mb-2">{item.q}</h2>
              <p className="font-mono text-xs text-white/45 leading-relaxed">{item.a}</p>
            </article>
          ))}
        </section>

        <section className="border border-white/15 bg-white/[0.015] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            Need a direct answer for your scenario?
          </h2>
          <p className="font-mono text-xs text-white/45 max-w-2xl mx-auto mb-6">
            Reach out and we will help you map fit, constraints, and expected
            rollout based on your current sales motion.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-7 py-3 border border-white/50 text-white font-mono text-xs uppercase tracking-widest cta-glow"
          >
            Contact us
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
