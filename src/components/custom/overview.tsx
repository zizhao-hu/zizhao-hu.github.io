'use client';

import {
  Linkedin, Github, Mail, BookOpen,
  Brain, Zap, Database, Globe, Shield,
  ArrowUpRight, MapPin,
  Atom, Bird, Bot, Layers, Wand2, Network, RefreshCw, Telescope,
} from 'lucide-react';
import {
  GeorgiaTechLogo, USCLogo, GoogleCloudLogo, ScaleAILogo, HandshakeAILogo,
  MetaLogo, OpenAILogo,
} from './brand-logos';

const PILLARS = [
  {
    icon: Brain,
    tag: 'memory',
    title: 'Agentic Memory',
    desc: 'Continual learning of AI agents — in-context learning, continual fine-tuning, and unlearning.',
    accent: 'text-blue-500 dark:text-blue-400',
  },
  {
    icon: Globe,
    tag: 'world model',
    title: 'World Model',
    desc: 'In-context world models, adaptation to post-training task worlds, and adapting agents in evolving envs.',
    accent: 'text-cyan-500 dark:text-cyan-400',
  },
  {
    icon: Zap,
    tag: 'latency',
    title: 'Low-Latency AI',
    desc: 'Efficient attention architectures, KV-cache compression, latent segmentation, and recurrent transformers.',
    accent: 'text-amber-500 dark:text-amber-400',
  },
  {
    icon: Shield,
    tag: 'safety',
    title: 'AI Safety',
    desc: 'Synthetic data training, risks of multi-agent interaction, post-training guardrails, and AI behavioral study.',
    accent: 'text-emerald-500 dark:text-emerald-400',
  },
];

type PathStage = {
  tag: string;
  icon: typeof Atom;
  title: string;
  context: string;
  accent: string;
  current?: boolean;
};

const PATH: PathStage[] = [
  {
    tag: 'physics',
    icon: Atom,
    title: 'Physics',
    context: 'photonics & metasurface design · dynamic systems',
    accent: 'text-blue-500 dark:text-blue-400',
  },
  {
    tag: 'biophysics',
    icon: Bird,
    title: 'Agile Systems · Animal Flight',
    context: 'bio-inspired flight, sensing, and locomotion',
    accent: 'text-emerald-500 dark:text-emerald-400',
  },
  {
    tag: 'robotics',
    icon: Bot,
    title: 'Robotics · Reinforcement Learning',
    context: 'policy learning for physical control and agent behavior',
    accent: 'text-yellow-500 dark:text-yellow-400',
  },
  {
    tag: 'vae',
    icon: Layers,
    title: 'Continual Learning · VAE',
    context: 'regularization design for variational autoencoders',
    accent: 'text-amber-500 dark:text-amber-400',
  },
  {
    tag: 'multimodal',
    icon: Wand2,
    title: 'Multimodal Generation',
    context: 'diffusion models · vision-language model architecture',
    accent: 'text-violet-500 dark:text-violet-400',
  },
  {
    tag: 'continual · multi-agent',
    icon: Network,
    title: 'Continual Learning · Multi-Agent',
    context: 'coordination, division of labor, and mutual verification across agents — continual adaptation at the population level',
    accent: 'text-rose-500 dark:text-rose-400',
  },
  {
    tag: 'agentic-memory',
    icon: RefreshCw,
    title: 'Agentic Memory',
    context: 'in-context learning, continual fine-tuning, unlearning, and memory scaffolds — adapting agents at the context and model level',
    accent: 'text-cyan-500 dark:text-cyan-400',
    current: true,
  },
  {
    tag: 'horizon',
    icon: Telescope,
    title: 'World Models · Low-Latency AI',
    context: 'predictive world models and the architectures to serve them in real time',
    accent: 'text-brand-orange',
  },
];

type NewsItem = {
  date: string;
  tag: string;
  title: string;
  href?: string;
};

