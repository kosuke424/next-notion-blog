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
          <main className="w-full pb-12 px-4">{children}</main>
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
