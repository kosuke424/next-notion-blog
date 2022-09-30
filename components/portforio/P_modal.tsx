import React, { FC } from 'react'
import { ModalProps } from '../../types/types'
import Image from "next/image";

const P_modal: FC<ModalProps> = ({ show, title, index, close }) => {
  return (
      <div className="pt-16 lg:pt-48 lg:pb-24">
       {
       show ?
      <div className="px-4 py-24 relative bg-slate-50 shadow-md shadow-slate-500 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <button className="close absolute top-6 right-10 text-4xl" onClick={() => close()}>
          x
        </button>
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quick, brown fox<br className="hidden md:block" />
                jumps over
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
                  <span className="relative inline-block text-deep-purple-accent-400">a lazy dog</span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h3 className="mb-2 font-semibold leading-5">
                    Ill be sure to note that in my log
                  </h3>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h3 className="mb-2 font-semibold leading-5">
                    A business big enough that it could be listed
                  </h3>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me an email clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
                      className="static w-full h-auto"
                      src={`/work${index+1}.png`}
                      alt=""
                      objectFit="cover"
                      layout={"responsive"}
                      width={400}
                      height={250}
                      quality={30}
                    />
          </div>
        </div>
      </div>
       
      //  <div className="w-full h-screen flex items-center justify-center">
      //     <div className="flex justify-center">         
      //       <div className="w-5/6 h-5/6 bg-slate-50 shadow-md shadow-slate-500 flex justify-center relative flex-col items-center">
      //         <div className="flex items-center my-4"> 
      //           <h2 className="text-4xl mt-2">{title}</h2>
      //           <button className="close absolute right-8 text-white text-3xl rounded-full bg-blue-300 px-3 py-1" onClick={() => close()}>
      //           x
      //           </button>
      //         </div>
      //         <div className="flex flex-col md:flex-row mx-16 my-8">
      //           <div className="w-96 overflow-hidden relative">
      //             <Image
      //               className="static w-full h-auto"
      //               src={`/work${index+1}.png`}
      //               alt=""
      //               objectFit="cover"
      //               layout={"responsive"}
      //               width={400}
      //               height={250}
      //               quality={30}
      //             />
      //           </div>
                
                
      //           <div className="mx-16 my-8">
      //               <h3>見出し1</h3>
      //               <p>{title}を作りました
      //               caknaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaaaaaassssacsfdgsssssssssssdgggggggggvsvn dsmascbsjbkjaabkabcjasdfs</p>
      //               <h3>見出し2</h3>
      //               <p>とてもいい気分です！</p>
      //               <h3>見出し3</h3>
      //               <p>苦労したところは○○です。</p>
      //           </div>
      //         </div>
      //         <footer>
      //           <ul>
      //             <li>
      //               <a href="https://github.com/kosuke424/next-notion-blog/">github</a>
      //             </li>
      //             <li>
      //               <a href="https://github.com/kosuke424/next-notion-blog/">ブログ</a>
      //             </li>
      //           </ul>

      //         </footer>
      //       </div>
      //     </div>
      //   </div>
        : null
       }
      </div>
  )
}

export default P_modal
