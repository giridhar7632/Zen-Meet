import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '@/context/useAuth'
import Loader from './common/Loader'

const Protected = ({ protectedRoutes, children }) => {
  const router = useRouter()
  const { isAuth, isLoading } = useAuth()

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1

  useEffect(() => {
    console.log({ isLoading, isAuth, pathIsProtected })
    if (!isLoading && !isAuth && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isAuth, pathIsProtected])

  if ((isLoading || !isAuth) && pathIsProtected) {
    return <Loader />
  }

  return children
}

export default Protected
