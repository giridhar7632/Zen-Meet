import clsx from 'clsx'
import NextLink from 'next/link'

const Link = ({ children, className = '', ...props }) => {
  return (
    <NextLink {...props} className={clsx(className, 'text-sky-600 hover:underline')}>
      {children}
    </NextLink>
  )
}

export default Link
