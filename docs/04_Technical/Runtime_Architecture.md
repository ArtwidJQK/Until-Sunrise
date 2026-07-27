# Product Runtime Architecture

Status: Review
Owner: Technical Director
Task: `TASK-0006`

## Runtime Split

| Runtime | Entry | Purpose |
| --- | --- | --- |
| Product app | `index.html` + `src/` | React/TypeScript cinematic storytelling product with private account and server-side progress. |
| Progress server | `server/index.js` | Express API, JWT session, bcrypt password hash, SQLite progress record. |
| Vertical slice | `app/index.html` | Existing vanilla JavaScript Scene 001 prototype and Memory Journal. |

The product app does not replace the validated vertical slice. It is the production shell into which approved scene-level content can migrate after scene specifications are complete.

## Frontend

- React 19 and TypeScript via Vite.
- Framer Motion for scene transitions.
- Three.js through React Three Fiber and Drei for a lazily loaded 3D constellation, particle field, and slow camera drift behind the cinematic UI.
- CSS particle field, cinematic letterboxing, parallax-ready background composition, subtitles, and reduced-motion support.
- Web Audio API produces an opt-in synthesized ambient tone; no unlicensed audio is embedded.
- The Three.js layer respects `prefers-reduced-motion` and is code-split from the initial application bundle.
- Story content in `src/data/story.ts` is paraphrased from approved sources and carries source references.

## Backend

- First launch permits one account bootstrap, fixed to `Ngọc Anh`.
- Password is stored only as a bcrypt hash.
- JWT secures progress endpoints.
- SQLite stores the last scene identifier for the account.
- `server/data/` is ignored by Git.

## API

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Service health check. |
| GET | `/api/auth/status` | Check whether the private account exists. |
| POST | `/api/auth/bootstrap` | Create the one permitted account. |
| POST | `/api/auth/login` | Start a private session. |
| GET/PUT | `/api/progress` | Load or save the current scene. |

## Deployment Requirements

- Set a long random `JWT_SECRET`.
- Serve the built Vite output over HTTPS.
- Keep the SQLite database on persistent encrypted storage.
- Do not expose the bootstrap route after the account is created.
- Replace generated and CSS placeholder assets only with original or licensed assets.
