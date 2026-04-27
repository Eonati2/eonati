'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-eonati-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-display font-bold text-white">
            Eonati
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/designers" className="text-gray-300 hover:text-white transition">
              Designers
            </Link>
            <Link href="/startup" className="text-gray-300 hover:text-white transition">
              Startup
            </Link>
            <Link href="/luxury" className="text-gray-300 hover:text-white transition">
              Luxury
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition">
              Blog
            </Link>
            <Link href="/compare" className="text-gray-300 hover:text-white transition">
              Compare
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition">
              FAQ
            </Link>
          </div>

          <Link
            href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra"
            className="bg-eonati-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Find Your Designer
          </Link>
        </div>
      </div>
    </nav>
  )
}
