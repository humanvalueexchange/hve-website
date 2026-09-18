import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Frequently Asked Questions | Human Value Exchange",
  description: "Answers about the Five Types of Wealth, HVE offers, workshops, boundaries, and the Life OS vision."
};

const questions = [
  {
    question: "What is Human Value Exchange?",
    answer: "Human Value Exchange is a practical framework and growing organization focused on helping people build freedom, sovereignty, self-mastery, and human flourishing across five forms of wealth: Time, Physical, Mental, Social, and Financial Wealth."
  },
  {
    question: "Why does HVE describe wealth as more than money?",
    answer: "Money matters, but it is only one resource that supports a full life. Time, physical capacity, mental clarity, relationships, and financial resources work together to create freedom and meaningful choice."
  },
  {
    question: "Who does HVE help?",
    answer: "HVE serves individuals, families, entrepreneurs and business owners, professionals and teams, and coaches, advisors, and partners who want a more complete way to think about growth and wellbeing."
  },
  {
    question: "What is the first step?",
    answer: "You can explore the Five Types of Wealth, join a workshop, or use the Work With Us inquiry path to share where you are starting. We will help identify the most appropriate next conversation."
  },
  {
    question: "Does HVE provide medical or mental health treatment?",
    answer: "No. Physical and Mental Wealth content is educational and coaching-oriented. It does not replace medical care, diagnosis, psychotherapy, clinical counselling, or other qualified professional services."
  },
  {
    question: "Does HVE provide financial or investment advice?",
    answer: "No. Financial Wealth content is educational and focused on clarity, protection, cash flow, ownership, and informed questions. It does not provide individualized investment, insurance, tax, legal, or financial advice."
  },
  {
    question: "What is HVE Life OS?",
    answer: "HVE Life OS is a future vision for a personal operating system that could help people measure and improve all five forms of wealth. Application functionality is not part of the current website release."
  },
  {
    question: "How are workshops delivered?",
    answer: "Workshops can be designed for individuals, families, leadership teams, small groups, or communities. The format depends on the topic and audience, with a focus on practical reflection, shared language, and an actionable next step."
  }
] as const;

export default function FAQPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">Questions and answers</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Start with clarity.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            A clear understanding of the framework, offers, and boundaries helps every conversation begin in the right place.
          </p>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-5">
          {questions.map((item) => (
            <details className="rounded-2xl border border-[#d8ddd5] bg-white p-6 sm:p-7" key={item.question}>
              <summary className="cursor-pointer text-xl font-semibold text-[#10231e] marker:text-[#b27a32]">{item.question}</summary>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#536159]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Still have a question?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Start with the context you have.</h2>
          </div>
          <a className="shrink-0 rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us/">
            Work with HVE
          </a>
        </div>
      </section>
    </main>
  );
}
