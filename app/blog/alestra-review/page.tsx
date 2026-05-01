'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AlestraReview() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-navy mb-6 leading-tight"
            style={{ color: '#2D3E50' }}
          >
            Why Alestra Agency is the Best Choice for Custom Logo Design in 2026
          </motion.h1>
          <p className="text-xl text-gray-600 mb-8">
            A deep dive into the <span className="font-semibold text-fiverr-green">Most Popular</span> designer on Eonati — and why 30,000+ entrepreneurs trust them with their brand identity.
          </p>
          
          {/* Trust Bar */}
          <div className="flex items-center justify-center gap-2 mb-8" style={{ color: '#2D3E50', fontSize: '0.9rem' }}>
            <span>★★★★★</span>
            <span className="font-semibold">4.9/5 Rating</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold">30,946 Reviews</span>
            <span className="text-gray-400">|</span>
            <span className="font-semibold">Fiverr Pro Verified</span>
          </div>
          
          <a
            href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-block bg-fiverr-green hover:bg-fiverr-greenHover text-white px-10 py-5 rounded-lg font-semibold text-xl transition shadow-lg"
          >
            View Alestra's Portfolio
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          
          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              When you're looking to <strong>hire a freelance logo designer</strong>, the options can feel overwhelming. 
              That's why we did the homework for you. After auditing 50+ designers, one name kept rising to the top: 
              <strong> Alestra Agency</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With over <strong>30,000 completed projects</strong> and a near-perfect 4.9/5 rating, Alestra has become 
              the go-to choice for entrepreneurs who need a <strong>professional brand identity</strong> without the 
              agency price tag. Here's why they're our "Most Popular" pick for 2026.
            </p>
          </motion.div>

          {/* MINIMALIST TECH AESTHETIC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-navy mb-4" style={{ color: '#2D3E50' }}>
              The "Minimalist Tech" Aesthetic That Converts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Alestra specializes in what we call <strong>"Minimalist Tech"</strong> — clean, modern designs that work 
              perfectly for SaaS companies, tech startups, and digital-first brands. Their logos are:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Scalable:</strong> Look perfect on everything from app icons to billboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Memorable:</strong> Simple shapes that stick in customers' minds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Versatile:</strong> Work in color, black & white, and reverse</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This isn't just about looking good — it's about building a brand that <strong>converts visitors into customers</strong>. 
              A clean, professional logo signals trust before a single word is read.
            </p>
          </motion.div>

          {/* DELIVERY SPEED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-navy mb-4" style={{ color: '#2D3E50' }}>
              Lightning-Fast Delivery (Without Sacrificing Quality)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the biggest pain points when you hire a freelance logo designer is <strong>waiting weeks</strong> 
              for concepts. Alestra flips the script:
            </p>
            <div className="bg-slate-light rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-navy mb-3" style={{ color: '#2D3E50' }}>
                Typical Timeline:
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-700"><strong>Day 1:</strong> Place your order and share your vision</li>
                <li className="text-gray-700"><strong>Day 2-3:</strong> Receive 4 initial concepts</li>
                <li className="text-gray-700"><strong>Day 4-7:</strong> Refine your favorite with unlimited revisions</li>
                <li className="text-gray-700"><strong>Day 7:</strong> Final files delivered, ready to launch</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For entrepreneurs on a tight launch schedule, this speed is a <strong>game-changer</strong>. 
              You can go from idea to fully branded business in under a week.
            </p>
          </motion.div>

          {/* SOURCE FILE QUALITY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-navy mb-4" style={{ color: '#2D3E50' }}>
              Source Files That Actually Work
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many designers deliver low-res JPGs and call it a day. Alestra provides a <strong>complete brand toolkit</strong>:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Vector Files (AI/EPS):</strong> Infinitely scalable for any size</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>High-Res PNG:</strong> Transparent background, web-ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>JPG/PDF:</strong> For print and presentations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Brand Style Guide:</strong> Colors, fonts, and usage rules</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These aren't just "logo files" — they're everything you need to <strong>launch a cohesive brand</strong> 
              across every platform.
            </p>
          </motion.div>

          {/* PRICING TIERS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-navy mb-4" style={{ color: '#2D3E50' }}>
              Pricing Tiers: What You Get at Each Level
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Alestra offers three packages to fit different budgets and needs. Here's the breakdown:
            </p>
            
            <div className="space-y-4">
              {/* STARTER */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-navy mb-2" style={{ color: '#2D3E50' }}>
                  Starter — $113
                </h3>
                <p className="text-gray-600 text-sm mb-3">Perfect for solopreneurs and side projects</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 4 Initial Concepts</li>
                  <li>• Unlimited Revisions</li>
                  <li>• High-Res JPG & PNG</li>
                  <li>• 3-Day Delivery</li>
                </ul>
              </div>

              {/* STANDARD */}
              <div className="border-2 border-fiverr-green rounded-xl p-6 bg-green-50">
                <h3 className="text-xl font-bold text-fiverr-green mb-2">
                  Standard — $225 ⭐ Most Popular
                </h3>
                <p className="text-gray-600 text-sm mb-3">Best value for serious businesses</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 6 Initial Concepts</li>
                  <li>• Unlimited Revisions</li>
                  <li>• Vector Source Files (AI/EPS)</li>
                  <li>• Social Media Kit</li>
                  <li>• 5-Day Delivery</li>
                </ul>
              </div>

              {/* PRO */}
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-navy mb-2" style={{ color: '#2D3E50' }}>
                  Pro — $450
                </h3>
                <p className="text-gray-600 text-sm mb-3">Full brand identity for established companies</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 10 Initial Concepts</li>
                  <li>• Unlimited Revisions</li>
                  <li>• Complete Brand Style Guide</li>
                  <li>• Business Card Design</li>
                  <li>• Letterhead & Envelope</li>
                  <li>• 7-Day Delivery</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* FINAL VERDICT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-navy mb-4" style={{ color: '#2D3E50' }}>
              The Final Verdict
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you need a <strong>professional brand identity</strong> that looks like it cost $5,000+ but 
              costs a fraction of that, Alestra Agency is the clear choice. Their combination of:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Modern minimalist aesthetic</strong> that converts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Lightning-fast delivery</strong> (3-7 days)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>Complete source files</strong> for every use case</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fiverr-green font-bold">✓</span>
                <span className="text-gray-700"><strong>30,000+ happy clients</strong> can't be wrong</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              ...makes them the safest, smartest choice for entrepreneurs in 2026.
            </p>
            
            <div className="text-center">
              <a
                href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="inline-block bg-fiverr-green hover:bg-fiverr-greenHover text-white px-10 py-5 rounded-lg font-semibold text-xl transition shadow-lg"
              >
                Hire Alestra Agency Now
              </a>
            </div>
          </motion.div>

          {/* DISCLAIMER */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-500 text-sm italic">
              <strong>Disclosure:</strong> This page contains affiliate links. If you hire Alestra through our link, 
              we may earn a commission at no extra cost to you. This supports our mission to help entrepreneurs 
              find vetted design talent.
            </p>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  )
}
