'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TopDesigners() {
  const designers = [
    {
      name: 'Alestra Agency',
      tagline: 'Best for: Established businesses needing full branding',
      rating: 4.9,
      reviews: '30,946',
      price: 'From $200',
      badge: 'Top Rated',
      link: 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
      features: ['Visual Identity', 'Logo Design', 'Brand Guides', 'Logo Animation'],
      description: 'Alestra is a full-service branding agency with over 15 years of experience. They specialize in creating comprehensive visual identities for established businesses looking to elevate their brand presence.',
      delivery: '3-5 days',
      revisions: 'Unlimited',
      files: ['AI', 'PSD', 'PDF', 'PNG', 'JPG', 'Source Files'],
    },
    {
      name: 'Juhi / Explorance',
      tagline: 'Best for: Modern startups needing clean identity',
      rating: 4.8,
      reviews: '9,300',
      price: 'From €23',
      badge: 'Fiverr Pro',
      link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
      features: ['Minimalist Logos', '24hr Delivery', 'Brand Identity', 'Startup Packages'],
      description: 'Juhi brings 12+ years of experience crafting clean, modern logos for startups and tech companies. Known for lightning-fast delivery and minimalist aesthetics that scale beautifully.',
      delivery: '24 hours',
      revisions: '5',
      files: ['AI', 'EPS', 'PDF', 'PNG', 'JPG', 'Vector'],
    },
    {
      name: 'Valeriia T',
      tagline: 'Best for: Luxury brands and premium packaging',
      rating: 4.8,
      reviews: '8,009',
      price: 'From €175',
      badge: 'Fiverr Pro',
      link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
      features: ['Luxury Branding', 'Packaging Design', 'Website UI/UX', '10+ Years Exp'],
      description: 'Valeriia is a senior brand designer specializing in luxury, feminine, and high-end product branding. Her work has been featured in major publications and trusted by premium brands worldwide.',
      delivery: '5-7 days',
      revisions: 'Unlimited',
      files: ['AI', 'PSD', 'PDF', 'PNG', 'JPG', 'Mockups', 'Brand Guide'],
    },
  ]

  return (
    <main className="min-h-screen bg-eonati-bg">
      <Navbar />
      
      {/* HERO */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Top Logo Designers
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hand-picked Fiverr Pro talent with proven track records. Each designer has been vetted for quality, communication, and delivery.
          </p>
        </div>
      </section>

      {/* DESIGNERS GRID */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {designers.map((designer, index) => (
              <motion.div
                key={designer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-eonati-primary/50 transition"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left: Badge + Rating */}
                  <div className="md:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-eonati-primary/20 text-eonati-primary px-4 py-2 rounded-full text-sm font-medium">
                        {designer.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-yellow-400 text-2xl">★</span>
                      <span className="text-white text-2xl font-bold">{designer.rating}</span>
                      <span className="text-gray-400">({designer.reviews} reviews)</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{designer.price}</div>
                    <div className="text-gray-400 text-sm">Starting price</div>
                  </div>

                  {/* Middle: Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{designer.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{designer.tagline}</p>
                    <p className="text-gray-300 mb-6">{designer.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-white ml-2">{designer.delivery}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Revisions:</span>
                        <span className="text-white ml-2">{designer.revisions}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Features + CTA */}
                  <div className="md:col-span-1">
                    <ul className="space-y-2 mb-6">
                      {designer.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-eonati-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={designer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-eonati-primary hover:bg-blue-600 text-white text-center py-4 rounded-lg font-semibold transition"
                    >
                      Hire {designer.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-12">
            Why These Designers?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-white mb-2">Fiverr Pro Vetted</h3>
              <p className="text-gray-400 text-sm">Only top 1% of applicants accepted</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold text-white mb-2">4.8+ Average Rating</h3>
              <p className="text-gray-400 text-sm">Consistently excellent reviews</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">24hr to 7-day turnaround</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Ready</h3>
              <p className="text-gray-400 text-sm">Full commercial rights included</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
