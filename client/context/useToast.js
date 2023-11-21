import Toast from '@/components/common/Toast'
import { useState, useContext, createContext, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'

// making custom hook to use context in each component
export const useToast = () => useContext(ToastContext)

// creating context
export const ToastContext = createContext({})

export function generateUEID() {
  let first = (Math.random() * 46656) | 0
  let second = (Math.random() * 46656) | 0
  first = ('000' + first.toString(36)).slice(-3)
  second = ('000' + second.toString(36)).slice(-3)

  return first + second
}

// defining the Context provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  // const [loaded, setLoaded] = useState(false)
  const open = ({ type, message }) => {
    console.log({ type, message })
    setToasts((prevToasts) => [...prevToasts, { id: generateUEID(), type, message }])
  }
  const close = (id) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  const contextValue = useMemo(() => ({ open }), [])

  // useEffect(() => {
  //   setLoaded(true)
  // }, [])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {/* {loaded
        ? createPortal( */}
      <div className="absolute bottom-0 right-0 z-50 w-full">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            close={() => close(toast.id)}
          />
        ))}
      </div>
      {/* document.body
          )
        : null} */}
    </ToastContext.Provider>
  )
}

export default useToast

// import { useState } from 'react'

// function useToast() {
//   const [toasts, setToasts] = useState([])
//   const open = ({ type, message }) => {
//     console.log({ item: 'toast', type, message })
//     setToasts((prevToasts) => [...prevToasts, { id: generateUEID(), type, message }])
//   }
//   const close = (id) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))

//   return { toasts, open, close }
// }

// export default useToast
