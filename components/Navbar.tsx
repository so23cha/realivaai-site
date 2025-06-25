// components/Navbar.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const links = [
    { href: '/',         label: 'Home'     },
    { href: '/about',    label: 'About'    },
    { href: '/members',  label: 'Members'  },
    { href: '/services', label: 'Services' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 h-16 bg-white/80 backdrop-blur-md z-50 flex items-center px-8">
      {/* 로고 + 텍스트 */}
      <div className="flex-1 flex items-center space-x-2">
        <Image
          src="/images/logo.jpg"      // public/images/logo.png
          alt="REALIVA AI Logo"
          width={32}
          height={32}
          priority
        />
        <span className="text-xl font-bold">REALIVA AI</span>
      </div>

      {/* 네비게이션 링크 */}
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-blue-600">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}