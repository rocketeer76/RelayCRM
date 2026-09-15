export const product = {
  dir: "RelayCRM",
  slug: "relaycrm",
  name: "RelayCRM",
  tagline: "Relationships that move business.",
  eyebrow: "Relationship workspace",
  action: "Add company",
  accent: "#5bd178",
  accent2: "#a3edb5",
  nav: ["Dashboard", "Companies", "Contacts", "Activities", "Reports"],
  metrics: [
    ["Active companies", "126"],
    ["Follow-ups due", "18"],
    ["Overdue", "5"],
    ["Pipeline", "$684k"],
  ],
  activity: [
    "Northstar moved to proposal",
    "Follow-up completed with Acme",
    "Three contacts added today",
  ],
} as const;
