import React from 'react';
import {gsap} from "gsap";

const P_top = () => {
  if (typeof window === 'object') {
    document.addEventListener('mousemove', (e) => {
      const mouseX =e.clientX;
      const mouseY =e.clientY;

      gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          // stagger: -0.1,
      })

      // gsap.set(".cursor", {
      //     x: mouseX,
      //     y: mouseY,
      //   });

    });
  }
  return (
  <div className="overflow-hidden">
    <div className="cursor fixed bg-indigo-800 select-none pointer-events-none z-10"></div>
    {/* <div className="cursor fixed bg-indigo-800 w-4 h-4 rounded-lg bg-blue-300 select-none pointer-events-none z-10"></div> */}

    <div className="shapes relative w-full h-screen bg-blue-300 overflow-hidden">
      <div className="shape absolute bg-indigo-800 rounded-full w-72 h-72 my-36"></div>
      <div className="shape absolute bg-emerald-200 rounded-full w-48 h-48 my-24"></div>
      <div className="shape absolute bg-purple-700 rounded-full w-32 h-32 my-16"></div>
      <h2 className="absolute top-0 left-0 text-7xl lg:text-9xl font-bold text-zinc-900 w-full h-screen overflow-hidden flex justify-center items-center bg-white mix-blend-screen">Done is better than perfect<br/>Creating value!</h2>
    </div>

    {/* <div className="content w-full h-96 flex justify-center items-center bg-white mix-blend-screen">
        <h2 className="text-9xl font-bold text-zinc-900">Create value!</h2>
    </div> */}
  </div>
  )
}

export default P_top
