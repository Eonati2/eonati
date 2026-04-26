'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Compare() {
  const designers = [
    {
      name: 'Alestra Agency',
      bestFor: 'Established Businesses',
      rating: 4.9,
      reviews: '30,946',
      startingPrice: '$200',
      delivery: '3-7 days',
      revisions: 'Unlimited',
      services: ['Logo Design', 'Brand Identity', 'Style Guides', 'Animation'],
      link: 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
    },
    {
      name: 'Juhi / Explorance',
      bestFor: 'Startups',
      rating: 4.8,
      reviews: '9,300',
      startingPrice: '€23',
      delivery: '24 hours',
      revisions: '5+',
      services: ['Minimalist Logos', 'Brand Identity', 'Fast Delivery'],
      link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
    },
    {
      name: 'Valeriia T',
      bestFor: 'Luxury Brands',
      rating: 4.8,
      reviews: '8,009',
      startingPrice: '€175',
      delivery: '5-10 days',
      revisions: 'Unlimited',
      services: ['Luxury Branding', 'Packaging', 'Web Design', '10+ Years Exp'],
      link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
    },
  ]

  return (
    <main className="min-h-screen bg-eonati-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-white mb-6 text-center"
          >
            Compare Designers
          </motion.h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Side-by-side comparison to help you choose the perfect designer for your brand.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Feature</th>
                  {designers.map((d) => (
                    <th key={d.name} className="text-center py-4 px-6 text-white font-semibold">
                      {d.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">Best For</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-white">{d.bestFor}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">Rating</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-white">
                      ★ {d.rating} ({d.reviews})
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">Starting Price</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-eonati-primary font-bold">
                      {d.startingPrice}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">Delivery Time</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-white">{d.delivery}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">Revisions</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center text-white">{d.revisions}</td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-gray-300">Services</td>
                  {designers.map((d) => (
                    <td key={d.name} className="py-4 px-6 text-center">
                      <ul className="space-y-1">
                        {d.services.map((s) => (
                          <li key={s} className="text-white text-sm">{s}</li>
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
                        rel="noopener noreferrer"
                        className="inline-block bg-eonati-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
                      >
                        Hire Now
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
