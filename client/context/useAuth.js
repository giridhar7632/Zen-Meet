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
    setIsLoading(true)
    try {
      const res = await fetcher('/auth/refresh_token', {
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
      const res = await fetcher('/auth/register', { body })
      // addToast(res.message, res.type)
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
      const res = await fetcher('/auth/login', { body })
      setIsAuth(res.accesstoken)
      setUser(res.user)
      // addToast(res.message, res.type)
    } catch (error) {
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
    setIsLoading(false)
  }

  async function logout() {
    try {
      await fetcher('/auth/logout', { method: 'POST' })
      setIsAuth('')
      setUser({})
    } catch (error) {
      // error?.message
      // 	? addToast(error.message, 'error')
      // 	: addToast('Something went wrong! 😕', 'error')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        register,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
