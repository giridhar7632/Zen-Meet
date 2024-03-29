import Link from 'next/link'
import Button from '@/components/common/Button'

const NotFound = () => {
  return (
    <div className="flex h-[80%] w-full flex-col items-center justify-center">
      <h1 className="text-clip text-8xl font-black">404</h1>
      <h3 className="my-4 text-xl">Page not found!</h3>
      <Link href={'/'} replace>
        <Button>Go to Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
