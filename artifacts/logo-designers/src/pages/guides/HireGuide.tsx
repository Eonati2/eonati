import { Helmet } from "react-helmet-async";
import { CheckCircle, AlertTriangle, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { AFFILIATE } from "@/lib/affiliates";

const DOMAIN = "https://logoverdicts.replit.app";
const PAGE_URL = `${DOMAIN}/guide/how-to-hire-a-logo-designer`;
const OG_IMAGE = `${DOMAIN}/opengraph.jpg`;

function PinterestButton() {
  const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(PAGE_URL)}&media=${encodeURIComponent(OG_IMAGE)}&description=${encodeURIComponent("How to Hire a Freelance Logo Designer — The Complete Guide. What to look for, red flags, file formats, and pricing. By Eonati.")}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E60023] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
      Save to Pinterest
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const redFlags = [
  "No vector files in their portfolio samples (PNG-only delivery is a major warning sign)",
  "Review count under 50 with no clear history — too easy to fake at low volume",
  "Generic logos that could belong to any industry — shows templated, not custom work",
  "No revision policy stated — sets up disputes after delivery",
  "Response time over 24 hours during initial inquiry — predicts delivery communication",
  "Portfolio is visually inconsistent in style without explanation — may be stolen or AI-generated",
  "No brand guidelines offered at any price tier — incomplete professional delivery",
  "Unusually low pricing combined with 5-star reviews only — often indicates fake reviews",
];

const briefTips = [
  { label: "Industry & competitors", detail: "Name 3 competitors and note what you like or dislike about each of their logos. This anchors the designer quickly." },
  { label: "Target audience", detail: "Who buys from you? Age, income, values. A B2B tech logo looks completely different from a luxury wellness brand." },
  { label: "Style direction", detail: "Use references. Pull 3–5 logos you admire — even from outside your industry. 'Modern and minimal' means different things to different designers." },
  { label: "Color preferences", detail: "Share what you like, but also what you'd never use. Both signals are valuable." },
  { label: "Name & tagline", detail: "Confirm exact spelling and capitalization. Include any alternate short-form names the logo might need to accommodate." },
  { label: "Primary use case", detail: "Where will this logo live first — website, app icon, product packaging, signage? Each has different technical requirements." },
];

const fileFormats = [
  { format: "AI / EPS", use: "Master vector source file. Required for print, signage, merchandise.", critical: true },
  { format: "SVG", use: "Web use. Scales perfectly at any size. Required for modern sites.", critical: true },
  { format: "PDF", use: "Print-ready format. Printers and vendors require this.", critical: true },
  { format: "PNG (transparent)", use: "Presentations, documents, digital overlays.", critical: true },
  { format: "JPG", use: "Email signatures, quick previews, social profiles.", critical: false },
  { format: "Brand Guidelines (PDF)", use: "Color codes (HEX/RGB/CMYK), typography rules, spacing specs, usage rules.", critical: true },
];

const revisionTips = [
  "Batch your feedback — don't send 10 separate messages with one change each",
  "Use directional language: 'Make the icon 20% smaller' beats 'the icon feels big'",
  "Separate deal-breaker changes from nice-to-haves in your feedback note",
  "Reference the original brief — this keeps both parties aligned on agreed scope",
  "Confirm the changes in writing before the next revision round begins",
];

