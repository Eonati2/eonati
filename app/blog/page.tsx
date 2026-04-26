'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blogPosts = [
  {
    title: 'Best Fiverr Pro Logo Designers in 2026',
    excerpt: 'We analyzed 500+ Fiverr Pro designers to find the top 3 that deliver exceptional results for businesses.',
    category: 'Guide',
    readTime: '5 min',
    slug: 'best-fiverr-pro-designers-2026',
  },
  {
    title: 'Cheap Logo vs Premium Logo: What Converts Better',
    excerpt: 'The real cost of a $5 logo might shock you. Here is what the data says about pricing and conversions.',
    category: 'Analysis',
    readTime: '4 min',
    slug: 'cheap-vs-premium-logo',
  },
  {
    title: 'Best Logo Styles for Startups',
    excerpt: 'Minimalist, modern, or bold? Discover which logo styles work best for different startup categories.',
    category: 'Trends',
    readTime: '3 min',
    slug: 'best-logo-styles-startups',
  },
  {
    title: 'How Better Branding Builds Trust',
    excerpt: 'The psychology behind why customers trust professionally designed brands more than DIY logos.',
    category: 'Psychology',
    readTime: '4 min',
    slug: 'branding-builds-trust',
  },
  {
    title: 'Minimalist Logo Trends 2026',
    excerpt: 'Clean, simple, memorable. See the minimalist logo trends dominating 2026.',
    category: 'Trends',
    readTime: '3 min',
    slug: 'minimalist-logo-trends-2026',
  },
  {
    title: 'Luxury Branding Guide for Product Businesses',
    excerpt: 'How to position your product brand as premium through strategic logo and visual identity design.',
    category: 'Guide',
    readTime: '6 min',
    slug: 'luxury-branding-guide',
  },
  {
    title: 'How to Choose a Logo Designer Fast',
    excerpt: 'A step-by-step framework for finding and hiring the right logo designer in under 24 hours.',
    category: 'Guide',
    readTime: '4 min',
    slug: 'choose-logo-designer-fast',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-eonati-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-white mb-6"
          >
            Branding Insights
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-12">
            Expert tips, trends, and guides to help you build a brand that converts.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-eonati-primary/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-eonati-primary/20 text-eonati-primary px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime} read</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                
                <a href={`/blog/${post.slug}`} className="text-eonati-primary hover:text-blue-400 text-sm font-medium">
                  Read more →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
