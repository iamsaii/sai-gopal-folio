import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/profile";

const EducationSection = () => (
  <section id="education" className="border-b border-border bg-surface">
    <div className="mx-auto max-w-[960px] px-6 py-16 md:py-24">
      <SectionHeading index="04" title="Education" />

      <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-base font-medium text-foreground">{education.degree}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.institution}</p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{education.period}</p>
      </div>
    </div>
  </section>
);

export default EducationSection;
