import React, { FC } from 'react'
import { LayoutProps } from "../types/types";
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar';


const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-w-7xl w-full mx-auto">
        {/*  */}
        <Navbar />
        {/*  */}
        <div className="flex">
          {/* <main className="max-w-3xl pb-12 px-4">{children}</main> */}
          <main className="md:max-w-3xl sm:max-w-md max-w-sm pb-12 px-4">{children}</main>
          {/*  */}
          {/* <Sidebar /> */}
        </div>
        {/*  */}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
