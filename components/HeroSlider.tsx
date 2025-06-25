// components/HeroSlider.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSlider() {
  const slides = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      {/* ① 높이를 vh 단위로 줄입니다. 예: 화면 높이의 80% */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-white">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* ② 흰 여백을 추가 */}
      <div className="h-24 bg-white" />
    </>
  )
}