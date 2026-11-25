// Owner: Roles 2/3/4 add what they need here. Endpoints are defined in docs/API_CONTRACT.md
import { request } from './client'

export const getItems = (params = {}) =>
  request(`/items?${new URLSearchParams(params).toString()}`)

export const getItem = (id) => request(`/items/${id}`)

export const createItem = (data) => request('/items', { method: 'POST', body: data })

export const updateItem = (id, data) =>
  request(`/items/${id}`, { method: 'PUT', body: data })

export const deleteItem = (id) => request(`/items/${id}`, { method: 'DELETE' })

export const getMyItems = () => request('/users/me/items')
