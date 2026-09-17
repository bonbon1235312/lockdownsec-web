# LockDown AI

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white) ![Deployment](https://img.shields.io/badge/live-lockdownsec.com-ff6246)

LockDown AI is a portfolio project exploring how two independently trained text-analysis models can be presented responsibly in a public product. It deliberately avoids a single authorship verdict: the interface shows separate, qualitative review signals and discloses the important limits of each lane.

**Live site:** [lockdownsec.com](https://lockdownsec.com)
**API health check:** [api.lockdownsec.com/healthz](https://api.lockdownsec.com/healthz)

> This is an educational and experimental project. It does not prove AI use, authorship, or misconduct, and must not be used as the sole basis for high-stakes decisions.

## What is in this repository

This public repository contains the deployed **Next.js frontend** only:

- real-time text submission UI with genuine API states
- two independent result lanes, with no invented ensemble score
- an accessible staged loading sequence and reduced-motion support
- model/research/about pages documenting the product boundaries
- privacy and terms pages for the public demo

It intentionally excludes model weights, private datasets, training notebooks, secrets, and the FastAPI inference implementation.

## Product principles

1. **Signals, not verdicts.** A result is a prompt for human review, not evidence of who wrote a document.
2. **Two lanes stay separate.** The raw-pattern and transformed/humanized-AI models answer different questions and are never merged into a fake “overall” conclusion.
3. **No fabricated states.** The UI only displays results returned by the live API; unavailable models appear unavailable.
4. **Plain language over confidence theatre.** Consumer-facing output uses qualitative bands rather than probability claims.
5. **Limits are visible.** Low results do not clear a document, and carefully expert-edited AI remains a known weak case.

## System design

```text
Browser
  │  POST /analyze (SSE progress + final result)
  ▼
Vercel / Next.js frontend
  │  NEXT_PUBLIC_API_BASE_URL
  ▼
FastAPI inference service
  ├─ Raw AI pattern model (experimental ONNX lane)
  └─ Humanizer V4.8 (PyTorch lane)
```

The frontend is deployed separately from inference so the public UI can scale independently without exposing model artifacts or server credentials.

More detail:

- [Architecture](docs/ARCHITECTURE.md)
- [Deployment runbook](docs/DEPLOYMENT.md)
- [Research and model notes](docs/RESEARCH.md)
- [Portfolio case study](docs/PORTFOLIO.md)

## Local development

### Prerequisites

- Node.js 20+
- npm
- A reachable LockDown AI inference API

### Setup

```powershell
git clone https://github.com/bonbon1235312/lockdownsec-web.git
cd lockdownsec-web
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Set the public API URL in `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.lockdownsec.com
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```powershell
npm test
npm run lint
npm run build
```

The unit tests protect key communication rules as well as request-state parsing: model output must remain non-verdict language, and legal copy must retain its clear contact and high-stakes-use boundaries.

## Deployment

Import this repository into Vercel and set `NEXT_PUBLIC_API_BASE_URL` for the relevant environments. The value is deliberately public: the browser needs to know where to call the API. Do not put server credentials, model paths, tunnel tokens, or private keys in this repository or in `NEXT_PUBLIC_*` variables.

See the [deployment runbook](docs/DEPLOYMENT.md) for the split frontend/API setup, health check, CORS, and Cloudflare tunnel notes.

## Privacy and responsible use

The public pages at [/privacy](https://lockdownsec.com/privacy) and [/terms](https://lockdownsec.com/terms) describe how the live demo is intended to be used. The frontend does not store pasted documents; submitted text is processed by the remote inference service. Users should not submit confidential or sensitive content.

## Contact

For project or privacy questions: [nicholsone140@gmail.com](mailto:nicholsone140@gmail.com)
