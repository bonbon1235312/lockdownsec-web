# LockdownSec Web

The public Next.js frontend for LockdownSec's two-lane text-analysis experience.

It does not contain model weights, datasets, training code, or the FastAPI inference server. The site calls a separately deployed API through `NEXT_PUBLIC_API_BASE_URL`.

## Run locally

```bash
npm ci
copy .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` to the deployed inference API, without a trailing slash.

## Deploy

Import this repository into Vercel and configure the same `NEXT_PUBLIC_API_BASE_URL` environment variable for Production. The FastAPI model service is deployed separately.
