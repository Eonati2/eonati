'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Blog() {
  const posts = [
    {
      title: 'Best Fiverr Pro Logo Designers in 2026',
      excerpt: 'We analyzed 500+ Fiverr Pro designers to find the top 3 for every business type. Here are our picks.',
      category: 'Guide',
      readTime: '8 min read',
      slug: '/blog/best-fiverr-pro-designers-2026',
    },
    {
      title: 'Cheap Logo vs Premium Logo: What Converts Better',
      excerpt: 'We tested $5 logos against $500 logos. The results might surprise you.',
      category: 'Case Study',
      readTime: '6 min read',
      slug: '/blog/cheap-vs-premium-logo',
    },
    {
      title: 'Best Logo Styles for Startups in 2026',
      excerpt: 'Minimalist, wordmark, or emblem? Here is what works for tech startups right now.',
      category: 'Trends',
      readTime: '5 min read',
      slug: '/blog/best-logo-styles-startups',
    },
    {
      title: 'How Better Branding Builds Trust',
      excerpt: '75% of consumers judge credibility based on design. Here is how to get it right.',
      category: 'Psychology',
      readTime: '7 min read',
      slug: '/blog/branding-builds-trust',
    },
    {
      title: 'Minimalist Logo Trends 2026',
      excerpt: 'Clean, simple, scalable. The minimalist trend is not going anywhere.',
      category: 'Trends',
      readTime: '4 min read',
      slug: '/blog/minimalist-logo-trends-2026',
    },
    {
      title: 'Luxury Branding Guide for Product Businesses',
      excerpt: 'From packaging to color psychology, here is how premium brands win.',
      category: 'Guide',
      readTime: '9 min read',
      slug: '/blog/luxury-branding-guide',
    },
    {
      title: 'How to Choose a Logo Designer Fast',
      excerpt: 'A 15-minute framework for picking the right designer without the overwhelm.',
      category: 'Guide',
      readTime: '5 min read',
      slug: '/blog/choose-logo-designer-fast',
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
            className="text-5xl md:text-6xl font-display font-bold text-slate-navy mb-6"
          >
            Branding Tips & Insights
          </motion.h1>
          <p className="text-xl text-slate-navy max-w-3xl mx-auto">
            Everything you need to know about logos, branding, and building trust through design.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 border border-gray-200 rounded-2xl p-6 hover:border-blue-500/50 transition group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-slate-navy/60 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-navy mb-3 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                
                <p className="text-slate-navy/80 text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <span className="text-slate-navy/70 text-sm font-medium inline-flex items-center gap-1">
                  Coming Soon
                  <span>→</span>
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-12">
          <h2 className="text-3xl font-display font-bold text-slate-navy mb-4">
            Ready to Work with a Pro?
          </h2>
          <p className="text-slate-navy/80 mb-8">
            Skip the guesswork. Get matched with vetted Fiverr Pro designers.
          </p>
          <Link
            href="designers.html"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition"
          >
            View Top Designers
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
