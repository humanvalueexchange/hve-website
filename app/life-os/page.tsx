import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "HVE Life OS | Human Value Exchange",
  description: "Explore the future vision for HVE Life OS, a personal operating system for human flourishing."
};

const capabilities = [
  "Assessments",
  "Dashboards",
  "Daily reports",
  "Personal recommendations",
  "Partner coaching",
  "AI-assisted workflows"
];

export default function LifeOsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">Future vision</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">HVE Life OS</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            A future personal operating system for human flourishing.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The vision</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Measure. Interpret. Recommend. Improve.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              HVE Life OS is the future way to see the whole picture of a human life: what is changing, what needs attention, and which next action is most likely to create meaningful progress.
            </p>
            <p>
              It will connect reflection, measurement, practical experiments, and human guidance across all five forms of wealth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">The Five Wealth Scoreboard</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Make the invisible easier to see.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              The scoreboard is not a single score for your worth. It is a practical set of signals that could help you notice patterns and choose better next steps.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Time", "Attention, energy, calendar ownership, and leverage."],
              ["Physical", "Strength, vitality, nutrition, movement, sleep, and recovery."],
              ["Mental", "Clarity, learning, resilience, purpose, and inner capacity."],
              ["Social", "Relationships, trust, contribution, partnership, and belonging."],
              ["Financial", "Protection, cash flow, capital, ownership, and options."]
            ].map(([title, description], index) => (
              <article className="rounded-2xl bg-white p-7" key={title}>
                <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold text-[#10231e]">{title} Wealth</h3>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Customer Zero</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Start with practical, privacy-conscious experiments.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              HVE begins by testing the framework in real life: with simple measurements, useful routines, and honest feedback from the people using it.
            </p>
            <p>
              The system should earn trust before it expands. Privacy, user control, and human context come before automation or scale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Future capabilities</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A system that helps insight become action.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div className="rounded-2xl border border-[#365448] px-6 py-5 text-lg text-[#d7ded8]" key={capability}>{capability}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#d8ddd5] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Important boundary</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#10231e]">A roadmap, not a launched product.</h2>
          <p className="mt-5 text-lg leading-8 text-[#536159]">
            HVE Life OS is a future roadmap, not a current medical, financial, or therapeutic product. It will not replace qualified professionals, and no app functionality is being represented as available today.
          </p>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Follow the journey</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">The future is built in public.</h2>
          </div>
          <a className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="https://humanvalueexchange.blog">
            Follow the journey on the blog
          </a>
        </div>
      </section>
    </main>
  );
}
