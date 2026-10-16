export interface Profile {
  id: 'pradeep' | 'recruiter' | 'developer' | 'architect';
  name: string;
  avatarBg: string;
  avatarIcon: string;
  tagline: string;
  initialSection: string;
  accentColor: string;
}

export const PROFILES: Profile[] = [
  {
    id: 'pradeep',
    name: 'Full Overview',
    avatarBg: 'from-rose-600 to-red-800',
    avatarIcon: 'P',
    tagline: 'Complete professional journey in chronological order',
    initialSection: 'hero',
    accentColor: '#E50914',
  },
  {
    id: 'recruiter',
    name: 'Recruiter & Hiring',
    avatarBg: 'from-blue-600 to-indigo-800',
    avatarIcon: 'HR',
    tagline: 'Resume, key achievements, metrics & direct contact',
    initialSection: 'achievements',
    accentColor: '#3b82f6',
  },
  {
    id: 'developer',
    name: 'Engineering Peer',
    avatarBg: 'from-emerald-600 to-teal-800',
    avatarIcon: '</>',
    tagline: 'Production systems, architecture & tech stack',
    initialSection: 'projects',
    accentColor: '#10b981',
  },
  {
    id: 'architect',
    name: 'Tech Lead / Architect',
    avatarBg: 'from-amber-500 to-orange-700',
    avatarIcon: '🏛️',
    tagline: 'Scale, $1.5M deal, 19s→1s optimization & AI observability',
    initialSection: 'achievements',
    accentColor: '#f59e0b',
  },
];

export interface ExperienceMilestone {
  id: string;
  phaseNumber: number;
  phaseTitle: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  badge: string;
  synopsis: string;
  highlights: string[];
  techStack: string[];
  metrics: string[];
  coverGradient: string;
}

export interface AchievementItem {
  id: string;
  rank: number;
  title: string;
  category: string;
  badge: string;
  metric: string;
  highlightText: string;
  description: string;
  tech: string[];
  impactScore: number;
  coverImageGrad: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  genre: string;
  rating: string;
  period: string;
  shortDescription: string;
  fullOverview: string;
  architectureDetails: string[];
  outcomes: string[];
  techStack: string[];
  featuredBadge?: string;
  gradient: string;
  category: 'ai' | 'backend' | 'fullstack' | 'performance';
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; hot?: boolean }[];
}

