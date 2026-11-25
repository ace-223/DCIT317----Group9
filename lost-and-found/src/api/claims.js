// Owner: Role 4. Endpoints are defined in docs/API_CONTRACT.md
import { request } from './client'

export const createClaim = (itemId, data) =>
  request(`/items/${itemId}/claims`, { method: 'POST', body: data })

export const getClaims = () => request('/claims')

export const updateClaimStatus = (claimId, status) =>
  request(`/claims/${claimId}`, { method: 'PATCH', body: { status } })
