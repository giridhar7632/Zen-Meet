import Link from 'next/link'
import Image from 'next/image'
import Colors from '../components/common/bg/Colors'
import Button from '../components/common/Button'
import Meta from '../components/layout/Meta'

export default function Index() {
  return (
    <div className={'max-w-screen relative flex min-h-screen min-w-full '}>
      <Colors />
      <Meta />
      <nav className="absolute z-10 flex w-full items-center justify-between p-4">
        <Link href={'/'}>
          <a className="flex items-center gap-2">
            <Image src="/logo.png" height={30} width={30} alt="" />{' '}
            <span className="text-lg font-bold">Zen Meet</span>
          </a>
        </Link>
        <div className="btn-group">
          <Link href={'/login'}>
            <Button variant="text" style={{ background: 'white', marginRight: 10 }}>
              Log in
            </Button>
          </Link>
          <Link href={'/register'}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </nav>
      <div className="flex w-full flex-1 flex-col items-center px-4 md:max-w-2xl md:px-0 lg:max-w-3xl">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="max-w-lg text-xl font-semibold md:text-3xl">
            A place to add and share your links online. Add links and share your profile on social
            media.
          </h1>
          <div className="my-8">
            <Link href={'/register'}>
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
