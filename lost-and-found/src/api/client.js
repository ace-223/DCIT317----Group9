// Owner: Role 5 (Auth) with Backend team. Shared fetch helper used by every file in src/api/.
// Base URL comes from .env (VITE_API_URL). The fallback below is only a placeholder.
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

export async function request(path, { method = 'GET', body, token } = {}) {
  const headers = {}
  if (body) headers['Content-Type'] = 'application/json'

  const authToken = token ?? localStorage.getItem('token')
  if (authToken) headers.Authorization = `Bearer ${authToken}`

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const message = await res.text().catch(() => '')
    throw new Error(message || `Request failed (${res.status})`)
  }
  return res.status === 204 ? null : res.json()
}

// TODO: file upload (multipart) helper once the backend image upload is decided.
