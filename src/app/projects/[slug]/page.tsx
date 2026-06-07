import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { projects, profile } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050506] px-5 py-12 text-white sm:px-8">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_38%)]" />
      <article className="relative mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-200">Project case study</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full bg-blue-300/10 px-3 py-1 text-sm text-blue-100">{technology}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Outcome</h2>
            <p className="mt-4 leading-7 text-zinc-400">{project.outcome}</p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Delivery approach</h2>
            <ul className="mt-4 space-y-3 text-zinc-400">
              {[
                "Clarify stakeholder needs and success criteria.",
                "Design a secure, maintainable technical path.",
                "Document decisions, tradeoffs and next actions.",
              ].map((item) => (
                <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" /> {item}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-zinc-400">
          Interested in a similar initiative? Contact {profile.name} at <a className="text-blue-200 hover:text-blue-100" href={`mailto:${profile.email}`}>{profile.email}</a>.
        </div>
      </article>
    </main>
  );
}
