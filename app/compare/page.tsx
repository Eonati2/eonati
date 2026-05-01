'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Compare() {
  const designers = [
    {
      name: 'Valeriia T',
      bestFor: 'Luxury Brands',
      rating: 4.8,
      reviews: '8,009',
      startingPrice: '$175',
      delivery: '5-10 days',
      revisions: 'Unlimited',
      services: ['Professional Brand Identity', 'Unlimited Concepts', 'Vector Source Files', '10+ Years Exp'],
      link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
      featured: false,
    },
    {
      name: 'Alestra Agency',
      bestFor: 'Established Businesses',
      rating: 4.9,
      reviews: '30,946',
      startingPrice: '$113',
      delivery: '3-7 days',
      revisions: 'Unlimited',
      services: ['Custom Logo Design', 'Brand Identity', 'Style Guides', 'Animation'],
      link: 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
      featured: true,
    },
    {
      name: 'Juhi / Explorance',
      bestFor: 'Startups',
      rating: 4.8,
      reviews: '9,300',
      startingPrice: '$23',
      delivery: '24 hours',
      revisions: '5+',
      services: ['Minimalist Logos', 'Brand Identity', 'Fast Delivery'],
      link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
      featured: false,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-navy mb-6 text-center"
            style={{ color: '#2D3E50' }}
          >
            Compare Designers
          </motion.h1>
          <p className="text-xl text-slate-navy/80 text-center max-w-3xl mx-auto mb-12">
            Side-by-side comparison to help you choose the perfect designer for your brand.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-navy">
                  <th className="text-left py-4 px-6 text-slate-navy font-bold" style={{ color: '#2D3E50' }}>Feature</th>
                  {designers.map((d) => (
                    <th 
                      key={d.name} 
                      className="text-center py-4 px-6 font-bold"
                      style={{ color: d.featured ? '#1DBF73' : '#2D3E50', backgroundColor: d.featured ? '#f0fdf4' : 'transparent' }}
                    >
                      {d.name} {d.featured && '⭐'}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-slate-navy font-semibold" style={{ color: '#2D3E50' }}>Best For</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-slate-navy">{d.bestFor}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-slate-navy font-semibold" style={{ color: '#2D3E50' }}>Rating</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-slate-navy">
                      ⭐ {d.rating} ({d.reviews})
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-slate-navy font-semibold" style={{ color: '#2D3E50' }}>Starting Price</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center font-bold" style={{ color: '#1DBF73', fontSize: '1.25rem' }}>
                      {d.startingPrice}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-slate-navy font-semibold" style={{ color: '#2D3E50' }}>Delivery Time</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-slate-navy">{d.delivery}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-slate-navy font-semibold" style={{ color: '#2D3E50' }}>Revisions</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-slate-navy">{d.revisions}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-slate-navy font-semibold" style={{ color: '#2D3E50' }}>Services</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center">
                      <ul className="space-y-1">
                        {d.services.map((s) => (
                          <li key={s} className="text-slate-navy text-sm">✓ {s}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6"></td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center">
                      <a
                        href={d.link}
                        target="_blank"
                        rel="sponsored nofollow noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-lg font-bold transition"
                        style={{ 
                          backgroundColor: d.featured ? '#1DBF73' : '#2D3E50',
                          color: 'white',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        {d.featured ? 'Most Popular' : 'Hire Now'}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
