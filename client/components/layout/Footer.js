import Link from '../common/Link'

const Footer = () => (
  <footer className="relative my-2 mx-4 flex flex-wrap items-center justify-between rounded-lg bg-white bg-opacity-10 p-4 shadow-sm backdrop-blur-sm">
    <p>
      &copy; {new Date().getFullYear()}
      <Link href={'https://github.com/giridhar7632/meet-mate'} target={'_blank'}>
        MeetMate
      </Link>
      | All Rights Reserved
    </p>
    <ul className="flex items-center gap-1">
      <Link href={'/about'}>About</Link>
      <Link href={'/policy'} target={'_blank'}>
        Privacy Policy
      </Link>
      <Link href={'/terms'} target={'_blank'}>
        Terms & Conditions
      </Link>
    </ul>
  </footer>
)

export default Footer
