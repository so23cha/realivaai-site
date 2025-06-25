// components/Navbar.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/',         label: 'Home'     },
    { href: '/about',    label: 'About'    },
    { href: '/members',  label: 'Members'  },
    { href: '/services', label: 'Services' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* 로고 + 텍스트 전체를 Link로 감싸서 클릭 시 “/” (Home) 으로 이동 */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="REALIVA AI Logo"
          width={32}
          height={32}
          priority
        />
        <span className="text-xl font-bold">REALIVA AI</span>
      </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-blue-600">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white/95 px-4 pb-4 space-y-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-1 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}