export interface ResumeData {
  name: string;
  title: string;
  company: string;
  yearsExperience: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  location: string;
  summary: string;
  education: {
    institution: string;
    degree: string;
    location: string;
    period: string;
    details: string[];
  };
  keyStats: { label: string; value: string; detail: string }[];
  milestones: ExperienceMilestone[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  topCapabilities: {
    rank: number;
    title: string;
    subtitle: string;
    category: string;
    stat: string;
    description: string;
    tags: string[];
  }[];
}

export const RESUME_DATA: ResumeData = {
  name: 'Pradeep P',
  title: 'Senior Software Engineer',
  company: 'Responsive (formerly RFPIO)',
  yearsExperience: '4+ Years',
  phone: '+91 8754686493',
  email: 'jppradeep2000@gmail.com',
  linkedin: 'https://linkedin.com/in/pradeep-jp-2000',
  linkedinDisplay: 'linkedin.com/in/pradeep-jp-2000',
  github: 'https://github.com/pradeep-jp-2000',
  location: 'Coimbatore, India',
  summary:
    'Senior Software Engineer with 4+ years of production engineering experience in designing and building scalable web applications, REST APIs, and microservices using Java, Spring Boot, React, MongoDB, MySQL, and Apache Solr. Proven track record in performance optimization, reducing API response time from 19s to under 1s and Solr search responses to under 2s. Experienced in backend and UI architecture, feature and data migrations, and mentoring developers. Hands-on experience building AI/LLM-powered applications using embeddings, RAG, prompt engineering, and LLM integrations, along with taking AI observability from PoC to production using Langfuse. Exposure to Google ADK and AI-driven application development.',
  education: {
    institution: 'Sri Ramakrishna Engineering College',
    degree: 'B.E. in Computer Science & Engineering',
    location: 'Coimbatore, India',
    period: '2018 – 2022',
    details: [
      'Comprehensive foundation in Algorithms, Data Structures, Distributed Systems, and Database Architectures',
      'Strong engineering discipline transitioning straight into enterprise production engineering',
    ],
  },
  keyStats: [
    { label: 'Production Experience', value: '4+ Yrs', detail: 'Distributed backend & AI systems' },
    { label: 'Enterprise Contract Value', value: '$1.5M', detail: 'Led Sequential Review feature' },
    { label: 'API Latency Reduction', value: '19s ➔ <1s', detail: '93% speedup (Commended by Microsoft)' },
    { label: 'Migration Delivered', value: '140+ Stories', detail: 'Section Template & Catalog migration' },
  ],
  milestones: [
    {
      id: 'phase-4',
      phaseNumber: 4,
      phaseTitle: 'AGENTIC AI & DISTRIBUTED SCALE',
      role: 'Senior Software Engineer',
      company: 'Responsive (formerly RFPIO)',
      location: 'Coimbatore, India',
      period: 'Mar 2025 – Present',
      duration: 'Present',
      badge: 'CURRENT ROLE',
      coverGradient: 'from-red-950 via-zinc-900 to-black',
      synopsis:
        'Architecting enterprise Agentic AI systems, dynamic RAG pipelines with OpenAI & MongoDB Atlas Vector Search, and spearheading production-grade LLM observability using Langfuse and OpenTelemetry.',
      highlights: [
        'Implemented Smart Search: Natural language search classifying inputs as keywords or queries, reusing existing flow for keywords and dynamically generating Solr queries for NL inputs; evaluated OpenAI, Anthropic, AWS, and Oracle LLMs.',
        'Engineered an Agentic RAG pipeline using OpenAI embedding models and MongoDB Atlas Vector Search for semantic retrieval, incorporating dynamic agent-based retrieval & response generation with Brave Search integration.',
        'Pioneered Langfuse-based LLM observability PoC to production via self-hosted deployment, enabling tracing of token usage, latency, errors, and cancellation states across the agent pipeline.',
        'Led core design and implementation of Duplicate Assistant, leveraging embeddings and LLMs to identify exact and near duplicates in real-time, cluster content, and generate recommendations.',
        'Built source citations UI in React for line-level references to source-of-truth, linking exact content chunks to LLM responses to increase enterprise transparency.',
        'Engineered reusable tools and subagents for custom agents in Agent Studio, supporting CRUD operations for Content Library items and Response Projects.',
        'Designed Human-in-the-Loop (HITL) workflows prompting user confirmation and clarification before agent actions, boosting safety and accuracy.',
        'Architected LLM PoC to auto-mark Questions and Sections in RFx Word documents, boosting accuracy from 20% to 45% through feedback-driven prompt refinement.',
      ],
      techStack: [
        'OpenAI APIs',
        'Langfuse',
        'OpenTelemetry',
        'MongoDB Atlas Vector Search',
        'Google ADK',
        'LangChain',
        'Spring Boot',
        'React.js',
        'Apache Solr',
        'Brave Search',
      ],
      metrics: [
        'First engineer to introduce Langfuse LLM Observability to Responsive',
        'Accuracy improved from 20% to 45% on RFx document parsing',
        'Full token-level tracing across multi-agent pipelines',
      ],
    },
    {
      id: 'phase-3',
      phaseNumber: 3,
      phaseTitle: 'BACKEND ARCHITECTURE & OPTIMIZATION',
      role: 'Software Engineer',
      company: 'Responsive (formerly RFPIO)',
      location: 'Coimbatore, India',
      period: 'Mar 2024 – Mar 2025',
      duration: '1 Year',
      badge: 'PROMOTION & IMPACT',
      coverGradient: 'from-amber-950 via-zinc-900 to-black',
      synopsis:
        'Secured a $1.5M enterprise deal by delivering the critical Sequential Review feature, slashed Insights API latency by ~93% (19s down to <1s), and led migration of 140+ user stories.',
      highlights: [
        'Reduced Insights API response time from 19 seconds to under 1 second through deep backend query and cache optimization, earning positive commendation from Microsoft.',
        'Supercharged Apache Solr search performance in Content Library Search, driving response times to under 2 seconds and eliminating production timeouts.',
        'Led backend implementation of Sequential Review, a critical client-requested feature engineered for scale and concurrency, directly contributing to securing a $1.5M deal.',
        'Led end-to-end migration of Section Template and Catalog in Content Library module, owning full front-end and back-end delivery spanning 140+ user stories.',
        'Led proof-of-concept for Hierarchical Tags and established the base UI architecture, enabling adoption across enterprise clients.',
        'Mentored junior developers, led a micro-team, and instituted strict code review and testing practices with JUnit, Mockito, and Embedded MongoDB.',
      ],
      techStack: [
        'Java',
        'Spring Boot',
        'Apache Solr',
        'MongoDB',
        'MySQL',
        'React.js',
        'Redis',
        'JUnit',
        'Mockito',
      ],
      metrics: [
        '$1.5M enterprise contract secured via Sequential Review',
        '19s ➔ <1s Insights API latency (~93% reduction)',
        '<2s Apache Solr search response times',
        '140+ user stories delivered end-to-end',
      ],
    },
    {
      id: 'phase-2',
      phaseNumber: 2,
      phaseTitle: 'CORE SYSTEMS & DATA MIGRATION',
      role: 'Associate Software Engineer',
      company: 'Responsive (formerly RFPIO)',
      location: 'Coimbatore, India',
      period: 'Jul 2022 – Mar 2024',
      duration: '1 Year 8 Mos',
      badge: 'SYSTEM EXPANSION',
      coverGradient: 'from-blue-950 via-zinc-900 to-black',
      synopsis:
        'Engineered content deduplication via MD5 hashing and batch processing, built proof-of-concepts for tier-1 enterprises like TCS, and integrated browser and office extensions.',
      highlights: [
        'Implemented Project Auto ROT in a three-member team to eliminate redundant and stale content during migration using MD5 hashing with MongoDB and Apache Solr batch processing.',
        'Migrated Customize Flag from single-flag to multi-flag system, optimizing critical batch workflows in MongoDB and Solr.',
        'Led frontend and backend development on a PoC for Table Response Type in Content Library, unlocking a key requirement for TCS.',
        'Integrated document content type into Chrome Lookup extension and MS Add-in, allowing seamless document access and insertion.',
        'Redesigned the Content Library UI to elevate aesthetics, usability, and responsive design across desktop and mobile.',
        'Resolved critical Zendesk SLA bugs with high stability and customer satisfaction.',
      ],
      techStack: [
        'Java',
        'Spring Boot',
        'MongoDB',
        'Apache Solr',
        'React.js',
        'Chrome Extensions',
        'MS Add-in',
        'REST APIs',
      ],
      metrics: [
        'Auto ROT deduplication batch processing across millions of records',
        'TCS enterprise PoC successfully converted into core product',
        'SLA compliance maintained across critical Zendesk escalations',
      ],
    },
    {
      id: 'phase-1',
      phaseNumber: 1,
      phaseTitle: 'ENGINEERING FOUNDATION & UI MODERNIZATION',
      role: 'Engineering Intern',
      company: 'Responsive (formerly RFPIO)',
      location: 'Coimbatore, India',
      period: 'Aug 2021 – Jul 2022',
      duration: '1 Year',
      badge: 'COMMENCEMENT',
      coverGradient: 'from-emerald-950 via-zinc-900 to-black',
      synopsis:
        'Modernized enterprise UI from legacy AngularJS to ReactJS, optimized Content Analysis performance, and supported 24/7 SLA-driven production systems.',
      highlights: [
        'Contributed to Content Library UI modernization by migrating complex legacy AngularJS components to ReactJS, applying advanced React patterns and performance tuning.',
        'Redesigned UI components and optimized key features in Content Analysis module, improving usability and responsive speed.',
        'Collaborated directly with Production Support team to resolve live client issues under strict SLA deadlines.',
      ],
      techStack: ['React.js', 'AngularJS', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
      metrics: [
        'Zero-downtime migration from legacy AngularJS to ReactJS',
        'Faster UI load times and modular component architecture',
      ],
    },
  ],
  achievements: [
    {
      id: 'ach-deal',
      rank: 1,
      title: 'Sequential Review Engine — Secured $1.5M Enterprise Deal',
      category: 'Enterprise Revenue Impact',
      badge: 'ENTERPRISE IMPACT',
      metric: '$1.5M Deal',
      highlightText: 'Engineered high-concurrency approval pipeline enabling major contract closure',
      description:
        'Led backend implementation of Sequential Review, a critical client-requested workflow built for high concurrency, fault-tolerant state transitions, and auditability. The feature satisfied stringent enterprise security and compliance standards, directly securing a $1.5M client deal.',
      tech: ['Java', 'Spring Boot', 'MongoDB', 'Distributed Transactions', 'REST APIs'],
      impactScore: 99,
      coverImageGrad: 'from-amber-600/30 to-red-900/40',
    },
    {
      id: 'ach-latency',
      rank: 2,
      title: '93% API Optimization: 19s Reduced to Under 1 Second',
      category: 'Performance Engineering',
      badge: 'COMMENDED BY MICROSOFT',
      metric: '19s ➔ <1s',
      highlightText: 'Transformed unresponsive analytics into instantaneous sub-second query responses',
      description:
        'Diagnosed deep architectural bottlenecks in the Insights API, refactoring query execution, introducing intelligent multi-tier caching, and optimizing payload structures. Slashed response times from 19 seconds to under 1 second, earning direct commendation from Microsoft.',
      tech: ['Java', 'Spring Boot', 'Redis', 'Query Optimization', 'Profiling'],
      impactScore: 98,
      coverImageGrad: 'from-red-600/30 to-rose-950/40',
    },
    {
      id: 'ach-observability',
      rank: 3,
      title: 'First Engineer to Deploy Production Langfuse LLM Observability',
      category: 'AI Infrastructure',
      badge: 'INNOVATION PIONEER',
      metric: 'End-to-End Tracing',
      highlightText: 'Carried AI observability from proof-of-concept to production with OpenTelemetry',
      description:
        'Integrated Langfuse and OpenTelemetry into the core agent pipeline. Enabled deep visibility into model token usage, tool latency, subagent routing, and errors, directly laying the technical foundation for the company’s AI usage-based pricing and billing roadmap.',
      tech: ['Langfuse', 'OpenTelemetry', 'OpenAI APIs', 'Python/Node', 'Docker'],
      impactScore: 97,
      coverImageGrad: 'from-purple-600/30 to-violet-950/40',
    },
    {
      id: 'ach-solr',
      rank: 4,
      title: 'Enterprise Search Tuning: Apache Solr Under 2 Seconds',
      category: 'Search & Big Data',
      badge: 'SEARCH EXCELLENCE',
      metric: '< 2s Latency',
      highlightText: 'Eliminated Solr timeouts and optimized index queries across millions of documents',
      description:
        'Overhauled the Content Library Search architecture. Tuned Solr schema indexing, enhanced query caching, and restructured Solr filter queries, keeping query response times below 2 seconds and eliminating peak-hour timeout incidents.',
      tech: ['Apache Solr', 'Lucene Queries', 'Caching Strategy', 'Java'],
      impactScore: 95,
      coverImageGrad: 'from-cyan-600/30 to-blue-950/40',
    },
    {
      id: 'ach-migration',
      rank: 5,
      title: 'Section Template & Catalog Migration: 140+ User Stories',
      category: 'Systems Architecture',
      badge: 'SCALE & OWNERSHIP',
      metric: '140+ Stories',
      highlightText: 'Full lifecycle ownership: data migration, backend services, and modern UI',
      description:
        'Spearheaded end-to-end architecture and rollout for Section Template and Catalog modules. Owned database schema transitions, zero-downtime data migrations, and modern reactive UI components across 140+ agile user stories.',
      tech: ['React.js', 'Spring Boot', 'MongoDB', 'Data Migration', 'Agile'],
      impactScore: 94,
      coverImageGrad: 'from-emerald-600/30 to-teal-950/40',
    },
  ],
  projects: [
    {
      id: 'proj-smart-search',
      title: 'Smart Search: LLM-Powered Natural Language Query Engine',
      genre: 'AI & Information Retrieval',
      rating: 'Production Grade',
      period: '2025',
      shortDescription:
        'Natural language search engine classifying user intents and generating optimized Solr queries on the fly.',
      fullOverview:
        'Designed and implemented Smart Search, an intelligent query processor that parses natural language questions, classifies them into intent types, and dynamically compiles them into precise Apache Solr queries. Compared and benchmarked OpenAI, Anthropic, AWS, and Oracle models to balance accuracy, latency, and cost.',
      architectureDetails: [
        'Intent classifier routes keyword queries to fast-path Solr and complex questions to LLM compiler',
        'Production prompt engineering with structured JSON schema outputs to enforce valid Solr query syntax',
        'Dynamic fallback handling ensures zero search degradation if LLM latency exceeds SLAs',
      ],
      outcomes: [
        'Enabled enterprise users to query document repositories using conversational phrasing',
        'Maintained sub-2s response latency while delivering 40% higher semantic relevance',
      ],
      techStack: ['OpenAI APIs', 'Apache Solr', 'Java', 'Spring Boot', 'Prompt Engineering', 'React.js'],
      featuredBadge: 'AI SEARCH',
      gradient: 'from-red-600 to-rose-900',
      category: 'ai',
    },
    {
      id: 'proj-agentic-rag',
      title: 'Agentic RAG Pipeline with Semantic Vector Search',
      genre: 'Autonomous AI Systems',
      rating: 'Production Grade',
      period: '2025',
      shortDescription:
        'Autonomous multi-step RAG with MongoDB Atlas Vector Search, dynamic decision routing, and web grounding.',
      fullOverview:
        'Contributed to the design and implementation of an Agentic Retrieval-Augmented Generation (RAG) system. Powered by OpenAI embedding models and MongoDB Atlas Vector Search, the agent decides whether to retrieve internal knowledge, perform multi-step hops, or query external live web information via Brave Search API.',
      architectureDetails: [
        'Vector embedding generation and semantic clustering stored in MongoDB Atlas Vector Search',
        'Agentic decision loop: dynamically decides when to query internal vector store vs external web',
        'Context-aware reranking and synthesis with citation anchoring',
      ],
      outcomes: [
        'Seamless integration of external web intelligence alongside proprietary enterprise data',
        'Eliminated hallucinations through strict grounding and line-level citation tracking',
      ],
      techStack: [
        'MongoDB Atlas Vector Search',
        'OpenAI Embeddings',
        'Brave Search API',
        'LangChain',
        'TypeScript',
        'Spring Boot',
      ],
      featuredBadge: 'AGENTIC RAG',
      gradient: 'from-purple-600 to-indigo-900',
      category: 'ai',
    },
    {
      id: 'proj-langfuse-otel',
      title: 'Langfuse & OpenTelemetry LLM Observability Suite',
      genre: 'AI Infrastructure & DevOps',
      rating: 'Production Grade',
      period: '2025',
      shortDescription:
        'End-to-end tracing, latency monitoring, token consumption tracking, and pricing engine infrastructure.',
      fullOverview:
        'Conceived and rolled out full-lifecycle LLM observability across Responsive’s production AI stack. Built using a self-hosted Langfuse cluster integrated with OpenTelemetry collectors, this platform instruments every model invocation, subagent handoff, tool execution, and prompt variation.',
      architectureDetails: [
        'Distributed OpenTelemetry instrumentation across Java backend and Node.js microservices',
        'Self-hosted Langfuse deployment capturing token counts, cost breakdown, latency percentiles, and errors',
        'Export pipeline feeding executive dashboards and powering the AI usage-based billing roadmap',
      ],
      outcomes: [
        'Enabled instant root-cause analysis for failed tool executions and rate-limiting incidents',
        'Delivered transparent cost-per-user metrics across OpenAI, Anthropic, and AWS models',
      ],
      techStack: ['Langfuse', 'OpenTelemetry (OTel)', 'Docker', 'Spring Boot', 'ELK Stack', 'Node.js'],
      featuredBadge: 'OBSERVABILITY',
      gradient: 'from-blue-600 to-cyan-900',
      category: 'performance',
    },
    {
      id: 'proj-duplicate-assistant',
      title: 'Duplicate Assistant & Human-in-the-Loop (HITL)',
      genre: 'Real-Time Enterprise AI',
      rating: 'Production Grade',
      period: '2025',
      shortDescription:
        'Real-time content clustering and duplicate detection with safe Human-in-the-Loop approval workflows.',
      fullOverview:
        'Led the design and implementation of Duplicate Assistant, an intelligent system that identifies near and exact duplicates in response libraries in real-time. Paired with a Human-in-the-Loop (HITL) interactive interface that prompts users to review, confirm, or modify suggested merges before write operations occur.',
      architectureDetails: [
        'Real-time embedding vector comparison with cosine similarity thresholding',
        'Safe HITL guardrails preventing destructive automated updates on high-stakes proposal repositories',
        'Line-level citation preview rendered in React to show matching textual snippets side-by-side',
      ],
      outcomes: [
        'Prevented repository bloat by catching duplicates before submission',
        'Achieved 95%+ user trust score through transparent human verification checkpoints',
      ],
      techStack: ['OpenAI APIs', 'React.js', 'Spring Boot', 'MongoDB', 'Cosine Similarity', 'Vite'],
      featuredBadge: 'HITL AI',
      gradient: 'from-emerald-600 to-teal-900',
      category: 'fullstack',
    },
    {
      id: 'proj-sequential-review',
      title: 'Sequential Review Engine ($1.5M Enterprise Deal)',
      genre: 'Distributed Backend Systems',
      rating: 'High Concurrency',
      period: '2024',
      shortDescription:
        'High-concurrency sequential approval workflow engine built for enterprise compliance and scalability.',
      fullOverview:
        'Architected and implemented the backend state machine for Sequential Review, allowing multinational organizations to route multi-million dollar proposal responses through strictly ordered, multi-tier stakeholder sign-offs with full audit trails.',
      architectureDetails: [
        'Event-driven state transitions with optimistic locking and distributed transaction boundaries',
        'Scalable notification dispatch and delegated approval chains with automated timeouts',
        'Comprehensive automated regression test suite using JUnit, Mockito, and Embedded MongoDB',
      ],
      outcomes: [
        'Enabled Responsive to close a landmark $1.5M enterprise client contract',
        'Zero data inconsistency or state deadlock bugs recorded in production',
      ],
      techStack: ['Java 17', 'Spring Boot', 'MongoDB', 'Spring Security', 'JUnit', 'Mockito'],
      featuredBadge: '$1.5M REVENUE',
      gradient: 'from-amber-600 to-orange-900',
      category: 'backend',
    },
    {
      id: 'proj-auto-rot',
      title: 'Project Auto ROT & Batch Content Migration',
      genre: 'Data Engineering & Performance',
      rating: 'Batch Engine',
      period: '2023',
      shortDescription:
        'MD5-hashed batch deduplication pipeline cleansing millions of redundant records into Content Library.',
      fullOverview:
        'Co-engineered Project Auto ROT (Redundant, Outdated, Trivial) to sanitize and de-duplicate massive legacy response datasets during migration to the unified Content Library. Utilized MD5 cryptographic fingerprinting and chunked batch processing to maintain low memory footprints.',
      architectureDetails: [
        'Streaming MD5 hash computation across structured documents and attachments',
        'Batch pipeline coordinating bulk writes and index updates across MongoDB and Apache Solr',
        'Multi-flag tagging system allowing fine-grained governance and recovery',
      ],
      outcomes: [
        'Eliminated hundreds of thousands of redundant database rows and search index entries',
        'Cut migration synchronization times by more than 50%',
      ],
      techStack: ['Java', 'Spring Batch', 'MongoDB', 'Apache Solr', 'MD5 Hashing', 'Redis'],
      featuredBadge: 'DATA PIPELINE',
      gradient: 'from-slate-600 to-zinc-900',
      category: 'backend',
    },
  ],
  skillCategories: [
    {
      category: 'AI & Multi-Agent Systems',
      icon: '🤖',
      description: 'Agentic workflows, prompt engineering, RAG, and LLM integrations',
      skills: [
        { name: 'Google ADK', level: 'Advanced', hot: true },
        { name: 'LangChain', level: 'Advanced', hot: true },
        { name: 'Agentic RAG Pipelines', level: 'Expert', hot: true },
        { name: 'Multi-Agent Orchestration', level: 'Advanced', hot: true },
        { name: 'Prompt Engineering', level: 'Expert', hot: true },
        { name: 'LLM Integrations (OpenAI/Anthropic)', level: 'Expert', hot: true },
        { name: 'Embeddings & Vector Retrieval', level: 'Expert', hot: true },
        { name: 'Supervisor / Subagent Architecture', level: 'Advanced', hot: true },
        { name: 'Human-in-the-Loop (HITL)', level: 'Expert', hot: true },
        { name: 'Schema-Driven Tool Contracts', level: 'Expert', hot: true },
      ],
    },
    {
      category: 'Observability & Monitoring',
      icon: '📊',
      description: 'Deep execution tracing, token tracking, and latency analytics',
      skills: [
        { name: 'Langfuse (PoC to Production)', level: 'Expert', hot: true },
        { name: 'OpenTelemetry (OTel)', level: 'Advanced', hot: true },
        { name: 'Structured Execution Tracing', level: 'Expert', hot: true },
        { name: 'Token Usage & Cost Tracking', level: 'Expert', hot: true },
        { name: 'Latency Monitoring', level: 'Expert' },
        { name: 'ELK Stack', level: 'Proficient' },
        { name: 'AI Usage-Based Billing Metrics', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend & Architecture',
      icon: '⚙️',
      description: 'High-throughput microservices, API tuning, and scalable systems',
      skills: [
        { name: 'Java (8 / 11 / 17 / 21)', level: 'Expert', hot: true },
        { name: 'Spring Boot', level: 'Expert', hot: true },
        { name: 'Microservices & REST APIs', level: 'Expert', hot: true },
        { name: 'Spring Security & JPA', level: 'Expert' },
        { name: 'Performance & Latency Tuning', level: 'Expert', hot: true },
        { name: 'Batch Processing & Data Migration', level: 'Expert' },
        { name: 'Query Optimization & Caching', level: 'Expert', hot: true },
        { name: 'Distributed State Machines', level: 'Advanced' },
      ],
    },
    {
      category: 'Databases & Search',
      icon: '🔍',
      description: 'Vector databases, full-text enterprise search, and caching',
      skills: [
        { name: 'MongoDB Atlas Vector Search', level: 'Expert', hot: true },
        { name: 'Apache Solr', level: 'Expert', hot: true },
        { name: 'MongoDB', level: 'Expert', hot: true },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Redis Caching', level: 'Advanced' },
        { name: 'Lucene Query Syntax', level: 'Expert' },
      ],
    },
    {
      category: 'Frontend & UI Engineering',
      icon: '💻',
      description: 'Modern reactive web interfaces, citation viewers, and streaming UI',
      skills: [
        { name: 'React.js', level: 'Expert', hot: true },
        { name: 'TypeScript', level: 'Expert', hot: true },
        { name: 'JavaScript (ESNext)', level: 'Expert' },
        { name: 'Streaming Chat UI', level: 'Advanced', hot: true },
        { name: 'Redux State Management', level: 'Advanced' },
        { name: 'Vite & Modern Tooling', level: 'Expert' },
        { name: 'Tailwind CSS & Responsive UI', level: 'Expert' },
        { name: 'Angular / AngularJS Migration', level: 'Advanced' },
      ],
    },
    {
      category: 'DevOps, Testing & Quality',
      icon: '🚀',
      description: 'Containerization, automated testing, and agile practices',
      skills: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'Maven', level: 'Expert' },
        { name: 'Git & GitHub Workflows', level: 'Expert' },
        { name: 'JUnit & Mockito', level: 'Expert' },
        { name: 'Embedded MongoDB', level: 'Advanced' },
        { name: 'Playwright', level: 'Proficient' },
        { name: 'Code Reviews & Mentoring', level: 'Expert' },
        { name: 'Agile & Scrum Delivery', level: 'Expert' },
      ],
    },
  ],
  topCapabilities: [
    {
      rank: 1,
      title: 'Agentic RAG & Langfuse Observability',
      subtitle: 'Production Autonomous AI Systems',
      category: 'AI / LLM',
      stat: 'Production Deployed',
      description:
        'Multi-agent RAG pipeline with MongoDB Atlas Vector Search, Brave Search external grounding, and full OpenTelemetry tracing.',
      tags: ['Langfuse', 'OpenAI', 'MongoDB Vector', 'OTel'],
    },
    {
      rank: 2,
      title: 'Java & Spring Boot Microservices',
      subtitle: 'Mission-Critical Enterprise Backend',
      category: 'Backend',
      stat: '4+ Years Core Stack',
      description:
        'Architected robust REST APIs, secure microservices, and batch migration jobs powering tier-1 clients.',
      tags: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA'],
    },
    {
      rank: 3,
      title: '19s Down to <1s API Response Time',
      subtitle: '93% Latency Optimization',
      category: 'Performance',
      stat: 'Microsoft Commendation',
      description:
        'Refactored slow database query paths, redesigned caching layers, and eliminated high-latency API bottlenecks.',
      tags: ['Latency Tuning', 'Redis', 'Caching', 'Profiling'],
    },
    {
      rank: 4,
      title: 'Sequential Review ($1.5M Enterprise Deal)',
      subtitle: 'Mission-Critical Workflow Engine',
      category: 'Business Impact',
      stat: '$1.5M Closed Deal',
      description:
        'Engineered high-concurrency multi-tier approval state machine ensuring compliance and closing a marquee deal.',
      tags: ['Spring Boot', 'MongoDB', 'Enterprise State Machine'],
    },
    {
      rank: 5,
      title: 'Apache Solr Search Under 2 Seconds',
      subtitle: 'High-Throughput Enterprise Search',
      category: 'Search Engine',
      stat: '< 2s Response',
      description:
        'Optimized schema indexing, restructured filter queries, and deployed smart cache layers across millions of records.',
      tags: ['Apache Solr', 'Lucene', 'Query Cache'],
    },
    {
      rank: 6,
      title: 'Duplicate Assistant with Real-Time HITL',
      subtitle: 'Intelligent Knowledge Management',
      category: 'AI Application',
      stat: '95%+ Accuracy',
      description:
        'Real-time content deduplication clustering using embeddings with transparent Human-in-the-Loop confirmation checkpoints.',
      tags: ['Embeddings', 'Human-in-the-Loop', 'React'],
    },
    {
      rank: 7,
      title: 'Smart Search: Natural Language to Solr',
      subtitle: 'Conversational Query Compilation',
      category: 'AI Search',
      stat: 'Multi-LLM Evaluated',
      description:
        'Evaluated OpenAI, Anthropic, AWS, and Oracle LLMs to convert natural language queries into production Solr queries.',
      tags: ['Smart Search', 'Prompt Engineering', 'Solr'],
    },
    {
      rank: 8,
      title: 'Agent Studio Reusable Tools & Subagents',
      subtitle: 'Autonomous Agent Framework',
      category: 'AI Platform',
      stat: 'CRUD & Automation',
      description:
        'Engineered composable tools and subagents allowing customers to build autonomous agents for proposal operations.',
      tags: ['Supervisor / Subagent', 'Google ADK', 'Agent Studio'],
    },
    {
      rank: 9,
      title: '140+ Stories: Section Template & Catalog',
      subtitle: 'End-to-End Migration Leadership',
      category: 'Engineering Leadership',
      stat: '140+ User Stories',
      description:
        'Owned data migration scripts, Spring Boot services, and React UI components from inception to flawless release.',
      tags: ['React', 'Spring Boot', 'Data Migration'],
    },
    {
      rank: 10,
      title: 'React.js Streaming UI & Line-Level Citations',
      subtitle: 'Modern Enterprise User Experience',
      category: 'Frontend',
      stat: 'Zero-Downtime Migration',
      description:
        'Modernized legacy UI into reactive, fast React components with line-level source citations and streaming chat.',
      tags: ['React.js', 'TypeScript', 'Streaming UI', 'Vite'],
    },
  ],
};
