import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'
import { fetcher } from '../utils/fetcher'
import useToast from './useToast'

// making custom hook to use context in each component
export const useAuth = () => useContext(AuthContext)

// creating context
export const AuthContext = createContext({})

// defining the Context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({}) // state for tracking user
  const [isAuth, setIsAuth] = useState('') // state for tracking jwt token
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const toast = useToast()

  useEffect(() => {
    refreshSession()
  }, [])

  async function refreshSession() {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/auth/refresh_token', {
        method: 'POST',
      })
      console.log(res)
      setIsAuth(res.accesstoken)
      setUser(res.user)
      toast.open(res)
    } catch (error) {
      console.log(error)
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
    setIsLoading(false)
  }

  async function register(body) {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/auth/register', { body })
      toast.open(res)
      console.log(res)
      // router.push('/login')
    } catch (error) {
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
    setIsLoading(false)
  }

  async function login(body) {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/auth/login', { body })
      setIsAuth(res.accesstoken)
      setUser(res.user)
      toast.open(res)
      router.push('/')
    } catch (error) {
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
    setIsLoading(false)
  }

  async function logout() {
    setIsLoading(true)
    try {
      await fetcher('/api/auth/logout', { method: 'POST' })
      setIsAuth('')
      setUser({})
      router.push('/login')
    } catch (error) {
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
    setIsLoading(false)
  }

  // setIsLoading(true)
  // setIsLoading(false)
  async function verifyEmail({ id, token }) {
    try {
      const res = await fetcher(`/api/verify-email/${id}/${token}`)
      return res.message
      toast.open(res)
    } catch (error) {
      return error?.message ? error.message : 'Something went wrong! 😕'
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
  }

  async function sendPasswordResetEmail(body) {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/send-password-reset-email', { body })
      toast.open(res)
      router.push('/login')
    } catch (error) {
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
    setIsLoading(false)
  }
  async function resetPassword({ id, token }, body) {
    setIsLoading(true)
    try {
      const res = await fetcher(`/api/reset-password/${id}/${token}`, { body })
      toast.open(res)
      router.push('/login')
    } catch (error) {
      error?.message
        ? toast.open({ message: error.message, type: 'error' })
        : toast.open({ message: 'Something went wrong! 😕', type: 'error' })
    }
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        register,
        login,
        logout,
        verifyEmail,
        resetPassword,
        sendPasswordResetEmail,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
