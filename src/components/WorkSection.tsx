import SectionHeading from "@/components/SectionHeading";
import WorkDiagram from "@/components/WorkDiagram";
import { selectedWork } from "@/data/work";

const WorkSection = () => (
  <section id="work" className="border-b border-border">
    <div className="mx-auto max-w-[960px] px-6 py-16 md:py-24">
      <SectionHeading index="03" title="Selected Work" />

      <div className="border-t border-border">
        {selectedWork.map((project, index) => (
          <article
            key={project.title}
            className="grid gap-4 border-b border-border py-7 sm:grid-cols-[48px_1fr] sm:gap-6"
          >
            <span className="font-mono text-xs text-warm sm:pt-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="text-h4 font-semibold">{project.title}</h3>
              <p className="mt-2 max-w-[640px] text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <WorkDiagram variant={project.diagram} />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
