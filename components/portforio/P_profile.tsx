import React from 'react';
import Image from "next/image";

const P_profile = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-blue-100 text-white">
        <h2 className="text-5xl my-16">プロフィール</h2>   
        <div>
            <div className="mb-8">
                <Image
                    src="/profile.png"
                    alt=""
                    objectFit="cover"
                    width={400}
                    height={320}
                    quality={30}
                />
            </div>
            <div>
                <h3 className="text-4xl mb-4">sushisuke</h3>
                <p className="text-lg">
                    組み込みエンジニア<br/>
                    webライター・ブロガー<br/>
                    webエンジニア
                </p>
            </div>     
        </div>
      
    </div>
  )
}

export default P_profile
