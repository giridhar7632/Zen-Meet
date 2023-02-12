import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../utils/useAuth'
import Button from '../common/Button'

const Navbar = () => {
  const { isAuth } = useAuth()
  return (
    <nav className="relative my-2 mx-4 flex flex-wrap items-center justify-between rounded-lg bg-white bg-opacity-10 py-4 shadow-sm backdrop-blur-sm">
      <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <Link className="mt-2 mr-1 lg:mt-0" href="/">
            <a className="flex items-center">
              <Image src="/logo.png" height={30} width={30} alt="" />{' '}
              <span className="ml-2">Zen Meet</span>
            </a>
          </Link>
        </div>
        {isAuth && (
          <Button
            variant="text"
            onClick={() => {
              localStorage.removeItem('token')
              window.location.reload()
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
