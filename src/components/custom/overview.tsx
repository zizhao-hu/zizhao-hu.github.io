'use client';

import {
  Linkedin, Github, Mail, BookOpen,
  Brain, Zap, Database, Globe, Shield,
  ArrowUpRight, MapPin,
  Atom, Bird, Bot, Layers, Wand2, Network, RefreshCw, Telescope,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/lib/translations';

type PillarKey = 'memory' | 'world' | 'latency' | 'safety';
const PILLARS: {
  icon: typeof Brain;
  k: PillarKey;
  tagKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  accent: string;
}[] = [
  { icon: Brain,  k: 'memory',  tagKey: 'pillar.memory.tag',  titleKey: 'pillar.memory.title',  descKey: 'pillar.memory.desc',  accent: 'text-blue-500 dark:text-blue-400' },
  { icon: Globe,  k: 'world',   tagKey: 'pillar.world.tag',   titleKey: 'pillar.world.title',   descKey: 'pillar.world.desc',   accent: 'text-cyan-500 dark:text-cyan-400' },
  { icon: Zap,    k: 'latency', tagKey: 'pillar.latency.tag', titleKey: 'pillar.latency.title', descKey: 'pillar.latency.desc', accent: 'text-amber-500 dark:text-amber-400' },
  { icon: Shield, k: 'safety',  tagKey: 'pillar.safety.tag',  titleKey: 'pillar.safety.title',  descKey: 'pillar.safety.desc',  accent: 'text-emerald-500 dark:text-emerald-400' },
];

type PathStage = {
  tag: string;
  icon: typeof Atom;
  title: string;
  context: string;
  accent: string;
  current?: boolean;
  year?: string;
};

const PATH: PathStage[] = [
  {
    tag: 'physics',
    icon: Atom,
    title: 'Physics',
    context: 'photonics & metasurface design · dynamic systems',
    accent: 'text-blue-500 dark:text-blue-400',
    year: '2016',
  },
  {
    tag: 'biophysics',
    icon: Bird,
    title: 'Agile Systems',
    context: 'bio-inspired flight, sensing, and locomotion',
    accent: 'text-emerald-500 dark:text-emerald-400',
    year: '2018',
  },
  {
    tag: 'robotics',
    icon: Bot,
    title: 'Robotics · RL',
    context: 'policy learning for physical control and agent behavior',
    accent: 'text-yellow-500 dark:text-yellow-400',
    year: '2021',
  },
  {
    tag: 'vae',
    icon: Layers,
    title: 'Continual Learning · VAE',
    context: 'regularization design for variational autoencoders',
    accent: 'text-amber-500 dark:text-amber-400',
    year: '2022',
  },
  {
    tag: 'multimodal',
    icon: Wand2,
    title: 'Multimodal Generation',
    context: 'diffusion models · vision-language model architecture',
    accent: 'text-violet-500 dark:text-violet-400',
    year: '2023',
  },
  {
    tag: 'multiagent',
    icon: Network,
    title: 'Multiagent',
    context: 'coordination, division of labor, and mutual verification across agents — continual adaptation at the population level',
    accent: 'text-rose-500 dark:text-rose-400',
    year: '2025',
  },
  {
    tag: 'agentic-memory',
    icon: RefreshCw,
    title: 'Agentic Memory',
    context: 'in-context learning, continual fine-tuning, unlearning, and memory scaffolds — adapting agents at the context and model level',
    accent: 'text-cyan-500 dark:text-cyan-400',
    current: true,
    year: '2026',
  },
  {
    tag: 'horizon',
    icon: Telescope,
    title: 'World Models',
    context: 'predictive world models and the architectures to serve them in real time',
    accent: 'text-brand-orange',
  },
];

type NewsItem = {
  date: string;
  tag: string;
  titleKey: TranslationKey;
  href?: string;
};

const NEWS_TAG_COLOR: Record<string, string> = {
  preprint:   'text-cyan-600 dark:text-cyan-400',
  coverage:   'text-amber-600 dark:text-amber-400',
  fellowship: 'text-emerald-600 dark:text-emerald-400',
  talks:      'text-rose-600 dark:text-rose-400',
};

const NEWS: NewsItem[] = [
  { date: '2026-05', tag: 'preprint',     titleKey: 'news.shred.title',    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=A8J42tQAAAAJ&sortby=pubdate&citation_for_view=A8J42tQAAAAJ:Se3iqnhoufwC' },
  { date: '2026-03', tag: 'preprint',     titleKey: 'news.preprint.title', href: 'https://arxiv.org/abs/2603.18507' },
  { date: '2026-03', tag: 'coverage',     titleKey: 'news.coverage.title' },
  { date: '2025-12', tag: 'fellowship',   titleKey: 'news.canary.leave.title' },
  { date: '2025-10', tag: 'talks',        titleKey: 'news.icmi.title',     href: 'https://scholar.google.com/citations?user=A8J42tQAAAAJ' },
  { date: '2025-08', tag: 'fellowship',   titleKey: 'news.canary.join.title' },
  { date: '2025-07', tag: 'fellowship',   titleKey: 'news.handshake.start.title' },
];

const MEDIA = [
  { name: 'The Register', href: 'https://www.theregister.com/software/2026/03/24/telling-an-ai-model-that-its-an-expert-makes-it-worse/5226049', logo: '/images/media/theregister.svg', sizeClass: 'h-6 sm:h-7' },
  { name: 'QbitAI', href: 'https://www.bilibili.com/video/BV1boXABxEJ4/', logo: '/images/media/qbitai.png', sizeClass: 'h-10 sm:h-12' },
  { name: 'Tencent News', href: 'https://news.qq.com/rain/a/20260324A062P600', logo: '/images/media/tencent.svg', sizeClass: 'h-6 sm:h-7' },
  { name: '36Kr', href: 'https://eu.36kr.com/zh/p/3736415004590339', logo: '/images/media/36kr.png', sizeClass: 'h-6 sm:h-7' },
  { name: 'X', href: 'https://x.com/sukh_saroy/status/2035761644270411994?s=20', logo: '/images/media/x.svg', sizeClass: 'h-5 sm:h-6' },
  { name: 'Yahoo Tech', href: 'https://tech.yahoo.com/ai/articles/turns-ask-ai-play-expert-142356526.html', logo: '/images/media/yahoo.svg', sizeClass: 'h-6 sm:h-7' },
  { name: 'AIToday', href: 'https://www.aitoday.io/', logo: '/images/media/aitoday.png', sizeClass: 'h-6 sm:h-7' },
];

const LINKS: { href: string; labelKey: TranslationKey; icon: typeof BookOpen }[] = [
  { href: 'https://scholar.google.com/citations?user=A8J42tQAAAAJ', labelKey: 'link.scholar',  icon: BookOpen },
  { href: 'https://linkedin.com/in/zizhao-hu',                       labelKey: 'link.linkedin', icon: Linkedin },
  { href: 'https://github.com/zizhao-hu',                             labelKey: 'link.github',   icon: Github },
  { href: 'mailto:zizhaohu3@gmail.com',                                labelKey: 'link.email',    icon: Mail },
];

type Collaborator = {
  name: string;
  href?: string;
  logo: string;
  sizeClass: string;
};

const COLLABORATORS: Collaborator[] = [
  { name: 'Georgia Tech', href: 'https://www.gatech.edu/',     logo: '/images/collaborators/gatech.svg',      sizeClass: 'h-6 sm:h-7' },
  { name: 'USC',          href: 'https://www.usc.edu/',         logo: '/images/collaborators/usc.png',         sizeClass: 'h-6 sm:h-7' },
  { name: 'Handshake AI', href: 'https://joinhandshake.com/',  logo: '/images/collaborators/handshake.png',   sizeClass: 'h-7 sm:h-8' },
  { name: 'OpenAI',       href: 'https://openai.com/',          logo: '/images/collaborators/openai.svg',      sizeClass: 'h-5 sm:h-6' },
  { name: 'Meta',         href: 'https://about.meta.com/',     logo: '/images/collaborators/meta.svg',        sizeClass: 'h-3 sm:h-4' },
  { name: 'Google Cloud', href: 'https://cloud.google.com/',   logo: '/images/collaborators/googlecloud.svg', sizeClass: 'h-5 sm:h-6' },
  { name: 'Scale AI',     href: 'https://scale.com/',           logo: '/images/collaborators/scaleai.svg',     sizeClass: 'h-3 sm:h-4' },
];

export const Overview = () => {
  const { t } = useLanguage();
  return (
    <div className="relative font-mono text-[13px] leading-relaxed text-foreground">
      {/* Subtle dot grid backdrop */}
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
        {/* Hero */}
        <header className="mb-3 flex items-start gap-3">
          <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 border border-border bg-background overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Zizhao Hu"
              className="w-full h-full object-cover object-center scale-150"
            />
          </div>
          <div className="min-w-0 flex-1 flex flex-col justify-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground leading-tight">
                Zizhao Hu
              </h1>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <MapPin className="w-3 h-3 animate-pulse" />
                {t('location')}
              </span>
            </div>
            <p className="text-[12.5px] text-muted-foreground">
              {t('affiliation.prefix')} <span className="text-foreground">{t('affiliation.at')}</span> {t('affiliation.university')} ·{' '}
              <a
                href="https://glamor-usc.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 text-foreground hover:text-brand-orange transition-colors"
              >
                {t('affiliation.lab')}
              </a>{' '}
              · {t('affiliation.advisor.prefix')}{' '}
              <a
                href="https://jessethomason.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 text-foreground hover:text-brand-orange transition-colors"
              >
                {t('affiliation.advisor.name')}
              </a>
            </p>
            {/* Desktop contacts — inline with the hero column */}
            <div className="hidden sm:flex flex-nowrap gap-1.5 mt-0.5">
              {LINKS.map((l) => (
                <a
                  key={l.labelKey}
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={t(l.labelKey)}
                  title={t(l.labelKey)}
                  className="group inline-flex items-center gap-1.5 flex-shrink-0 px-2 py-0.5 text-[11px] text-muted-foreground border border-border bg-background hover:border-foreground/30 hover:text-foreground transition-colors"
                >
                  <l.icon className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                  <span>{t(l.labelKey)}</span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Mobile contacts — full-width row below the hero */}
        <div className="grid grid-cols-4 gap-1.5 mb-3 sm:hidden">
          {LINKS.map((l) => (
            <a
              key={l.labelKey}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={t(l.labelKey)}
              title={t(l.labelKey)}
              className="group inline-flex items-center justify-center py-1 text-[11px] text-muted-foreground border border-border bg-background hover:border-foreground/30 hover:text-foreground transition-colors"
            >
              <l.icon className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* Featured quote */}
        <blockquote className="mb-1.5 text-center">
          <p className="text-[12px] italic leading-snug text-flow">
            &ldquo;{t('quote.context')}&rdquo;
          </p>
        </blockquote>

        {/* Compact bio — merged tagline + areas */}
        <p className="mb-5 text-[11.5px] text-foreground leading-snug">
          {t('bio.work.lead')} <span className="text-foreground font-semibold">{t('bio.work.posttraining')}</span>{t('bio.work.tail')}{' '}
          <span className="text-foreground font-semibold">{t('bio.world')}</span>{' '}
          {t('bio.ai')}{t('bio.iworkon')}{' '}
          <span className="text-foreground font-semibold">{t('bio.continual')}</span>,{' '}
          <span className="text-foreground font-semibold">{t('bio.unlearning')}</span>,{' '}
          <span className="text-foreground font-semibold">{t('bio.memory_mgmt')}</span>,{' '}
          <span className="text-foreground font-semibold">{t('bio.task_adapt')}</span>{' '}
          {t('bio.atthe')}{' '}
          <span className="text-foreground font-semibold">{t('bio.agentic_ctx')}</span>{' '}
          {t('bio.parens_agent')} {t('bio.and_model')}{' '}
          <span className="text-foreground font-semibold">{t('bio.model_level')}</span>{' '}
          {t('bio.parens_model')}
        </p>

        {/* What I work on */}
        <Section label={t('section.work')}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PILLARS.map((p) => (
              <article
                key={p.k}
                className="border border-border bg-background hover:border-foreground/30 transition-colors p-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    {t(p.tagKey)}
                  </span>
                  <p.icon className={`w-3 h-3 ${p.accent}`} />
                </div>
                <h3 className="text-[11px] font-semibold text-foreground mb-0.5 leading-snug">
                  {t(p.titleKey)}
                </h3>
                <p className="text-[10px] leading-snug text-muted-foreground">
                  {t(p.descKey)}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* News & Media */}
        <Section label={t('section.news')}>
          {/* Media banner — colored official logos, scrolling marquee, pauses on hover */}
          <div className="marquee mb-3">
            <div className="marquee-track items-center gap-x-8">
              {[...MEDIA, ...MEDIA].map((m, i) => (
                <a
                  key={`${m.name}-${i}`}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.name}
                  title={m.name}
                  aria-hidden={i >= MEDIA.length ? true : undefined}
                  className="block flex-shrink-0"
                >
                  <img
                    src={m.logo}
                    alt={m.name}
                    className={`${m.sizeClass} w-auto max-w-[140px] object-contain`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* News list — no box */}
          <ul className="divide-y divide-border/60">
            {NEWS.map((n) => {
              const inner = (
                <div className="flex items-baseline gap-2 py-1.5">
                  <div className="flex items-baseline gap-1 w-[124px] flex-shrink-0">
                    <span className="text-[9px] uppercase tracking-wider text-foreground tabular-nums flex-shrink-0">
                      {n.date}
                    </span>
                    <span className={`text-[9px] tracking-wider italic flex-shrink-0 ${NEWS_TAG_COLOR[n.tag] ?? 'text-muted-foreground/70'}`}>
                      · {n.tag}
                    </span>
                  </div>
                  <span className="text-[11px] text-foreground leading-snug">
                    {t(n.titleKey)}
                  </span>
                  {n.href && (
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-80 transition-opacity flex-shrink-0" />
                  )}
                </div>
              );
              return (
                <li key={n.date + n.titleKey} className="group">
                  {n.href ? (
                    <a href={n.href} target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        {/* My path */}
        <Section label={t('section.path')}>
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-3">
            {PATH.map((p, i) => {
              const Icon = p.icon;
              const isLast = i === PATH.length - 1;
              return (
                <li key={p.tag} className="relative">
                  <div className="flex items-end gap-1.5 mb-1.5 min-h-[24px]">
                    <div
                      className={`w-6 h-6 flex items-center justify-center border flex-shrink-0 ${
                        p.current
                          ? 'border-emerald-500 bg-emerald-500/10 animate-pulse shadow-[0_0_0_2px_rgba(16,185,129,0.25)]'
                          : 'border-border bg-background'
                      }`}
                    >
                      <Icon className={`w-3 h-3 ${p.accent}`} />
                    </div>
                    {!isLast && (
                      <div className="flex-1 flex flex-col justify-end pb-[5px]">
                        {p.year && (
                          <span className="text-[8.5px] tabular-nums text-muted-foreground leading-none mb-0.5">
                            {p.year}
                          </span>
                        )}
                        <span className="block h-px bg-border" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 flex-wrap min-h-[12px]">
                    <span className="text-[8.5px] uppercase tracking-wider text-foreground tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-[11px] font-semibold text-foreground mt-0.5 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                    {p.context}
                  </p>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* Collaborators — scrolling marquee of official logos */}
        <Section label={t('section.collab')} lastSection>
          <div className="marquee">
            <div className="marquee-track items-center gap-x-10">
              {[...COLLABORATORS, ...COLLABORATORS].map((c, i) => (
                <a
                  key={`${c.name}-${i}`}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.name}
                  title={c.name}
                  aria-hidden={i >= COLLABORATORS.length ? true : undefined}
                  className="block flex-shrink-0"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className={`${c.sizeClass} w-auto max-w-[150px] object-contain`}
                  />
                </a>
              ))}
            </div>
          </div>
        </Section>

      </div>
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

