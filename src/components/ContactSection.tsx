import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { mailtoUrl, resumeUrl } from "@/lib/links";

const ContactSection = () => (
  <section id="contact" className="border-b border-border">
    <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
      <SectionHeading index="05" title="Contact" />

      <p className="max-w-[520px] text-xl leading-relaxed tracking-[-0.01em] text-muted-foreground">
        I’m open to senior AI engineering and full-stack roles, especially work that combines LLM
        features with reliable platform engineering. The fastest way to reach me is email.
      </p>

      <a
        href={mailtoUrl}
        className="link mt-8 inline-block break-all text-h3 font-medium sm:text-h2"
      >
        {profile.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
          LinkedIn ↗
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="link">
          GitHub ↗
        </a>
        <a href={resumeUrl} download className="link">
          Resume ↓
        </a>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">{profile.location}</p>
    </div>
  </section>
);

export default ContactSection;
