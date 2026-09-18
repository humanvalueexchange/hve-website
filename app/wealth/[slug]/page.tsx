import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { engagementSteps } from "@/lib/site-content";
import { WealthOfferCard } from "@/components/wealth-offer-card";
import { wealthContent } from "@/lib/wealth-content";

export function generateStaticParams() {
  return wealthContent.map(({ slug }) => ({ slug }));
}

export default function WealthPage({ params }: { params: { slug: string } }) {
  const item = wealthContent.find((wealth) => wealth.slug === params.slug);
  if (!item) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">One of five</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">{item.name}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">{item.definition}</p>
          <Link className="mt-10 inline-block rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us">
            Start with an assessment
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">Why it matters</h2>
            <p className="text-xl leading-9 text-[#536159]">{item.whyItMatters}</p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#dce8df] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#44705c]">Signs of abundance</p>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-[#10231e]">
                {item.abundance.map((sign) => <li key={sign}>+ {sign}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d8ddd5] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Signs of depletion</p>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-[#536159]">
                {item.depletion.map((sign) => <li key={sign}>- {sign}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Common failure patterns</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">Where good intentions get stuck.</h2>
            </div>
            <ul className="space-y-4 text-lg leading-8 text-[#536159]">
              {item.failurePatterns.map((pattern) => <li key={pattern}>• {pattern}</li>)}
            </ul>
          </div>

          <div className="mt-20 grid gap-12 border-t border-[#d8ddd5] pt-12 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">What improvement can look like</h2>
            <p className="text-lg leading-8 text-[#536159]">{item.improvement}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">The HVE offer ladder</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Start where you are and build from there.</h2>
            <p className="mt-6 text-lg leading-8 text-[#536159]">
              Every pillar uses the same pathway: explore the idea, assess the current state, build a plan, practice the change, and review what you learn.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {item.offers.map((offer) => <WealthOfferCard key={offer.slug} offer={offer} />)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">How HVE helps</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">See the whole picture, then make one meaningful move.</h2>
            <p className="mt-6 text-lg leading-8 text-[#536159]">{item.helps}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {engagementSteps.map((step) => (
              <div className="rounded-2xl border border-[#d8ddd5] p-6" key={step.name}>
                <p className="text-sm font-semibold text-[#b27a32]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#10231e]">{step.name}</h3>
                <p className="mt-3 leading-7 text-[#536159]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-[#d8ddd5] bg-[#f6f3ec] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#44705c]">Important boundary</p>
            <p className="mt-4 text-lg leading-8 text-[#536159]">{item.boundaries}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us">
              Discuss your next step
            </Link>
            <Link className="rounded-full border border-[#10231e] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#10231e] hover:text-white" href="/workshops">
              Explore workshops
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
