import Link from "next/link";
import type { TimeWealthWorkshop } from "@/lib/time-wealth-content";

export function TimeWealthWorkshopCard({ workshop }: { workshop: TimeWealthWorkshop }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#d8ddd5] bg-white p-7" data-route-placeholder={workshop.futurePath} id={workshop.slug}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b27a32]">{workshop.format} · {workshop.duration}</p>
      <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">{workshop.name}</h3>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#44705c]">{workshop.audience}</p>
      <p className="mt-5 leading-7 text-[#536159]">{workshop.outcome}</p>
      <details className="mt-6 border-t border-[#d8ddd5] pt-5">
        <summary className="cursor-pointer font-semibold text-[#10231e] marker:text-[#b27a32]">Workshop focus</summary>
        <ul className="mt-4 space-y-2 leading-7 text-[#536159]">
          {workshop.focus.map((item) => <li key={item}>+ {item}</li>)}
        </ul>
      </details>
      <Link className="mt-auto pt-7 font-semibold text-[#10231e] hover:text-[#b27a32]" href={workshop.ctaHref}>
        {workshop.ctaLabel} →
      </Link>
    </article>
  );
}
