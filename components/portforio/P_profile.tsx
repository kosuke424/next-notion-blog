import React from 'react';
import Image from "next/image";
import { siteConfig } from '../../site.config';

const P_profile = () => {
  return (
    <div className="w-full h-screen px-4 py-20 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-24">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                Profile
            </h2>
        </div>
        <div className="grid max-w-screen-lg lg:gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
                <div className="flex">
                    <div>
                        <h3 className="mb-2 font-semibold leading-5 text-base md:text-2xl">
                            <span className="text-blue-300">自</span>己紹介
                        </h3>
                        <p className="text-sm text-gray-900">
                        新しいもの好きな性格で色々やって試します。最近だと「HADO」というARスポーツにチャレンジしてみました。
                        一度のめり込むとこだわり抜く職人気質でコツコツ積み上げていくのが得意です。
                        </p>
                        <hr className="w-full my-6 border-gray-300" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <h3 className="mb-2 font-semibold leading-5 text-base md:text-2xl">
                        <span className="text-blue-300">経</span>歴
                        </h3>
                        <p className="text-sm text-gray-900">
                            2017~2019 自動車機器メーカーの組込みエンジニア<br/>
                            2020~ webライター/ブロガー<br/>
                            2022~ webエンジニア/SEOコンサルタント
                        </p>
                        <hr className="w-full my-6 border-gray-300" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mx-8">
                {/* <img className="object-cover w-56 lg:w-full h-36 lg:h-56 col-span-2 rounded shadow-lg" src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" /> */}
                <div className="border-solid border-2 border-gray-300 rounded">
                     <Image
                        src="/profile.png"
                        alt="プロフィール画像"
                        objectFit="cover"
                        width={280}
                        height={280}
                        quality={30}
                    />
                </div> 
                <div className="text-center">
                    <h3 className="lg:pt-4"><span className="text-blue-300">S</span>ushisuke</h3>
                </div>
                <div className="flex justify-center items-center mx-4 lg:my-2">
                    {siteConfig.twitterUrl && (
                        <a href={siteConfig.twitterUrl}>
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="twitter"
                            className="w-8 h-full mx-2 text-blue-300"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            >
                            <path
                                fill="currentColor"
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            ></path>
                            </svg>
                        </a>
                    )}
                    {/* Github */}
                    {siteConfig.githubUrl && (
                        <a href={siteConfig.githubUrl}>
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="github"
                            className="w-8 h-full mx-2 text-blue"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            >
                            <path
                                fill="currentColor"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            ></path>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
    
    // <div className="w-full h-screen flex flex-col items-center overflow-hidden">
    //     <h2 className="text-5xl mt-32 mb-16">Profile</h2>   
    //     <div className="flex w-3/4">
    //         <div className="m-8">
    //             <div className="border-solid border-2 border-blue-300 rounded-xl">
    //                 <Image
    //                 src="/profile.png"
    //                 alt="プロフィール画像"
    //                 objectFit="cover"
    //                 width={400}
    //                 height={320}
    //                 quality={30}
    //             />
    //             </div>                
    //             <h3 className="text-4xl m-8 text-center">sushisuke</h3>
    //             <div className="m-8 flex justify-center p-4">
    //                 {siteConfig.twitterUrl && (
    //                     <a href={siteConfig.twitterUrl}>
    //                         <svg
    //                         aria-hidden="true"
    //                         focusable="false"
    //                         data-prefix="fab"
    //                         data-icon="twitter"
    //                         className="w-8 h-full mx-4"
    //                         role="img"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         viewBox="0 0 512 512"
    //                         >
    //                         <path
    //                             fill="currentColor"
    //                             d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    //                         ></path>
    //                         </svg>
    //                     </a>
    //                 )}
    //                 {/* Github */}
    //                 {siteConfig.githubUrl && (
    //                     <a href={siteConfig.githubUrl}>
    //                         <svg
    //                         aria-hidden="true"
    //                         focusable="false"
    //                         data-prefix="fab"
    //                         data-icon="github"
    //                         className="w-8 h-full mx-4"
    //                         role="img"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         viewBox="0 0 496 512"
    //                         >
    //                         <path
    //                             fill="currentColor"
    //                             d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    //                         ></path>
    //                         </svg>
    //                     </a>
    //                 )}
    //             </div>
    //         </div>
    //         <div className="mx-32 my-8">
    //             <h3 className="border-b-2 border-b-blue-300">自己紹介</h3>
    //             <p>私の名前は丸々です。新しいもの好きでよく試します。最近だとHADOというARスポーツにハマっています。
    //                 一度のめり込むとこだわり抜く職人気質だと自負しております。
    //             </p>
    //             <h3  className="mt-12 border-b-2 border-b-blue-300">趣味</h3>
    //             <p>ピアノ・釣り</p>
    //             <h3  className="mt-12 border-b-2 border-b-blue-300">経歴</h3>
    //             <div className="flex flex-row">  
    //                 <div className="w-1/5">~2017</div>
    //                 <div className="pl-4">
    //                     <h4 className="text-lg font-semibold">国立大学大学院修了</h4>
    //                     <p>材料工学を学ぶ</p>
    //                 </div>
    //             </div>
    //             <div className="flex">  
    //                 <div className="w-1/5">2017~2019</div>
    //                 <div className="pl-4">
    //                     <h4 className="text-lg font-semibold">自動車機器メーカー組み込みエンジニア</h4>
    //                     <p>自動車汎用機器のソフト設計・テスト業務に従事</p>
    //                 </div>
    //             </div>
    //             <div className="flex">
    //                 <div className="w-1/5">2020~</div>
    //                 <div className="pl-4">
    //                     <h4 className="text-lg font-semibold">webライター・ブロガー</h4>
    //                     <p>金融系メディアのwerbライティング代行および自身のブログを収益化</p>
    //                 </div>
    //             </div>
    //             <div className="flex">
    //                 <div className="w-1/5">2021~</div>
    //                 <div className="pl-4">
    //                     <h4 className="text-lg font-semibold">webエンジニア・SEOコンサルタント</h4>
    //                     <p>webサイトやアプリ制作、またSEO対策の相談を受けています。</p>
    //                 </div>
    //             </div>
    //         </div>     
    //     </div>
      
    // </div>
  )
}

export default P_profile
