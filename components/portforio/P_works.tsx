import React, { useState } from 'react';
import Image from "next/image";
import { siteConfig } from '../../site.config';
import P_modal from './P_modal';


const P_works = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-blue-100  text-white">
      <h2 className="text-5xl my-16">Works</h2>
      <div className={`grid md:gap-6 mt-10 md:grid-cols-2 my-12 ${
              modal && 'hidden'
            }`}>
      {siteConfig.works.map((item, index) => (
        <button  className="flex justify-center " onClick={() => Toggle()}>
          <div className="rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid md:gap-6" >
            <div className="flex flex-col">
                <Image
                  className="w-full static w-full h-auto"
                  src={`/${item}.png`}
                  alt=""
                  objectFit="cover"
                  width={400}
                  height={225}
                  quality={30}
                />
                <h3 className="font-medium mb-3">{item}</h3>
            </div>
          </div>
        </button>
      ))}
      </div>
      <P_modal show={modal} close={Toggle} />
    </div>
  )
}

export default P_works
