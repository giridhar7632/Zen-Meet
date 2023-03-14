import Link from '../common/Link'

const Footer = () => (
  <footer className="relative my-2 mx-4 flex flex-wrap items-center justify-between rounded-lg bg-white bg-opacity-10 p-4 shadow-sm backdrop-blur-sm">
    <p>
      &copy; {new Date().getFullYear()}
      <Link className="px-2" href={'https://github.com/giridhar7632/meet-mate'} target={'_blank'}>
        MeetMate
      </Link>
      | All Rights Reserved
    </p>
    <ul className="flex items-center gap-1">
      <Link className="px-2" href={'/about'}>
        About
      </Link>
      <Link className="px-2" href={'/policy'} target={'_blank'}>
        Privacy Policy
      </Link>
      <Link className="px-2" href={'/terms'} target={'_blank'}>
        Terms & Conditions
      </Link>
    </ul>
  </footer>
)

export default Footer
