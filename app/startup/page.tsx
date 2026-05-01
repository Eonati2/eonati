'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesignerCard from '@/components/DesignerCard'

export default function Startup() {
  const designer = {
    name: 'Juhi / Explorance',
    tagline: 'Best for Startups & SaaS Companies',
    rating: 4.8,
    reviews: '9,300+',
    price: '€23',
    badge: 'Fiverr Pro',
    link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651',
    features: ['Minimalist Logos', 'Startup Branding', 'Tech/SaaS Focus', 'Vector Files', '24hr Delivery'],
    description: '12+ years crafting clean, modern logos for startups and tech companies. Known for lightning-fast 24hr delivery and minimalist aesthetics that scale beautifully.',
    delivery: '24 hours',
    revisions: '5',
    files: ['AI', 'EPS', 'PDF', 'PNG', 'JPG', 'Vector'],
  }

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
            className="text-5xl md:text-6xl font-display font-bold text-slate-navy mb-6"
          >
            Startup Logo Designers
          </motion.h1>
          <p className="text-xl text-slate-navy max-w-3xl mx-auto">
            Fast, affordable, and modern logos built for startups, SaaS, and tech companies.
          </p>
        </div>
      </section>

      {/* FEATURED: JUHI */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <DesignerCard {...designer} />
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-navy text-center mb-4">
            Why Choose a Professional Startup Logo Designer?
          </h2>
          <p className="text-center text-slate-navy/80 mb-12 text-lg">
            Your logo is the foundation of your brand identity. Here's why investing in <strong>custom logo design</strong> matters.
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                🚀 First Impressions Are Everything
              </h3>
              <p className="text-slate-navy/80 mb-4">
                When investors, customers, or partners first encounter your startup, your logo is often the first thing they see. A <strong>professional brand identity</strong> signals that you're serious about building something real.
              </p>
              <p className="text-slate-navy/80">
                Studies show that <strong>75% of consumers judge a company's credibility based on design alone</strong>. Don't let an amateur logo cost you trust before you've even had a chance to pitch.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                💰 Agency Quality at Startup Prices
              </h3>
              <p className="text-slate-navy/80 mb-4">
                Traditional branding agencies charge $10,000+ for a complete identity. When you <strong>hire a freelance logo designer</strong> through Fiverr Pro, you get the same level of expertise at a fraction of the cost.
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-slate-navy mb-3">Startup-Friendly Pricing Tiers:</h4>
                <ul className="space-y-2 text-slate-navy">
                  <li><strong>€23</strong> - Essential logo package for MVP launches</li>
                  <li><strong>€50-€100</strong> - Complete brand identity with multiple concepts</li>
                  <li><strong>€150+</strong> - Full branding suite with guidelines and mockups</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                ⚡ Launch in 24 Hours, Not 6 Weeks
              </h3>
              <p className="text-slate-navy/80 mb-4">
                Startup moves fast. Waiting weeks for a design agency isn't an option. Fiverr Pro designers like Juhi specialize in <strong>24-hour delivery</strong> without sacrificing quality.
              </p>
              <p className="text-slate-navy/80">
                You can go from concept to launch-ready logo in less than a day—perfect for MVP releases, pitch decks, or last-minute rebrands.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                🎨 What You Get With Professional Logo Design
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                  <ul className="space-y-2 text-slate-navy">
                    <li>✓ Multiple logo concepts to choose from</li>
                    <li>✓ Vector source files (AI, EPS, PDF)</li>
                    <li>✓ High-resolution PNG & JPG exports</li>
                    <li>✓ Scalable formats for any use case</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                  <ul className="space-y-2 text-slate-navy">
                    <li>✓ Social media kit for instant branding</li>
                    <li>✓ Commercial usage rights included</li>
                    <li>✓ Unlimited revisions on most packages</li>
                    <li>✓ Fast communication and support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                Ready to Build Your Brand?
              </h3>
              <p className="text-slate-navy/80 mb-6">
                Don't gamble with your startup's first impression. Work with a vetted Fiverr Pro designer who understands what it takes to build brands that scale.
              </p>
              <a
                href={designer.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Hire Juhi Now - Starting at €23
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
