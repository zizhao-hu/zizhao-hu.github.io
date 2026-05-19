'use client';

import { Header } from "@/components/custom/header";
import { useRouter } from 'next/navigation';
import { blogPosts } from "@/data/blog-posts";

type Category = "ai" | "science" | "economy";

const CATEGORY_ACCENT: Record<Category, string> = {
  'ai': 'text-blue-500 dark:text-blue-400 border-blue-500/30 bg-blue-500/[0.06]',
  'science': 'text-cyan-500 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/[0.06]',
  'economy': 'text-amber-500 dark:text-amber-400 border-amber-500/30 bg-amber-500/[0.06]',
};

export const Blogs = () => {
  const router = useRouter();
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

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
              color: 'hsl(var(--muted-foreground))',
              maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            }}
          />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-6">
            <Section label="blogs" lastSection>
              <ol className="space-y-2">
                {sorted.map((b, i) => {
                  const category = b.category as Category;
                  return (
                    <li
                      key={b.slug}
                      onClick={() => router.push(`/blogs/${b.slug}`)}
                      className="group relative border border-border bg-background hover:border-foreground/30 transition-colors p-2.5 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className="text-[9.5px] tabular-nums text-muted-foreground/70">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground tabular-nums">
                          {b.date}
                        </span>
                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-px border ${CATEGORY_ACCENT[category]}`}>
                          {category}
                        </span>
                        <span className="ml-auto text-[10px] text-muted-foreground/80 italic">
                          {b.readingTime}
                        </span>
                      </div>
                      <h3 className="text-[12.5px] font-semibold text-foreground leading-snug mb-1">
                        {b.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        {b.excerpt}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="ml-auto text-[10.5px] text-muted-foreground/60 group-hover:text-foreground transition-colors">
                          read →
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
