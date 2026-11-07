import { profile } from "@/data/profile";
import { mailtoUrl, resumeUrl } from "@/lib/links";

const HeroSection = () => (
  <section id="top" className="border-b border-border">
    <div className="mx-auto max-w-[1120px] px-6 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="max-w-[720px]">
        <p className="mono-label flex items-center gap-2 text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-warm" aria-hidden="true" />
          {profile.status}
        </p>

        <h1 className="mt-8 text-hero font-semibold text-foreground">{profile.name}</h1>

        <p className="mt-5 text-xl text-muted-foreground">
          {profile.role} <span className="text-muted-foreground/50">/</span>{" "}
          {profile.experience}
        </p>

        <p className="mt-6 max-w-[600px] text-base leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a href={mailtoUrl} className="link">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link">
            GitHub ↗
          </a>
          <a href={resumeUrl} download className="link">
            Resume ↓
          </a>
          <span className="text-muted-foreground">{profile.location}</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
