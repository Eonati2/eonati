import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eonati | Hire Professional Logo Designers - Fiverr Pro',
  description: 'Discover vetted Fiverr Pro logo designers. Custom logo design, professional brand identity, and affordable pricing. Hire a freelance logo designer today.',
  keywords: 'logo design, professional logo design, custom logo design, hire freelance logo designer, brand identity, Fiverr Pro designers, affordable logo design',
  authors: [{ name: 'Eonati' }],
  openGraph: {
    title: 'Eonati | Professional Logo Designers',
    description: 'Find elite Fiverr Pro branding talent. Custom logo design starting from $23.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Eonati',
    images: [
      {
        url: '/eonati/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eonati - Professional Logo Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eonati | Professional Logo Designers',
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
      <body>{children}</body>
    </html>
  )
}
