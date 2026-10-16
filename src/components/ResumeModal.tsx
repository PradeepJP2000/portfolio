import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { X, Printer, Copy, Check, Download, ExternalLink, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, soundEnabled }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (soundEnabled) playClickSound();
    window.print();
  };

  const handleCopyText = () => {
    if (soundEnabled) playClickSound();
    const text = `
${RESUME_DATA.name}
${RESUME_DATA.title}
${RESUME_DATA.phone} | ${RESUME_DATA.email} | ${RESUME_DATA.linkedinDisplay}

SUMMARY
${RESUME_DATA.summary}

TECHNICAL SKILLS
AI & Agents: Google ADK, LangChain, RAG, Multi-Agent Orchestration, Prompt Engineering, LLM Integrations, Embeddings
LLM & Outputs: OpenAI APIs, Azure OpenAI, Structured JSON Outputs, Schema-Driven Tool Contracts
Observability: Langfuse, OpenTelemetry (OTel), ELK, Structured Execution Tracing, Token Usage Tracking
Languages: Java, JavaScript, TypeScript
Backend: Spring Boot, Spring Security, JPA, Microservices, REST APIs, Batch Processing, Caching
Databases & Search: MongoDB, MongoDB Atlas Vector Search, MySQL, Apache Solr, Redis
Frontend: React.js, Redux, Angular, HTML, CSS, Vite, Streaming Chat UI

EXPERIENCE
Responsive (formerly RFPIO), Coimbatore, India
Senior Software Engineer (Mar 2025 – Present)
- Implemented Smart Search, an LLM-powered natural language search solution dynamically generating Solr queries.
- Contributed to Agentic RAG pipeline using OpenAI embedding models and MongoDB Atlas Vector Search with Brave Search.
- Implemented Langfuse-based LLM observability PoC to production using OpenTelemetry for end-to-end tracing.
- Led core design and implementation of Duplicate Assistant and Human-in-the-Loop (HITL) workflows.

Software Engineer (Mar 2024 – Mar 2025)
- Reduced Insights API response time from 19s to under 1s (~93% improvement, positive Microsoft feedback).
- Improved Apache Solr performance in Content Library Search to under 2s response times.
- Led backend implementation of Sequential Review contributing to securing a $1.5M deal.
- Led end-to-end migration of Section Template and Catalog in Content Library (140+ user stories).

Associate Software Engineer (Jul 2022 – Mar 2024)
- Implemented Project Auto ROT deduplication using MD5 hashing, MongoDB and Solr batch processing.
- PoC for Table Response Type for TCS.

Engineering Intern (Aug 2021 – Jul 2022)
- Migrated AngularJS to ReactJS components and optimized Content Analysis UI.

KEY ACHIEVEMENTS
- AI Observability: First engineer at Responsive to integrate Langfuse and OpenTelemetry into AI pipeline.
- Sequential Review: Led backend feature securing $1.5M deal.
- API Optimization: Insights API 19s to <1s.
- Search Query Efficiency: Solr under 2s response.
- Content Library Migration: 140+ user stories.

EDUCATION
Sri Ramakrishna Engineering College, Coimbatore, India
B.E. in Computer Science (2018 – 2022)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="bg-zinc-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <span className="font-bebas text-lg tracking-wider text-white">
              PRADEEP P — OFFICIAL RESUME
            </span>
            <span className="hidden sm:inline text-xs text-zinc-400 font-mono">
              (ATS Formatted)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={() => {
                if (soundEnabled) playClickSound();
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-xs sm:text-sm font-sans bg-white text-zinc-800 leading-relaxed selection:bg-red-200">
          {/* Header */}
          <div className="text-center border-b border-zinc-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mb-1">
              {RESUME_DATA.name}
            </h1>
            <p className="text-base font-semibold text-zinc-700 mb-2">{RESUME_DATA.title}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600">
              <span>{RESUME_DATA.phone}</span>
              <span>•</span>
              <a href={`mailto:${RESUME_DATA.email}`} className="text-blue-600 hover:underline">
                {RESUME_DATA.email}
              </a>
              <span>•</span>
              <a
                href={RESUME_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {RESUME_DATA.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-zinc-700 leading-normal text-justify">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <p>
                <strong className="text-zinc-900">AI &amp; Agents:</strong> Google ADK, LangChain, RAG, Multi-Agent Orchestration, Prompt Engineering, LLM Integrations, Embeddings
              </p>
              <p>
                <strong className="text-zinc-900">LLM &amp; Outputs:</strong> OpenAI APIs, Azure OpenAI, Structured JSON Outputs, Schema-Driven Tool Contracts, Tool Usage Policies, Fallback Strategies
              </p>
              <p>
                <strong className="text-zinc-900">Observability:</strong> Langfuse, OpenTelemetry (OTel), ELK, Structured Execution Tracing, Token Usage Tracking, Latency Monitoring
              </p>
              <p>
                <strong className="text-zinc-900">Agent Patterns:</strong> Supervisor/Subagent Architecture, Context-Aware Routing, Multi-Step Tool Chaining
              </p>
              <p>
                <strong className="text-zinc-900">Languages:</strong> Java, JavaScript, TypeScript
              </p>
              <p>
                <strong className="text-zinc-900">Backend &amp; Architecture:</strong> Spring Boot, Spring Security, JPA, Microservices, REST APIs, Batch Processing, Data Migration, Caching, Query Optimization
              </p>
              <p>
                <strong className="text-zinc-900">Databases &amp; Search:</strong> MongoDB, MongoDB Atlas Vector Search, MySQL, Apache Solr, Redis
              </p>
              <p>
                <strong className="text-zinc-900">DevOps &amp; Tools:</strong> Docker, Maven, Git
              </p>
              <p>
                <strong className="text-zinc-900">Frontend:</strong> React.js, Redux, Angular, HTML, CSS, Vite, Streaming Chat UI
              </p>
              <p>
                <strong className="text-zinc-900">Testing &amp; Practices:</strong> JUnit, Mockito, Embedded MongoDB, Playwright, Code Reviews, Agile
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-3">
              Experience
            </h2>

            {/* Responsive */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-zinc-900 mb-1">
                <span className="font-bold text-sm sm:text-base">Responsive (formerly RFPIO)</span>
                <span className="text-xs font-semibold text-zinc-600">Coimbatore, India</span>
              </div>

              {/* Role 1 */}
              <div className="mb-3">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-800 mb-1">
                  <span className="italic font-bold">Senior Software Engineer</span>
                  <span className="font-mono text-[11px] text-zinc-600">Mar 2025 – Present</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700">
                  <li>Implemented Smart Search, an LLM-powered natural language search solution that classifies inputs as keywords or queries, reusing the existing search flow for keywords and dynamically generating Solr queries for natural language inputs through production prompt engineering; evaluated OpenAI, Anthropic, AWS, and Oracle LLMs.</li>
                  <li>Contributed to implementing an Agentic RAG pipeline using OpenAI embedding models and MongoDB Atlas Vector Search to generate, store, and retrieve relevant content based on semantic similarity; incorporated agent-based decision-making for dynamic retrieval and response generation, with support for external website content through Brave Search.</li>
                  <li>Implemented a Langfuse-based LLM observability solution as a PoC using OpenTelemetry for end-to-end tracing, and carried it to production through a self-hosted deployment; enabled monitoring of model and tool execution, token usage, latency, errors, and cancellation states.</li>
                  <li>Led the core design and implementation of Duplicate Assistant, leveraging embeddings and LLMs to identify exact and near duplicates in real time, cluster similar content, and generate duplicate recommendations.</li>
                  <li>Implemented source citations for LLM-generated responses to improve transparency and user trust, using React to provide line-level references to the source of truth.</li>
                  <li>Engineered reusable tools and subagents enabling users to build custom agents in Agent Studio, supporting CRUD operations for Content Library items and Response Projects.</li>
                  <li>Designed Human-in-the-Loop (HITL) interaction for CRUD operations and ambiguous requests.</li>
                  <li>Designed and architected an LLM-powered PoC to auto-mark Questions and Sections in RFx Word documents using feedback-driven prompt refinement (improving accuracy 20% to 45%).</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="mb-3">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-800 mb-1">
                  <span className="italic font-bold">Software Engineer</span>
                  <span className="font-mono text-[11px] text-zinc-600">Mar 2024 – Mar 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700">
                  <li>Reduced Insights API response time from 19 seconds to under 1 second through backend optimization, earning positive feedback from Microsoft.</li>
                  <li>Improved Apache Solr performance in Content Library Search by enhancing caching and query optimizations, reducing response times to under 2 seconds and minimizing timeouts.</li>
                  <li>Led backend implementation of Sequential Review, a critical client-requested feature built for scalability and efficiency, contributing to securing a $1.5M deal.</li>
                  <li>Led the end-to-end migration of Section Template and Catalog in the Content Library module, owning front-end and back-end implementation and delivering 140+ user stories.</li>
                  <li>Led the proof of concept for Hierarchical Tags and established the base UI architecture.</li>
                  <li>Mentored junior developers, led a micro-team, and participated in code reviews.</li>
                  <li>Implemented backend unit tests using JUnit, Mockito, and Embedded MongoDB.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="mb-3">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-800 mb-1">
                  <span className="italic font-bold">Associate Software Engineer</span>
                  <span className="font-mono text-[11px] text-zinc-600">Jul 2022 – Mar 2024</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700">
                  <li>Implemented Project Auto ROT in a three-member team to eliminate redundant content during migration from Response Project to Content Library using MD5 hashing, with batch processing on MongoDB and Apache Solr.</li>
                  <li>Migrated Customize Flag from a single-flag to a multi-flag system, optimizing batch processes in MongoDB and Solr.</li>
                  <li>Led frontend and backend development in a two-member team on a proof of concept for integrating the Table Response Type into the Content Library, a key enhancement for TCS.</li>
                  <li>Integrated document content type into Chrome Lookup and MS Add-in.</li>
                  <li>Redesigned the Content Library UI, improving aesthetics, usability, and responsiveness across devices.</li>
                  <li>Fixed critical bugs reported via Zendesk, ensuring SLA compliance.</li>
                </ul>
              </div>

              {/* Role 4 */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-800 mb-1">
                  <span className="italic font-bold">Engineering Intern</span>
                  <span className="font-mono text-[11px] text-zinc-600">Aug 2021 – Jul 2022</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700">
                  <li>Contributed to Content Library UI modernization by migrating AngularJS components to ReactJS, applying advanced React patterns and performance tuning.</li>
                  <li>Redesigned UI components and optimized key features in Content Analysis module.</li>
                  <li>Collaborated with Production Support team to resolve client-reported issues within SLA-driven timelines.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-2">
              Key Achievements
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-zinc-700">
              <li>
                <strong className="text-zinc-900">AI Observability:</strong> First engineer at Responsive to integrate Langfuse and OpenTelemetry into the AI pipeline, enabling full execution tracing and token-level monitoring.
              </li>
              <li>
                <strong className="text-zinc-900">Sequential Review Feature:</strong> Led backend implementation of a critical feature requested by major clients, ensuring scalability and efficiency, and contributing to securing a $1.5M deal.
              </li>
              <li>
                <strong className="text-zinc-900">API Performance Optimization:</strong> Reduced Insights API response time from 19 seconds to under 1 second (~93% improvement), earning positive feedback from Microsoft.
              </li>
              <li>
                <strong className="text-zinc-900">Search Query Efficiency:</strong> Improved Apache Solr performance in Content Library Search through enhanced caching and query optimizations, reducing response times to under 2 seconds and minimizing timeouts.
              </li>
              <li>
                <strong className="text-zinc-900">Content Library Migration:</strong> Spearheaded a high-impact migration project, integrating 140+ user stories into the Content Library module across data migration, front-end, and back-end development.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-900 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs text-zinc-800">
              <div>
                <strong className="text-zinc-900 text-sm">Sri Ramakrishna Engineering College</strong> — Coimbatore, India
                <div className="text-zinc-600">B.E. in Computer Science</div>
              </div>
              <div className="font-mono text-zinc-600 font-semibold">2018 – 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
