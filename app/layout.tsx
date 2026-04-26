import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Eonati | Premium Logo Designers',
  description: 'Discover vetted Fiverr Pro designers trusted by thousands to build brands people trust instantly.',
  keywords: ['logo design', 'professional logo design', 'premium logo design', 'brand identity design', 'Fiverr Pro'],
  authors: [{ name: 'Eonati' }],
  openGraph: {
    title: 'Eonati | Premium Logo Designers',
    description: 'Find elite Fiverr Pro branding talent faster.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
