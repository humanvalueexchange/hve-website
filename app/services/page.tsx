import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { audiencePathways, engagementSteps, proofItems, serviceOfferings } from "@/lib/site-content";

export const metadata = {
  title: "How HVE Helps | Human Value Exchange",
  description: "Explore HVE assessments, workshops, coaching, consulting, and education across the Five Types of Wealth."
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">How HVE helps</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Practical support for a richer life, in every direction.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            Human Value Exchange helps people see what is happening across the Five Types of Wealth,
            choose the next meaningful move, and turn insight into practice.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us">
              Start with an assessment
            </Link>
            <Link className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="/five-types">
              Explore the framework
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Ways to work with HVE</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              Choose the level of support that fits your next step.
            </h2>
            <p className="mt-6 text-xl leading-9 text-[#536159]">
              Begin with clarity, then build the kind of support that makes meaningful change easier to sustain.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceOfferings.map((offering, index) => (
              <article className="rounded-2xl border border-[#d8ddd5] bg-white p-7" key={offering.slug}>
                <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                <h3 className="mt-6 text-2xl font-semibold text-[#10231e]">{offering.name}</h3>
                <p className="mt-4 text-lg leading-8 text-[#10231e]">{offering.summary}</p>
                <p className="mt-4 leading-7 text-[#536159]">{offering.details}</p>
                <Link className="mt-6 inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href="/work-with-us">
                  {offering.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">The HVE method</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              See clearly. Build deliberately. Review honestly.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {engagementSteps.map((step) => (
              <article className="rounded-2xl bg-[#dce8df] p-6" key={step.name}>
                <p className="text-sm font-semibold text-[#44705c]">{step.number}</p>
                <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">{step.name}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Grounded in practice</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">A framework shaped by lived experience.</h2>
            <p className="mt-6 text-lg leading-8 text-[#536159]">
              HVE is built through practice, relationships, education, and honest reflection. We will add verified stories and outcomes as they become available.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {proofItems.map((item) => (
              <article className="rounded-2xl border border-[#d8ddd5] bg-white p-7" key={item.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#44705c]">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#10231e]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{item.description}</p>
                <a className="mt-6 inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href={item.href}>
                  {item.linkLabel} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Who HVE helps</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              The framework belongs in real lives and real work.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiencePathways.map((audience) => (
              <article className="rounded-2xl bg-white p-7" key={audience.name}>
                <h3 className="text-2xl font-semibold text-[#10231e]">{audience.name}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Our boundaries</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              Practical support, grounded in judgment.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#536159]">
            <p>HVE does not promise instant transformation or treat one form of wealth as the answer to every challenge.</p>
            <p>Our education and coaching work does not replace medical, mental health, legal, tax, investment, or insurance professionals.</p>
            <p>We use technology to create capacity, not as a substitute for human judgment, relationships, or responsibility.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Find your next move</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Start with the form of wealth that needs your attention now.
            </h2>
          </div>
          <Link className="shrink-0 rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us">
            Work with HVE
          </Link>
        </div>
      </section>
    </main>
  );
}
