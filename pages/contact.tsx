import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'

const contact = () => {
  return (
    <div className="py-36 flex flex-col justify-center items-center">
      <NextSeo
        title="お問い合わせ"
        description="お問い合わせページです。"
        noindex={true}
        nofollow={true}
        openGraph={{
          url: "/contact",
          title: "お問い合わせ",
          description: "お問い合わせページです。",
        }}
      />
      <h3 className="text-center mb-8">
        申し訳ありません。🙇<br/>
        こちらのページは現在準備中🏗です。
      </h3>
      <Link href='/'>
        <a className="text-center">戻る</a>
      </Link>
    </div>
    
  )
}

export default contact
