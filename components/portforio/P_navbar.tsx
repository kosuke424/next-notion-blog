import Link from 'next/link'
import React from 'react'
import { siteConfig } from '../../site.config'

const pNavbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-12">
        <ul className="hidden md:flex md:flex-row">
            {siteConfig.portfotioNav.map((menu) => (
            <Link href={`/portforio/${menu}`}>
              <li>
                <a className="block rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{menu}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default pNavbar
