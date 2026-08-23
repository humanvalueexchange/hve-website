import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "About | Human Value Exchange",
  description: "Meet the people building Human Value Exchange around the Five Types of Wealth framework."
};

const wealthTypes = [
  ["Time Wealth", "The foundation for every other form of wealth. Create greater freedom, focus, and capacity by using time more intentionally.", "bg-[#dce8df]"],
  ["Physical Wealth", "Health, energy, resilience, and sustainable performance that support a strong and capable life.", "bg-white"],
  ["Mental Wealth", "Clarity, purpose, self-mastery, learning, and the inner capacity to navigate life well.", "bg-white"],
  ["Social Wealth", "Relationships, trust, contribution, community, and a meaningful sense of belonging.", "bg-white"],
  ["Financial Wealth", "Resources, resilience, ownership, and meaningful choice that support greater freedom and sovereignty.", "bg-white"]
] as const;

const stewards = [
  {
    name: "Hans H. Westphal",
    image: "/hans-linkedin-pic.jpg",
    role: "Founder | Vision & Human Value Exchange",
    paragraphs: [
      "Hans Westphal is the founder of Human Value Exchange. Over a career spanning more than twenty-five years, he moved from writing code on the developer side of the industry to building business and financial systems for some of the world's largest companies — a path that taught him what technology can do, and exactly where it stops short.",
      "That experience led him to the realization that now drives his life's work: many of society's challenges stem from an incomplete definition of wealth. Financial assets matter, but lasting prosperity also depends on time, health, purpose, relationships, and personal freedom. You can optimize your portfolio and still feel poor. Human Value Exchange exists to correct that imbalance.",
      "He co-founded the company with his son Wolfgang, and Hans plays the founder's role in a true startup — getting everything going across all the pillars. That means standing up the whole system rather than running a single practice: the framework, the operating model, the products, and the way it all gets delivered. His job is to build the machine so every part of Human Value Exchange serves the whole human being.",
      "In parallel, Hans has walked a quieter, longer path — one he is only now able to name. For nearly fifteen years he has studied with Mama Laurie in the 7th Ray Mystery School tradition, and today holds a Guide's role in the school's teacher lineage; his daily meditation and journaling, now over one thousand sessions, is the quiet discipline behind everything else. But the deepest lesson did not arrive in the chair. For a long time he was looking for his purpose in the path of initiation; it was, all along, in the path of relationship. And there his life is lived.",
      "For thirty-five years Hans has walked alongside his wife Jenna, who he now believes has been his greatest strength the entire time — and within that, he and Jenna have raised their two children, Wolfgang, now twenty-two, and Willow, twenty. This is the householder path: spiritual growth, family, health, and service woven into one life. As he wrote in his latest letter to Mama Laurie: \"I am finally beginning to see the garden.\"",
      "Within Human Value Exchange, Hans turns the Five Types of Wealth into something people can actually live — a practical, repeatable framework that helps individuals and families build more intentional, resilient, and abundant lives.",
      "For Hans, the point was never to win one part of the game. It was to live the whole thing."
    ]
  },
  {
    name: "Brian Bogaert",
    image: "/brian-linkedin-pic.jpg",
    role: "Chief Freedom Officer",
    paragraphs: [
      <>Brian's gift is helping people understand complex ideas, especially money, investing, and personal <strong className="font-semibold text-[#10231e]">Freedom</strong>, in ways that are relatable, practical, and actionable.</>,
      <>At his core, Brian is driven by one value above all others: <strong className="font-semibold text-[#10231e]">Freedom</strong>.</>,
      "After leaving the corporate world at age 37, Brian focused on creating greater freedom through investing, entrepreneurship, personal growth, and continuous learning. He has spent years studying the principles of wealth creation, self-mastery, and human potential through leading educational programs, mentorship communities, and transformational training organizations.",
      "Brian is certified in Neuro-Linguistic Programming (NLP), a graduate of Landmark, served as Lead Trainer for Mentor Discover Inspire in Toronto, and has worked with countless coaches, mentors, and educators from around the world. His passion for learning eventually led him to become a licensed insurance professional, helping families build and protect multi-generational wealth.",
      <>More than a decade ago, Brian founded <strong className="font-semibold text-[#10231e]">Next Level Success</strong>, a wealth coaching practice focused on helping individuals take greater ownership of their financial lives and create lasting freedom. He remains deeply committed to mentoring clients and sharing practical strategies that help people move from intention to implementation.</>,
      "Like many people, reading Rich Dad Poor Dad changed Brian's perspective on life. Unlike most, he immediately applied those lessons through real estate investing and ultimately achieved the freedom to leave traditional employment behind. Along that journey, some of his most influential lessons centered on personal responsibility, integrity, creating value, and building systems that generate freedom rather than simply exchanging time for money.",
      "Today, Brian lives with his family on an acreage outside Calgary, working from the home he once imagined, driving the car he once dreamed about, and enjoying the life he intentionally designed.",
      <>Within Human Value Exchange, Brian contributes his experience in freedom, mentorship, personal development, wealth education, and intentional living to the broader mission. Like every HVE contributor, his insights may support and connect across all Five Types of Wealth. He believes that true wealth is not measured solely by money but by the freedom, choices, and opportunities money can help create. His passion is helping others develop the mindset, habits, and knowledge needed to build a life of greater sovereignty and possibility.</>,
      <>Brian often jokes that he began life as &quot;Mr. Anderson&quot; from The Matrix, searching for something more, and eventually became &quot;Morpheus,&quot; dedicated to helping others discover what freedom means for themselves. For him, Human Value Exchange is the perfect expression of mentorship: people sharing what they have learned with one another so that everyone can grow, benefit, and thrive.</>
    ]
  },
  {
    name: "Alan Warner",
    image: "/alan-linkedin-pic.jpg",
    role: "Contributor | Health & Sustainable Performance",
    paragraphs: [
      "Alan Warner contributes practical experience in helping people improve health, energy, resilience, and sustainable performance through practical lifestyle change.",
      "Full profile coming soon."
    ]
  },
  {
    name: "Wolfgang Westphal",
    image: "/wolfgang-linkedin-pic.jpg",
    role: <><strong className="font-semibold text-[#10231e]">Operations</strong>, <strong className="font-semibold text-[#10231e]">Growth</strong> &amp; <strong className="font-semibold text-[#10231e]">Implementation</strong> Associate</>,
    paragraphs: [
      "Wolfgang Westphal is driven by a lifelong interest in personal growth and the practical systems that help people live healthier, more productive, and more intentional lives.",
      "His journey began with a deep interest in self-discovery. At sixteen, he began training with a set of weights in his family basement, teaching himself through books, research, and experimentation. What started as a pursuit of physical strength became a lifelong commitment to growth, discipline, and continuous improvement.",
      "That curiosity led him to explore nutrition, wellness, behavior change, and human performance, developing an appreciation for the connection between physical health and long-term success. As his knowledge grew, he began coaching and training clients of his own, helping others improve their health and performance before putting that work on pause to focus on his post-secondary studies.",
      "Over time, his interests expanded into technology and the ways digital tools can help people work and live more effectively. He is currently completing the Computer Programming – Low-Code Development diploma program at George Brown Polytechnic, building skills in software development, automation, systems integration, and modern business technology.",
      <>At <strong className="font-semibold text-[#10231e]">Human Value Exchange</strong>, Wolfgang contributes to initiatives focused on Time Wealth, helping turn ideas into practical systems, processes, and solutions that create meaningful value for individuals, families, and organizations. Time Wealth is currently the first pillar being developed within the broader Five Types of Wealth framework.</>,
      "Wolfgang believes learning creates its greatest impact when paired with action. Whether improving a process, developing a digital solution, or supporting a community initiative, he is motivated by helping people make steady progress toward the life they want to create. He brings curiosity, adaptability, and a commitment to continuous improvement as he helps turn ideas into practical outcomes that support greater freedom, capability, and human flourishing. Human Value Exchange's mission is centered on helping people build freedom, sovereignty, self-mastery, and human flourishing through the Five Types of Wealth."
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
            {wealthTypes.map(([type, description, background]) => (
              <article className={`rounded-2xl p-7 ${background}`} key={type}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#44705c]">{type}</p>
                <p className="mt-6 leading-7 text-[#536159]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-lg leading-8 text-[#536159]">
            The Five Types of Wealth are a shared framework, not individual portfolios. Every contributor can bring experience, insight, and value to every pillar as Human Value Exchange grows.
          </p>
          <p className="mt-10 max-w-4xl text-lg leading-8 text-[#536159]">
            While all five forms of wealth matter, Human Value Exchange currently leads with Time Wealth because time is the foundation from which physical health, mental clarity, relationships, and financial resilience can grow.
          </p>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">The people behind HVE</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">People who turn the framework into practice.</h2>
          </div>
          <div className="mt-12 space-y-6">
            {stewards.map((steward, index) => (
              <article className="grid gap-8 rounded-2xl bg-white p-7 sm:p-10 md:grid-cols-[minmax(190px,0.7fr)_1.5fr] md:gap-12" key={steward.name}>
                <div>
                  <Image
                    alt={`${steward.name} portrait`}
                    className="mb-6 aspect-square w-40 rounded-2xl object-cover"
                    height={160}
                    src={steward.image}
                    width={160}
                  />
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
