import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "About | Human Value Exchange",
  description: "Meet the people stewarding the Five Types of Wealth framework."
};

const wealthStewards = [
  ["Time Wealth", "Hans Westphal & Wolfgang Westphal", "The foundation for every other form of wealth.", "bg-[#dce8df]"],
  ["Physical Wealth", "Alan Warner", "Health, energy, resilience, and sustainable performance.", "bg-white"],
  ["Mental Wealth", "Emerging", "Clarity, resilience, purpose, and inner capacity.", "bg-white"],
  ["Social Wealth", "Emerging", "Relationships, trust, contribution, and belonging.", "bg-white"],
  ["Financial Wealth", "Brian Bogaert", "Protection, cash flow, ownership, and meaningful choice.", "bg-white"]
] as const;

const stewards = [
  {
    name: "Hans H. Westphal",
    role: "Founder | Vision & Time Wealth",
    paragraphs: [
      "Hans Westphal is a technology strategist, business advisor, and founder of Human Value Exchange.",
      "Throughout his career he has worked at the intersection of business transformation, emerging technology, and human potential, helping organizations understand how technology can create meaningful value.",
      "His current focus is helping individuals and organizations create Time Wealth through AI, Microsoft Copilot, workflow optimization, better systems, and human-centered design.",
      "Hans founded Human Value Exchange after recognizing that many of society's challenges stem from an incomplete definition of wealth. While financial assets matter, lasting prosperity also depends on time, health, purpose, relationships, and personal freedom.",
      "Through HVE, Hans is working to create a practical framework that helps people strengthen all five forms of wealth and build more intentional, resilient, and abundant lives."
    ]
  },
  {
    name: "Wolfgang Westphal",
    role: "Co-Founder | Time Wealth",
    paragraphs: [
      "Wolfgang Westphal helps individuals and organizations create greater capacity through disciplined execution, modern productivity practices, and practical technology adoption.",
      "As Co-Founder of Human Value Exchange, Wolfgang supports the Time Wealth pillar, helping people reduce friction, improve workflows, and reclaim time for the things that matter most.",
      "His approach combines practical implementation, accountability, and continuous improvement to create meaningful and sustainable change."
    ]
  },
  {
    name: "Brian Bogaert",
    role: "Chief Freedom Officer",
    paragraphs: [
      <>Brian's gift is helping people understand complex ideas, especially money, investing, and personal <strong className="font-semibold text-[#10231e]">Freedom</strong>, in ways that are relatable, practical, and actionable.</>,
      <>At his core, Brian is driven by one value above all others: <strong className="font-semibold text-[#10231e]">Freedom</strong>.</>,
      "After leaving the corporate world at age 37, Brian focused on creating greater freedom through investing, entrepreneurship, personal growth, and continuous learning. He has spent years studying the principles of wealth creation, self-mastery, and human potential through leading educational programs, mentorship communities, and transformational training organizations.",
      "Brian is certified in Neuro-Linguistic Programming (NLP), a graduate of Landmark, served as Lead Trainer for Mentor Discover Inspire in Toronto, and has worked with countless coaches, mentors, and educators from around the world. His passion for learning eventually led him to become a licensed insurance professional, helping families build and protect multi-generational wealth.",
      <>More than a decade ago, Brian founded <strong className="font-semibold text-[#10231e]">Next Level Success</strong>, a wealth coaching practice focused on helping individuals take greater ownership of their financial lives and create lasting freedom. He remains deeply committed to mentoring clients and sharing practical strategies that help people move from intention to implementation.</>,
      "Like many people, reading Rich Dad Poor Dad changed Brian's perspective on life. Unlike most, he immediately applied those lessons through real estate investing and ultimately achieved the freedom to leave traditional employment behind. Along that journey, some of his most influential lessons centered on personal responsibility, integrity, creating value, and building systems that generate freedom rather than simply exchanging time for money.",
      "Today, Brian lives with his family on an acreage outside Calgary, working from the home he once imagined, driving the car he once dreamed about, and enjoying the life he intentionally designed.",
      <>Within Human Value Exchange, Brian serves as a guide for <strong className="font-semibold text-[#10231e]">Financial Wealth</strong>. He believes that true wealth is not measured solely by money but by the freedom, choices, and opportunities money can help create. His passion is helping others develop the mindset, habits, and knowledge needed to build a life of greater sovereignty and possibility.</>,
      <>Brian often jokes that he began life as &quot;Mr. Anderson&quot; from The Matrix, searching for something more, and eventually became &quot;Morpheus,&quot; dedicated to helping others discover what freedom means for themselves. For him, Human Value Exchange is the perfect expression of mentorship: people sharing what they have learned with one another so that everyone can grow, benefit, and thrive.</>
    ]
  },
  {
    name: "Alan Warner",
    role: "Physical Wealth Lead",
    paragraphs: [
      "Alan Warner leads the Physical Wealth pillar within Human Value Exchange.",
      "His work focuses on helping people improve health, energy, resilience, and sustainable performance through practical lifestyle change.",
      "Full profile coming soon."
    ]
  }
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">About Human Value Exchange</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Meet the Stewards of the Five Types of Wealth</h1>
          <div className="mt-8 max-w-3xl space-y-5 text-xl leading-8 text-[#d7ded8]">
            <p>Human Value Exchange was founded on a simple belief:</p>
            <p className="font-semibold text-[#f6f3ec]">Wealth is more than money.</p>
            <p>Many people spend years pursuing financial success while struggling with time, health, relationships, purpose, or personal freedom.</p>
            <p>We created Human Value Exchange to broaden the conversation.</p>
            <p>Our Five Types of Wealth framework helps individuals, families, professionals, and organizations strengthen the resources that contribute to a meaningful, resilient, and abundant life.</p>
            <p>Today HVE brings together practitioners, educators, business leaders, and specialists who share a common mission:</p>
            <p className="font-semibold text-[#f6f3ec]">Helping people build greater freedom, capacity, and human flourishing.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The framework</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Five forms of wealth. One whole life.</h2>
            <p className="mt-6 text-lg leading-8 text-[#536159]">
              Each form of wealth contributes to the freedom, resilience, and capacity required to live and work well.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wealthStewards.map(([type, steward, description, background]) => (
              <article className={`rounded-2xl p-7 ${background}`} key={type}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#44705c]">{type}</p>
                <h3 className="mt-6 text-2xl font-semibold text-[#10231e]">{steward}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-lg leading-8 text-[#536159]">
            While all five forms of wealth matter, Human Value Exchange currently leads with Time Wealth because time is the foundation from which physical health, mental clarity, relationships, and financial resilience can grow.
          </p>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">The stewards</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">People who turn the framework into practice.</h2>
          </div>
          <div className="mt-12 space-y-6">
            {stewards.map((steward, index) => (
              <article className="grid gap-8 rounded-2xl bg-white p-7 sm:p-10 md:grid-cols-[minmax(190px,0.7fr)_1.5fr] md:gap-12" key={steward.name}>
                <div>
                  <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[#10231e]">{steward.name}</h3>
                  <p className="mt-3 font-semibold text-[#44705c]">{steward.role}</p>
                </div>
                <div className="space-y-5 text-lg leading-8 text-[#536159]">
                  {steward.paragraphs.map((paragraph, paragraphIndex) => <p key={`${steward.name}-${paragraphIndex}`}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#d8ddd5] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Core belief</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#10231e] sm:text-4xl">True wealth is not measured solely by what you accumulate, but by the freedom and choices it creates.</h2>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Join the journey</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Build a richer life, in every direction.</h2>
            <p className="mt-6 text-lg leading-8 text-[#d7ded8]">
              Human Value Exchange is building a community centered on freedom, sovereignty, self-mastery, and human flourishing.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#d7ded8]">
              Whether you&apos;re looking to create more Time Wealth, improve your health, strengthen your finances, or explore the broader Five Types of Wealth framework, we invite you to join the conversation.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/five-types">
              Explore the Five Types of Wealth
            </Link>
            <Link className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold text-white transition hover:border-white" href="/work-with-us">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
