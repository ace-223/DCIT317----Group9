# API Contract (DRAFT)

> Frontend and backend developers: agree on this early and keep it updated.
> If you change an endpoint or field, update this file in the same PR.

Base URL: `VITE_API_URL` (placeholder: `http://localhost:8080/api`)
Auth: `Authorization: Bearer <token>` header on protected endpoints.

## Item object

| Field          | Type    | Notes                                              |
|----------------|---------|----------------------------------------------------|
| `id`           | string  | Unique id                                          |
| `title`        | string  | Short name, e.g. "Black Dell laptop bag"           |
| `description`  | string  |                                                    |
| `category`     | string  | See `src/constants/index.js`                       |
| `status`       | string  | `LOST`, `FOUND`, `CLAIMED`, `RETURNED`             |
| `location`     | string  | Where it was lost/found on campus                  |
| `dateOccurred` | string  | ISO date the item was lost/found                   |
| `imageUrl`     | string  | Optional                                           |
| `contactInfo`  | string  | How to reach the reporter (optional/hidden?)       |
| `reportedBy`   | string  | User id                                            |
| `createdAt`    | string  | ISO timestamp                                      |

## Endpoints

| Method | Path                    | Auth   | Purpose                                   |
|--------|-------------------------|--------|-------------------------------------------|
| POST   | `/auth/register`        | no     | Create account                            |
| POST   | `/auth/login`           | no     | Returns `{ token, user }`                 |
| GET    | `/auth/me`              | yes    | Current user                              |
| GET    | `/items`                | no     | List items. Query: `q`, `category`, `status`, `location`, `page` |
| GET    | `/items/:id`            | no     | One item                                  |
| POST   | `/items`                | yes    | Report a lost or found item               |
| PUT    | `/items/:id`            | yes    | Update (owner or admin)                   |
| DELETE | `/items/:id`            | yes    | Delete (owner or admin)                   |
| GET    | `/users/me/items`       | yes    | Items reported by the current user        |
| POST   | `/items/:id/claims`     | yes    | Submit a claim for an item                |
| GET    | `/claims`               | admin  | List claims                               |
| PATCH  | `/claims/:id`           | admin  | Approve or reject (`status`)              |

TODO (backend team): image upload approach, error response format, pagination shape, user `role` values (`USER`, `ADMIN`).
