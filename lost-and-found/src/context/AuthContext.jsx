import { useState } from 'react'
import { AuthContext } from './authContextObject'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // TODO (Role 5): login(), register(), logout(), restore session from the saved token.
  const value = { user, setUser, isAuthenticated: Boolean(user) }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}