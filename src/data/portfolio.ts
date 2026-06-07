import {
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  Shield,
  Code2,
  BrainCircuit,
  Monitor,
  Database,
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
    title: "Cybersecurity Intern",
    company: "Pwn & Patch",
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
    slug: "AI-Threat-Detection",
    title: "AI-Powered Threat Detection Platform",
    description:
      "Developed a Python-based platform leveraging machine learning models for malware and phishing detection.Integrated VirusTotal intelligence feeds and SIEM events with automated alert generation, threat classification and risk scoring.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn","VirusTotal"],
    outcome: "Automated threat prioritization and accelerated security investigations.",
  },
  {
    slug: "Threat-hunting",
    title: "Threat Hunting & Threat Intelligence Platform",
    description:
      "Integrated multiple open-source security tools into a unified threat hunting ecosystem.Implemented threat intelligence collection, correlation and investigation workflows to enable proactive threat detection.",
    technologies: ["MISP", "Caldera", "Threat Intelligence", "Threat Hunting","Security Automation"],
    outcome: "Improved visibility into threats through centralized intelligence collection and correlation.",
  },
  {
    slug: "SOC",
    title: "Open Source Security Operations Center (SOC)",
    description:
      "Designed and deployed a complete SOC environment using Wazuh, ELK Stack and IRIS.Implemented centralized log collection, event correlation, monitoring dashboards and incident investigation workflows.",
    technologies: ["Wazuh", "ELK Stack", "IRIS", "Linux", "Threat Detection"],
    outcome: "Built a fully operational SOC environment for monitoring, detection and investigation of security events.",
  },
];

export const certifications = [
  "CompTIA Security+",
  "Cisco CCNA 1 & 2",
  "Cisco CyberOps Associate",
  "TryHackMe Junior Penetration Tester",
  "TryHackMe Red Teamer",
];

export const skillGroups = [
  {
    title: "Engineering",
    icon: GraduationCap,
    skills: ["Systems thinking", "Solution architecture", "Requirements analysis", "Technical documentation"],
  },
  {
    title: "Security Operations",
    icon: ShieldCheck,
    skills: ["SOC", "SIEM", "Threat Hunting", "Incident Response", "Threat Intelligence","Vulnerability Assessment"],
  },
  {
    title: "Security Tools",
    icon: Shield,
    skills: ["Wazuh", "ELK Stack", "IRIS", "MISP","Caldera","Wireshark","Nmap","Burp Suite","Nessus","Metasploit","VirusTotal"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C", "C++", "Java","C#"],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    title: "Systems",
    icon: Monitor,
    skills: ["Linux", "Windows"],
  },
  {
    title: "Databases & Web",
    icon: Database,
    skills: ["Symfony", "Spring","ASP.NET","MySQL","Oracle","SQL"],
  },
];

export const principles = [
  { icon: Sparkles, title: "Clarity before complexity", text: "I translate ambiguous technology problems into focused engineering decisions." },
  { icon: ShieldCheck, title: "Security by design", text: "Controls, evidence and resilience are considered from the start—not added later." },
  { icon: Workflow, title: "Automation mindset", text: "Repeatable workflows improve quality, reduce risk and free teams for deeper work." },
  { icon: BriefcaseBusiness, title: "Consulting polish", text: "Technical depth is paired with concise communication for stakeholders." },
  { icon: Trophy, title: "Leadership potential", text: "I bring ownership, calm execution and a bias toward measurable outcomes." },
];
