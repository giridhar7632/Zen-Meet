import NextLink from 'next/link'

const Link = ({ children, ...props }) => {
  return (
    <NextLink {...props} className="px-2 text-sky-500 hover:underline">
      <a>{children}</a>
    </NextLink>
  )
}

export default Link
