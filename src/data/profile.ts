export const profile = {
  name: "Sai Gopal Panchakarla",
  role: "Senior Full Stack Engineer",
  experience: "6+ years",
  summary:
    "I build cloud-hosted web platforms and LLM-powered features with Node.js, TypeScript, Vue.js, Nuxt.js, and AWS. I lead monolith-to-microservices migrations, design REST APIs, and care about reliable, observable systems.",
  location: "Hyderabad, India",
  email: "saigopal009@gmail.com",
  phone: "+91 90327 45802",
  phoneHref: "tel:+919032745802",
  github: "https://github.com/iamsaii",
  linkedin: "https://linkedin.com/in/saigopalp",
  resumePath: "Sai_Gopal_Panchakarla_Resume.pdf",
  status: "Open to senior full-stack roles",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const metrics = [
  { value: "6+", label: "Years building software" },
  { value: "60%", label: "Less manual grading" },
  { value: "85%", label: "Faster deployments" },
] as const;

export const education = {
  degree: "B.Tech, Electronics and Communication Engineering",
  institution: "Koneru Lakshmaiah Education Foundation",
  period: "2016 – 2020",
} as const;
