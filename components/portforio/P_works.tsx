import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
// import ClassNames from "classnames"

const P_works:FC = () => {

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
    rootMargin: '-50% 0px',
    threshold: 0,
    })

  return (
    <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <section
            ref={ref1}
            id="section1"
            className="w-full h-screen snap-start flex justify-center items-center bg-red-500 text-5xl text-white"
        >
            Section1
        </section>
        <section
            ref={ref2}
            id="section2"
            className="w-full h-screen snap-start flex justify-center items-center bg-yellow-500 text-5xl text-white"
        >
            Section2
        </section>
        <section
            ref={ref3}
            id="section3"
            className="w-full h-screen snap-start flex justify-center items-center bg-green-500 text-5xl text-white"
        >
            Section3
        </section>

        <nav id="pagination" className="fixed top-1/2 right-8 nav-transform">
            <a
                className={`block w-3 h-3 my-6 rounded-full bg-white pagination-transition ${inView1 ? 'pagination-active':''}`}
                href="#section1"
            />
            <a
                className={`block w-3 h-3 my-6 rounded-full bg-white pagination-transition ${inView2 ? 'pagination-active':''}`}
                href="#section2"
            />
            <a
                className={`block w-3 h-3 my-6 rounded-full bg-white pagination-transition ${inView3 ? 'pagination-active':''}`}
                href="#section3"
            />
        </nav>
    </div>
  )
}

export default P_works
