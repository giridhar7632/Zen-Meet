import { useToastDispatchContext } from '../context/ToastContext'

export default function useToast(delay = 5000) {
  const dispatch = useToastDispatchContext()

  function toast(type, message) {
    const id = Math.random().toString(36).substr(2, 9)
    dispatch({
      type: 'ADD_TOAST',
      toast: {
        type,
        message,
        id,
      },
    })

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id })
    }, delay)
  }

  return toast
}
