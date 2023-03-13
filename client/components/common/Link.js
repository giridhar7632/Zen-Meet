import clsx from 'clsx'
import NextLink from 'next/link'

const Link = ({ children, className = '', ...props }) => {
  return (
    <NextLink {...props} className={clsx('px-2 text-sky-600 hover:underline', className)}>
      {children}
    </NextLink>
  )
}

export default Link
