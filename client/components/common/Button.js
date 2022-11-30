import clsx from 'clsx'
import React, { Children } from 'react'

export default React.forwardRef(function Button(
  { variant = 'primary', loading = false, loadingText = 'loading...', children, ...attributes },
  ref
) {
  const handleClick = (e) => {
    if (!loading && attributes.onClick) {
      attributes.onClick(e)
    }
  }

  const variantClassname = clsx({
    ['text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 disabled:bg-sky-400 disabled:dark:bg-sky-500 disabled:cursor-not-allowed']:
      variant === 'primary',
    ['rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700']:
      variant === 'text',
  })

  return (
    <button
      {...attributes}
      className={clsx(
        'mr-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium',
        variantClassname,
        attributes.className
      )}
      disabled={attributes.disabled || loading}
      ref={ref}
      onClick={handleClick}
    >
      {loading
        ? loadingText
        : Children.map(children, (child, i) => {
            return (
              <span key={i} className="mr-xsmall last:mr-0">
                {child}
              </span>
            )
          })}
    </button>
  )
})
