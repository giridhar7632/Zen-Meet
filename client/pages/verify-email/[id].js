import Button from '@/components/common/Button'
import Loader from '@/components/common/Loader'
import { useAuth } from '@/context/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState('')
  const router = useRouter()
  const { verifyEmail } = useAuth()
  useEffect(() => {
    if (router.isReady) {
      console.log({ query: router.query })
      verifyEmail(router.query).then((msg) => {
        setIsLoading(false)
        setStatus(msg)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  return (
    <div className="flex h-[80%] w-full flex-col items-center justify-center">
      {isLoading ? <Loader /> : <h1 className="text-clip text-3xl font-black">{status}</h1>}
      <h3 className="my-4 text-xl">
        {isLoading
          ? 'Verifying your email...'
          : 'Your email has been verified! You can now have the full access to the application'}
      </h3>
      <Link href={'/'} replace>
        <Button>Go to Home</Button>
      </Link>
    </div>
  )
}

export default VerifyEmail

// export async function getStaticProps(context) {
//   console.log(context.params, context.query)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true, // can also be true or 'blocking'
//   }
// }
