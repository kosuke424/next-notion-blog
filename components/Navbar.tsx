import Link from 'next/link'
import React from 'react'
import { siteConfig } from "../site.config";
import Breadcrumb from './Breadcrumb';

function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4  text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-12">
        <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 text-2xl">{siteConfig.title}</a>
        </Link>
        <ul className="hidden md:flex md:flex-row">
          {[
            ['web3', '/dashboard'],
            ['programing', '/team'],
            ['nft', '/projects'],
            ['metaverse', '/reports'],
            ['dao', '/reports'],
          ].map(([title, url]) => (
            <Link href={url}>
              <li>
                <a className="block rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
              </li>
            </Link>
          ))}
        </ul>
        <ul className="hidden md:flex md:flex-row">
          {[
            ['お問い合わせ', '/dashboard'],
            ['works', '/team'],
          ].map(([title, url]) => (
            <Link href={url}>
              <li>
                <a className="block rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
              </li>
            </Link>
          ))}
        </ul>
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
