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
  name: "Achraf Ouerchfani",
  role: "IT Engineer",
  location: "Rome, Italy",
  headline:
    "Cybersecurity • Artificial Intelligence • Automation • Technology Consulting",
  email: "achrefouerchfani.contact@gmail.com",
  linkedIn: "https://www.linkedin.com/in/achref-ouerchfani/",
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
    period: "10/2025 — 04/2026",
    title: "Cybersecurity & Infrastructure Engineer",
    company: "Tunisiatech",
    description:
      "Participated in security assessments of enterprise Linux-based web infrastructures, reviewing system architectures, server configurations and security controls to identify weaknesses and areas for improvement. Contributed to vulnerability assessments and risk analysis engagements, recommended hardening measures for applications, operating systems and network services, and documented findings and remediation strategies in technical security reports.",
    highlights: ["Security Assessment", "Linux Security", "Risk Analysis","Security Hardening"],
  },
  {
    period: "10/2025 — 04/2026",
    title: "Cybersecurity & AI Security Engineering Intern",
    company: "Voguel Consulting",
    description:
      "Contributed to the design and deployment of a SIEM infrastructure for centralized security monitoring and incident detection. Developed an AI-assisted threat detection platform capable of analyzing screenshots and textual content in real time using machine learning techniques for malicious content detection and behavioral analysis. Automated threat detection, data enrichment and incident investigation workflows in Python while integrating security logs, threat intelligence feeds and detection rules to improve visibility across monitored environments and support incident response activities.",
    highlights: ["SIEM", "AI Security", "Python","Threat Detection","Incident Response"],
  },
  {
    period: "06/2024 – 08/2024",
    title: "Systems & Automation Specialist",
    company: "Digital Transformation Programs",
    description:
      "Developed network traffic analysis tools to identify suspicious behavior and potential attack patterns while gaining hands-on experience in application security assessments and vulnerability analysis. Studied phishing campaigns, credential theft techniques and network-based threats, documented security findings, and collaborated on recommendations aimed at improving secure development practices and reducing organizational risk.",
    highlights: ["Network Security", "Threat Analysis", "Vulnerability Assessment","Application Security"],
  },
  {
    period: "06/2023 – 07/2023",
    title: "Software Development Intern",
    company: "Digital Transformation Programs",
    description:
      "Contributed to the development of an internal employee and payroll management platform using Symfony, supporting the implementation of business features, testing and maintenance activities. Automated administrative workflows and participated in debugging and optimization efforts to improve reliability and operational efficiency.",
    highlights: ["Symfony", "Web Development", "Automation","Databases",],
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
