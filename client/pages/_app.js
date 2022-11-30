import Meta from '../components/layout/Meta'
import ToastContainer from '../components/common/ToastContainer'
import { ToastProvider } from '../lib/context/ToastContext'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Meta />
      <Component {...pageProps} />
      <ToastContainer />
    </ToastProvider>
  )
}
