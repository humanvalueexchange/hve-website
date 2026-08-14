import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Workshops | Human Value Exchange",
  description: "Explore Human Value Exchange workshops."
};

export default function WorkshopsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#dce8df] px-6 py-24 text-[#10231e] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#44705c]">HVE Workshops</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Turn insight into a life you can feel.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536159]">Our facilitated workshops help individuals and teams see their current wealth clearly and choose the next meaningful move.</p>
          <Link className="mt-10 inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="mailto:hello@humanvalueexchange.com">Book a discovery call</Link>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {["Discover your wealth", "Align your next chapter", "Build together"].map((title, index) => (
            <article className="rounded-2xl border border-[#d8ddd5] p-7" key={title}>
              <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
              <h2 className="mt-10 text-2xl font-semibold text-[#10231e]">{title}</h2>
              <p className="mt-4 leading-7 text-[#536159]">A practical, grounded session designed to move from reflection to action.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
