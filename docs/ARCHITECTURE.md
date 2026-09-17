# Architecture

## Deployment boundary

LockDown AI is split deliberately into a public frontend and a private inference service.

| Layer | Responsibility | Public? |
| --- | --- | --- |
| Next.js frontend | User experience, request validation, staged loading, qualitative presentation | Yes |
| FastAPI inference API | Loads selected artifacts and returns per-lane signals | No source or weights in this repo |
| Cloudflare Tunnel | Routes `api.lockdownsec.com` to the private inference host without opening an origin port | Public hostname, private origin |
| Model artifacts | ONNX raw-pattern lane and V4.8 humanized-AI lane | Never committed |

## Request lifecycle

1. The browser validates non-empty text and the character limit.
2. The frontend calls the configured API URL.
3. The API emits genuine staged events while the request runs.
4. The UI renders each lane independently.
5. A failure or unavailable lane is shown as unavailable; it is never replaced with a preset result.

## Why two lanes?

The models were trained for different signal families. Combining their outputs into a single score would suggest a level of calibration and certainty that the project does not have. The product instead makes the disagreement informative:

- **Raw AI pattern lane:** experimental and deliberately caveated; it can be overly sensitive.
- **Humanizer V4.8 lane:** designed to review signals that may remain after transformations. Its conservative threshold means a low result is not clearance.

## Data handling boundary

The web app does not implement a user-text database. Text is forwarded for live inference. Operational infrastructure can still process technical metadata necessary to serve and secure requests. See the public privacy page for the user-facing statement.

## Repository boundary

This repository is intentionally safe to show in a portfolio. It does not include training data, checkpoint files, service secrets, server configuration containing credentials, or private API source code.
