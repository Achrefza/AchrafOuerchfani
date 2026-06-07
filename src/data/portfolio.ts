import {
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  GraduationCap,
  Network,
  ShieldCheck,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Achref Ouerchfeni",
  role: "IT Engineer",
  location: "Rome, Italy",
  headline:
    "Cybersecurity • Artificial Intelligence • Automation • Technology Consulting",
  email: "achref.ouerchfeni@example.com",
  linkedIn: "https://www.linkedin.com/",
  cvUrl: "/Achref-Ouerchfeni-CV.pdf",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: 1, suffix: "", label: "Engineering Degree", detail: "IT engineering foundation" },
  { value: 8, suffix: "+", label: "Certifications", detail: "Security, cloud, AI and systems" },
  { value: 3, suffix: "+", label: "Countries", detail: "International academic and delivery exposure" },
  { value: 12, suffix: "+", label: "Security Projects", detail: "Assessments, automations and hardening initiatives" },
];

export const experiences = [
  {
    period: "2024 — Present",
    title: "IT Engineering Consultant",
    company: "Enterprise Technology Advisory",
    description:
      "Designing secure, automated and AI-enabled technology solutions for complex operational environments, with a focus on reliability, governance and measurable business outcomes.",
    highlights: ["Security architecture", "AI workflow enablement", "Executive-ready documentation"],
  },
  {
    period: "2022 — 2024",
    title: "Cybersecurity & Infrastructure Engineer",
    company: "Technology Operations",
    description:
      "Delivered infrastructure hardening, vulnerability management and incident-readiness improvements across hybrid environments while improving operational observability.",
    highlights: ["Risk reduction", "Cloud and network controls", "Automation playbooks"],
  },
  {
    period: "2020 — 2022",
    title: "Systems & Automation Specialist",
    company: "Digital Transformation Programs",
    description:
      "Built scripts, dashboards and integration workflows that reduced repetitive support activity and increased the speed and consistency of engineering delivery.",
    highlights: ["Process automation", "Monitoring dashboards", "Cross-functional delivery"],
  },
];

export const projects = [
  {
    slug: "secure-ai-operations",
    title: "Secure AI Operations Framework",
    description:
      "A governance-first framework for adopting AI assistants, knowledge retrieval and automation while protecting sensitive enterprise data.",
    technologies: ["AI Governance", "RAG", "Security Controls", "Policy Design"],
    outcome: "Reduced AI adoption risk with documented controls, review loops and executive reporting.",
  },
  {
    slug: "vulnerability-intelligence",
    title: "Vulnerability Intelligence Dashboard",
    description:
      "Unified security findings, asset context and remediation ownership into a concise operational dashboard for technical and leadership audiences.",
    technologies: ["Python", "SIEM", "Power BI", "Risk Scoring"],
    outcome: "Improved remediation prioritization and shortened reporting cycles from days to hours.",
  },
  {
    slug: "infrastructure-automation",
    title: "Infrastructure Automation Suite",
    description:
      "Reusable automation for provisioning, compliance checks, system inventory and repeatable operations across hybrid environments.",
    technologies: ["TypeScript", "Bash", "Terraform", "CI/CD"],
    outcome: "Standardized delivery patterns and reduced manual operational effort.",
  },
  {
    slug: "identity-hardening",
    title: "Identity Security Hardening",
    description:
      "A pragmatic identity security initiative covering access reviews, MFA enforcement, privilege reduction and audit-ready evidence.",
    technologies: ["IAM", "Zero Trust", "Microsoft 365", "Automation"],
    outcome: "Strengthened identity posture while improving clarity for compliance stakeholders.",
  },
];

export const certifications = [
  "Cybersecurity Fundamentals",
  "Cloud Architecture Foundations",
  "AI for Business & Engineering",
  "Network Security Essentials",
  "ITIL & Service Management",
  "DevOps Foundations",
  "Linux Systems Administration",
  "Data Privacy & Governance",
];

export const skillGroups = [
  {
    title: "Engineering",
    icon: GraduationCap,
    skills: ["Systems thinking", "Solution architecture", "Requirements analysis", "Technical documentation"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: ["Risk assessment", "Vulnerability management", "IAM", "Security hardening"],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: ["AI workflow design", "Prompt systems", "RAG concepts", "Governance controls"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["TypeScript", "Python", "Bash", "API integration"],
  },
  {
    title: "Infrastructure",
    icon: Network,
    skills: ["Linux", "Networking", "Monitoring", "Virtualization"],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    skills: ["CI/CD", "Terraform", "Containers", "Cloud security"],
  },
];

export const principles = [
  { icon: Sparkles, title: "Clarity before complexity", text: "I translate ambiguous technology problems into focused engineering decisions." },
  { icon: ShieldCheck, title: "Security by design", text: "Controls, evidence and resilience are considered from the start—not added later." },
  { icon: Workflow, title: "Automation mindset", text: "Repeatable workflows improve quality, reduce risk and free teams for deeper work." },
  { icon: BriefcaseBusiness, title: "Consulting polish", text: "Technical depth is paired with concise communication for stakeholders." },
  { icon: Trophy, title: "Leadership potential", text: "I bring ownership, calm execution and a bias toward measurable outcomes." },
];
