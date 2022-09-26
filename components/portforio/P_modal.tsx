import React, { FC } from 'react'
import { ModalProps } from '../../types/types'
import Image from "next/image";

const P_modal: FC<ModalProps> = ({ show, close }) => {
  return (
    <div>
       {
       show ?
       
       <>
          <div className="w-full h-screen modal">
         
              <h3 className="text-4xl"> Modal </h3>
              <div>
                <Image
                    className="w-full static w-full h-auto"
                    src={"/work1.png"}
                    alt=""
                    objectFit="cover"
                    width={400}
                    height={225}
                    quality={30}
                    />
                <div>
                    <p>自動売買システムを作りました</p>
                </div>
              </div>
              <button className="close" onClick={() => close()}>
               x close
              </button>
          </div>
        </>
        : null
       }
      </div>
  )
}

export default P_modal
