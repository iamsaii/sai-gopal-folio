import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experience";

const ExperienceSection = () => (
  <section id="experience" className="border-b border-border bg-surface">
    <div className="mx-auto max-w-[960px] px-6 py-16 md:py-24">
      <SectionHeading index="02" title="Experience" />

      <div className="divide-y divide-border border-t border-border">
        {experiences.map((job) => (
          <article
            key={`${job.title}-${job.period}`}
            className="grid gap-6 py-10 sm:grid-cols-[150px_1fr]"
          >
            <p className="font-mono text-xs text-muted-foreground sm:pt-1">{job.period}</p>

            <div>
              <h3 className="text-h4 font-semibold">{job.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {job.company} · {job.location}
              </p>

              <ul className="mt-5 space-y-3">
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-[0.55rem] h-px w-3 shrink-0 bg-muted-foreground/40"
                      aria-hidden="true"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
