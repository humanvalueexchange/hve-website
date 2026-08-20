import Link from "next/link";
import type { TimeWealthOffering } from "@/lib/time-wealth-content";

export function TimeWealthOfferCard({ offer }: { offer: TimeWealthOffering }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#d8ddd5] bg-white p-7" data-route-placeholder={offer.futurePath} id={offer.slug}>
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b27a32]">Time Wealth offer</p>
        {offer.future ? (
          <span className="rounded-full bg-[#f6f3ec] px-3 py-1 text-xs font-semibold text-[#536159]">Future offering</span>
        ) : null}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">{offer.name}</h3>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#44705c]">{offer.audience}</p>
      <p className="mt-5 leading-7 text-[#536159]">{offer.outcome}</p>
      <details className="mt-6 border-t border-[#d8ddd5] pt-5">
        <summary className="cursor-pointer font-semibold text-[#10231e] marker:text-[#b27a32]">
          {offer.future ? "What it will include" : "What you receive"}
        </summary>
        <ul className="mt-4 space-y-2 leading-7 text-[#536159]">
          {offer.deliverables.map((deliverable) => <li key={deliverable}>+ {deliverable}</li>)}
        </ul>
      </details>
      <Link className="mt-auto pt-7 font-semibold text-[#10231e] hover:text-[#b27a32]" href={offer.ctaHref}>
        {offer.ctaLabel} →
      </Link>
    </article>
  );
}
