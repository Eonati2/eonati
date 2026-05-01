'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const designers = [
    {
      name: 'Valeriia T',
      style: 'Luxury & Elegant',
      tagline: 'Elite / Luxury Branding',
      price: 175,
      currency: '$',
      badge: 'Elite / Luxury Branding',
      badgeHighlight: false,
      link: 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
      initials: 'VT',
      gradient: 'linear-gradient(135deg, #2D3E50, #1a2530)',
      features: ['Professional Brand Identity', 'Unlimited Concepts', 'Vector Source Files'],
    },
    {
      name: 'Alestra Agency',
      style: 'Modern & Minimalist',
      tagline: 'Most Popular',
      price: 113,
      currency: '$',
      badge: 'Most Popular',
      badgeHighlight: true,
      link: 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
      initials: 'AA',
      gradient: 'linear-gradient(135deg, #1DBF73, #197a4d)',
      features: ['Custom Logo Design', '4 Concepts', 'High-Res JPG/PNG'],
    },
    {
      name: 'Juhi / Explorance',
      style: 'Bold & Illustrative',
      tagline: 'Best for Startups',
      price: 23,
      currency: '$',
      badge: 'Best for Startups',
      badgeHighlight: false,
      link: 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
      initials: 'JE',
      gradient: 'linear-gradient(135deg, #666, #333)',
      features: ['Essential Logo Design', '2 Concepts', 'Web-Ready Files'],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-12 px-4 bg-white">
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
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Connect with top-rated creators to build a custom logo design that stands out on social media and beyond.
          </motion.p>
          
          {/* SOCIAL PROOF TRUST BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-10"
            style={{ color: '#2D3E50', fontSize: '0.9rem' }}
          >
            <span>★★★★★</span>
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold">30,000+ Entrepreneurs Trusted</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold">Fiverr Pro Verified</span>
          </motion.div>
          
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
      <section id="how-it-works" className="py-16 px-4 bg-slate-light" style={{ borderRadius: '15px', marginTop: '40px', maxWidth: '1200px', margin: '40px auto' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-navy text-center mb-10"
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: 1, title: 'Pick a Style', desc: 'Browse our vetted designers and find the aesthetic that fits your brand.' },
              { num: 2, title: 'Select a Package', desc: 'Choose between Starter, Standard, or Pro tiers based on your needs.' },
              { num: 3, title: 'Share Your Vision', desc: 'Tell the designer your brand colors, name, and any ideas you have.' },
              { num: 4, title: 'Launch Your Brand', desc: 'Receive your high-res files and start using your new logo everywhere!' },
            ].map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.num * 0.1 }}
                className="text-center"
                style={{ textAlign: 'center' }}
              >
                <div className="step-number" style={{ background: '#1DBF73', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontWeight: 'bold' }}>
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-slate-navy mb-2" style={{ fontSize: '1.2rem' }}>{step.title}</h3>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', color: '#555' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VETTING PROCESS - TRUST SECTION */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f4f7f6' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ color: '#2D3E50' }}
          >
            Our 3-Step Vetting Process
          </motion.h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We do the hard work so you don't have to. Every designer is rigorously tested.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Portfolio Audit',
                desc: 'We review 50+ past projects for every designer to ensure consistent quality and modern aesthetics.',
              },
              {
                icon: '💰',
                title: 'Value-to-Price Ratio',
                desc: 'We only feature designers whose quality exceeds their price tag, ensuring you get agency-level work for freelance rates.',
              },
              {
                icon: '✓',
                title: 'Pro-Verified Only',
                desc: 'We prioritize designers with Fiverr Pro and Top-Rated status to guarantee professional communication and reliable delivery.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2D3E50' }}>{item.title}</h3>
                <p className="text-gray-600" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNERS */}
      <section id="designers" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-navy text-center mb-4"
          >
            Featured Freelance Logo Designers
          </motion.h2>
          
          <div className="designer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {designers.map((designer, index) => (
              <motion.div
                key={designer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="designer-card"
                style={{
                  position: 'relative',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '30px 20px',
                  background: '#ffffff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                }}
              >
                {/* Badge */}
                <span className="badge" style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: designer.badgeHighlight ? '#1DBF73' : '#2D3E50',
                  color: '#ffffff',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                }}>
                  {designer.badge}
                </span>

                {/* Designer Info */}
                <div className="designer-info" style={{ textAlign: 'center' }}>
                  <div className="avatar-placeholder" style={{
                    background: designer.gradient,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    margin: '0 auto 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px',
                  }}>
                    {designer.initials}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '5px' }}>{designer.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{designer.style}</p>
                </div>

                {/* Price */}
                <div className="price-container" style={{ margin: '20px 0', textAlign: 'center' }}>
                  <span className="price-label" style={{ fontSize: '0.9rem', color: '#666', display: 'block' }}>Starting at</span>
                  <div className="price-tag" style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A' }}>
                    <span className="price-currency" style={{ fontSize: '1.2rem', verticalAlign: 'super', marginRight: '2px' }}>{designer.currency}</span>
                    {designer.price}
                  </div>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', fontSize: '0.9rem' }}>
                  {designer.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>✅ {feature}</li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={designer.link}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="cta-button"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#1DBF73',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#197a4d'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#1DBF73'}
                >
                  View Portfolio
                </a>
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
