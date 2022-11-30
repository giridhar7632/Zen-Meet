import Toast from './Toast'
import { useToastStateContext } from '../../lib/context/ToastContext'

export default function ToastContainer() {
  const { toasts } = useToastStateContext()

  return (
    <div className="absolute bottom-10 z-50 w-full">
      <div className="mx-auto max-w-xl">
        {toasts &&
          toasts.map((toast) => (
            <Toast id={toast.id} key={toast.id} type={toast.type} message={toast.message} />
          ))}
      </div>
    </div>
  )
}
