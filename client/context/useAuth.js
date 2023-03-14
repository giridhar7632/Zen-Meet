import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { fetcher } from '../utils/fetcher'

// making custom hook to use context in each component
export const useAuth = () => useContext(AuthContext)

// creating context
export const AuthContext = createContext({})

// defining the Context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({}) // state for tracking user
  const [isAuth, setIsAuth] = useState('') // state for tracking jwt token
  const [isLoading, setIsLoading] = useState(true)
  const [cnt, setCnt] = useState(0)
  const router = useRouter()
  // const toast = useToast()
  // const toastIdRef = useRef()
  // const addToast = (text, type) => {
  // 	toastIdRef.current = toast({
  // 		title: `${text}`,
  // 		status: `${type}`,
  // 		isClosable: true,
  // 		duration: 3000,
  // 	})
  // }

  useEffect(() => {
    refreshSession()
  }, [])

  async function refreshSession() {
    setCnt((prev) => {
      console.log('prev', prev)
      return prev + 1
    })
    setIsLoading(true)
    try {
      const res = await fetcher('/api/auth/refresh_token', {
        method: 'POST',
      })
      console.log(res)
      setIsAuth(res.accesstoken)
      setUser(res.user)
      // addToast(res.message, res.type)
    } catch (error) {
      console.log(error)
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
    setIsLoading(false)
  }

  async function register(body) {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/auth/register', { body })
      // addToast(res.message, res.type)
      router.push('/login')
    } catch (error) {
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
    setIsLoading(false)
  }

  async function login(body) {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/auth/login', { body })
      setIsAuth(res.accesstoken)
      setUser(res.user)
      // addToast(res.message, res.type)
      router.push('/')
    } catch (error) {
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
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
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
    setIsLoading(false)
  }

  // setIsLoading(true)
  // setIsLoading(false)
  async function verifyEmail({ id, token }) {
    try {
      const res = await fetcher(`/api/verify-email/${id}/${token}`)
      return res.message
      // addToast(res.message, res.type)
    } catch (error) {
      return error?.message ? error.message : 'Something went wrong! 😕'
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
  }

  async function sendPasswordResetEmail(body) {
    setIsLoading(true)
    try {
      const res = await fetcher('/api/send-password-reset-email', { body })
      // addToast(res.message, res.type)
      router.push('/login')
    } catch (error) {
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
    setIsLoading(false)
  }
  async function resetPassword({ id, token }, body) {
    setIsLoading(true)
    try {
      const res = await fetcher(`/api/reset-password/${id}/${token}`, { body })
      // addToast(res.message, res.type)
      router.push('/login')
    } catch (error) {
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
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
