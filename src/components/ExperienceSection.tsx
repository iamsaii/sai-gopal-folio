import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/profile";
import { experiences } from "@/data/experience";

const ExperienceSection = () => (
  <section id="experience" className="border-b border-border bg-surface">
    <div className="container-page py-16 md:py-24">
      <SectionHeading index="03" title="Experience" />

      <div className="divide-y divide-border border-t border-border">
        {experiences.map((job) => (
          <article
            key={`${job.title}-${job.period}`}
            className="grid gap-6 py-10 sm:grid-cols-[150px_1fr]"
          >
            <p className="font-mono text-xs text-muted-foreground sm:pt-1">{job.period}</p>

            <div className="max-w-[720px]">
              <h3 className="text-h4 font-semibold">{job.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {job.company} · {job.location}
              </p>

              <ul className="mt-5 space-y-3">
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      className="mt-[0.55rem] h-px w-3 shrink-0 bg-muted-foreground/50"
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

        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="max-w-[720px]">
            <p className="text-sm font-medium text-foreground">{education.degree}</p>
            <p className="mt-1 text-xs text-muted-foreground">{education.institution}</p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{education.period}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
