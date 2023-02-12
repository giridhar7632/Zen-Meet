import clsx from 'clsx'

const Input = ({ name, label, register, children, error, className, divClass, ...props }) => {
  return (
    <div className={clsx('mb-2', divClass)}>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        className={clsx([
          'form-control block w-full border border-solid bg-white bg-clip-padding px-4 py-2 font-normal text-gray-700 focus:ring-2',
          error ? 'border-red-300 ring ring-red-300' : 'border-gray-300',
          'm-0 rounded-md transition ease-in-out focus:border-sky-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:ring-sky-300',
          className,
        ])}
        name={name}
        {...props}
        {...register}
      />
      {error ? <p className="mt-2 text-xs text-red-500">{error?.message}</p> : null}
    </div>
  )
}

export default Input
