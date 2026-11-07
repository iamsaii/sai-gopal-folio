import { navItems, profile } from "@/data/profile";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-page py-10 text-xs text-muted-foreground">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-150 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a href="#top" className="link">
            Back to top ↑
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
