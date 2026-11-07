export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Fourth Rev Edu Pvt. Ltd.",
    location: "Hyderabad, IN",
    period: "Sep 2023 – Present",
    achievements: [
      "Led the migration of a legacy Java monolith to microservices (Node.js, TypeScript, Vue.js, Nuxt.js), defining service boundaries with Domain-Driven Design and moving in phases — cutting feature development time and enabling independent, zero-downtime releases.",
      "Built an AI grading pipeline on the Gemini API that scores student answers against rubrics using structured prompts and parsed structured output, with BullMQ background jobs and automatic retries — cutting manual grading time by an estimated 60%.",
      "Designed and implemented GitHub Actions CI/CD pipelines that automated releases and cut deployment time by over 85%.",
      "Rebuilt SMS and WhatsApp campaign delivery in Node.js and TypeScript, replacing synchronous threaded sending with chunked batch processing, rate limiting, concurrency control, and automatic retries.",
      "Added a Redis cache in front of the database for frequently read endpoints, checking the cache before querying and returning cached responses directly, which reduced database load and response times.",
      "Deployed backend services on AWS (EC2, RDS, S3) and containerized the platform with Docker for client on-premise deployments.",
      "Introduced unit testing with Vitest and code review standards across sprints, catching issues earlier and reducing post-release bugs.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Nuxt.js",
      "BullMQ",
      "Redis",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Vitest",
    ],
  },
  {
    title: "Software Engineer",
    company: "Fourth Rev Edu Pvt. Ltd.",
    location: "Hyderabad, IN",
    period: "Aug 2020 – Sep 2023",
    achievements: [
      "Maintained and enhanced Java and Play Framework modules in a large monolithic application, fixing production issues and delivering feature changes while keeping the system stable.",
      "Developed native Android features and updated Angular front-end components in a legacy codebase.",
      "Optimized relational database schemas and rewrote complex SQL queries to improve query performance.",
    ],
    technologies: ["Java", "Play Framework", "Android", "Angular", "SQL"],
  },
];
