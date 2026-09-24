export const techUpdates = [
  {
    slug: "ai-skills-for-early-career-developers",
    category: "AI",
    title: "AI Skills Early-Career Developers Should Practise",
    shortDescription: "A practical look at the AI fundamentals and workflow skills that can strengthen a developer portfolio.",
    publishedAt: "2026-09-24",
    sourceName: "Zero2Career editorial summary",
    sourceUrl: "",
    whatHappened: "AI-assisted development is becoming part of everyday software work, from code search and debugging to testing, documentation and data analysis. For students and early-career developers, the useful goal is not to collect AI buzzwords, but to learn how to use these tools while still understanding the code and checking the output.",
    whyItMatters: "Recruiters increasingly value developers who can explain their technical decisions, work safely with AI tools and turn an idea into a tested project. A portfolio that shows thoughtful AI use can be stronger than one that only lists an AI tool in its skills section.",
    practicalSteps: [
      "Build one small project using an API, an AI feature or an automation workflow.",
      "Write down the problem, prompts, limitations and validation steps in the project README.",
      "Practise core programming, databases, APIs and testing so you can review generated code confidently."
    ],
    keyTakeaways: [
      "Learn fundamentals before depending on generated code.",
      "Show how you tested and improved AI-assisted work.",
      "Keep private data and credentials out of AI tools."
    ]
  },
  {
    slug: "cloud-career-foundations-for-students",
    category: "Cloud",
    title: "Cloud Career Foundations for Students",
    shortDescription: "Understand the core cloud concepts, projects and certifications worth exploring first.",
    publishedAt: "2026-09-21",
    sourceName: "Zero2Career editorial summary",
    sourceUrl: "",
    whatHappened: "Cloud platforms now support common developer tasks such as hosting applications, storing files, running databases and monitoring services. Beginners can start with the shared concepts that apply across providers instead of trying to learn every product at once.",
    whyItMatters: "A small deployed project gives students evidence of practical skills: environment configuration, access control, logs, cost awareness and basic reliability. These details help connect classroom development with how software is operated in real teams.",
    practicalSteps: [
      "Learn compute, storage, networking, databases, identity and monitoring at a basic level.",
      "Deploy a small full-stack project and document its architecture and environment variables.",
      "Use free tiers carefully and remove unused resources to avoid unexpected charges."
    ],
    keyTakeaways: [
      "Cloud fundamentals are more transferable than memorising product names.",
      "One documented deployment can demonstrate several practical skills.",
      "Security and cost controls should be part of beginner projects."
    ]
  },
  {
    slug: "cybersecurity-projects-for-freshers",
    category: "Cybersecurity",
    title: "Cybersecurity Projects That Show Practical Skills",
    shortDescription: "Project ideas that help freshers demonstrate security thinking without overstating experience.",
    publishedAt: "2026-09-19",
    sourceName: "Zero2Career editorial summary",
    sourceUrl: "",
    whatHappened: "Entry-level security portfolios can be built around safe, local and deliberately scoped exercises. Examples include checking password strength, analysing sample logs, writing secure authentication flows or documenting common web risks in a test application.",
    whyItMatters: "Security employers look for careful thinking, clear documentation and an understanding of responsible testing. A project is more credible when it explains the threat, the controlled environment, the evidence and the fix rather than presenting a list of tools.",
    practicalSteps: [
      "Create a local lab or use intentionally vulnerable practice applications.",
      "Record the risk, reproduction steps, impact and recommended mitigation.",
      "Never scan or test a real system without explicit permission."
    ],
    keyTakeaways: [
      "Scope and consent are essential in every security project.",
      "Explain fixes and prevention, not only how a flaw was found.",
      "A clear README can make a small project much more useful to reviewers."
    ]
  },
  {
    slug: "developer-tools-and-the-future-of-work",
    category: "Developer",
    title: "How Developer Tools Are Changing Early Careers",
    shortDescription: "What students and job seekers can learn as modern development workflows evolve.",
    publishedAt: "2026-09-16",
    sourceName: "Zero2Career editorial summary",
    sourceUrl: "",
    whatHappened: "Modern development teams use a connected workflow that may include source control, issue tracking, code review, automated tests, CI/CD and observability. New tools can speed up routine work, but the developer still needs to understand requirements, trade-offs and quality checks.",
    whyItMatters: "Students who practise the full workflow can demonstrate team readiness even through personal projects. Hiring managers can see how they plan changes, review code, handle failures and communicate what they built.",
    practicalSteps: [
      "Use Git branches and pull requests for a personal project instead of only uploading final files.",
      "Add automated checks such as linting and tests to the repository.",
      "Write a short release note when you ship a meaningful change."
    ],
    keyTakeaways: [
      "Tool knowledge matters most when it supports a reliable workflow.",
      "Communication and documentation remain valuable developer skills.",
      "Practise shipping small improvements consistently."
    ]
  }
];

export const sortedTechUpdates = [...techUpdates].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
export const getTechUpdate = (slug) => techUpdates.find((update) => update.slug === slug);
