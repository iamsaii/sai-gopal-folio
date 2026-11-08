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
      "Led the monolith-to-microservices migration, built the Gemini API grading pipeline, and rebuilt campaign delivery (see Selected Work).",
      "Designed and implemented GitHub Actions CI/CD pipelines that automated releases and cut deployment time by over 85%.",
      "Added a Redis cache in front of the database for frequently read endpoints, cutting database load and response times.",
      "Deployed backend services on AWS (EC2, RDS, S3) and containerized the platform with Docker for client on-premise deployments.",
      "Introduced unit testing with Vitest and code review standards across sprints, catching issues earlier and reducing post-release bugs.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Nuxt.js",
      "Gemini API",
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
