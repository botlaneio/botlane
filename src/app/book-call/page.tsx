import { LeadCaptureForm } from "@/components/lead-capture-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const checklist = [
  "Your main service offer and ideal client profile",
  "Current pipeline source mix (referrals, outbound, inbound)",
  "Monthly qualified meeting target",
  "Sales capacity and close process readiness",
];

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />

        <section className="border border-white/12 bg-white/[0.01] p-8 md:p-10 text-center">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
            08 // BOOK_A_CALL
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-5">
            Book a strategy call
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-3xl mx-auto leading-relaxed mb-8">
            We will review your current outbound situation, identify constraints,
            and recommend the right path to predictable meetings.
          </p>
          <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest">
            Submit the form below for fastest response.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-4">Request your call</h2>
          <LeadCaptureForm sourcePage="book-call" />
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">What we cover on the call</h2>
            <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
              <li>&gt; Pipeline bottleneck diagnosis by stage</li>
              <li>&gt; Plan recommendation by growth goals and capacity</li>
              <li>&gt; Timeline and setup dependencies</li>
              <li>&gt; Reporting cadence and accountability model</li>
            </ul>
          </article>
          <article className="border border-white/12 bg-white/[0.01] p-7">
            <h2 className="text-xl font-bold uppercase mb-4">Prep checklist</h2>
            <ul className="flex flex-col gap-3 font-mono text-xs text-white/45">
              {checklist.map((item) => (
                <li key={item}>&gt; {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="border border-white/12 bg-white/[0.01] p-7">
          <h2 className="text-xl font-bold uppercase mb-4">Direct contacts</h2>
          <p className="font-mono text-xs text-white/45 normal-case">
            Admin:
            {" "}
            <a href="mailto:admin@botlane.io" className="text-white/75 hover:text-white transition-colors">
              admin@botlane.io
            </a>
            {" | "}
            Support:
            {" "}
            <a href="mailto:help@botlane.io" className="text-white/75 hover:text-white transition-colors">
              help@botlane.io
            </a>
          </p>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
