import React, { createContext, useState, useCallback, useMemo } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('@teammates:token')
    const storageUser = localStorage.getItem('@teammates:user')

    if (token && storageUser) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return JSON.parse(storageUser)
    }

    return null
  })

  const isAuthenticated = !!user

  const updateUser = useCallback(userData => {
    setUser(userData)
    localStorage.setItem('@teammates:user', JSON.stringify(userData))
  })

  const signIn = useCallback(async signInCredentials => {
    const response = await api.post('/sessions', {
      ...signInCredentials
    })

    const { token, user: signedUser } = response.data

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    localStorage.setItem('@teammates:token', token)
    localStorage.setItem('@teammates:user', JSON.stringify(signedUser))

    setUser(signedUser)
  }, [])

  const signOut = () => {
    localStorage.removeItem('@teammates:token')
    localStorage.removeItem('@teammates:user')

    setUser(null)
  }

  const memoizedValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      signIn,
      signOut,
      updateUser
    }),
    [user]
  )

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  )
}
