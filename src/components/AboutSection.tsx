import SectionHeading from "@/components/SectionHeading";
import { metrics, profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

const AboutSection = () => (
  <section id="about" className="border-b border-border">
    <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
      <SectionHeading index="01" title="About" />

      <p className="text-xl leading-relaxed tracking-[-0.01em] text-foreground">
        Senior full-stack engineer with {profile.experience} of experience building cloud-hosted web
        platforms. I lead monolith-to-microservices migrations, design APIs, and ship LLM-powered
        features — most recently an AI grading pipeline built on the Gemini API.
      </p>

      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        I work across TypeScript, Node.js, Vue.js, Nuxt.js, Java, AWS, and Redis, and I care about
        reliable releases, clear service boundaries, and code that is easy to operate.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 border-y border-border py-6 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-h3 font-semibold text-warm">{metric.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-h4 font-semibold">Toolkit</h3>
      <dl className="mt-4 border-t border-border">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-1.5 border-b border-border py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
          >
            <dt className="mono-label text-muted-foreground">{group.label}</dt>
            <dd className="text-sm leading-relaxed text-foreground">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default AboutSection;
