import Link from 'next/link'
import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { siteConfig } from '../../site.config'
import P_profile from './P_profile'
import P_top from './P_top'
import P_works from './P_works'

// import ClassNames from "classnames"

const P_layout:FC = () => {

    //Hooksの設定(sectionの数だけ作る)
    const [ref1, inView1] = useInView({
        rootMargin: '-50% 0px',
        threshold: 0,
    })

    const [ref2, inView2] = useInView({
        rootMargin: '-50% 0px',
        threshold: 0,
    })

    const [ref3, inView3] = useInView({
    rootMargin: '-50% 100px',
    threshold: 0,
    })

    const smoothScroll = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const eventTarget = event.target as HTMLAnchorElement
        const eventTargetId = eventTarget.hash
        const scrollTarget = document.querySelector(eventTargetId)
        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: "smooth" })
        }
    }

  return (
    <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <section
            ref={ref1}
            id={`${siteConfig.portfotioNav[0]}`}
            className="snap-start"
        >
            <nav className="fixed top-0 left-0 z-20 w-full flex items-center justify-between py-4 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-center px-12">
                        <ul className="flex flex-row">
                            {siteConfig.portfotioNav.map((menu, index) => (
                                <li key={index}>
                                    <a
                                        className="block rounded-lg px-4 py-2 text-slate-700 text-lg font-medium hover:bg-slate-100 hover:text-slate-900"
                                        href={`#${menu}`}
                                        onClick={e => smoothScroll(e)}
                                    >{menu}</a>
                                </li>
                            ))}
                        </ul>
                        <ul className="hidden md:flex md:flex-row absolute right-12">
                            <Link href="/">
                                <a 
                                    className="block rounded-lg px-4 py-2 text-slate-700 text-lg font-medium hover:bg-slate-100 hover:text-slate-900"
                                >
                                    Blog
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a
                                    className="block rounded-lg px-4 py-2 text-slate-700 text-lg font-medium hover:bg-slate-100 hover:text-slate-900"
                                >
                                    Contact
                                </a>
                            </Link>
                        </ul>
                    </div>
                </nav>
            <div className="w-full h-screen snap-start">
                <P_top />
            </div>
        </section>
        <section
            ref={ref2}
            id={`${siteConfig.portfotioNav[1]}`}
            className="snap-start"
        >
            <P_profile />
        </section>
        <section
            ref={ref3}
            id={`${siteConfig.portfotioNav[2]}`}
            className="w-full h-screen snap-start"
        >
            <P_works />
        </section>

        <nav id="pagination" className="fixed top-1/2 right-8 nav-transform">
            <a
                className={`block w-3 h-3 my-6 rounded-full bg-blue-300 pagination-transition ${inView1 ? 'pagination-active':''}`}
                href="#section1"
                onClick={e => smoothScroll(e)}
            />
            <a
                className={`block w-3 h-3 my-6 rounded-full bg-blue-300 pagination-transition ${inView2 ? 'pagination-active':''}`}
                href="#section2"
                onClick={e => smoothScroll(e)}
            />
            <a
                className={`block w-3 h-3 my-6 rounded-full bg-blue-300 pagination-transition ${inView3 ? 'pagination-active':''}`}
                href="#section3"
                onClick={e => smoothScroll(e)}
            />
        </nav>
    </div>
  )
}

export default P_layout
