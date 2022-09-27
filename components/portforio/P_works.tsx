import React, { useState } from 'react';
import Image from "next/image";
import { siteConfig } from '../../site.config';
import P_modal from './P_modal';


const P_works = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);
  const Toggle = () => setModal(!modal);

  return (
    <div>
      <div className={`w-full h-screen flex flex-col items-center ${modal && 'hidden'}`}>
        <h2 className="text-5xl mt-32 mb-16 mx-auto">Works</h2>
        <div className="grid md:gap-10 mt-10 md:grid-cols-3 my-12">
        {siteConfig.works.map((item, index) => (
          <button key={index} className="flex justify-center " onClick={() => {Toggle(); setTitle(item); setIndex(index);}}>
            <div className="rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid md:gap-6" >
              <div className="flex flex-col">
                  <Image
                    className="w-full static w-full h-auto"
                    src={`/work${index+1}.png`}
                    alt=""
                    objectFit="cover"
                    width={400}
                    height={225}
                    quality={30}
                  />
                  <h3 className="font-medium mt-2">{item}</h3>
              </div>
            </div>
          </button>
        ))}
        </div>
        
      </div>
      <div className="w-full h-screen bg-blue-100 flex items-center justify-center">
        <P_modal show={modal} title={title} index={index} close={Toggle} />
      </div>
    </div>
    
  )
}

export default P_works
