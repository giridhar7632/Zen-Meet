import Button from '@/components/common/Button'
import Footer from '@/components/layout/Footer'
import Meta from '@/components/layout/Meta'
import Link from 'next/link'

export default function Index() {
  return (
    <div
      className={
        "max-w-screen relative flex min-h-screen min-w-full flex-col bg-[url('/background.png')] bg-cover bg-clip-border bg-left-bottom bg-no-repeat"
      }
    >
      <Meta />
      <nav className="absolute z-10 flex w-full items-center justify-between p-4">
        <Link className="text-lg" href={'/'}>
          MeetMate
        </Link>
        <div className="btn-group">
          <Link href={'/explore'}>
            <Button variant="text" style={{ background: 'white', marginRight: 10 }}>
              Explore
            </Button>
          </Link>
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
      <div className="flex w-full flex-1 flex-col items-center bg-white bg-opacity-90 px-4 backdrop-blur-sm md:max-w-2xl md:px-0 lg:max-w-3xl">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="max-w-lg text-xl font-semibold md:text-3xl">
            A place to easily sell and buy used goods within the NIT campus.
          </h1>
          <div className="my-8">
            <Link href={'/register'}>
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}
