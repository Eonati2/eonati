import type { Metadata } from 'next'
import './globals.css'

// Cache bust version - increment when CSS changes
const CSS_VERSION = '1.1'

export const metadata: Metadata = {
  title: 'Eonati | Hand-Picked Elite Logo Designers for Your Brand',
  description: 'Discover vetted Fiverr Pro logo designers. Custom logo design, professional brand identity, and affordable pricing. Hire a freelance logo designer today.',
  keywords: 'logo design, professional logo design, custom logo design, hire freelance logo designer, brand identity, Fiverr Pro designers, affordable logo design',
  authors: [{ name: 'Eonati' }],
  metadataBase: new URL('https://eonati2.github.io/eonati/'),
  openGraph: {
    title: 'Eonati | Hand-Picked Elite Logo Designers for Your Brand',
    description: 'Find elite Fiverr Pro branding talent. Custom logo design starting from $23.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Eonati',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eonati - Professional Logo Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eonati | Hand-Picked Elite Logo Designers for Your Brand',
    description: 'Find elite Fiverr Pro branding talent. Custom logo design starting from $23.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`./globals.css?v=${CSS_VERSION}`} />
      </head>
      <body>{children}</body>
    </html>
  )
}
