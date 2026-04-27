'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const designers = [
    {
      name: 'Alestra Agency',
      tagline: 'Best for: Established businesses needing full branding',
      rating: 4.9,
      reviews: '30,946',
      price: 'From $200',
      badge: 'Top Rated',
      link: 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
      image: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5e3b5e5e5e5e5e5e5e5e5e5e/alestra-profile.jpg',
      style: 'Full-Service Agency',
      features: ['Visual Identity', 'Logo Design', 'Brand Guides', 'Logo Animation'],
      tiers: {
        starter: {
          name: 'Starter Tier',
          delivery: '3-5 Days',
          revisions: '2 Included',
          files: 'PNG/JPG',
        },
        pro: {
          name: 'Pro Tier',
          delivery: '24-48 Hours',
          revisions: 'Unlimited',
          files: 'AI/EPS (Vector)',
        },
      },
    },
    {
      name: 'Juhi / Explorance',
      tagline: 'Best for: Modern startups needing clean identity',
      rating: 4.8,
      reviews: '9,300',
      price: 'From €23',
      badge: 'Fiverr Pro',
      link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
      image: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/juhi-profile.jpg',
      style: 'Minimalist',
      features: ['Minimalist Logos', '24hr Delivery', 'Brand Identity', 'Startup Packages'],
      tiers: {
        starter: {
          name: 'Starter Tier',
          delivery: '2-3 Days',
          revisions: '2 Included',
          files: 'PNG/JPG',
        },
        pro: {
          name: 'Pro Tier',
          delivery: '24 Hours',
          revisions: 'Unlimited',
          files: 'AI/EPS (Vector)',
        },
      },
    },
    {
      name: 'Valeriia T',
      tagline: 'Best for: Luxury brands and premium packaging',
      rating: 4.8,
      reviews: '8,009',
      price: 'From €175',
      badge: 'Fiverr Pro',
      link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
      image: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/valeriia-profile.jpg',
      style: 'Luxury & Feminine',
      features: ['Luxury Branding', 'Packaging Design', 'Website UI/UX', '10+ Years Exp'],
      tiers: {
        starter: {
          name: 'Starter Tier',
          delivery: '5-7 Days',
          revisions: '3 Included',
          files: 'PNG/JPG',
        },
        pro: {
          name: 'Pro Tier',
          delivery: '3-5 Days',
          revisions: 'Unlimited',
          files: 'AI/EPS (Vector)',
        },
      },
    },
  ]

  return (
    <main className="min-h-screen bg-eonati-bg">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 sm:mb-6"
          >
            Get a Professional Brand Identity{' '}
            <span className="text-eonati-primary">Without the Agency Price Tag</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-2"
          >
            Discover vetted Fiverr Pro designers trusted by thousands to build brands people trust instantly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
          >
            <a
              href="#designers"
              className="bg-eonati-primary hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition w-full sm:w-auto"
            >
              Browse Designers
            </a>
            <a
              href="#how-it-works"
              className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition w-full sm:w-auto"
            >
              How it Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE BANNER */}
      <section className="py-4 px-4 bg-amber-500/10 border-b border-amber-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-200 text-xs sm:text-sm">
            <span className="font-semibold">⚠️ Affiliate Disclosure:</span> We may earn commissions from qualifying purchases at no extra cost to you. 
            This supports our research and vetting process.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 sm:py-12 border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">30k+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Reviews</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">4.9★</div>
              <div className="text-gray-400 text-xs sm:text-sm">Top Rated</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">Pro</div>
              <div className="text-gray-400 text-xs sm:text-sm">Fiverr Vetted</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">24hr</div>
              <div className="text-gray-400 text-xs sm:text-sm">Fast Delivery</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Business Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-4"
          >
            How It Works: Hire a Freelance Logo Designer in Minutes
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 px-2">
            Get a professional logo in 4 simple steps
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-eonati-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Select a Category</h3>
              <p className="text-gray-400 text-sm">Find the style that fits your brand</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-eonati-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compare Portfolio</h3>
              <p className="text-gray-400 text-sm">Look at real work samples</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-eonati-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Check Pricing</h3>
              <p className="text-gray-400 text-sm">Review transparent bulleted pricing tiers</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-eonati-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Your Logo</h3>
              <p className="text-gray-400 text-sm">Final files delivered in days</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNERS */}
      <section id="designers" className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-4"
          >
            Featured Designers
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-12 px-2">
            Hand-picked Fiverr Pro talent with proven track records
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {designers.map((designer, index) => (
              <motion.div
                key={designer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-eonati-primary/50 transition"
              >
                {/* Profile Image */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-eonati-primary to-blue-600 flex items-center justify-center border-2 border-eonati-primary/30">
                    <span className="text-2xl font-bold text-white">
                      {designer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{designer.name}</h3>
                    <p className="text-gray-400 text-xs">{designer.style}</p>
                  </div>
                </div>

                {/* Badge & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-eonati-primary/20 text-eonati-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {designer.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-semibold">{designer.rating}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">({designer.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-4">{designer.tagline}</p>
                
                <div className="text-2xl sm:text-3xl font-bold text-white mb-6">{designer.price}</div>
                
                {/* Pricing Tiers */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-xs font-semibold text-gray-300 mb-2">{designer.tiers.starter.name}</div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>⏱ {designer.tiers.starter.delivery}</div>
                      <div>🔄 {designer.tiers.starter.revisions}</div>
                      <div>📁 {designer.tiers.starter.files}</div>
                    </div>
                  </div>
                  <div className="bg-eonati-primary/10 border border-eonati-primary/30 rounded-lg p-3">
                    <div className="text-xs font-semibold text-eonati-primary mb-2">{designer.tiers.pro.name}</div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>⏱ {designer.tiers.pro.delivery}</div>
                      <div>🔄 {designer.tiers.pro.revisions}</div>
                      <div>📁 {designer.tiers.pro.files}</div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {designer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <span className="text-eonati-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={designer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-eonati-primary hover:bg-blue-600 text-white text-center py-3 rounded-lg font-semibold transition text-sm sm:text-base"
                >
                  Hire {designer.name.split(' ')[0]}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GOOD LOGOS WIN */}
      <section className="py-16 sm:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-4"
          >
            The Impact of a Custom Logo Design on Your Bottom Line
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-12 px-2">
            Customers judge your business in seconds. Make it count.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Instant Credibility</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                <strong>Professional designs build trust with new customers.</strong> 75% of consumers judge a company's credibility based on visual design alone.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💰</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Memorability</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                <strong>Stand out in a crowded social media feed.</strong> Unique logos are 3x more likely to be remembered by potential customers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Scalability</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                <strong>High-quality files work on everything from business cards to billboards.</strong> Vector formats ensure your logo looks perfect at any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STICKY CTA */}
      <section className="py-16 sm:py-20 px-4 sticky bottom-0 bg-eonati-bg/95 backdrop-blur-md border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 sm:mb-6"
          >
            Ready to Build a Brand People Trust?
          </motion.h2>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-10 px-2">
            Start with a professional logo from vetted Fiverr Pro designers.
          </p>
          <a
            href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eonati-primary hover:bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-lg sm:text-xl transition w-full sm:w-auto shadow-lg shadow-blue-500/30"
          >
            Find Your Designer Now →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
