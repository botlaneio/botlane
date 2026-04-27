import { LeadCaptureForm } from "@/components/lead-capture-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";

const checklist = [
  "Your main service offer and ideal client profile",
  "Current pipeline source mix (referrals, outbound, inbound)",
  "Monthly qualified meeting target",
  "Sales capacity and close process readiness",
];

const trustNotes = [
  { label: "Typical first response", value: "< 1 business day" },
  { label: "Average setup window", value: "14-21 days" },
  { label: "Commercial model", value: "Month-to-month" },
];

const socialProof = [
  {
    quote:
      "We moved from sporadic referrals to a predictable outbound rhythm we could finally plan around.",
    role: "Founder, Managed IT Services Firm",
  },
  {
    quote:
      "The weekly reporting was clear enough to make decisions fast instead of guessing what to fix.",
    role: "Revenue Lead, Cybersecurity Consultancy",
  },
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
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
            {trustNotes.map((item) => (
              <div key={item.label} className="border border-white/10 p-3 bg-black/30">
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="font-mono text-xs text-white/80">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-4">Request your call</h2>
          <p className="font-mono text-xs text-white/45 mb-4">
            We review every request manually. Share enough context so we can tailor the call to your pipeline stage.
          </p>
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

        <section className="grid lg:grid-cols-2 gap-6">
          {socialProof.map((item) => (
            <article key={item.role} className="border border-white/12 bg-white/[0.01] p-7">
              <p className="font-mono text-sm text-white/75 leading-relaxed mb-4">&quot;{item.quote}&quot;</p>
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{item.role}</p>
            </article>
          ))}
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
          <TrackedLink
            href="/pricing"
            eventName="cta_click"
            eventMeta={{ location: "book_call_direct_contacts", target: "/pricing" }}
            className="inline-flex mt-4 px-4 py-2 border border-white/30 text-white/75 text-[10px] font-mono uppercase tracking-widest cta-glow"
          >
            Review plans before booking
          </TrackedLink>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
