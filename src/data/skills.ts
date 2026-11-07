export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["Node.js", "Express.js", "Vue.js", "Nuxt.js", "Angular", "Play Framework", "BullMQ"],
  },
  {
    label: "AI & LLM",
    items: ["Gemini API", "LLM integration", "Prompt engineering", "Structured output parsing", "GenAI"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS)", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    label: "Architecture & data",
    items: [
      "Microservices",
      "REST APIs",
      "Message queues",
      "Domain-Driven Design",
      "System design",
      "MySQL",
      "Redis",
      "Query optimization",
      "Schema design",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Jira", "Vitest", "Unit testing", "Agile/Scrum"],
  },
];