const NEWS: NewsItem[] = [
  {
    date: '2026-02',
    tag: 'preprint',
    title: 'Preprint released — "You Are an Expert": persona prompting and the hallucination tax',
  },
  {
    date: '2026-03-24',
    tag: 'The Register',
    title: 'Telling an AI model that it\'s an expert makes it worse',
    href: 'https://www.theregister.com/software/2026/03/24/telling-an-ai-model-that-its-an-expert-makes-it-worse/5226049',
  },
  {
    date: '2026-03-24',
    tag: 'Tencent News',
    title: 'Coverage of the "expert prompting" paper on Tencent News',
    href: 'https://news.qq.com/rain/a/20260324A062P600',
  },
  {
    date: '2026-03',
    tag: '36Kr',
    title: '36Kr feature — persona prompting as a hallucination poison',
    href: 'https://eu.36kr.com/zh/p/3736415004590339',
  },
  {
    date: '2026-03',
    tag: 'QbitAI',
    title: 'QbitAI / Bilibili video walkthrough of the paper',
    href: 'https://www.bilibili.com/video/BV1boXABxEJ4/',
  },
  {
    date: '2026-03',
    tag: 'X',
    title: 'Discussion thread by @sukh_saroy',
    href: 'https://x.com/sukh_saroy/status/2035761644270411994?s=20',
  },
  {
    date: '2026-03',
    tag: 'Yahoo Tech',
    title: 'Turns out asking AI to play expert backfires',
    href: 'https://tech.yahoo.com/ai/articles/turns-ask-ai-play-expert-142356526.html',
  },
  {
    date: '2026-03',
    tag: 'AIToday',
    title: 'Coverage on AIToday',
    href: 'https://www.aitoday.io/',
  },
];

const MEDIA = [
  { name: 'The Register', href: 'https://www.theregister.com/software/2026/03/24/telling-an-ai-model-that-its-an-expert-makes-it-worse/5226049', logo: '/images/media/theregister.svg', sizeClass: 'h-6 sm:h-7' },
  { name: 'QbitAI', href: 'https://www.bilibili.com/video/BV1boXABxEJ4/', logo: '/images/media/qbitai.png', sizeClass: 'h-10 sm:h-12', blend: true },
  { name: 'Tencent News', href: 'https://news.qq.com/rain/a/20260324A062P600', logo: '/images/media/tencent.svg', sizeClass: 'h-6 sm:h-7' },
  { name: '36Kr', href: 'https://eu.36kr.com/zh/p/3736415004590339', logo: '/images/media/36kr.png', sizeClass: 'h-6 sm:h-7' },
  { name: 'X', href: 'https://x.com/sukh_saroy/status/2035761644270411994?s=20', logo: '/images/media/x.svg', sizeClass: 'h-5 sm:h-6' },
  { name: 'Yahoo Tech', href: 'https://tech.yahoo.com/ai/articles/turns-ask-ai-play-expert-142356526.html', logo: '/images/media/yahoo.svg', sizeClass: 'h-6 sm:h-7' },
  { name: 'AIToday', href: 'https://www.aitoday.io/', logo: '/images/media/aitoday.png', sizeClass: 'h-6 sm:h-7' },
];

const LINKS = [
  { href: 'https://scholar.google.com/citations?user=A8J42tQAAAAJ', label: 'scholar', icon: BookOpen },
  { href: 'https://linkedin.com/in/zizhao-hu', label: 'linkedin', icon: Linkedin },
  { href: 'https://github.com/zizhao-hu', label: 'github', icon: Github },
  { href: 'mailto:zizhaohu3@gmail.com', label: 'email', icon: Mail },
];

type Collaborator = {
  name: string;
  role: string;
  href?: string;
  Logo: (props: { className?: string }) => JSX.Element;
};

const COLLABORATORS: Collaborator[] = [
  {
    name: 'Georgia Tech',
    role: 'BS · alumni',
    href: 'https://www.gatech.edu/',
    Logo: GeorgiaTechLogo,
  },
  {
    name: 'USC',
    role: 'MS + PhD',
    href: 'https://www.usc.edu/',
    Logo: USCLogo,
  },
  {
    name: 'Handshake AI',
    role: 'fellow',
    href: 'https://joinhandshake.com/',
    Logo: HandshakeAILogo,
  },
  {
    name: 'OpenAI',
    role: 'client',
    href: 'https://openai.com/',
    Logo: OpenAILogo,
  },
  {
    name: 'Meta',
    role: 'client',
    href: 'https://about.meta.com/',
    Logo: MetaLogo,
  },
  {
    name: 'Google Cloud',
    role: 'sponsor',
    href: 'https://cloud.google.com/',
    Logo: GoogleCloudLogo,
  },
  {
    name: 'Scale AI',
    role: 'contractor',
    href: 'https://scale.com/',
    Logo: ScaleAILogo,
  },
];

