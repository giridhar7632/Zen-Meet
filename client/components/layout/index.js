import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ meta, children, ...props }) => {
  return (
    <div className="max-w-screen flex min-h-screen">
      <Meta {...meta} />
      <div className="mx-auto flex w-[100%] max-w-screen-xl flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-2 md:px-6" {...props}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
