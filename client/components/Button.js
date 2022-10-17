const Button = ({
  type = 'button',
  disabled,
  className,
  loading,
  children,
  loadingText,
  ...props
}) => {
  return (
    <button
      type={type}
      className={
        `inline-block rounded-md bg-sky-600 px-7 py-3 text-sm font-semibold leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg disabled:bg-sky-400 ${
          loading ? 'cursor-wait' : 'cursor-pointer'
        } ` + className
      }
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">{loadingText}...</span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
