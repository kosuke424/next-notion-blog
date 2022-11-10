import React, { useLayoutEffect, useState } from 'react';
import Image from "next/image";
import { siteConfig } from '../../site.config';
import P_modal from './P_modal';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

class DisplayWidth {
  static readonly WIDTH_THRESHOLD = 768;
}

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const P_works = () => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);
  const Toggle = () => setModal(!modal);
  const [width, height] = useWindowSize();

  if (width > DisplayWidth.WIDTH_THRESHOLD) {
    return (
      <div>
        <div className={`w-full h-screen overflow-hidden flex flex-col items-center ${modal && 'hidden'}`}>
          <h2 className="text-4xl mt-32 mb-12 mx-auto">Works & Services</h2>
          <p className="text-xl">私のこれまでの制作物とその経験に裏付けされたサービスを紹介します。</p>
          <div className="grid md:gap-16 mt-10 md:grid-cols-3 my-12">
          {siteConfig.works.map((item, index) => (
            <button key={index} className="flex justify-center" onClick={() => {Toggle(); setTitle(item.title); setIndex(index);}}>
              <div className="rounded overflow-hidden bg-slate-50 shadow w-full my-4 relative transition hover:bottom-2 hover:right-2 hover:shadow-2xl hover:bg-blue-300 hover:text-white md:my-0 content-between grid md:gap-6" >
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
                    <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                </div>
              </div>
            </button>
          ))}
          </div>
        </div>
        <P_modal show={modal} index={index} close={Toggle} />
      </div>
    )
  }
  

  return(
    <div>   
      <div className={`w-full h-screen overflow-hidden flex flex-col ${modal && 'hidden'}`}>
        <h2 className="text-4xl mt-40 mb-8 md:mb-28 mx-auto">Works & Services</h2>
        <p className="text-xl">私のこれまでの制作物とその経験に裏付けされたサービスを紹介します。</p>
        <div>
          <Splide 
            options={ {
              type: 'loop',
              rewind: true,
              height: '35rem',
              width : 800,
              gap   : '3rem',
              perPage: 1,
              perMove: 1,
              autoScroll: {
                speed: 2,
                autoStart: true,
              },
              // grid: {
              //   dimensions:[[ 1,  1]]
              // }
            } }
            hasTrack={ false }
            aria-label="..."
          >
          <SplideTrack>  
            {siteConfig.works.map((item, index) => (          
              <SplideSlide key={index}>
                <button className="flex justify-center" onClick={() => {Toggle(); setTitle(item.title); setIndex(index);}}>
                  <div className="rounded overflow-hidden bg-slate-50 shadow w-full my-4 relative transition hover:bottom-2 hover:right-2 hover:shadow-2xl hover:bg-blue-300 hover:text-white md:my-0 content-between grid md:gap-6" >
                    <div className="flex flex-col">
                        <Image
                          className="w-full static w-full h-auto"
                          src={`/work${index+1}.png`}
                          alt=""
                          objectFit="cover"
                          width={800}
                          height={500}
                          quality={30}
                        />
                        <h3 className="text-2lg font-medium mt-2">{item.title}</h3>
                    </div>
                  </div>
                </button>
              </SplideSlide>
              
            ))}
            </SplideTrack>
            <div className="splide__arrows" />
            {/* <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">Prev</button>
                <button className="splide__arrow splide__arrow--next">Next</button>
            </div> */}
          </Splide>
        </div>
      </div>
      <P_modal show={modal} index={index} close={Toggle} />
    </div>
  )
}

export default P_works
