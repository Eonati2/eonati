'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Luxury() {
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
            Luxury Brand Designers
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium branding for beauty, fashion, and high-end product businesses.
          </p>
        </div>
      </section>

      {/* FEATURED: VALERIIA T */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/20 to-rose-900/20 border border-amber-500/30 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
                  Best for Luxury Brands
                </span>
                <h2 className="text-4xl font-display font-bold text-white mt-4 mb-2">
                  Valeriia T
                </h2>
                <p className="text-gray-300 mb-6">
                  Senior brand designer specializing in luxury, feminine, and high-end product branding. 
                  Her work has been featured in major publications and trusted by premium brands worldwide.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">4.8★</div>
                    <div className="text-gray-400 text-sm">8,009+ reviews</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">€175</div>
                    <div className="text-gray-400 text-sm">Starting price</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">10+</div>
                    <div className="text-gray-400 text-sm">Years experience</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-white">∞</div>
                    <div className="text-gray-400 text-sm">Revisions</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {['Luxury Branding', 'Packaging Design', 'Feminine Aesthetics', 'Brand Guidelines', 'Website UI/UX'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <span className="text-amber-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-4 rounded-lg font-semibold text-lg transition"
                >
                  Hire Valeriia Now
                </a>
              </div>

              <div className="bg-white/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Perfect For:</h3>
                <ul className="space-y-3 mb-6">
                  {['Beauty Brands', 'Fashion Labels', 'Luxury Products', 'Wellness Companies', 'Premium Services'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">You Get:</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Complete brand identity system</li>
                  <li>• Packaging design mockups</li>
                  <li>• Brand style guidelines</li>
                  <li>• Social media templates</li>
                  <li>• Website UI concepts</li>
                  <li>• Print-ready files</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY LUXURY BRANDING MATTERS */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Why Luxury Brands Need Premium Design
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Perception</h3>
              <p className="text-gray-400">
                Your visuals signal your price point. Luxury design justifies premium pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-2">Stand Out</h3>
              <p className="text-gray-400">
                In crowded markets like beauty and fashion, unique branding is your competitive edge.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-2">Emotional Connection</h3>
              <p className="text-gray-400">
                Feminine, elegant design creates deeper emotional bonds with your ideal customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
