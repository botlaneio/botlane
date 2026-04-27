import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const principles = [
  "Clarity over hype: meetings booked is the core KPI.",
  "Systems over heroics: repeatable outbound beats random effort.",
  "Transparency over vanity: full visibility into campaign performance.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            01 // ABOUT_BOTLANE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Built for IT firms that want predictable pipeline
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl leading-relaxed">
            Botlane helps consultants, MSPs, and cybersecurity teams replace
            inconsistent referrals with a structured outbound engine. We focus
            on practical execution, transparent reporting, and qualified
            meetings that your sales team can actually close.
          </p>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">Why teams choose us</h2>
            <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
              <li>&gt; Deep focus on B2B service outbound, not generic marketing.</li>
              <li>&gt; Month-to-month model with accountability built in.</li>
              <li>&gt; Hands-on optimization based on live campaign feedback.</li>
              <li>&gt; Clear ownership split so execution does not stall.</li>
            </ul>
          </article>

          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">Operating principles</h2>
            <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
              {principles.map((item) => (
                <li key={item}>&gt; {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="border border-white/15 bg-white/[0.015] p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3">
            See how we run campaigns end-to-end
          </h2>
          <p className="font-mono text-xs text-white/45 max-w-2xl mx-auto mb-6">
            Explore the workflow and understand exactly how outreach is built,
            launched, and improved week after week.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex px-7 py-3 border border-white/50 text-white font-mono text-xs uppercase tracking-widest cta-glow"
          >
            View how it works
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
