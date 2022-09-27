import React, { FC } from 'react'
import { ModalProps } from '../../types/types'
import Image from "next/image";

const P_modal: FC<ModalProps> = ({ show, title, index, close }) => {
  return (
    <div>
       {
       show ?
       
       <>
          <div className="flex justify-center bg-amber-300 modal">         
            <div className="w-5/6 h-5/6 bg-amber-100 flex justify-center relative flex-col items-center">
              <div className="flex items-center my-4"> 
                <h2 className="text-4xl mt-2">{title}</h2>
                <button className="close absolute right-8 text-2xl rounded bg-lime-300 px-2 py-1" onClick={() => close()}>
                x close
                </button>
              </div>
              <div className="flex mx-16 my-8">
                <Image
                  className="static m-4"
                  src={`/work${index+1}.png`}
                  alt=""
                  objectFit="cover"
                  width={800}
                  height={550}
                  quality={30}
                />
                <div className="m-8">
                    <h3>見出し1</h3>
                    <p>{title}を作りました
                    caknaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddaaaaaaaaaaaaaassssacsfdgsssssssssssdgggggggggvsvn dsmascbsjbkjaabkabcjasdfs</p>
                    <h3>見出し2</h3>
                    <p>とてもいい気分です！</p>
                    <h3>見出し3</h3>
                    <p>苦労したところは○○です。</p>
                </div>
              </div>
              <footer>
                <ul>
                  <li>
                    <a href="https://github.com/kosuke424/next-notion-blog/">github</a>
                  </li>
                  <li>
                    <a href="https://github.com/kosuke424/next-notion-blog/">ブログ</a>
                  </li>
                </ul>

              </footer>
            </div>
          </div>
        </>
        : null
       }
      </div>
  )
}

export default P_modal
