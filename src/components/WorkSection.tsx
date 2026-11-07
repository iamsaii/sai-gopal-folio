import SectionHeading from "@/components/SectionHeading";
import WorkDiagram from "@/components/WorkDiagram";
import { selectedWork } from "@/data/work";

const WorkSection = () => (
  <section id="work" className="border-b border-border">
    <div className="container-page py-16 md:py-24">
      <SectionHeading index="02" title="Selected Work" />

      <div className="border-t border-border">
        {selectedWork.map((project) => (
          <article key={project.title} className="border-b border-border py-7">
            <h3 className="text-h4 font-semibold">{project.title}</h3>

            <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <WorkDiagram variant={project.diagram} caption={project.caption} />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
