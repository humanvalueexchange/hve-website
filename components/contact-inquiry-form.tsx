"use client";

import { FormEvent, useState } from "react";

const inquiryOptions = [
  "Five Wealth Assessment",
  "Workshop",
  "Coaching",
  "Consulting",
  "Education",
  "General inquiry"
] as const;

export function ContactInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const interest = String(form.get("interest") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`${interest || "HVE inquiry"} from ${name || "website visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`);

    window.location.href = `mailto:info@hveglobal.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#10231e]">
          Name
          <input className="mt-2 w-full rounded-xl border border-[#cbd5ce] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#44705c] focus:ring-2 focus:ring-[#dce8df]" name="name" required type="text" />
        </label>
        <label className="text-sm font-semibold text-[#10231e]">
          Email
          <input className="mt-2 w-full rounded-xl border border-[#cbd5ce] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#44705c] focus:ring-2 focus:ring-[#dce8df]" name="email" required type="email" />
        </label>
      </div>
      <label className="block text-sm font-semibold text-[#10231e]">
        I am interested in
        <select className="mt-2 w-full rounded-xl border border-[#cbd5ce] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#44705c] focus:ring-2 focus:ring-[#dce8df]" defaultValue={inquiryOptions[0]} name="interest">
          {inquiryOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="block text-sm font-semibold text-[#10231e]">
        How can we help?
        <textarea className="mt-2 min-h-32 w-full rounded-xl border border-[#cbd5ce] bg-white px-4 py-3 font-normal outline-none transition focus:border-[#44705c] focus:ring-2 focus:ring-[#dce8df]" name="message" required />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" type="submit">
          Prepare email inquiry
        </button>
        <a className="font-semibold text-[#10231e] hover:text-[#b27a32]" href="mailto:info@hveglobal.ca">
          Email info@hveglobal.ca directly
        </a>
      </div>
      {submitted ? <p className="text-sm leading-6 text-[#44705c]" role="status">Your email app should open with the inquiry prepared. If it did not, use the direct email link above.</p> : null}
    </form>
  );
}
