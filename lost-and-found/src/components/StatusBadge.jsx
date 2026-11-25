// Owner: Role 1 - UI/UX & Styling Lead
// Small label showing LOST / FOUND / CLAIMED / RETURNED. Style it per status.
export default function StatusBadge({ status }) {
  return <span className={`status-badge status-${String(status).toLowerCase()}`}>{status}</span>
}
