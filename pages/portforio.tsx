import { NextSeo } from 'next-seo'
import React from 'react'
import P_layout from '../components/portforio/P_layout'

const portforio = () => {
  return (
    <div>
      <NextSeo
        title="プロフィール"
        description="プロフィールページです。"
        noindex={true}
        nofollow={true}
        openGraph={{
          url: "/profile",
          title: "プロフィール",
          description: "プロフィールページです。",
        }}
      />
      <P_layout />
    </div>
  )
}

export default portforio
