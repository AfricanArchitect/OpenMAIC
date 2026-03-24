# 🇺🇸 American AI Learning Network (AALN)

Built on **OpenMAIC** — aligned with the **White House National AI Policy Framework (March 2026)**.

## What This Is

AALN is a national AI literacy and innovation platform for **all Americans, ages 5–120**. It provides free,
interactive AI classrooms powered by multi-agent AI teachers, covering four core pillars:

| Pillar | Description |
|--------|-------------|
| 📖 **Learn AI** | Understand what AI is and how it works |
| 🛠️ **Use AI** | Use AI tools effectively and responsibly |
| ⚙️ **Create AI** | Build AI projects and experiments |
| 🛡️ **Protect** | Stay safe and protect your rights with AI |

## Framework Alignment

| Framework Section | AALN Implementation |
|---|---|
| I. Protecting Children & Empowering Parents | Parent Portal with age-assurance, content controls, screen-time limits, data-use opt-outs |
| II. Safeguarding Communities | Scam/fraud awareness lessons for adults and seniors in Protect pillar |
| III. IP & Creators | Lesson content cites sources; no unauthorized content reproduction |
| IV. Preventing Censorship / Free Speech | Open-source, self-hostable, no federal content moderation layer |
| V. Enabling Innovation | Built on open-source OpenMAIC; supports regulatory sandbox integration |
| VI. Educating Americans / AI-Ready Workforce | 20 prebuilt lessons across all age bands; Teacher Dashboard; land-grant ready |
| VII. Federal Framework | One national platform, state/district plug-in model, no federal mandate |

## Pages Built

- `/` — National landing page with age-band selector and four pillars
- `/curriculum` — 20 prebuilt lessons filterable by age and pillar
- `/parent-portal` — Parental controls, content safety, privacy settings
- `/teacher-dashboard` — Class roster, lesson assignment, grant reporting
- `/community-labs` — Find AI labs near you by ZIP code

## 20 Prebuilt Lessons

### 📖 Learn AI
- Ages 5–8: Meet the Robots!
- Ages 9–13: How Does AI Think?
- Ages 14–18: AI, ML & Neural Networks
- Ages 19–64: AI at Work: What You Need to Know
- Ages 65+: Understanding AI in Everyday Life

### 🛠️ Use AI
- Ages 5–8: Ask the AI Helper
- Ages 9–13: AI for School: Tools, Tips & Rules
- Ages 14–18: AI as Your Creative Partner
- Ages 19–64: Using AI to Run Your Small Business
- Ages 65+: Voice Assistants & AI Apps Safely

### ⚙️ Create AI
- Ages 5–8: Train Your AI Pet!
- Ages 9–13: Build a Simple AI Classifier
- Ages 14–18: Intro to ML & Python AI
- Ages 19–64: No-Code AI: Build Your First AI Tool
- Ages 65+: How People Build AI: Behind the Scenes

### 🛡️ Protect
- Ages 5–8: Real or Pretend? Spotting Fakes
- Ages 9–13: Deepfakes, Data & Digital Rights
- Ages 14–18: AI Ethics, Bias & Your Civil Rights
- Ages 19–64: AI Scams, Fraud & How to Fight Back
- Ages 65+: Protecting Yourself from AI Scams

## Quick Start

```bash
git clone https://github.com/AfricanArchitect/OpenMAIC.git
cd OpenMAIC
git checkout aaln-platform
pnpm install
cp .env.example .env.local
# Add your LLM API key to .env.local
pnpm dev
```

Then open http://localhost:3000

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AfricanArchitect/OpenMAIC&envDescription=Add+at+least+one+LLM+API+key)

## License

AGPL-3.0 · Built on OpenMAIC by Tsinghua University · AALN additions by AfricanArchitect
