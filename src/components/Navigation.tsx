import { navItems, profile } from "@/data/profile";
import { resumeUrl } from "@/lib/links";

const navLinkClassName =
  "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground";

const Navigation = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background">
    <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-6">
      <a
        href="#top"
        className="min-w-0 truncate text-sm font-semibold tracking-[-0.01em] transition-colors duration-150 hover:text-link"
      >
        {profile.name}
      </a>

      <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={navLinkClassName}>
            {item.label}
          </a>
        ))}
        <a href={resumeUrl} download className="link text-sm">
          Resume ↓
        </a>
      </nav>

      <a href={resumeUrl} download className="link text-sm md:hidden">
        Resume ↓
      </a>
    </div>
  </header>
);

export default Navigation;
