// Owner: Role 5 - Auth & Profile Developer
// Wrap a page to require login (and optionally admin). Used in App.jsx by the team lead.
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user } = useAuth()

  // While the backend is not ready, .env can set VITE_BYPASS_AUTH=true to view protected pages.
  if (import.meta.env.VITE_BYPASS_AUTH === 'true') return children

  if (!user) return <Navigate to="/login" replace />
  if (requireAdmin && user.role !== 'ADMIN') return <Navigate to="/" replace />
  return children
}
