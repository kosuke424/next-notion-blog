import React from 'react';
import Image from "next/image";

const P_profile = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
        <h2 className="text-5xl mt-32 mb-16">Profile</h2>   
        <div className="flex w-3/4">
            <div className="m-8">
                <Image
                    className="border-solid border-2"
                    src="/profile.png"
                    alt=""
                    objectFit="cover"
                    width={400}
                    height={320}
                    quality={30}
                />
                <h3 className="text-4xl m-4">sushisuke</h3>
                <ul>
                    <li>
                        github
                    </li>
                    <li>
                        ブログ
                    </li>
                    <li>
                        ツイッター
                    </li>
                </ul>
            </div>
            <div className="mx-32 my-8">
                <h3 className="mt-4 border-b-2 border-b-blue-300">自己紹介</h3>
                <p>私の名前は丸々です。新しいもの好きでよく試します。最近だとHADOというARスポーツにハマっています。
                    一度のめり込むとこだわり抜く職人気質だと自負しております。
                </p>
                <h3  className="mt-12 border-b-2 border-b-blue-300">趣味</h3>
                <p>ピアノ・釣り</p>
                <h3  className="mt-12 border-b-2 border-b-blue-300">経歴</h3>
                <div className="flex">  
                    <div className="w-28">~2017</div>
                    <div className="pl-4">
                        <h4 className="text-lg font-semibold">国立大学大学院修了</h4>
                        <p>材料工学を学ぶ</p>
                    </div>
                </div>
                <div className="flex">  
                    <div className="w-28">2017~2019</div>
                    <div className="pl-4">
                        <h4 className="text-lg font-semibold">自動車機器メーカー組み込みエンジニア</h4>
                        <p>自動車汎用機器のソフト設計・テスト業務に従事</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-28">2020~</div>
                    <div className="pl-4">
                        <h4 className="text-lg font-semibold">webライター・ブロガー</h4>
                        <p>金融系メディアのwerbライティング代行および自身のブログを5000PVまで伸ばし収益化</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-28">2021~</div>
                    <div className="pl-4">
                        <h4 className="text-lg font-semibold">webエンジニア・SEOコンサルタント</h4>
                        <p>webサイトやアプリ制作、またSEO対策の相談を受けています。</p>
                    </div>
                </div>
                        
                <p className="text-lg">
                    {/* 最終学歴：国立大学大学院修了
                    自動車機器メーカーの組み込みエンジニア<br/>
                    webライター・ブロガー<br/>
                    webエンジニア・SEOコンサルタント */}
                </p>
            </div>     
        </div>
      
    </div>
  )
}

export default P_profile
