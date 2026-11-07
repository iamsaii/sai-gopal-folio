import { navItems, profile } from "@/data/profile";
import { resumeUrl } from "@/lib/links";

const navLinkClassName =
  "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground";

const Navigation = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background">
    <div className="container-page flex h-14 items-center justify-between gap-4">
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

      <nav aria-label="Mobile" className="flex items-center gap-4 md:hidden">
        <a href="#work" className={navLinkClassName}>
          Work
        </a>
        <a href="#contact" className={navLinkClassName}>
          Contact
        </a>
        <a href={resumeUrl} download className="link text-sm">
          Resume ↓
        </a>
      </nav>
    </div>
  </header>
);

export default Navigation;
