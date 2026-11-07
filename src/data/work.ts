export type SelectedWork = {
  title: string;
  summary: string;
  stack: string[];
  diagram: "pipeline" | "batches" | "services";
};

export const selectedWork: SelectedWork[] = [
  {
    title: "AI grading pipeline",
    summary:
      "A Gemini API pipeline that scores student answers against rubrics using structured prompts and parsed structured output. BullMQ background jobs and automatic retries cut manual grading time by an estimated 60%.",
    stack: ["Node.js", "TypeScript", "Gemini API", "BullMQ", "Redis"],
    diagram: "pipeline",
  },
  {
    title: "Campaign delivery rebuild",
    summary:
      "Replaced synchronous threaded sending with chunked batch processing, rate limiting, concurrency control, and automatic retries for high-volume SMS and WhatsApp campaigns.",
    stack: ["Node.js", "TypeScript", "Redis", "AWS"],
    diagram: "batches",
  },
  {
    title: "Monolith to microservices",
    summary:
      "Defined service boundaries with Domain-Driven Design and migrated a legacy Java monolith to Node.js, TypeScript, Vue.js, and Nuxt.js in phases, enabling independent, zero-downtime releases.",
    stack: ["Node.js", "Nuxt.js", "Java", "DDD", "GitHub Actions"],
    diagram: "services",
  },
];
