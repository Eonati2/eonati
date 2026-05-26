import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Star, CheckCircle, Shield, Clock, ChevronRight, Users, Zap, Award, AlertTriangle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { DESIGNERS } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const hooks = [
  { icon: <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />, text: "Most logo projects fail not because of the designer — but because the client didn't know what to look for beforehand." },
  { icon: <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />, text: "A bad logo costs you twice: once to create, once to fix. The average re-design runs $300–$800 extra." },
  { icon: <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />, text: "These three designers have handled 48,000+ verified client orders. We tell you exactly who to hire for your situation." },
];

const whySection = [
  { n: "01", label: "Review Volume & Authenticity", detail: "We verify review count, recency, and flag suspicious clustering. Only designers with consistent, long-term track records make the cut." },
  { n: "02", label: "Portfolio Quality & Range", detail: "Originality, typographic precision, scalability across sizes, and whether the work holds up across different media and formats." },
  { n: "03", label: "Communication & Reliability", detail: "Response rate, on-time delivery %, and dispute history. We target 98%+ completion rates and sub-2-hour average response times." },
  { n: "04", label: "Pricing Transparency", detail: "We document exactly what each tier includes — concepts, revisions, file formats, turnaround time, and what's hidden in the fine print." },
  { n: "05", label: "Real Revision Behavior", detail: "We study how each designer actually handles feedback rounds in verified reviews, not just what the listing claims to offer." },
  { n: "06", label: "Professional File Delivery", detail: "Complete work includes AI/EPS, SVG, PDF, and transparent PNG. We verify this is standard practice, not an upsell." },
];

const testimonials = [
  { name: "timelapsejay", country: "UK", designer: "Alestra Agency", price: "€400–€600", stars: 5, quote: "The work was done over about three weeks. Being able to do it in installments made it way easier. Exceptional branding results that far exceeded what a local agency quoted me." },
  { name: "johnc7642", country: "US", designer: "Alestra Agency", price: "€100–€200", stars: 5, quote: "Exceptional experience! The team delivered a sophisticated, high-tier visual identity that perfectly captures the 'Corporate Fortress' aesthetic we required. Completed in just 2 days." },
  { name: "strongkate", country: "UK", designer: "Juhi (Explorance)", price: "Up to €50", stars: 5, quote: "Juhi designed exactly to my brief but also produced a second logo demonstrating a more refined version that exceeded my expectations. Remarkable value." },
  { name: "hj_wolfe", country: "US", designer: "Juhi (Explorance)", price: "€200–€400", stars: 5, quote: "The Explorance team exceeded my expectations in their strategic thinking and execution. Their responsiveness was superb throughout a complex multi-deliverable project." },
  { name: "musematter", country: "US", designer: "Valeriia T", price: "€100–€200", stars: 5, quote: "Valeriia went beyond my wildest imagination. I placed my order with a loose idea — what I got back was extraordinary. The detail, the professionalism, the creativity." },
  { name: "heyheyshenay", country: "US", designer: "Valeriia T", price: "Up to €50", stars: 5, quote: "Valeriia is amazing at her craft! She created the original logo for my business a few years ago and I came back for revisions. She was patient and delivered beautifully." },
];

const faqs = [
  { q: "Who is the best logo designer on Fiverr right now?", a: "Based on Eonati's independent research, Alestra Agency (31,034 reviews, 4.9★), Juhi / Explorance (9,319 reviews, 4.8★), and Valeriia T (8,045 reviews, 4.8★) are the top-performing Fiverr Pro logo designers. Each excels in a different niche — see our comparison for the exact match to your brand." },
  { q: "How much does a professional logo design cost on Fiverr?", a: "Entry packages start at $41 (Juhi) to $175 (Valeriia). Full brand identity packages with style guides run $300–$500+. Alestra Agency handles enterprise-tier work from $75 to $500+. For most small businesses, the $100–$250 range from a Fiverr Pro delivers professional, scalable results." },
  { q: "What is Fiverr Pro and why does it matter?", a: "Fiverr Pro is a manually vetted tier — fewer than 1% of sellers qualify. Pro sellers are reviewed for portfolio quality, communication history, and delivery consistency. For branding work where quality directly affects your revenue, hiring Pro dramatically reduces risk." },
  { q: "What files should I receive when my logo is delivered?", a: "A complete professional logo package includes: AI or EPS (vector source), SVG (web), PDF (print), PNG with transparent background, and JPG. Plus a brand guidelines doc with exact color codes (HEX, RGB, CMYK) and typography specs. Never accept PNG-only delivery." },
  { q: "Is it safe to pay a logo designer on Fiverr?", a: "Yes — Fiverr holds payment in escrow until you approve delivery. If a designer fails to deliver or the work doesn't match the agreed scope, you can dispute for a full refund. The designers Eonati recommends all have near-zero dispute rates across tens of thousands of orders." },
  { q: "How do I know which designer is right for my brand?", a: "Use our comparison page. Alestra is best for corporate, B2B, and enterprise brands needing a full agency. Juhi is best for tech, startups, and minimalist brands with a tight budget. Valeriia is best for lifestyle, luxury, feminine, and versatile brand directions." },
];

