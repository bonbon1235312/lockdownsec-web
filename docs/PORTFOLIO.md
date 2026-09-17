# Portfolio case study: LockDown AI

## The brief

Build a live, polished public interface around two locally developed text-analysis models without overstating what AI detection can establish.

## What I built

- A production-style Next.js detector experience with real API inference from day one.
- A split deployment: Vercel for the interface and a separate FastAPI service for model inference.
- A Cloudflare Tunnel public API route that keeps the inference host private.
- A two-lane results system that shows disagreement rather than manufacturing an “overall” score.
- An animated but reduced-motion-aware interface with streaming request stages.
- Public privacy and terms pages that match the product's actual data flow and limitations.

## The design decision that mattered

The tempting interface is a confidence bar with a single “AI detected” verdict. That would be misleading here. Instead, the UI presents independent, plain-language signals and makes its limitations part of the product, not a footnote.

## Technical highlights

- Next.js 16 App Router + TypeScript
- Server-Sent Events parsing for live stages
- Accessible semantic navigation and responsive layouts
- CORS-aware client/API boundary
- Environment-configured public API URL
- Automated tests for consumer-facing model-language rules

## Evidence of engineering judgment

The project documents a known failure mode rather than hiding it: the raw lane can over-trigger on polished human text, while transformed-AI detection is weak for heavily expert-edited examples. The portfolio value is not claiming a solved impossible problem; it is showing careful model evaluation, honest product communication, and an operational deployment around the work.
