# University Lost & Found

A web app that helps students and staff report lost items, post found items, and reunite items with their owners.

**Frontend:** React (Vite) + React Router
**Backend:** _TBD by team lead: add stack and run instructions in the Backend section below_

---

## 1. Getting started

### Prerequisites
- [Node.js](https://nodejs.org) LTS (version 20.19+ or 22.12+)
- Git
- Recommended editor: VS Code

### Setup
```bash
git clone <repo-url>
cd lost-and-found
npm install
cp .env.example .env      # Windows PowerShell: copy .env.example .env
npm run dev
```
Open the link printed in the terminal (usually http://localhost:5173).

### Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (must pass before every PR) |
| `npm run preview` | Preview the production build locally |

### Troubleshooting
- **"running scripts is disabled on this system" (PowerShell):** run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, answer `Y`, retry.
- **"localhost refused to connect":** the dev server is not running. Run `npm run dev`.
- **Port already in use:** close the other terminal running the server, or use the port Vite suggests.
- **Weird errors after pulling:** run `npm install` again, new packages may have been added.

---

## 2. Project structure

```
src/
  api/          functions that call the backend (one file per resource)
  components/   reusable pieces (ItemCard, SearchBar, ...)
  constants/    shared constants (categories, statuses)
  context/      shared state (AuthContext)
  pages/        one file per route
  App.jsx       ALL routes live here (team lead only)
  main.jsx      app entry (team lead only)
  index.css     global styles and design tokens (Role 1)
docs/
  API_CONTRACT.md   agreed endpoints and data shapes
```

### Routes

| Path | Page | Owner |
|---|---|---|
| `/` | Home | Role 1 |
| `/browse` | Browse | Role 2 |
| `/items/:id` | ItemDetails | Role 4 |
| `/report-lost` | ReportLost | Role 3 |
| `/report-found` | ReportFound | Role 3 |
| `/login` | Login | Role 5 |
| `/register` | Register | Role 5 |
| `/profile` (login required) | Profile | Role 5 |
| `/admin` (admin only) | Admin | Role 4 |
| `*` | NotFound | Role 1 |

---

## 3. Team and ownership

| Role | Name | Owns |
|---|---|---|
| Team Lead / Integrator | | `App.jsx`, `main.jsx`, `Navbar.jsx`, repo settings, PR reviews, merges to `main` |
| 1. UI/UX & Styling Lead | | `index.css`, Home, NotFound, StatusBadge, Footer, look and feel of the Navbar |
| 2. Browse & Search Developer | | Browse page, `ItemCard`, `SearchBar`, filters |
| 3. Report Forms Developer | | ReportLost, ReportFound, form validation, image upload UI |
| 4. Item Details, Claims & Admin Developer | | ItemDetails, claim flow, Admin page |
| 5. Auth & Profile Developer (frontend) | | Login, Register, Profile, `AuthContext`, `ProtectedRoute` |
| 6. Backend Developer A | | Items and claims API, database design |
| 7. Backend Developer B | | Auth/users API, security, image upload, deployment |

**Testing and docs:** every owner tests their own feature and keeps its docs current. Report bugs as GitHub Issues.

### Ground rules for shared files
- **Only the team lead edits** `App.jsx`, `main.jsx` and `Navbar.jsx`. Need a new route or nav link? Open an issue or message the lead. All routes already exist as placeholders.
- Stay inside your own files. If you must touch someone else's file, tell them first.
- Need a new reusable component? Create a new file in `components/`. Don't rewrite an existing one.

---

## 4. Git workflow

Branches:
- `main`: stable, demo-ready. Only the team lead merges into it.
- `develop`: integration branch. All PRs target this.
- `feature/<area>-<thing>`: your working branch, e.g. `feature/browse-filters`.

### Daily flow
```bash
git checkout develop
git pull
git checkout -b feature/browse-filters

# ...work, then:
git add .
git commit -m "feat: add category filter to Browse page"
git push -u origin feature/browse-filters
```
Then open a Pull Request into **`develop`** on GitHub and fill in the template.

### Before opening a PR
1. `git checkout develop && git pull`, then `git checkout <your-branch> && git merge develop` (fix any conflicts).
2. Run `npm run build` and make sure it passes.
3. Check the browser console for errors.

### Commit messages
Format: `type: short description`

| Type | Use for |
|---|---|
| `feat` | a new feature |
| `fix` | a bug fix |
| `style` | CSS or formatting only |
| `refactor` | code change with no behavior change |
| `docs` | documentation |
| `chore` | tooling, dependencies, config |

### Pull requests
- One feature per PR. Small PRs get reviewed faster.
- At least one approval from the team lead is required.
- Never push directly to `main` or `develop`.

---

## 5. Conventions
- Components and pages: `PascalCase.jsx`. Everything else: `camelCase.js`.
- One component per file. Default-export the component.
- Call the backend only through functions in `src/api/`, never `fetch` inside components.
- Shared values (categories, statuses) live in `src/constants/`.
- Never commit `.env`, tokens or passwords.

---

## 6. Backend
_Team lead: fill in once decided._
- Stack: TBD
- Location: TBD (`/backend` folder or separate repo)
- How to run locally: TBD
- API reference: [`docs/API_CONTRACT.md`](docs/API_CONTRACT.md)
