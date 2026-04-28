import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/leads", label: "Leads" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-white/10 bg-black px-4 py-5 md:block">
      <Link className="block text-lg font-semibold text-white" href="/dashboard">
        Botlane
      </Link>
      <nav className="mt-8 grid gap-1">
        {navItems.map((item) => (
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-white"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
