export const profile = {
  name: "Sai Gopal Panchakarla",
  role: "Senior Full Stack Engineer",
  experience: "6+ years",
  summary:
    "I build LLM-powered features and cloud-hosted web platforms with Node.js, TypeScript, Vue.js, Nuxt.js, and AWS. I led a monolith-to-microservices migration, design REST APIs, and care about reliable releases.",
  location: "Hyderabad, India",
  email: "saigopal009@gmail.com",
  github: "https://github.com/iamsaii",
  linkedin: "https://linkedin.com/in/saigopalp",
  resumePath: "Sai_Gopal_Panchakarla_Resume.pdf",
  status: "Open to senior full-stack and AI engineering roles",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  { value: "6+", label: "Years building software" },
  { value: "~60%", label: "Less manual grading (est.)" },
  { value: "85%+", label: "Less time to release" },
] as const;

export const education = {
  degree: "B.Tech, Electronics and Communication Engineering",
  institution: "Koneru Lakshmaiah Education Foundation",
  period: "2016 – 2020",
} as const;
