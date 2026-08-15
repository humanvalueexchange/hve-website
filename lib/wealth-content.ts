export const wealthContent = [
  {
    slug: "time",
    name: "Time Wealth",
    definition: "The ability to direct your attention, energy, and calendar toward what matters most.",
    whyItMatters: "Your time is finite. Time wealth gives you the space to do meaningful work, care for the people you love, and choose your priorities instead of living entirely by other people's demands.",
    abundance: [
      "Your calendar reflects your real priorities.",
      "You protect focused work, rest, and recovery.",
      "Automation and AI productivity tools create more capacity."
    ],
    depletion: [
      "Every week feels reactive and overcommitted.",
      "Your attention is fragmented by constant interruptions.",
      "Important work and relationships are postponed indefinitely."
    ],
    helps: "HVE helps you audit your commitments, clarify your highest-value work, and use systems, automation, and tools such as Microsoft Copilot to reclaim time without losing the human judgment that matters."
  },
  {
    slug: "physical",
    name: "Physical Wealth",
    definition: "The strength, vitality, and health capacity that allow you to participate fully in your life.",
    whyItMatters: "Your body is the platform through which every ambition, relationship, and experience becomes real. Physical wealth supports energy today and resilience over a long life.",
    abundance: [
      "You have reliable energy for the people and work you care about.",
      "Strength, mobility, nutrition, and sleep support your goals.",
      "Daily health practices are sustainable rather than extreme."
    ],
    depletion: [
      "Low energy regularly limits your choices.",
      "Sleep, nutrition, or movement are treated as optional.",
      "Small health concerns compound because there is no consistent routine."
    ],
    helps: "HVE helps you turn physical goals into practical routines around strength, fitness, nutrition, sleep, longevity, and daily health practices. This is educational support, not medical care."
  },
  {
    slug: "mental",
    name: "Mental Wealth",
    definition: "The clarity, self-awareness, learning capacity, and resilience that help you meet life with agency.",
    whyItMatters: "Mental wealth is your inner operating capacity: the ability to understand yourself, learn from experience, make sound decisions, and stay connected to purpose when circumstances change.",
    abundance: [
      "You can focus, reflect, and make decisions with clarity.",
      "You remain curious and continue learning.",
      "You recover from setbacks without losing your sense of purpose."
    ],
    depletion: [
      "Noise, stress, or comparison make decisions feel impossible.",
      "You repeat patterns without understanding what drives them.",
      "Resilience depends on pushing harder instead of adapting wisely."
    ],
    helps: "HVE helps you create reflective practices, identify the beliefs and habits shaping your decisions, and build a more capable inner operating system through learning, self-awareness, and purposeful action."
  },
  {
    slug: "social",
    name: "Social Wealth",
    definition: "The relationships, trust, contribution, and belonging that make a life meaningful and resilient.",
    whyItMatters: "No one builds a flourishing life alone. Social wealth gives you people to rely on, communities to contribute to, and partnerships that make shared progress possible.",
    abundance: [
      "You invest in relationships with attention and consistency.",
      "Trust, honesty, and mutual contribution shape your partnerships.",
      "You feel a meaningful sense of belonging at home and in community."
    ],
    depletion: [
      "Important relationships only receive leftover time and energy.",
      "Conflict, isolation, or mistrust are left unaddressed.",
      "You are surrounded by connections but lack real belonging."
    ],
    helps: "HVE helps you see relationships as a form of wealth, identify the communities and partnerships that support your values, and make more intentional investments in family, friendship, and contribution."
  },
  {
    slug: "financial",
    name: "Financial Wealth",
    definition: "The resources, protection, and options that expand your freedom and ability to choose.",
    whyItMatters: "Financial wealth is not a score of personal worth. It is the capacity to protect your time, manage uncertainty, support the people you love, and direct capital toward the future you want to build.",
    abundance: [
      "Cash flow is visible, intentional, and aligned with priorities.",
      "Protection through reserves, insurance, and thoughtful planning is in place.",
      "Capital supports ownership, business building, and long-term sovereignty."
    ],
    depletion: [
      "Cash flow is unclear or controlled by short-term pressure.",
      "One unexpected event could destabilize the household or business.",
      "Capital is consumed without building protection, ownership, or options."
    ],
    helps: "HVE provides practical education around protection, cash flow, capital formation, insurance, Infinite Banking concepts, business ownership, and financial sovereignty. HVE does not provide individualized investment or insurance advice."
  }
] as const;

export type WealthContent = (typeof wealthContent)[number];
