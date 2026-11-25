// Owner: Role 5. Endpoints are defined in docs/API_CONTRACT.md
import { request } from './client'

export const loginRequest = (credentials) =>
  request('/auth/login', { method: 'POST', body: credentials })

export const registerRequest = (data) =>
  request('/auth/register', { method: 'POST', body: data })

export const getCurrentUser = () => request('/auth/me')
