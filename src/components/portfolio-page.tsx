import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";
import { certifications, experiences, metrics, navigation, principles, profile, projects, skillGroups } from "@/data/portfolio";
import { Counter, MotionA, MotionDiv, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-300/90">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{description}</p>
    </Reveal>
  );
}

function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <MotionA
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black",
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.18)] hover:bg-blue-100"
          : "border border-white/12 bg-white/[0.03] text-white backdrop-blur hover:border-white/25 hover:bg-white/[0.07]",
      )}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </MotionA>
  );
}

export function PortfolioPage() {
  return (
    <main className="relative overflow-hidden bg-[#050506] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_68%)]" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-black/35 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm">AO</span>
            <span className="hidden sm:inline">Achref Ouerchfeni</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-400 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <a href={profile.cvUrl} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]">
            <Download className="h-4 w-4" /> CV
          </a>
        </nav>
      </header>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-36 sm:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-sm font-medium text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span className="h-2 w-2 rounded-full bg-blue-300" /> Available for strategic technology work
            </div>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-2xl font-medium tracking-[-0.03em] text-zinc-200 sm:text-3xl">{profile.role}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">{profile.headline}</p>
            <div className="mt-6 flex items-center gap-2 text-zinc-400">
              <MapPin className="h-4 w-4 text-blue-300" /> Based in {profile.location}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#projects">Explore My Work</Button>
              <Button href={profile.cvUrl} variant="secondary">Download CV</Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              <div className="rounded-[1.55rem] border border-white/8 bg-black/35 p-6">
                <div className="flex items-center justify-between border-b border-white/8 pb-5">
                  <div>
                    <p className="text-sm text-zinc-500">Operating profile</p>
                    <p className="mt-1 font-semibold text-white">Enterprise-ready engineer</p>
                  </div>
                  <Shield className="h-9 w-9 rounded-xl bg-blue-400/10 p-2 text-blue-200" />
                </div>
                <div className="mt-6 grid gap-3">
                  {principles.slice(0, 4).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <MotionDiv
                        key={item.title}
                        className="group rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition hover:border-blue-300/30 hover:bg-blue-300/[0.055]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.22 + index * 0.08 }}
                      >
                        <div className="flex gap-4">
                          <Icon className="mt-1 h-5 w-5 text-blue-200" />
                          <div>
                            <h3 className="font-medium text-white">{item.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-zinc-400">{item.text}</p>
                          </div>
                        </div>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <a href="#about" aria-label="Scroll to about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-zinc-400 transition hover:text-white md:block">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      <section id="about" className="relative z-10 border-y border-white/8 bg-white/[0.018] px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="About" title="Engineering judgment for secure, intelligent systems." description="Achref combines IT engineering fundamentals with a practical consulting mindset—turning security, AI, automation and infrastructure challenges into systems that are easier to trust, operate and explain." />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05} className={cn("rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur", index === 0 && "md:col-span-2")}>
                  <Icon className="h-6 w-6 text-blue-200" />
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Experience" title="A calm operator across security, systems and transformation." description="Timeline cards are structured to communicate responsibility, decision quality and stakeholder impact—not just job history." />
          <div className="mx-auto mt-16 max-w-4xl">
            {experiences.map((experience, index) => (
              <Reveal key={experience.title} className="relative pl-8" delay={index * 0.08}>
                <div className="absolute bottom-0 left-2 top-0 w-px bg-white/10" />
                <div className="absolute left-0 top-8 h-4 w-4 rounded-full border border-blue-200 bg-[#050506] shadow-[0_0_0_6px_rgba(59,130,246,0.13)]" />
                <article className="mb-6 rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.055] sm:p-8">
                  <p className="text-sm font-medium text-blue-200">{experience.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">{experience.title}</h3>
                  <p className="mt-1 text-zinc-400">{experience.company}</p>
                  <p className="mt-5 leading-8 text-zinc-400">{experience.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-zinc-300">{highlight}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 border-y border-white/8 bg-white/[0.018] px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Selected work" title="Project narratives built around outcomes." description="Each initiative is framed like an executive-ready case study: the engineering challenge, the technologies involved and the measurable result." />
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <Link href={`/projects/${project.slug}`} className="group block h-full rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.065] to-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-300/30 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
                    <ExternalLink className="h-5 w-5 shrink-0 text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-200" />
                  </div>
                  <p className="mt-5 leading-8 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-blue-300/10 px-3 py-1 text-sm text-blue-100">{technology}</span>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-white/8 bg-black/25 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Outcome</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{project.outcome}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Certifications" title="Evidence of continuous learning." description="A professional grid for credentials across security, cloud, operations, AI and systems engineering." />
          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification, index) => (
              <Reveal key={certification} delay={index * 0.035} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm font-medium text-zinc-200 transition hover:border-blue-300/30 hover:text-white">
                {certification}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 border-y border-white/8 bg-white/[0.018] px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Capabilities" title="A balanced engineering toolkit." description="Organized for the domains that matter in modern enterprise technology: resilient systems, secure operations, AI enablement and cloud delivery." />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 0.05} className="rounded-3xl border border-white/10 bg-black/25 p-6 transition hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.04]">
                  <Icon className="h-6 w-6 text-blue-200" />
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">{group.title}</h3>
                  <div className="mt-5 grid gap-2">
                    {group.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-3 text-sm text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" /> {skill}
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="achievements" className="relative z-10 px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Achievements" title="Signals that create confidence quickly." description="Metric-style proof points help visitors understand Achref's trajectory, breadth and delivery orientation in seconds." />
          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center">
                <div className="text-5xl font-semibold tracking-[-0.06em] text-white"><Counter value={metric.value} suffix={metric.suffix} /></div>
                <h3 className="mt-5 font-semibold text-white">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{metric.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 pb-12 pt-10 sm:px-8">
        <Reveal className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_34%),rgba(255,255,255,0.04)] p-8 backdrop-blur-2xl sm:p-12">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-200">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Let&apos;s build technology that earns trust.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">For consulting, engineering leadership opportunities or security and AI initiatives, connect with Achref for a focused conversation.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <a href={profile.linkedIn} className="rounded-2xl border border-white/10 bg-black/25 p-4 font-medium text-white transition hover:border-blue-300/30 hover:bg-white/[0.06]">LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="rounded-2xl border border-white/10 bg-black/25 p-4 font-medium text-white transition hover:border-blue-300/30 hover:bg-white/[0.06]"><Mail className="mr-2 inline h-4 w-4" />Email</a>
              <a href={profile.cvUrl} className="rounded-2xl border border-white/10 bg-white text-center font-semibold text-black p-4 transition hover:bg-blue-100"><Download className="mr-2 inline h-4 w-4" />CV Download</a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
