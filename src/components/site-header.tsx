"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { TrackedLink } from "@/components/tracked-link";

const NAV_ITEMS = [
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "METRICS", href: "/metrics" },
  { label: "PRICING", href: "/pricing" },
  { label: "CONTACT", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthenticated = status === "authenticated";

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="w-full border-b border-white/15 pb-4">
      <div className="flex justify-between items-end gap-4 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-end md:gap-8">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="w-10 h-10 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors accent-interactive"
            aria-label="Go to home"
            onClick={closeMobileMenu}
          >
            <span className="font-mono text-xs">BT</span>
          </Link>
          <div>
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
              BOTLANE.IO
            </Link>
            <p className="font-mono text-xs text-white/40 tracking-widest">
              PIPELINE-AS-A-SERVICE // v1.0.0
            </p>
          </div>
        </div>

        <nav className="hidden md:flex justify-self-center justify-center md:translate-x-4 gap-8 font-mono text-xs tracking-widest text-white/35">
          {NAV_ITEMS.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              eventName="nav_click"
              eventMeta={{ location: "header_desktop", target: item.href }}
              aria-current={pathname === item.href ? "page" : undefined}
              className={
                pathname === item.href
                  ? "text-white border-b border-indigo-300/70 pb-1 shadow-[0_6px_16px_rgba(129,140,248,0.2)] transition-colors"
                  : "hover:text-white transition-colors"
              }
            >
              {item.label}
            </TrackedLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <TrackedLink
              href="/dashboard"
              eventName="nav_click"
              eventMeta={{ location: "header_desktop", target: "/dashboard" }}
              className="inline-flex px-4 py-2 border border-emerald-400/65 text-emerald-300 uppercase font-mono text-xs accent-interactive"
            >
              Dashboard
            </TrackedLink>
          ) : (
            <>
              <TrackedLink
                href="/sign-in"
                eventName="nav_click"
                eventMeta={{ location: "header_desktop", target: "/sign-in" }}
                className="inline-flex px-4 py-2 border border-white/25 text-white/75 uppercase font-mono text-xs accent-interactive"
              >
                Sign in
              </TrackedLink>
              <TrackedLink
                href="/sign-up"
                eventName="nav_click"
                eventMeta={{ location: "header_desktop", target: "/sign-up" }}
                className="inline-flex px-4 py-2 border border-indigo-300/60 text-white uppercase font-mono text-xs cta-glow"
              >
                Sign up
              </TrackedLink>
              <TrackedLink
                href="/book-call"
                eventName="cta_click"
                eventMeta={{ location: "header_desktop", target: "/book-call" }}
                className="inline-flex px-4 py-2 border border-white/40 text-white/70 uppercase font-mono text-xs cta-glow"
              >
                Initialize
              </TrackedLink>
            </>
          )}
        </div>

        <button
          type="button"
          className="md:hidden w-10 h-10 border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white/60 transition-colors accent-interactive"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden mt-4 border border-white/12 bg-white/[0.02] p-4">
          <div className="flex flex-col gap-3 font-mono text-xs tracking-widest text-white/40">
            {NAV_ITEMS.map((item) => (
              <TrackedLink
                key={item.href}
                href={item.href}
                eventName="nav_click"
                eventMeta={{ location: "header_mobile", target: item.href }}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={closeMobileMenu}
                className={
                  pathname === item.href
                    ? "text-white border border-indigo-300/55 bg-indigo-400/10 px-3 py-2"
                    : "hover:text-white border border-transparent px-3 py-2 transition-colors"
                }
              >
                {item.label}
              </TrackedLink>
            ))}
          </div>
          <div className="mt-4 grid gap-2">
            {isAuthenticated ? (
              <TrackedLink
                href="/dashboard"
                eventName="nav_click"
                eventMeta={{ location: "header_mobile", target: "/dashboard" }}
                onClick={closeMobileMenu}
                className="w-full px-4 py-2 border border-emerald-400/65 text-emerald-300 uppercase font-mono text-xs text-center accent-interactive"
              >
                Dashboard
              </TrackedLink>
            ) : (
              <>
                <TrackedLink
                  href="/sign-in"
                  eventName="nav_click"
                  eventMeta={{ location: "header_mobile", target: "/sign-in" }}
                  onClick={closeMobileMenu}
                  className="w-full px-4 py-2 border border-white/30 text-white/75 uppercase font-mono text-xs text-center accent-interactive"
                >
                  Sign in
                </TrackedLink>
                <TrackedLink
                  href="/sign-up"
                  eventName="nav_click"
                  eventMeta={{ location: "header_mobile", target: "/sign-up" }}
                  onClick={closeMobileMenu}
                  className="w-full px-4 py-2 border border-indigo-300/60 text-white uppercase font-mono text-xs text-center cta-glow"
                >
                  Sign up
                </TrackedLink>
              </>
            )}
          </div>
          {!isAuthenticated ? (
            <TrackedLink
              href="/book-call"
              eventName="cta_click"
              eventMeta={{ location: "header_mobile", target: "/book-call" }}
              onClick={closeMobileMenu}
              className="mt-4 w-full px-4 py-2 border border-white/40 text-white/70 uppercase font-mono text-xs cta-glow"
            >
              Initialize
            </TrackedLink>
          ) : null}
        </nav>
      )}
    </header>
  );
}
