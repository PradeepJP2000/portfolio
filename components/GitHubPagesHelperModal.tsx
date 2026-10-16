import React, { useState } from 'react';
import { X, Check, Copy, Sparkles, Terminal, Globe, ArrowRight, Github } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface GitHubPagesHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
}

export const GitHubPagesHelperModal: React.FC<GitHubPagesHelperModalProps> = ({
  isOpen,
  onClose,
  soundEnabled,
}) => {
  const [copiedAction, setCopiedAction] = useState(false);
  const [copiedManual, setCopiedManual] = useState(false);

  if (!isOpen) return null;

  const githubActionYaml = `name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  const manualCommands = `npm run build
npx gh-pages -d dist`;

  const copyYaml = () => {
    if (soundEnabled) playClickSound();
    navigator.clipboard.writeText(githubActionYaml);
    setCopiedAction(true);
    setTimeout(() => setCopiedAction(false), 2500);
  };

  const copyManual = () => {
    if (soundEnabled) playClickSound();
    navigator.clipboard.writeText(manualCommands);
    setCopiedManual(true);
    setTimeout(() => setCopiedManual(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#181818] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-red-950 via-[#1e1e1e] to-black border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Free GitHub Pages Hosting Guide</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  100% Free
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                Host this portfolio for free at <code className="text-red-400">&lt;username&gt;.github.io</code>
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (soundEnabled) playClickSound();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto text-xs sm:text-sm text-zinc-300">
          {/* Pre-configured checkmark */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 text-xs sm:text-sm mb-1">
                Already Pre-Configured for GitHub Pages!
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                We have already set <code className="bg-black/60 px-1.5 py-0.5 rounded text-amber-300 font-mono">base: './'</code> in <code className="text-zinc-200">vite.config.ts</code> so all your scripts, styles, fonts, and assets will load properly without 404 errors regardless of whether you host at the root domain or a repo subfolder path!
              </p>
            </div>
          </div>

          {/* Option A: Recommended GitHub Actions (Automatic) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">1</span>
                <span>Option A: Automated GitHub Actions (Recommended)</span>
              </h4>
              <button
                onClick={copyYaml}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs cursor-pointer"
              >
                {copiedAction ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAction ? 'Copied Workflow!' : 'Copy Workflow'}</span>
              </button>
            </div>

            <p className="text-xs text-zinc-400 mb-2">
              Save this file as <code className="text-red-400 font-mono">.github/workflows/deploy.yml</code> in your repository. Then go to <strong>Repo Settings ➔ Pages ➔ Source ➔ GitHub Actions</strong>. Every git push to main will automatically build and publish!
            </p>

            <pre className="p-3 rounded-lg bg-black/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-40">
              {githubActionYaml}
            </pre>
          </div>

          {/* Option B: Manual gh-pages CLI */}
          <div className="border-t border-zinc-800 pt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-zinc-700 text-white flex items-center justify-center text-xs">2</span>
                <span>Option B: Quick Command Line (gh-pages)</span>
              </h4>
              <button
                onClick={copyManual}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs cursor-pointer"
              >
                {copiedManual ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedManual ? 'Copied Commands!' : 'Copy Commands'}</span>
              </button>
            </div>

            <pre className="p-3 rounded-lg bg-black/80 border border-zinc-800 text-[11px] font-mono text-zinc-300">
              {manualCommands}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/60 border-t border-zinc-800 flex justify-end">
          <button
            onClick={() => {
              if (soundEnabled) playClickSound();
              onClose();
            }}
            className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};
