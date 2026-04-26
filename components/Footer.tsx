'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-eonati-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Eonati</h3>
            <p className="text-gray-400 text-sm">
              Find elite Fiverr Pro branding talent faster.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Designers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/#designers" className="hover:text-white transition">Top Designers</a></li>
              <li><a href="/startup-designers" className="hover:text-white transition">For Startups</a></li>
              <li><a href="/luxury-designers" className="hover:text-white transition">Luxury Brands</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="/compare" className="hover:text-white transition">Compare</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Affiliate Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© 2026 Eonati. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Eonati is a participant in the Fiverr Affiliate Program. 
            We may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
