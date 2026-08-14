import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "About | Human Value Exchange",
  description: "Learn about the Human Value Exchange framework."
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec]">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">About HVE</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A richer definition of a rich life.
          </h1>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.3fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">Human value is the foundation of lasting wealth.</h2>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>Human Value Exchange exists to help people make better investments in the parts of life that matter most.</p>
            <p>We believe wealth should create more freedom, sovereignty, self-mastery, and human flourishing—not simply a larger number in an account.</p>
            <p>The Five Types of Wealth turn that belief into a framework you can understand, discuss, and act on.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
