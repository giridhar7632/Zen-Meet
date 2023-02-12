import { useRouter } from 'next/router'

import Blobs from '../common/bg/Blob'
import Navbar from './Navbar'
import Footer from './Footer'
import Meta from './Meta'

const Layout = ({ meta, children, ...props }) => {
  const router = useRouter()
  return (
    <div className="max-w-screen relative flex min-h-screen">
      <Blobs />
      <Meta {...meta} />
      <div className="mx-auto flex w-[100%] max-w-screen-xl flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-2 md:px-6" {...props}>
          {children}
        </main>
        {router.pathname !== '/m/[id]' ? <Footer /> : null}
      </div>
    </div>
  )
}

export default Layout
