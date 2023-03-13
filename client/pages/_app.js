import Protected from '@/components/Protected'
import { AuthProvider } from '@/context/useAuth'
// import { titleCase } from '@/utils/titleCase'
// import Layout from '@/components/layout'
// import { useRouter } from 'next/router'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const protectedRoutes = ['/']
  // const router = useRouter()
  // const name = titleCase(router.pathname.slice(1))

  return (
    <AuthProvider>
      {/* <Layout meta={name && { name }}> */}
      <Protected protectedRoutes={protectedRoutes}>
        <Component {...pageProps} />
      </Protected>
      {/* </Layout> */}
    </AuthProvider>
  )
}