export const Overview = () => {
  return (
    <div className="relative font-mono text-[13px] leading-relaxed text-foreground">
      {/* Subtle dot grid backdrop */}
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
                Los Angeles
              </span>
            </div>
            <p className="text-[12.5px] text-muted-foreground">
              CS PhD <span className="text-foreground">@</span> USC ·{' '}
              <a
                href="https://glamor-usc.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 text-foreground hover:text-brand-orange transition-colors"
              >
                GLAMOR Lab
              </a>{' '}
              · advised by{' '}
              <a
                href="https://jessethomason.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 text-foreground hover:text-brand-orange transition-colors"
              >
                Jesse Thomason
              </a>
            </p>
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={l.label}
                  className="group inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] text-muted-foreground border border-border bg-background hover:border-foreground/30 hover:text-foreground transition-colors"
                >
                  <l.icon className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Compact bio — merged tagline + areas */}
        <p className="mb-5 text-[11.5px] text-muted-foreground/90 leading-snug">
          <span className="text-foreground font-semibold">Context is the new weight.</span>{' '}
          Low-latency control of what to remember, forget, and explore{' '}
          decides next-gen{' '}
          <span className="text-foreground font-semibold">world-model-aware, self-improving</span>{' '}
          AI. I work on{' '}
          <span className="text-foreground font-semibold">continual learning</span>,{' '}
          <span className="text-foreground font-semibold">unlearning</span>,{' '}
          <span className="text-foreground font-semibold">memory management</span>, and{' '}
          <span className="text-foreground font-semibold">task adaptation</span> — at the{' '}
          <span className="text-foreground font-semibold">agentic context</span>{' '}
          (in-context RL, harness) and{' '}
          <span className="text-foreground font-semibold">model level</span>{' '}
          (distillation, finetuning).
        </p>

        {/* What I work on */}
        <Section label="what i work on">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PILLARS.map((p) => (
              <article
                key={p.tag}
                className="border border-border bg-background hover:border-foreground/30 transition-colors p-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                  <p.icon className={`w-3 h-3 ${p.accent}`} />
                </div>
                <h3 className="text-[11px] font-semibold text-foreground mb-0.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[10px] leading-snug text-muted-foreground">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* News & Media */}
        <Section label="news & media">
          {/* Media banner — colored official logos */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-3">
            {MEDIA.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={m.name}
                title={m.name}
                className="block"
              >
                <img
                  src={m.logo}
                  alt={m.name}
                  className={`${m.sizeClass} w-auto max-w-[140px] object-contain ${m.blend ? 'mix-blend-multiply dark:mix-blend-screen' : ''}`}
                />
              </a>
            ))}
          </div>

          {/* News list — no box */}
          <ul className="divide-y divide-border/60">
            {NEWS.map((n) => {
              const inner = (
                <div className="flex items-baseline gap-2 py-1.5">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground/80 tabular-nums w-[76px] flex-shrink-0">
                    {n.date}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider px-1 py-px border border-border text-muted-foreground flex-shrink-0">
                    {n.tag}
                  </span>
                  <span className="text-[11px] text-foreground leading-snug">
                    {n.title}
                  </span>
                  {n.href && (
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-80 transition-opacity flex-shrink-0" />
                  )}
                </div>
              );
              return (
                <li key={n.date + n.title} className="group">
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
        <Section label="my path">
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-3">
            {PATH.map((p, i) => {
              const Icon = p.icon;
              const isLast = i === PATH.length - 1;
              return (
                <li key={p.tag} className="relative">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div
                      className={`w-6 h-6 flex items-center justify-center border flex-shrink-0 ${
                        p.current
                          ? 'border-brand-orange bg-brand-orange/10'
                          : 'border-border bg-background'
                      }`}
                    >
                      <Icon className={`w-3 h-3 ${p.accent}`} />
                    </div>
                    {!isLast && <span className="flex-1 h-px bg-border" />}
                  </div>

                  <div className="flex items-baseline gap-1 flex-wrap min-h-[12px]">
                    <span className="text-[8.5px] uppercase tracking-wider text-muted-foreground/80 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </span>
                    {p.current && (
                      <span className="text-[8px] font-semibold tracking-wider uppercase inline-flex items-center gap-0.5 px-1 py-px text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 bg-emerald-500/[0.08]">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        current
                      </span>
                    )}
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

        {/* Collaborators */}
        <Section label="collaborators" lastSection>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {COLLABORATORS.map((c) => {
              const Logo = c.Logo;
              const inner = (
                <div className="flex items-center gap-2 border border-border bg-background hover:border-foreground/30 transition-colors p-1.5 h-full">
                  <Logo className="w-7 h-7 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11.5px] font-semibold text-foreground leading-tight truncate flex items-center gap-1">
                      {c.name}
                      {c.href && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-[10.5px] text-muted-foreground leading-tight truncate">
                      {c.role}
                    </div>
                  </div>
                </div>
              );
              return (
                <li key={c.name} className="group">
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
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

