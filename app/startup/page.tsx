'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Startup() {
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
            Startup Logo Designers
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fast, affordable, and modern logos built for startups, SaaS, and tech companies.
          </p>
        </div>
      </section>

      {/* FEATURED: JUHI */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                  Best for Startups
                </span>
                <h2 className="text-4xl font-display font-bold text-white mt-4 mb-2">
                  Juhi / Explorance
                </h2>
                <p className="text-gray-300 mb-6">
                  12+ years crafting clean, modern logos for startups and tech companies. 
                  Known for lightning-fast 24hr delivery and minimalist aesthetics that scale beautifully.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">4.8★</div>
                    <div className="text-gray-400 text-sm">9,300+ reviews</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">€23</div>
                    <div className="text-gray-400 text-sm">Starting price</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">24hr</div>
                    <div className="text-gray-400 text-sm">Delivery</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">5</div>
                    <div className="text-gray-400 text-sm">Revisions</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {['Minimalist Logos', 'Startup Branding', 'Tech/SaaS Focus', 'Vector Files', '24hr Delivery'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-4 rounded-lg font-semibold text-lg transition"
                >
                  Hire Juhi Now
                </a>
              </div>

              <div className="bg-white/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Perfect For:</h3>
                <ul className="space-y-3 mb-6">
                  {['Tech Startups', 'SaaS Companies', 'eCommerce Brands', 'Mobile Apps', 'Personal Brands'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">You Get:</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Multiple concepts to choose from</li>
                  <li>• Source files (AI, EPS, PDF)</li>
                  <li>• High-res PNG & JPG</li>
                  <li>• Vector format for scaling</li>
                  <li>• Social media kit</li>
                  <li>• Commercial usage rights</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY STARTUP LOGOS MATTER */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Why Startups Need Pro Logos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Investor Ready</h3>
              <p className="text-gray-400">
                First impressions matter. A pro logo signals you're serious about building something real.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Budget Friendly</h3>
              <p className="text-gray-400">
                Get agency-quality work at startup-friendly prices. No $10k+ design retainers needed.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Launch Fast</h3>
              <p className="text-gray-400">
                24-48hr delivery means you can launch your MVP without waiting weeks for design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
