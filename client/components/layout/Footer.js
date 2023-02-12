import React from 'react'
import Link from '../common/Link'

const Footer = () => {
  return (
    <footer className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © {new Date().getFullYear()}{' '}
        <Link href="https://zen-meet.vercel.app/" className="hover:underline">
          Zen Meet
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/license">Licensing</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
