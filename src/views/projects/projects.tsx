'use client';

import { Header } from "@/components/custom/header";
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

type Category = 'memory' | 'world model' | 'latency' | 'safety';

const CATEGORY_ACCENT: Record<Category, string> = {
  'memory': 'text-blue-500 dark:text-blue-400 border-blue-500/30 bg-blue-500/[0.06]',
  'world model': 'text-cyan-500 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/[0.06]',
  'latency': 'text-amber-500 dark:text-amber-400 border-amber-500/30 bg-amber-500/[0.06]',
  'safety': 'text-emerald-500 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/[0.06]',
};

// One category per project — the rest of the tags are intentionally dropped.
const SLUG_TO_CATEGORY: Record<string, Category> = {
  'physics-ai-detection': 'safety',
  'dream-c2l': 'memory',
  'project-canary': 'safety',
  'project-orion': 'safety',
};

export const Projects = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="relative font-mono text-[13px] leading-relaxed text-foreground">
          {/* Subtle dot grid backdrop, same as research */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              color: 'hsl(0 0% 60%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            }}
          />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-6">
            <Section label="projects" lastSection>
              <ol className="space-y-2">
                {projects.map((p, i) => {
                  const category = SLUG_TO_CATEGORY[p.slug] ?? 'memory';
                  return (
                    <li
                      key={p.slug}
                      onClick={() => router.push(`/projects/${p.slug}`)}
                      className="group relative border border-border bg-background hover:border-foreground/30 transition-colors p-2.5 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className="text-[9.5px] tabular-nums text-muted-foreground/70">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-px border ${CATEGORY_ACCENT[category]}`}>
                          {category}
                        </span>
                        <span className="ml-auto text-[10px] text-muted-foreground/80 italic">
                          {p.status}
                        </span>
                      </div>
                      <h3 className="text-[12.5px] font-semibold text-foreground leading-snug mb-1">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        {p.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10.5px] text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-2 transition-colors"
                          >
                            <Github className="w-3 h-3" /> github
                          </a>
                        )}
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10.5px] text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-2 transition-colors"
                          >
                            link <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                        <span className="ml-auto text-[10.5px] text-muted-foreground/60 group-hover:text-foreground transition-colors">
                          view →
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

const Section = ({
  label,
  children,
  lastSection = false,
}: {
  label: string;
  children: React.ReactNode;
  lastSection?: boolean;
}) => (
  <section className={lastSection ? '' : 'mb-6'}>
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <span className="flex-1 h-px bg-border" />
    </div>
    {children}
  </section>
);
