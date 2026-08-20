export const timeWealthOfferings = [
  {
    slug: "time-wealth-discovery-workshop",
    name: "Time Wealth Discovery Workshop",
    audience: "SMB owners and leadership teams",
    outcome: "Identify where time is being lost and where capacity can be reclaimed.",
    deliverables: [
      "Time Wealth Score",
      "Opportunity Map",
      "AI Readiness Snapshot",
      "Top 10 Improvement Opportunities"
    ],
    ctaLabel: "Book a Discovery Session",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=Time%20Wealth%20Discovery%20Workshop",
    futurePath: "/time-wealth-discovery-workshop",
    future: false
  },
  {
    slug: "ai-time-wealth-roadmap",
    name: "AI & Time Wealth Roadmap",
    audience: "Growing SMEs",
    outcome: "Build a practical blueprint for Time Wealth transformation.",
    deliverables: [
      "Strategic Roadmap",
      "Prioritized Use Cases",
      "Governance Recommendations",
      "ROI Framework"
    ],
    ctaLabel: "Explore the Roadmap",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=AI%20%26%20Time%20Wealth%20Roadmap",
    futurePath: "/ai-time-wealth-roadmap",
    future: false
  },
  {
    slug: "copilot-first-accelerator",
    name: "Copilot First Accelerator",
    audience: "Microsoft 365 customers",
    outcome: "Generate the first measurable Time Wealth win.",
    deliverables: [
      "Sales Proposal Automation",
      "Reporting Automation",
      "Customer Response Workflows",
      "Team Knowledge Assistants"
    ],
    ctaLabel: "Accelerate Adoption",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=Copilot%20First%20Accelerator",
    futurePath: "/copilot-first-accelerator",
    future: false
  },
  {
    slug: "time-wealth-transformation",
    name: "Time Wealth Transformation Program",
    audience: "Organizations ready to scale",
    outcome: "Create sustainable systems for Time Wealth across the enterprise.",
    deliverables: [
      "Roadmap Execution",
      "Change Enablement",
      "Champion Network",
      "AI Governance",
      "KPI Tracking"
    ],
    ctaLabel: "Learn More",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=Time%20Wealth%20Transformation%20Program",
    futurePath: "/time-wealth-transformation",
    future: false
  },
  {
    slug: "time-wealth-operating-system",
    name: "HVE Time Wealth Operating System",
    audience: "Transformation clients",
    outcome: "Measure and optimize Time Wealth continuously.",
    deliverables: [
      "Executive Dashboard",
      "Capacity KPIs",
      "AI Adoption Metrics",
      "Time Wealth Scorecards",
      "Monthly Reviews"
    ],
    ctaLabel: "See the Operating System",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=HVE%20Time%20Wealth%20Operating%20System",
    futurePath: "/time-wealth-operating-system",
    future: true
  }
] as const;

export const timeWealthWorkshops = [
  {
    slug: "ai-readiness-for-smb-leaders",
    name: "AI Readiness for SMB Leaders",
    format: "3-hour executive workshop",
    duration: "3 hours",
    audience: "SMB owners and leadership teams",
    focus: [
      "AI reality vs. hype",
      "Capacity economics",
      "Digital sovereignty",
      "Opportunity identification"
    ],
    outcome: "Leave with a grounded view of where AI can create Time Wealth in your organization.",
    ctaLabel: "Send a Workshop Inquiry",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=AI%20Readiness%20for%20SMB%20Leaders",
    futurePath: "/workshops/ai-readiness-for-smb-leaders"
  },
  {
    slug: "time-wealth",
    name: "The Time Wealth Workshop",
    format: "Flagship workshop",
    duration: "Half day",
    audience: "Leaders and teams ready to redesign how work gets done",
    focus: [
      "Where time goes",
      "Where value comes from",
      "Where AI helps",
      "Human judgment boundaries",
      "Building a Time Wealth blueprint"
    ],
    outcome: "Create a practical blueprint for reclaiming capacity and protecting high-value human work.",
    ctaLabel: "Send a Workshop Inquiry",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=The%20Time%20Wealth%20Workshop",
    futurePath: "/workshops/time-wealth"
  },
  {
    slug: "copilot-in-a-day",
    name: "Copilot in a Day",
    format: "Hands-on Microsoft 365 workshop",
    duration: "1 day",
    audience: "Microsoft 365 customers and teams",
    focus: [
      "Outlook",
      "Teams",
      "Word",
      "Excel",
      "PowerPoint"
    ],
    outcome: "Turn familiar Microsoft 365 work into a first measurable Time Wealth win with Copilot.",
    ctaLabel: "Send a Workshop Inquiry",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=Copilot%20in%20a%20Day",
    futurePath: "/workshops/copilot-in-a-day"
  },
  {
    slug: "build-your-first-business-agent",
    name: "Build Your First Business Agent",
    format: "Practical agent workshop",
    duration: "Half day",
    audience: "Teams ready to move from experimentation to useful automation",
    focus: [
      "Sales agent",
      "Knowledge agent",
      "Executive assistant agent",
      "Customer service agent"
    ],
    outcome: "Design and scope a first business agent around a real operational opportunity.",
    ctaLabel: "Send a Workshop Inquiry",
    ctaHref: "mailto:hello@humanvalueexchange.com?subject=Build%20Your%20First%20Business%20Agent",
    futurePath: "/workshops/build-your-first-business-agent"
  }
] as const;

export type TimeWealthOffering = (typeof timeWealthOfferings)[number];
export type TimeWealthWorkshop = (typeof timeWealthWorkshops)[number];