export default function Home() {
  const designers = [
    {
      ...DESIGNERS.alestra,
      slug: "alestra",
      verdict: "Top Pick",
      verdictColor: "bg-accent text-accent-foreground",
      badgeColor: "bg-primary text-primary-foreground",
      summary: "A 45-person agency with 31,034 verified reviews, trusted by Rabobank and Panasonic. Alestra delivers enterprise-grade branding — logos, pitch decks, and full identity systems — with an average 1-hour response time.",
      highlight: "Most trusted for enterprise",
    },
    {
      ...DESIGNERS.juhi,
      slug: "juhi",
      verdict: "Best Value",
      verdictColor: "bg-chart-3 text-white",
      badgeColor: "bg-primary text-primary-foreground",
      summary: "Fiverr Pro-vetted minimalist specialist with 9,319 reviews. Starting at just $41 with same-day delivery options — the strongest quality-to-price ratio of any Fiverr Pro we reviewed.",
      highlight: "From $41 · 1-day delivery",
    },
    {
      ...DESIGNERS.valeriia,
      slug: "valeriia",
      verdict: "Most Versatile",
      verdictColor: "bg-chart-5 text-white",
      badgeColor: "bg-chart-4 text-foreground",
      summary: "Ukrainian designer with 10+ years of experience and 8,045+ Pro reviews. Valeriia's genuine style range — from minimal to ornate to luxury — makes her the right call when you're still defining your direction.",
      highlight: "10+ years · Luxury to minimal",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Best Fiverr Logo Designers — Honest Reviews & Rankings | Eonati</title>
        <meta name="description" content="Eonati independently reviewed 48,000+ orders across Fiverr's top Pro logo designers. See who ranks #1, who offers the best value, and which designer is right for your brand. Free comparison guide." />
        <link rel="canonical" href={`${DOMAIN}/`} />
        <meta property="og:title" content="Best Fiverr Logo Designers — Honest Reviews | Eonati" />
        <meta property="og:description" content="48,000+ verified reviews analyzed. Eonati tells you exactly which Fiverr Pro designer fits your brand, budget, and timeline." />
        <meta property="og:image" content={`${DOMAIN}/opengraph.jpg`} />
        <meta property="og:url" content={`${DOMAIN}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Fiverr Logo Designers — Honest Reviews | Eonati" />
        <meta name="twitter:description" content="48,000+ orders analyzed. Find your perfect Fiverr Pro designer." />
        <meta name="twitter:image" content={`${DOMAIN}/opengraph.jpg`} />
        <meta name="keywords" content="best fiverr logo designer, fiverr pro logo design review, freelance logo designer hire, alestra fiverr, juhi explorance fiverr, valeriia fiverr, affordable logo design" />
      </Helmet>

      {/* URGENCY BAR */}
      <div className="bg-primary/10 border-b border-primary/20 py-2.5 px-4 text-center text-sm font-medium text-primary" role="banner">
        48,000+ verified orders reviewed — Eonati's independent research, updated regularly
      </div>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground py-20 px-4" aria-label="Hero">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-6">
              <CheckCircle className="w-3.5 h-3.5" /> Independent Research &middot; No Paid Placements
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }}
          >
            Best Freelance Logo Designers for Hire
          </motion.h1>

          <motion.p
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }}
          >
            We spent 40+ hours reviewing Fiverr's top Pro logo designers. Here's exactly who to hire — and why.
          </motion.p>

          <motion.p
            className="text-sm text-primary-foreground/60 mb-8 italic"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24, duration: 0.5 }}
          >
            Read this before you hire anyone.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-5 mb-10 text-sm text-primary-foreground/75"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28, duration: 0.5 }}
          >
            {[
              { label: "Alestra", reviews: "31k+ reviews", stars: 4.9 },
              { label: "Juhi", reviews: "9k+ reviews", stars: 4.8 },
              { label: "Valeriia", reviews: "8k+ reviews", stars: 4.8 },
            ].map((d, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-primary-foreground/10 rounded-full px-3 py-1">
                <Star className="w-3.5 h-3.5 fill-chart-4 text-chart-4" />
                <strong className="text-primary-foreground">{d.label}</strong>
                <span>{d.reviews} · {d.stars}★</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33, duration: 0.5 }}
          >
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
              data-testid="hero-cta-compare"
            >
              Find My Designer <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/guide/how-to-hire-a-logo-designer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-foreground/15 text-primary-foreground font-semibold hover:bg-primary-foreground/25 transition-colors"
              data-testid="hero-cta-guide"
            >
              Free Hiring Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-5 bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Shield className="w-4 h-4 text-primary" />, stat: "40+ hrs", label: "of research" },
              { icon: <Star className="w-4 h-4 text-chart-4 fill-chart-4" />, stat: "48,000+", label: "reviews analyzed" },
              { icon: <CheckCircle className="w-4 h-4 text-green-600" />, stat: "3 verified", label: "Fiverr Pro picks" },
              { icon: <Clock className="w-4 h-4 text-primary" />, stat: "No paid", label: "placements ever" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-2">
                {item.icon}
                <span className="font-display font-bold text-foreground text-lg">{item.stat}</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 HOOKS */}
      <section className="py-8 px-4 bg-accent/5 border-b border-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {hooks.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-5 bg-card rounded-xl border border-border shadow-sm">
                {item.icon}
                <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGNER CARDS */}
      <section className="py-16 px-4" aria-labelledby="featured-designers">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 id="featured-designers" className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Eonati's Top-Rated Logo Designers
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Ranked by verified review volume, quality consistency, and delivery reliability. No sponsored picks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {designers.map((d, i) => (
              <motion.article
                key={d.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow relative flex flex-col"
                data-testid={`designer-card-${d.slug}`}
              >
                {i === 0 && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary" />}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${d.badgeColor} mb-2`}>
                        {d.badge}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground">{d.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{d.title}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold shrink-0 ${d.verdictColor}`}>
                      {d.verdict}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className={`w-4 h-4 ${si < Math.floor(d.rating) ? "fill-chart-4 text-chart-4" : "fill-muted text-muted"}`} />
                    ))}
                    <span className="text-sm font-bold text-foreground ml-1">{d.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{d.reviews} verified reviews</p>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-semibold mb-4 w-fit">
                    <Zap className="w-3 h-3" /> {d.highlight}
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">{d.summary}</p>

                  <div className="space-y-2 mb-5 bg-muted/40 rounded-lg p-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price range</span>
                      <span className="font-medium text-foreground">{d.priceRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Starts at</span>
                      <span className="font-bold text-accent">{d.priceEntry}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-medium text-foreground">{d.delivery}</span>
                    </div>
                    {d.employees && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Team</span>
                        <span className="font-medium text-foreground">{d.employees} employees</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link href={d.href} className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
                      Full Review
                    </Link>
                    <a
                      href={d.affiliate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                      data-testid={`card-hire-${d.slug}`}
                    >
                      Hire Now
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE ANCHOR SECTION */}
      <section className="py-10 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">The Real Cost Comparison</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Traditional design agencies charge $2,000–$15,000 for a logo project. These three Fiverr Pro designers deliver enterprise-quality work starting at $41.</p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "Agency average", price: "$5,000–$15,000", note: "Branding firm", color: "bg-red-900/30 border-red-500/30" },
              { label: "Freelancer (unvetted)", price: "$20–$150", note: "Inconsistent quality", color: "bg-yellow-900/30 border-yellow-500/30" },
              { label: "Fiverr Pro (our picks)", price: "$41–$500", note: "Enterprise quality", color: "bg-green-900/30 border-green-500/30" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border p-5 ${item.color}`}>
                <p className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-display font-bold text-2xl text-primary-foreground mb-1">{item.price}</p>
                <p className="text-xs text-primary-foreground/70">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE REVIEW */}
      <section className="py-14 px-4" aria-labelledby="methodology">
        <div className="max-w-5xl mx-auto">
          <h2 id="methodology" className="font-display text-3xl font-bold text-foreground mb-3 text-center">
            How Eonati Chooses Who to Recommend
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Every designer passes a 6-point review. No paid placements. No sponsored rankings. Ever.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whySection.map((item, i) => (
              <motion.div
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-5"
              >
                <span className="text-xs font-bold text-primary/40 font-mono">{item.n}</span>
                <h3 className="font-display font-semibold text-foreground mt-1 mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 px-4 bg-muted/40 border-t border-border" aria-labelledby="testimonials">
        <div className="max-w-5xl mx-auto">
          <h2 id="testimonials" className="font-display text-3xl font-bold text-foreground mb-3 text-center">
            Real Clients. Real Results.
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
            Every quote below is from a verified Fiverr buyer. No edits, no embellishments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-chart-4 text-chart-4" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed italic flex-1 mb-5">"{t.quote}"</p>
                <footer className="not-italic border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name} <span className="font-normal text-muted-foreground">· {t.country}</span></p>
                  <p className="text-xs text-muted-foreground mt-0.5">Hired {t.designer} · {t.price}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-t border-border" aria-labelledby="faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq" className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground" aria-label="Final CTA">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-semibold uppercase tracking-wide">
            <Users className="w-3.5 h-3.5" /> 48,000+ orders — verified
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Not Sure Which Designer Is Right?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">
            Our comparison page breaks down all three side by side — price, style, speed, and the exact scenario each is best for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/compare" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-md">
              Compare All Three <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/guide/how-to-hire-a-logo-designer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-foreground/15 text-primary-foreground font-semibold hover:bg-primary-foreground/25 transition-colors">
              Free Hiring Guide
            </Link>
          </div>
          <p className="text-xs text-primary-foreground/50">
            Curated by Eonati &middot; Independent research &middot; Affiliate links disclosed
          </p>
        </div>
      </section>
    </Layout>
  );
}
