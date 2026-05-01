'use client'

import { motion } from 'framer-motion'

interface DesignerCardProps {
  name: string
  tagline: string
  rating: number
  reviews: string
  price: string
  badge: string
  link: string
  features: string[]
  description: string
  delivery: string
  revisions: string
  files: string[]
  featured?: boolean
}

export default function DesignerCard({
  name,
  tagline,
  rating,
  reviews,
  price,
  badge,
  link,
  features,
  description,
  delivery,
  revisions,
  files,
  featured = false,
}: DesignerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-slate-50 border ${featured ? 'border-fiverr-green' : 'border-gray-200'} rounded-2xl p-8 hover:border-blue-500/50 transition`}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Badge + Rating */}
        <div className="md:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${featured ? 'bg-fiverr-green text-white' : 'bg-blue-100 text-blue-700'}`}>
              {badge}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-2xl">★</span>
            <span className="text-slate-navy text-2xl font-bold">{rating}</span>
            <span className="text-slate-navy/70">({reviews} reviews)</span>
          </div>
          {/* TRUST STARS - Permanently embedded */}
          <div className="mb-4">
            <div className="text-yellow-500 text-lg">★★★★★</div>
            <div className="text-slate-navy text-sm font-medium">5.0/5 Average Rating</div>
          </div>
          <div className="text-3xl font-bold text-slate-navy mb-2">{price}</div>
          <div className="text-slate-navy/70 text-sm">Starting price</div>
        </div>

        {/* Middle: Info */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-slate-navy mb-2">{name}</h3>
          <p className="text-slate-navy/70 text-sm mb-4">{tagline}</p>
          <p className="text-slate-navy mb-6">{description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-navy/70">Delivery:</span>
              <span className="text-slate-navy ml-2">{delivery}</span>
            </div>
            <div>
              <span className="text-slate-navy/70">Revisions:</span>
              <span className="text-slate-navy ml-2">{revisions}</span>
            </div>
          </div>
        </div>

        {/* Right: Features + CTA */}
        <div className="md:col-span-1">
          <ul className="space-y-2 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-slate-navy text-sm">
                <span className="text-blue-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`block w-full text-center py-4 rounded-lg font-semibold transition ${featured ? 'bg-fiverr-green hover:bg-fiverr-greenHover text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >
            Hire {name.split(' ')[0]}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
