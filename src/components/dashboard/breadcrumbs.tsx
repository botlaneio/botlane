export function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex gap-2 text-sm text-zinc-500">
      {items.map((item, index) => (
        <span className="flex gap-2" key={`${item}-${index}`}>
          <span>{item}</span>
          {index < items.length - 1 ? <span>/</span> : null}
        </span>
      ))}
    </nav>
  );
}
