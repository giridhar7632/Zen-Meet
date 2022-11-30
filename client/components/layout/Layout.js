import React from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ meta, children, container, ...props }) => {
  return (
    <div className="flex w-screen" {...container}>
      <Meta {...meta} />
      <Sidebar />
      <main style={{ minHeight: '80vh', width: '100vw', maxWidth: '100vw' }} {...props}>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
