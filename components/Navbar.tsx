import Link from 'next/link'
import React, { useState } from 'react'
import { siteConfig } from "../site.config";
import Breadcrumb from './Breadcrumb';

function Navbar () {
  const [isOpen, setIsopen] = useState(false);
  const Toggle = () => setIsopen(!isOpen);

  return (
    <nav className={`relative w-full flex flex-wrap items-center justify-between py-6 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen ${isOpen && ''}`}>
      <div className={`container-fluid w-full flex flex-wrap items-center justify-between px-24 ${isOpen && 'px-56'}`}>
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
        <div className="block fixed top-6 right-20 h-30 cursor-pointer lg:hidden" onClick={() => {Toggle(); console.log(isOpen)}}>
          <span className={`absolute block bg-slate-500 right-0 top-0 w-12 h-1.5 rounded ${isOpen && 'rotate-45 top-8'}`}></span>
          <span className={`absolute block bg-slate-500 right-0 top-4 w-12 h-1.5 rounded ${isOpen && 'hidden'}`}></span>
          <span className={`absolute block bg-slate-500 right-0 top-8 w-12 h-1.5 rounded ${isOpen && 'rotate-[135deg] top-4'}`}></span>
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
