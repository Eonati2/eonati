'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const designers = [
    {
      name: 'Alestra Agency',
      style: 'Modern & Minimalist',
      tagline: 'Best for: Established businesses needing full branding',
      rating: 4.9,
      reviews: '30,946',
      price: 'From $200',
      badge: 'Top Rated',
      link: 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
      initials: 'AA',
      features: [
        { standard: '2 Concepts', premium: '4 Concepts' },
        { standard: 'High-Res JPG/PNG', premium: 'Vector Source Files' },
        { standard: '3 Revisions', premium: 'Unlimited Revisions' },
        { standard: '3-5 Days', premium: '24-48 Hours' },
      ],
    },
    {
      name: 'Juhi / Explorance',
      style: 'Bold & Illustrative',
      tagline: 'Best for: Modern startups needing clean identity',
      rating: 4.8,
      reviews: '9,300',
      price: 'From €23',
      badge: 'Fiverr Pro',
      link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
      initials: 'JE',
      features: [
        { standard: '2 Concepts', premium: '5+ Concepts' },
        { standard: 'High-Res JPG/PNG', premium: 'Vector Source Files' },
        { standard: '2 Revisions', premium: 'Unlimited Revisions' },
        { standard: '2-3 Days', premium: '24 Hours' },
      ],
    },
    {
      name: 'Valeriia T',
      style: 'Luxury & Elegant',
      tagline: 'Best for: Luxury brands and premium packaging',
      rating: 4.8,
      reviews: '8,009',
      price: 'From €175',
      badge: 'Fiverr Pro',
      link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
      initials: 'VT',
      features: [
        { standard: '3 Concepts', premium: 'Unlimited Concepts' },
        { standard: 'High-Res JPG/PNG', premium: 'Vector Source Files' },
        { standard: '3 Revisions', premium: 'Unlimited Revisions' },
        { standard: '5-7 Days', premium: '3-5 Days' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-navy mb-6 leading-tight"
          >
            Get a Professional Brand Identity{' '}
            <span className="block mt-2 text-fiverr-green">Without the Agency Price Tag</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Connect with top-rated creators to build a custom logo design that stands out on social media and beyond.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#designers"
              className="bg-fiverr-green hover:bg-fiverr-greenHover text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Browse Top Designers
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-fiverr-green text-fiverr-green hover:bg-fiverr-green hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              How it Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE BANNER */}
      <section className="py-4 px-4 bg-amber-50 border-t border-b border-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-800 text-sm italic">
            <span className="font-semibold">⚠️ Transparency Matters:</span> This page contains affiliate links. If you make a purchase, I may earn a commission at no extra cost to you. This helps support the site!
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 px-4 bg-slate-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-fiverr-green mb-1">10,000+</div>
              <div className="text-gray-600 text-sm">Entrepreneurs Trusted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fiverr-green mb-1">⭐ 4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-fiverr-green mb-1">Verified</div>
              <div className="text-gray-600 text-sm">Pro Sellers Only</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-navy text-center mb-4"
          >
            How to Hire a Freelance Logo Designer in 4 Easy Steps
          </motion.h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get your professional logo in just a few days
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: 'Browse Styles', desc: 'Pick a designer whose aesthetic matches your brand vision' },
              { num: 2, title: 'Select a Tier', desc: 'Choose from Starter or Pro packages based on your budget' },
              { num: 3, title: 'Submit Brief', desc: 'Tell the designer about your brand colors and target audience' },
              { num: 4, title: 'Launch Brand', desc: 'Receive your high-resolution files and start growing' },
            ].map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.num * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-fiverr-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNERS */}
      <section id="designers" className="py-20 px-4 bg-slate-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-navy text-center mb-4"
          >
            Featured Designers
          </motion.h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Hand-picked Fiverr Pro talent with proven track records
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {designers.map((designer, index) => (
              <motion.div
                key={designer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Profile Header */}
                <div className="bg-gradient-to-br from-fiverr-green to-blue-500 p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border-2 border-white/30">
                      <span className="text-2xl font-bold">{designer.initials}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{designer.name}</h3>
                      <p className="text-white/90 text-sm">{designer.style}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                      {designer.badge}
                    </span>
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span className="font-semibold">{designer.rating}</span>
                      <span className="text-white/80 text-sm">({designer.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{designer.tagline}</p>
                  <div className="text-2xl font-bold text-fiverr-green mb-6">{designer.price}</div>
                  
                  {/* Pricing Comparison Table */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div className="font-semibold text-gray-700">Standard</div>
                      <div className="font-semibold text-fiverr-green">Premium</div>
                    </div>
                    {designer.features.map((feature, i) => (
                      <div key={i} className="grid grid-cols-2 gap-2 py-2 border-t border-gray-100">
                        <div className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="text-gray-400">✓</span>
                          {feature.standard}
                        </div>
                        <div className="text-slate-navy text-sm font-medium flex items-center gap-2">
                          <span className="text-fiverr-green">✓</span>
                          {feature.premium}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={designer.link}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="block w-full bg-fiverr-green hover:bg-fiverr-greenHover text-white text-center py-3 rounded-lg font-semibold transition"
                  >
                    Hire {designer.name.split(' ')[0]}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GOOD LOGOS WIN */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-navy text-center mb-4"
          >
            Why Your Business Needs a Professional Brand Identity
          </motion.h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Don't settle for amateur design
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'First Impressions',
                desc: 'You have 3 seconds to impress a visitor. A DIY logo can look amateur and drive customers away.',
                stat: '75% judge credibility by design',
              },
              {
                icon: '💰',
                title: 'Brand Loyalty',
                desc: 'A cohesive look builds long-term trust with your audience and encourages repeat business.',
                stat: '33% increase in conversions',
              },
              {
                icon: '🎯',
                title: 'Scalability',
                desc: 'Pro designers provide Vector Files that look perfect on everything from stickers to billboards.',
                stat: 'Works at any size',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-light"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="text-fiverr-green font-semibold text-sm">{item.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-slate-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-10">
            Don't settle for a generic template. Get a unique logo today.
          </p>
          <a
            href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-block bg-fiverr-green hover:bg-fiverr-greenHover text-white px-10 py-5 rounded-lg font-semibold text-xl transition shadow-lg"
          >
            Start Your Logo Project Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
