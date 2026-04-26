'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Eonati?',
      answer: 'Eonati is a curated directory of elite Fiverr Pro logo and branding designers. We vet talent so you do not have to spend hours searching.',
    },
    {
      question: 'Are these designers really that good?',
      answer: 'Every designer featured on Eonati is Fiverr Pro vetted, has thousands of positive reviews, and a proven track record with real businesses.',
    },
    {
      question: 'How much does a logo cost?',
      answer: 'Prices range from €23 for startup packages to €400+ for full brand identity. Each designer offers multiple tiers to fit different budgets.',
    },
    {
      question: 'How long does it take?',
      answer: 'Most designers deliver initial concepts within 24-72 hours. Full brand identity projects typically take 5-14 days.',
    },
    {
      question: 'What if I am not satisfied?',
      answer: 'Fiverr Pro offers a satisfaction guarantee. If you are not happy with the delivery, you can request revisions or a full refund.',
    },
    {
      question: 'Do I own the logo?',
      answer: 'Yes. All designers provide full commercial rights and source files upon completion.',
    },
    {
      question: 'Can I request changes?',
      answer: 'Absolutely. All packages include multiple revision rounds to ensure you get exactly what you want.',
    },
    {
      question: 'How do I get started?',
      answer: 'Click any "Hire" button to visit the designer\'s Fiverr page. Review their portfolio, select a package, and place your order.',
    },
  ]

  return (
    <main className="min-h-screen bg-eonati-bg">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-white mb-6 text-center"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Everything you need to know about hiring a professional logo designer.
          </p>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
