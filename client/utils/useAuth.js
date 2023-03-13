import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

// making custom hook to use context in each component
export const useAuth = () => useContext(AuthContext)

// creating context
export const AuthContext = createContext({})

// defining the Context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('') // state for tracking user
  const [isAuth, setIsAuth] = useState('') // state for tracking jwt token

  useEffect(() => {
    const token = localStorage.getItem('token') // getting token from storage
    const getUser = async (tkn) => {
      const { data: res } = await axios.get('/api/user/verify', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tkn}`,
        },
      })
      setUser(res.user) // updating the state
    }
    if (token) {
      setIsAuth(token)
      getUser(token)
    } else {
      localStorage.setItem('token', isAuth)
    }
  }, [isAuth])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
