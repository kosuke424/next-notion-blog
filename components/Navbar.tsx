import Link from 'next/link'
import React from 'react'
import { siteConfig } from "../site.config";
import Breadcrumb from './Breadcrumb';

function Navbar () {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-12">
        <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 text-2xl">{siteConfig.title}</a>
        </Link>
        <div className="hidden md:flex md:flex-row">
            {siteConfig.categories.map((menu, index) => (
            <Link href={`/categories/${menu}`} key={index}>
              <a className="block rounded-lg px-3 py-2 text-slate-700 font-medium cursor-pointer hover:bg-slate-100">{menu}</a>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex md:flex-row">
          {[
            ['ポートフォリオ', '/portforio'],
            ['お問い合わせ', '/contact'],
          ].map(([title, url, index]) => (
            <Link key={index} href={url}>
                <a className="block rounded-lg px-3 py-2 text-slate-700 font-medium cursor-pointer hover:text-slate-900">{title}</a>
            </Link>
          ))}
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
