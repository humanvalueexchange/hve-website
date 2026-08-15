import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";

const wealth = {
  time: { name: "Time Wealth", summary: "The freedom to direct your attention toward what matters.", body: "Time wealth is the ability to spend your finite hours intentionally. It grows when your commitments, systems, and boundaries reflect your priorities." },
  physical: { name: "Physical Wealth", summary: "The energy and capability to participate fully in your life.", body: "Physical wealth is built through strength, health, rest, and environments that support your vitality. It is the foundation that lets your ambitions become real." },
  mental: { name: "Mental Wealth", summary: "The clarity and resilience to meet life with agency.", body: "Mental wealth includes your attention, emotional regulation, curiosity, and capacity to learn. It helps you respond rather than simply react." },
  social: { name: "Social Wealth", summary: "The relationships and belonging that make life meaningful.", body: "Social wealth is the quality of your relationships, communities, and mutual support. It grows through trust, generosity, and honest connection." },
  financial: { name: "Financial Wealth", summary: "The resources and options that expand your freedom.", body: "Financial wealth is the ability to use money intentionally: to create stability, protect your time, and choose work and experiences aligned with your values." }
} as const;

export function generateStaticParams() {
  return Object.keys(wealth).map((slug) => ({ slug }));
}

export default function WealthPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const item = wealth[slug as keyof typeof wealth];
  if (!item) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">One of five</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">{item.name}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#d7ded8]">{item.summary}</p>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-9 text-[#536159]">{item.body}</p>
          <div className="mt-12 flex flex-wrap gap-6 border-t border-[#d8ddd5] pt-8">
            <Link className="font-semibold text-[#10231e] hover:text-[#b27a32]" href="/five-types">View all five types →</Link>
            <Link className="font-semibold text-[#10231e] hover:text-[#b27a32]" href="/workshops">Explore an HVE workshop →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
