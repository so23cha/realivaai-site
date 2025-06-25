// components/HeroImage.tsx
'use client'

import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/slide1.jpg"     // public/images/slide1.jpg
        alt="Hero Image"
        fill                         // 부모 크기(뷰포트)를 꽉 채움
        style={{ objectFit: 'cover' }}
        priority                     // 로드시 우선 로드
      />
    </div>
  )
}