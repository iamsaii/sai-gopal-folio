import type { Config } from "tailwindcss";

export default {
  darkMode: ["media"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--border))",
        ring: "hsl(var(--link))",
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--text))",
        surface: "hsl(var(--surface))",
        link: "hsl(var(--link))",
        "link-tint": "var(--link-tint)",
        warm: "hsl(var(--warm))",
        primary: {
          DEFAULT: "hsl(var(--text))",
          foreground: "hsl(var(--bg))",
        },
        secondary: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--text))",
        },
        muted: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--text))",
        },
        destructive: {
          DEFAULT: "hsl(var(--warm))",
          foreground: "hsl(var(--bg))",
        },
        card: {
          DEFAULT: "hsl(var(--bg))",
          foreground: "hsl(var(--text))",
        },
        popover: {
          DEFAULT: "hsl(var(--bg))",
          foreground: "hsl(var(--text))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 7vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h2: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h3: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h4: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