export default function HireGuide() {
  return (
    <Layout>
      <Helmet>
        <title>How to Hire a Freelance Logo Designer — Complete Guide | Eonati</title>
        <meta name="description" content="Read this before hiring any logo designer. Eonati's complete guide covers red flags, brief writing, file formats, revision best practices, and pricing. Avoid the mistakes that cost you twice." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="How to Hire a Freelance Logo Designer — Complete Guide | Eonati" />
        <meta property="og:description" content="Red flags, brief writing, file formats, pricing, and revision best practices. Everything you need before you hire." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Hire a Freelance Logo Designer | Eonati" />
        <meta name="twitter:description" content="Red flags, brief writing, file formats, pricing — everything you need before you hire." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="keywords" content="how to hire a logo designer, freelance logo designer guide, fiverr logo designer tips, logo design brief, logo file formats, red flags logo designer" />
      </Helmet>

      <section className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <li><a href="/" className="hover:text-primary-foreground/90">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground">Hiring Guide</li>
            </ol>
          </nav>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-foreground/20 text-primary-foreground mb-4">
            Complete Guide &middot; By Eonati
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            How to Hire a Freelance Logo Designer
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-4">
            Most logo projects go wrong before a single pixel is drawn. This guide covers what to look for, what to avoid, and exactly how to brief a designer so you get it right the first time.
          </p>
          <p className="text-sm text-primary-foreground/60 italic">Read this before you hire anyone.</p>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="bg-muted/80 border-b border-border py-3 px-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm font-medium text-foreground">Ready to hire? Eonati recommends these three Fiverr Pro designers.</p>
        <div className="flex gap-2 shrink-0">
          <a href="/compare" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Compare All</a>
          <a href={AFFILIATE.alestra} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90">
            See #1 Pick <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-3 mb-10">
          <PinterestButton />
          <a href="/compare" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
            Compare Top Designers <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* TOC */}
        <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-12" aria-label="Table of contents">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">In this guide</p>
          <ol className="space-y-2">
            {[
              ["#why-it-matters", "Why most logo projects fail"],
              ["#red-flags", "8 red flags to avoid"],
              ["#how-to-brief", "How to write a great brief"],
              ["#file-formats", "File formats you must receive"],
              ["#revisions", "How to handle revisions"],
              ["#pricing", "Realistic pricing expectations"],
              ["#recommendations", "Eonati's top recommendations"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-sm text-primary hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <motion.section id="why-it-matters" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why Most Logo Projects Fail</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The most common reason a logo project ends in frustration isn't a bad designer — it's a bad brief. Designers work with what you give them. If the inputs are vague, the outputs will be vague. And a second attempt costs you time and money you've already spent.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The second most common reason: hiring based on price alone. The difference between a $25 logo and a $150 logo isn't always skill — it's often professionalism, communication, and file delivery standards. A $25 logo that requires a $300 redesign in 18 months costs more than a $200 logo done right.
          </p>
          <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5 mb-4">
            <p className="text-sm font-semibold text-accent mb-1">Eonati's finding</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              After analyzing 48,000+ verified orders across Fiverr's top Pro designers, the single biggest predictor of client satisfaction isn't price tier — it's how clearly the client communicated their goals in the brief.
            </p>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            This guide is structured around three things: what to look for before hiring, how to brief effectively, and what to insist on at delivery. Follow it and the odds of a successful project climb dramatically.
          </p>
        </motion.section>

        <motion.section id="red-flags" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">8 Red Flags to Avoid</h2>
          <p className="text-muted-foreground mb-5">Walk away from any designer showing more than two of these.</p>
          <div className="space-y-3">
            {redFlags.map((flag, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 leading-relaxed">{flag}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="how-to-brief" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">How to Write a Great Brief</h2>
          <p className="text-muted-foreground mb-6">A strong brief takes 20 minutes to write and saves you 3 revision rounds. Cover all six of these.</p>
          <div className="space-y-4">
            {briefTips.map((tip, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{tip.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-sm font-semibold text-primary mb-2">Pro tip</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Send your brief before you order. A designer's speed and clarity of response to your pre-order brief is one of the best predictors of how they'll communicate throughout the project.
            </p>
          </div>
        </motion.section>

        <motion.section id="file-formats" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">File Formats You Must Receive</h2>
          <p className="text-muted-foreground mb-5">Never accept a logo delivery without these formats. PNG-only delivery is not a complete professional package.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left py-3 px-4 font-semibold text-foreground rounded-tl-lg">Format</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Use</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground rounded-tr-lg">Required?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fileFormats.map((f, i) => (
                  <tr key={i} className={f.critical ? "" : "opacity-70"}>
                    <td className="py-3 px-4 font-mono font-semibold text-primary">{f.format}</td>
                    <td className="py-3 px-4 text-muted-foreground">{f.use}</td>
                    <td className="py-3 px-4">
                      {f.critical
                        ? <span className="inline-flex items-center gap-1 text-green-700 font-semibold"><CheckCircle className="w-3.5 h-3.5" /> Must have</span>
                        : <span className="text-muted-foreground">Nice to have</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section id="revisions" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">How to Handle Revisions Effectively</h2>
          <p className="text-muted-foreground mb-5">Most revision friction comes from communication habits, not designer skill.</p>
          <div className="space-y-3">
            {revisionTips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="pricing" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Realistic Pricing Expectations</h2>
          <div className="space-y-4">
            {[
              { range: "$20–$75", label: "Entry tier", note: "Basic logo, limited concepts, minimal revision rounds. Viable for side projects or short-term needs. Higher risk of low-quality delivery." },
              { range: "$75–$250", label: "Mid tier (recommended for most businesses)", note: "3–5 concepts, full vector file package, 2–3 revision rounds, brand color and font specs. This is where Fiverr Pro quality starts." },
              { range: "$250–$500", label: "Premium tier", note: "Full brand identity: logo + variations + brand guidelines + stationery. All file formats, unlimited revisions, style guide. This is agency-equivalent output." },
              { range: "$500+", label: "Enterprise tier", note: "Multi-channel brand systems, pitch deck integration, website design alignment. Alestra Agency handles this tier with a 45-person team." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display font-bold text-accent text-lg">{item.range}</span>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="recommendations" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Eonati's Top Recommendations</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            After 40+ hours of research across 48,000+ verified orders, these are the three Fiverr Pro designers Eonati recommends without reservation. Each has been selected for a different buyer profile.
          </p>
          <div className="space-y-4">
            {[
              { name: "Alestra Agency", href: "/reviews/alestra", affiliate: AFFILIATE.alestra, rating: 4.9, reviews: "31,034", badge: "Top Pick", note: "Best for: Corporate, B2B, enterprise, or any project that needs logo + pitch deck + website from one accountable team. Trusted by Rabobank and Panasonic.", price: "From $75" },
              { name: "Juhi (Explorance)", href: "/reviews/juhi", affiliate: AFFILIATE.juhi, rating: 4.8, reviews: "9,319", badge: "Best Value", note: "Best for: Tech startups, DTC brands, and minimalist identities. Strongest quality-to-price ratio on the platform. Same-day delivery available.", price: "From $41" },
              { name: "Valeriia T", href: "/reviews/valeriia", affiliate: AFFILIATE.valeriia, rating: 4.8, reviews: "8,045", badge: "Most Versatile", note: "Best for: Lifestyle, wellness, beauty, feminine, and luxury brands. 10+ years experience. Genuine style range across minimal, ornate, and everything between.", price: "From $175" },
            ].map((d, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-display font-bold text-foreground">{d.name}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent">{d.badge}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, si) => <Star key={si} className={`w-3.5 h-3.5 ${si < Math.floor(d.rating) ? "fill-chart-4 text-chart-4" : "fill-muted text-muted"}`} />)}
                    <span className="text-xs text-muted-foreground ml-1">{d.rating} · {d.reviews} reviews · {d.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.note}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a href={d.href} className="inline-flex items-center px-3 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors">Review</a>
                  <a href={d.affiliate} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
                    Hire <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Guide written by Eonati based on independent research across 48,000+ verified Fiverr orders. No designers paid to be included.
          </p>
          <PinterestButton />
        </div>
      </article>
    </Layout>
  );
}
