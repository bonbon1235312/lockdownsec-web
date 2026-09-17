# Deployment runbook

## Public frontend

1. Import this GitHub repository into Vercel.
2. Set `NEXT_PUBLIC_API_BASE_URL` to the HTTPS inference endpoint without a trailing slash.
3. Deploy from `main`.
4. Confirm the frontend can reach the API health endpoint and submit an analysis request.

`NEXT_PUBLIC_API_BASE_URL` is intentionally exposed to the browser. It must contain only a public URL, never a token or credential.

## Inference API

The API runs separately because model weights and server dependencies do not belong in a Vercel frontend deployment. It should:

- bind only to its local service port
- load both selected model bundles at startup
- expose a lightweight `/healthz` endpoint
- set explicit CORS rules for the frontend hostname
- avoid logging submitted text
- report an unavailable lane honestly if a bundle fails to load

## Cloudflare Tunnel

`api.lockdownsec.com` is routed through a Cloudflare Tunnel to the local API port. This avoids exposing the inference host directly to the internet.

Before declaring a release healthy:

```powershell
curl https://api.lockdownsec.com/healthz
```

Then run a short, non-sensitive sample through [lockdownsec.com](https://lockdownsec.com) and verify both lane states are returned.

## Operational checklist

- [ ] `main` has passed `npm test`, `npm run lint`, and `npm run build`
- [ ] Vercel environment variable points to the intended HTTPS API URL
- [ ] API health endpoint returns both model statuses
- [ ] CORS permits `https://lockdownsec.com` and its Vercel deployment host as needed
- [ ] tunnel connector is healthy
- [ ] no secrets, model weights, or private data are present in Git history
- [ ] public terms and privacy links render correctly

## Security notes

- Rotate a tunnel token immediately if it is ever pasted into a chat, issue, screenshot, or commit.
- Keep tokens in the hosting provider's secret/environment-variable interface, never in `.env.example` or client-side code.
- The public API hostname is not a secret; rate limiting and request-size limits should still be enforced at the API/edge.
