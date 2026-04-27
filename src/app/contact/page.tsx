import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-16 pt-12 pb-20 flex flex-col gap-12">
        <SiteHeader />
        <section className="border border-white/15 bg-white/[0.015] p-10 text-center">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-6">
            08 // INITIALIZE_SEQUENCE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">
            Book a Strategy Call
          </h1>
          <p className="font-mono text-sm text-white/45 max-w-2xl mx-auto mb-8">
            Use this page as the dedicated contact route. You can replace this
            with a form, scheduler embed, or CRM integration when ready.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 border border-white/50 font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
              Start Onboarding
            </button>
            <Link
              href="/"
              className="px-8 py-4 border border-white/25 font-mono text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              Back Home
            </Link>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 text-left">
            <div>
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                Office
              </p>
              <p className="font-mono text-xs text-white/45 leading-relaxed normal-case">
                30 N Gould St Ste R
                <br />
                Sheridan, WY 82801
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                Admin
              </p>
              <a
                href="mailto:admin@botlane.io"
                className="font-mono text-xs text-white/45 hover:text-white/75 transition-colors normal-case"
              >
                admin@botlane.io
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
                Support
              </p>
              <a
                href="mailto:help@botlane.io"
                className="font-mono text-xs text-white/45 hover:text-white/75 transition-colors normal-case"
              >
                help@botlane.io
              </a>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
