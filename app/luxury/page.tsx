'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesignerCard from '@/components/DesignerCard'

export default function Luxury() {
  const designer = {
    name: 'Valeriia T',
    tagline: 'Best for Luxury Brands & Premium Packaging',
    rating: 4.8,
    reviews: '8,009+',
    price: '€175',
    badge: 'Fiverr Pro',
    link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
    features: ['Luxury Branding', 'Packaging Design', 'Feminine Aesthetics', 'Brand Guidelines', 'Website UI/UX'],
    description: 'Senior brand designer specializing in luxury, feminine, and high-end product branding. Her work has been featured in major publications and trusted by premium brands worldwide.',
    delivery: '5-7 days',
    revisions: 'Unlimited',
    files: ['AI', 'PSD', 'PDF', 'PNG', 'JPG', 'Mockups', 'Brand Guide'],
    featured: true,
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
            Luxury Brand Designers
          </motion.h1>
          <p className="text-xl text-slate-navy max-w-3xl mx-auto">
            Premium branding for beauty, fashion, and high-end product businesses.
          </p>
        </div>
      </section>

      {/* FEATURED: VALERIIA T */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <DesignerCard {...designer} />
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-navy text-center mb-4">
            Why Luxury Brands Deserve Premium Design
          </h2>
          <p className="text-center text-slate-navy/80 mb-12 text-lg">
            In the luxury market, your visual identity isn't just decoration—it's your <strong>most valuable business asset</strong>.
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                💎 Design That Justifies Premium Pricing
              </h3>
              <p className="text-slate-navy/80 mb-4">
                Your visuals signal your price point before a single word is read. <strong>Luxury design isn't an expense—it's an investment</strong> that allows you to charge what you're truly worth.
              </p>
              <p className="text-slate-navy/80">
                When customers see polished, sophisticated branding, they unconsciously associate it with <strong>higher quality products and superior service</strong>. This is the psychology of premium positioning.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                👑 Stand Out in Saturated Markets
              </h3>
              <p className="text-slate-navy/80 mb-4">
                The beauty and fashion industries are fiercely competitive. Generic templates and DIY logos disappear in the noise. <strong>Custom logo design</strong> gives you the unique visual fingerprint your brand needs to be remembered.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h4 className="font-bold text-slate-navy mb-3">Luxury Branding Investment Tiers:</h4>
                <ul className="space-y-2 text-slate-navy">
                  <li><strong>€175</strong> - Premium logo design with brand consultation</li>
                  <li><strong>€300-€500</strong> - Complete visual identity with packaging mockups</li>
                  <li><strong>€800+</strong> - Full brand system with guidelines and multi-platform assets</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                ✨ Emotional Connection Through Design
              </h3>
              <p className="text-slate-navy/80 mb-4">
                Luxury purchases are emotional, not logical. Feminine, elegant design creates <strong>deeper emotional bonds</strong> with your ideal customers—the kind that turn first-time buyers into lifelong advocates.
              </p>
              <p className="text-slate-navy/80">
                When you <strong>hire a freelance logo designer</strong> who specializes in luxury aesthetics, you're not just getting a logo. You're getting a visual language that speaks directly to your audience's aspirations and desires.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                🎨 What Premium Branding Includes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                  <ul className="space-y-2 text-slate-navy">
                    <li>✓ Complete brand identity system</li>
                    <li>✓ Packaging design mockups</li>
                    <li>✓ Brand style guidelines document</li>
                    <li>✓ Social media template suite</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                  <ul className="space-y-2 text-slate-navy">
                    <li>✓ Website UI concepts</li>
                    <li>✓ Print-ready production files</li>
                    <li>✓ Unlimited revisions until perfect</li>
                    <li>✓ Full commercial ownership rights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                🏆 Why Valeriia T for Luxury Branding?
              </h3>
              <p className="text-slate-navy/80 mb-4">
                With <strong>10+ years of experience</strong> and over <strong>8,000 five-star reviews</strong>, Valeriia specializes in creating <strong>professional brand identity</strong> systems for beauty brands, fashion labels, and premium product businesses.
              </p>
              <p className="text-slate-navy/80 mb-6">
                Her work has been featured in major publications and trusted by luxury brands worldwide. When you work with Valeriia, you're not just hiring a designer—you're partnering with someone who understands the luxury market inside and out.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 border-2 border-amber-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-navy mb-4">
                Ready to Elevate Your Brand?
              </h3>
              <p className="text-slate-navy/80 mb-6">
                Your luxury brand deserves design that matches your ambition. Work with a vetted Fiverr Pro designer who knows how to create visuals that command premium prices.
              </p>
              <a
                href={designer.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Hire Valeriia Now - Starting at €175
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
