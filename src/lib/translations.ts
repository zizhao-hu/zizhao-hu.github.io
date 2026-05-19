export type Lang = 'en' | 'cn';

export const translations = {
  // --- hero ---
  'location': {
    en: 'Los Angeles',
    cn: '洛杉矶',
  },
  'affiliation.prefix': { en: 'CS PhD', cn: '计算机博士在读' },
  'affiliation.at': { en: '@', cn: '@' },
  'affiliation.university': { en: 'USC', cn: '南加州大学' },
  'affiliation.lab': { en: 'GLAMOR Lab', cn: 'GLAMOR 实验室' },
  'affiliation.advisor.prefix': { en: 'advised by', cn: '导师' },
  'affiliation.advisor.name': { en: 'Jesse Thomason', cn: 'Jesse Thomason' },

  // --- quote ---
  'quote.context': { en: 'Context is the new weight.', cn: '上下文即新权重。' },

  // --- bio paragraph ---
  'bio.work.lead': { en: 'I mainly work on', cn: '主要研究方向：' },
  'bio.work.posttraining': { en: 'post-training LLM agents', cn: '大语言模型智能体后训练' },
  'bio.work.tail': {
    en: '. Low-latency control of what to remember, forget, and explore decides next-gen',
    cn: '。低延迟控制 “记住什么 / 遗忘什么 / 探索什么” 决定下一代',
  },
  'bio.world': { en: 'world-model-aware, self-improving', cn: '世界模型感知、可自我进化的' },
  'bio.ai': { en: 'AI', cn: 'AI 智能体' },
  'bio.iworkon': { en: '. I work on', cn: '。研究主题包括' },
  'bio.continual': { en: 'continual learning', cn: '持续学习' },
  'bio.unlearning': { en: 'unlearning', cn: '遗忘学习' },
  'bio.memory_mgmt': { en: 'memory management', cn: '记忆管理' },
  'bio.task_adapt': { en: 'task adaptation', cn: '任务适配' },
  'bio.atthe': { en: '— at the', cn: '——分别在' },
  'bio.agentic_ctx': { en: 'agentic context', cn: '智能体上下文层' },
  'bio.parens_agent': {
    en: '(in-context RL, harness)',
    cn: '（上下文强化学习、harness）',
  },
  'bio.and_model': { en: 'and', cn: '与' },
  'bio.model_level': { en: 'model level', cn: '模型层' },
  'bio.parens_model': {
    en: '(distillation, finetuning).',
    cn: '（蒸馏、微调）。',
  },

  // --- section labels ---
  'section.work': { en: 'what i work on', cn: '我的研究方向' },
  'section.news': { en: 'news & media', cn: '新闻与媒体' },
  'section.path': { en: 'my path', cn: '我的研究历程' },
  'section.collab': { en: 'collaborators', cn: '合作机构' },

  // --- pillars ---
  'pillar.memory.tag': { en: 'memory', cn: '记忆' },
  'pillar.memory.title': { en: 'Agentic Memory', cn: '智能体记忆' },
  'pillar.memory.desc': {
    en: 'Continual learning of AI agents — in-context learning, continual fine-tuning, and unlearning.',
    cn: '智能体持续学习——上下文学习、持续微调与遗忘学习。',
  },

  'pillar.world.tag': { en: 'world model', cn: '世界模型' },
  'pillar.world.title': { en: 'World Model', cn: '世界模型' },
  'pillar.world.desc': {
    en: 'In-context world models, adaptation to post-training task worlds, and adapting agents in evolving envs.',
    cn: '上下文世界模型、面向后训练任务环境的适配，以及在变化环境中持续适应的智能体。',
  },

  'pillar.latency.tag': { en: 'latency', cn: '低延迟' },
  'pillar.latency.title': { en: 'Low-Latency AI', cn: '低延迟 AI' },
  'pillar.latency.desc': {
    en: 'Efficient attention architectures, KV-cache compression, latent segmentation, and recurrent transformers.',
    cn: '高效注意力架构、KV 缓存压缩、潜空间分段、循环 Transformer。',
  },

  'pillar.safety.tag': { en: 'safety', cn: '安全' },
  'pillar.safety.title': { en: 'AI Safety', cn: 'AI 安全' },
  'pillar.safety.desc': {
    en: 'Synthetic data training, risks of multi-agent interaction, post-training guardrails, and AI behavioral study.',
    cn: '合成数据训练、多智能体交互风险、后训练防护栏与 AI 行为研究。',
  },

  // --- contact labels ---
  'link.scholar': { en: 'scholar', cn: '学术' },
  'link.linkedin': { en: 'linkedin', cn: 'LinkedIn' },
  'link.github': { en: 'github', cn: 'GitHub' },
  'link.email': { en: 'email', cn: '邮件' },

  // --- news labels (left as raw outlet names; just the tag column) ---
  'news.preprint.tag': { en: 'preprint', cn: '论文' },
  'news.icmi.title': {
    en: 'Presented Multimodal Synthetic Data Finetuning and Model Collapse at ACM ICMI',
    cn: '在 ACM ICMI 报告《多模态合成数据微调与模型坍塌》',
  },
  'news.handshake.start.title': {
    en: 'Started Handshake AI Fellowship 2025',
    cn: '加入 Handshake AI Fellowship 2025',
  },
  'news.canary.join.title': {
    en: 'Joined Project Canary (Handshake AI)',
    cn: '加入 Project Canary（Handshake AI）',
  },
  'news.canary.leave.title': {
    en: 'Wrapped up Project Canary',
    cn: '结束 Project Canary',
  },
  'news.shred.title': {
    en: 'arXiv preprint: SHRED — Document Unlearning via Self-Distillation and Entropy Demotion',
    cn: 'arXiv 论文：SHRED——基于自蒸馏与熵抑制的文档级反学习',
  },
  'news.preprint.title': {
    en: 'arXiv preprint: Expert Personas Improve LLM Alignment but Damage Accuracy — Bootstrapping Intent-Based Persona Routing with PRISM',
    cn: 'arXiv 论文：专家人格提升对齐却损害准确率——基于意图的人格路由 PRISM',
  },
  'news.coverage.title': {
    en: 'Media coverage on PRISM paper — The Register, AIToday, Tencent News, 36Kr, QbitAI, Yahoo Tech',
    cn: 'PRISM 论文媒体报道 ——《The Register》、AIToday、腾讯新闻、36 氪、量子位、Yahoo 科技',
  },
} as const;

export type TranslationKey = keyof typeof translations;
