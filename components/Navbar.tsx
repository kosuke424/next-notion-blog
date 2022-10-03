import Link from 'next/link'
import React, { useState } from 'react'
import { siteConfig } from "../site.config";
import Breadcrumb from './Breadcrumb';

function Navbar () {
  const [isOpen, setIsopen] = useState(false);
  const Toggle = () => setIsopen(!isOpen);

  return (
    <nav className={`w-full flex flex-wrap items-center justify-between py-6 text-gray-500 hover:text-gray-700 focus:text-gray-700 w-screen ${isOpen && 'fixed z-20 bg-slate-50 shadow-2xl'}`}>
      <div className="w-full flex flex-wrap items-center lg:justify-between pl-8 lg:pl-36 pr-36">
        <Link href="/">
            <a className={`text-blue-300 font-semibold hover:text-blue-700 text-2xl ${isOpen && 'hidden'}`}>{siteConfig.title}</a>
        </Link>
        <div className={`lg:flex lg:flex-row ${!isOpen && 'hidden'}`}>
            {siteConfig.categories.map((menu, index) => (
            <Link href={`/categories/${menu}`} key={index}>
              <a className="block rounded-lg px-3 py-2 text-slate-700 md:text-lg font-medium cursor-pointer hover:bg-slate-100">{menu}</a>
            </Link>
          ))}
        </div>
        <div className={`lg:flex lg:flex-row ${!isOpen && 'hidden'}`}>
          {[
            ['ポートフォリオ', '/portforio'],
            ['お問い合わせ', '/contact'],
          ].map(([title, url, index]) => (
            <Link key={index} href={url}>
                <a className="block rounded-lg px-3 py-2 text-slate-700 font-medium cursor-pointer hover:text-slate-900">{title}</a>
            </Link>
          ))}
        </div>
        <div className="fixed top-2 right-4 lg:right-20 z-30 w-14 h-14 bg-slate-400 cursor-pointer rounded lg:hidden" onClick={() => {Toggle()}}>
          <span className={`absolute block bg-white right-1 top-3 w-12 h-1 rounded ${isOpen && 'hidden'}`}></span>
          <span className={`absolute block bg-white right-1 top-7 w-12 h-1 rounded ${isOpen && 'rotate-45'}`}></span>
          <span className={`absolute block bg-white right-1 top-11 w-12 h-1 rounded ${isOpen && 'hidden'}`}></span>
        </div>
        <div
          className="flex bg-grey-light rounded-md w-full"
          aria-label="breadcrumb"
          >
            {/* Breadcrumb */}
            {/* <Breadcrumb /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
