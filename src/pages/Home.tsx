import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Ensure images are generated before importing or using generic fallbacks if not
import heroPortrait from "@/assets/hero-portrait.png";
import authorityMockup from "@/assets/authority-mockup.png";

// Canvas Particle Background
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; opacity: number; vx: number; vy: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = 80;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * -0.5 - 0.2, // move upwards slowly
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resize);
    resize();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
}

const CountUp = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = end / (duration * 60);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(interval);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const QuoteRotator = () => {
  const quotes = [
    "\"Your brand is what people say about you when you're not in the room.\" — Jeff Bezos",
    "\"Design is not just what it looks like. Design is how it works.\" — Steve Jobs",
    "\"A brand is no longer what we tell the consumer it is — it is what consumers tell each other it is.\" — Scott Cook"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="relative h-24 flex items-center justify-center mt-12 text-center text-xl text-primary font-serif italic">
      {quotes.map((quote, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 10 }}
          transition={{ duration: 0.8 }}
          className="absolute"
        >
          {quote}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.15)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="max-w-3xl"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-8">
              <div className="w-8 h-[1px] bg-primary"></div>
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">Eonati Intelligence</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight mb-8 font-serif"
            >
              Build A Brand <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FFD700]">People Instantly Trust.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed"
            >
              Most businesses lose trust before customers even read a word. Premium branding changes perception instantly.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a href="#experts" className="bg-primary text-black px-8 py-4 rounded-sm font-semibold hover:bg-[#FFD700] transition-colors duration-300">
                Upgrade Your Brand
              </a>
              <a href="#transformation" className="border border-primary/50 text-primary px-8 py-4 rounded-sm font-medium hover:bg-primary/10 transition-colors duration-300">
                Transform Your Visual Authority
              </a>
              <a href="#experts" className="text-foreground flex items-center gap-2 hover:text-primary transition-colors group text-sm font-medium">
                Explore Premium Branding Experts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10 rounded-full"></div>
            <img src={heroPortrait} alt="Luxury Entrepreneur" className="rounded-lg border border-white/5 object-cover w-full h-[600px] shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - TRUST PSYCHOLOGY */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Customers Distrust Businesses Instantly</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Visual Trust Gap",
                desc: "Customers don't read your copy if your design looks cheap. 94% of first impressions are purely design-related. If it looks like a template, they assume your service is generic too.",
                stat: "94",
                suffix: "%",
                statDesc: "of first impressions are design-based"
              },
              {
                title: "Premium = Trustworthy",
                desc: "High-end aesthetics directly correlate with perceived value. Customers are willing to pay significantly more for identical services if the visual identity signals authority and precision.",
                stat: "75",
                suffix: "%",
                statDesc: "of consumers judge credibility by visual design"
              },
              {
                title: "Branding Is Psychology",
                desc: "Visual identity shapes buying decisions before a single logical argument is made. Color, spacing, and typography bypass the rational brain and speak directly to emotion and status.",
                stat: "3",
                suffix: "s",
                statDesc: "average time to form a brand opinion"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card/50 backdrop-blur-xl border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="text-5xl font-serif text-primary mb-4">
                  <CountUp end={parseInt(card.stat)} suffix={card.suffix} />
                </div>
                <p className="text-sm text-primary mb-6 uppercase tracking-wider font-semibold">{card.statDesc}</p>
                <h3 className="text-2xl font-serif mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - STARTUP TRANSFORMATION */}
      <section id="transformation" className="py-32 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">From Ignored Startup to Premium Brand Perception.</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                before: "Generic Logo",
                after: "Bespoke Logomark",
                text: "Stop blending in with Canva templates. A bespoke identity anchors your brand in the minds of your most valuable customers."
              },
              {
                before: "Mismatched Colors",
                after: "Cohesive Palette",
                text: "Inconsistent visuals destroy trust. A unified aesthetic system signals that your business operates with precision."
              },
              {
                before: "Standard Typography",
                after: "Editorial Type",
                text: "Typography is voice. Upgrading from standard sans-serif to editorial pairings instantly elevates your perceived market position."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-white/10 flex">
                  <div className="w-1/2 bg-[#111] flex items-center justify-center border-r border-white/5 relative">
                    <span className="absolute top-3 left-3 text-[10px] text-white/30 tracking-widest uppercase">Before</span>
                    <span className="text-white/40 font-sans text-sm">{item.before}</span>
                  </div>
                  <div className="w-1/2 bg-[#1a1710] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
                    <span className="absolute top-3 right-3 text-[10px] text-primary tracking-widest uppercase">After</span>
                    <span className="text-primary font-serif text-lg z-10">{item.after}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY PREMIUM BRANDS WIN */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif">The Authority Gap: Why Premium Brands Win Every Time</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Luxury Perception Psychology", desc: "Customers pay 3x more when branding signals authority." },
              { title: "Trust Conversion", desc: "Consistent visual identity increases purchase intent by 68%." },
              { title: "Emotional Branding", desc: "Premium aesthetics trigger desire before rational thought." },
              { title: "Visual Authority", desc: "CEOs with professional brand identity close deals 40% faster." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-card border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)] transition-all duration-300 group"
              >
                <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <QuoteRotator />
        </div>
      </section>

      {/* SECTION 5 - FEATURED EXPERTS */}
      <section id="experts" className="py-32 bg-[#050505] relative border-y border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Curated Branding Professionals We Trust</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">Vetted elite specialists in startup visual identity and luxury brand transformation.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Expert 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl flex flex-col relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">Alestra Agency</h3>
                  <p className="text-sm text-primary">Enterprise Branding Specialists</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 text-xs rounded-full border border-primary/20 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary" /> Top Rated
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                Trusted by thousands of global businesses for enterprise-grade branding systems, cinematic AI video production, and complete visual identity transformation.
              </p>
              <div className="mb-8">
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Trust Signals</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">31,000+ Reviews</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">4.9 Rating</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">Enterprise Agency</span>
                </div>
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Specialties</div>
                <div className="flex flex-wrap gap-2 text-xs text-primary/80">
                  <span>Branding Systems</span> • <span>Websites</span> • <span>AI Video</span>
                </div>
              </div>
              <a 
                href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fgo.fiverr.com%252Fvisit%252F%253Fbta%253D1139651%2526brand%253Dfp%2526landingPage%253Dhttps%2525253A%2525252F%2525252Fgo.fiverr.com%2525252Fvisit%2525252F%2525253Fbta%2525253D1139651%25252526brand%2525253Dfp%25252526landingPage%2525253Dhttps%25252525253A%25252525252F%25252525252Fpro.fiverr.com%25252525252Fagencies%25252525252Falestra" 
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-4 text-center bg-primary text-black font-semibold rounded-sm hover:bg-[#FFD700] transition-colors"
              >
                Explore Enterprise Branding
              </a>
            </motion.div>

            {/* Expert 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0f0e0d] border border-primary/20 p-8 rounded-2xl flex flex-col relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">Juhi / Explorance</h3>
                  <p className="text-sm text-primary">Modern Startup Branding</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 text-xs rounded-full border border-primary/20 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary" /> Pro
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                The go-to specialist for startups that want clean, minimal, and highly polished brand systems. 9,000+ satisfied clients and counting.
              </p>
              <div className="mb-8">
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Trust Signals</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">9,000+ Reviews</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">Fiverr Pro</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">Startup Identity</span>
                </div>
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Specialties</div>
                <div className="flex flex-wrap gap-2 text-xs text-primary/80">
                  <span>Minimalist Branding</span> • <span>Logo Systems</span>
                </div>
              </div>
              <a 
                href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Ffreelancers%252Fexplorance%253Futm_source%253D1139651%2526utm_medium%253Dcx_affiliate" 
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-4 text-center bg-transparent border border-primary text-primary font-semibold rounded-sm hover:bg-primary/10 transition-colors"
              >
                Explore Modern Branding
              </a>
            </motion.div>

            {/* Expert 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl flex flex-col relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-primary transition-colors">Valeriia T</h3>
                  <p className="text-sm text-primary">Luxury Visual Identity</p>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 text-xs rounded-full border border-primary/20 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary" /> Pro
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                Specializing in elegant, high-end brand systems for premium businesses. From luxury packaging to complete visual identity.
              </p>
              <div className="mb-8">
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Trust Signals</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">8,000+ Reviews</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">Fiverr Pro</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/70">Luxury Packaging</span>
                </div>
                <div className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Specialties</div>
                <div className="flex flex-wrap gap-2 text-xs text-primary/80">
                  <span>Luxury Branding</span> • <span>Packaging</span> • <span>Websites</span>
                </div>
              </div>
              <a 
                href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Ffreelancers%252Fvaleriiaty" 
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-4 text-center bg-transparent border border-white/20 text-white font-semibold rounded-sm hover:border-primary hover:text-primary transition-colors"
              >
                Explore Luxury Branding
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - VISUAL AUTHORITY */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full"></div>
            <img src={authorityMockup} alt="Luxury Brand Identity Mockup" className="rounded-lg border border-white/10 shadow-2xl relative z-10 w-full" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12">How Visual Authority Changes Everything</h2>
            
            <div className="space-y-8">
              {[
                "Perception is reality. Your brand is your first sales rep.",
                "Premium branding is not an expense. It's your highest-ROI investment.",
                "Every pixel communicates status, trust, and authority — or the lack of it."
              ].map((text, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-xl md:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors mb-2">{text}</p>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
                    className="h-[1px] bg-primary origin-left w-12 group-hover:w-full transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - SOCIAL PROOF */}
      <section className="py-32 bg-[#030303] relative border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Trusted by Premium Entrepreneurs Worldwide</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { name: "Marcus Reinholt", title: "CEO", company: "Reinholt Capital", quote: "Our client close rate doubled after our rebrand." },
              { name: "Sophia Adeyemi", title: "Founder", company: "Auric Studio", quote: "The transformation was immediate. Clients perceived us as 3x more premium." },
              { name: "James Wetherton", title: "Serial Entrepreneur", company: "", quote: "Branding is the single highest-leverage investment I've ever made." },
              { name: "Priya Nair", title: "Founder", company: "Lumis Collective", quote: "After our visual identity upgrade, we raised our prices 40% with zero pushback." },
              { name: "Rafael Montoya", title: "Brand Director", company: "", quote: "Eonati's curated experts understood our vision immediately." },
              { name: "Celeste Vance", title: "Founder", company: "Luxury Retail", quote: "Worth every penny. Frankly, it's the best business decision we've ever made." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-card border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border border-primary/30">
                    <AvatarFallback className="bg-[#111] text-primary font-serif">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.title} {testimonial.company && `• ${testimonial.company}`}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-white/10">
            {[
              { val: 50000, label: "Businesses Transformed", suffix: "+" },
              { val: 4.9, label: "Average Expert Rating", suffix: " / 5", float: true },
              { val: 2.4, label: "Revenue Influenced by Our Partners' Work", prefix: "$", suffix: "B+", float: true }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-serif text-primary mb-2">
                  {stat.prefix}<CountUp end={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - CTA CONVERSION */}
      <section className="py-40 relative bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.2)_0%,rgba(0,0,0,1)_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white">Your Brand Is Speaking Right Now. <span className="text-primary italic">What Is It Saying?</span></h2>
          <p className="text-xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Every moment without premium branding is lost authority, lost trust, and lost revenue. The best time to upgrade was yesterday. The second best time is now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fgo.fiverr.com%252Fvisit%252F%253Fbta%253D1139651%2526brand%253Dfp%2526landingPage%253Dhttps%2525253A%2525252F%2525252Fgo.fiverr.com%2525252Fvisit%2525252F%2525253Fbta%2525253D1139651%25252526brand%2525253Dfp%25252526landingPage%2525253Dhttps%25252525253A%25252525252F%25252525252Fpro.fiverr.com%25252525252Fagencies%25252525252Falestra"
              target="_blank" rel="noopener noreferrer"
              className="bg-primary text-black px-10 py-5 rounded-sm font-semibold text-lg hover:bg-[#FFD700] transition-colors duration-300 w-full sm:w-auto shadow-[0_0_40px_rgba(201,168,76,0.3)]"
            >
              Explore Premium Branding Experts
            </a>
            <a 
              href="https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Ffreelancers%252Fexplorance%253Futm_source%253D1139651%2526utm_medium%253Dcx_affiliate"
              target="_blank" rel="noopener noreferrer"
              className="border border-primary text-primary px-10 py-5 rounded-sm font-semibold text-lg hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto"
            >
              See Trusted Branding Professionals
            </a>
          </div>
          <p className="text-sm text-primary/60 tracking-wider uppercase font-semibold">Join 50,000+ entrepreneurs who have already upgraded their visual authority.</p>
        </div>
      </section>

      {/* SECTION 9 - FAQ */}
      <section className="py-32 bg-[#020202]">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">Questions About Premium Branding</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What makes premium branding different from regular branding?", a: "Premium branding relies heavily on the psychology of visual authority. It's not just about picking pretty colors; it's about engineering trust through precise typography, intentional negative space, and cohesive visual systems that signal high value to the subconscious mind." },
              { q: "How long does a professional rebrand take?", a: "With Fiverr Pro vetted experts, a comprehensive visual identity system typically takes 2-4 weeks, depending on complexity. This includes strategy, conceptualization, and asset delivery." },
              { q: "How much does professional branding cost?", a: "Investment varies by scope. A minimalist logomark might range from $500-$1,500, while a full enterprise brand system (including guidelines, packaging, and digital assets) can range from $3,000 to $10,000+ with top-tier professionals." },
              { q: "Will better branding actually increase my revenue?", a: "Yes. Studies show that premium visual aesthetics increase perceived value, allowing businesses to command higher prices. Furthermore, consistent brand presentation across all channels increases purchase intent by up to 68%." },
              { q: "How do I know which branding expert is right for my business?", a: "Review their portfolios for aesthetic alignment. If you're a luxury physical product, look for packaging experts. If you're a SaaS, look for minimalist digital identity specialists. We've curated top experts across different styles above." },
              { q: "What should I expect from a Fiverr Pro designer?", a: "Fiverr Pro designers represent the top 1% of talent on the platform. They are hand-vetted for quality, communication, and professionalism. You can expect agency-level deliverables without the massive agency overhead." },
              { q: "Is branding important for early-stage startups?", a: "Crucially important. In early stages, perception is everything. Investors and early customers are betting on your potential. A premium brand signals that you are a serious, legitimate operation, directly impacting your ability to raise funds and close early deals." },
              { q: "How is Eonati different from just going to Fiverr directly?", a: "We remove the noise. The internet is flooded with mediocre designers. Eonati acts as a luxury curation layer, highlighting only the absolute top-tier, vetted professionals capable of delivering true visual authority." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors py-6">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 10 - FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-primary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FFD700] mb-4">Eonati</div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The luxury branding intelligence platform for serious entrepreneurs.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit">Contact</a>
            </div>
            
            <div>
              <p className="text-xs text-white/40 leading-relaxed border border-white/5 p-4 rounded-lg bg-white/[0.02]">
                This website contains affiliate links. We may earn a commission when you click on expert links, at no additional cost to you. We only recommend professionals we believe provide exceptional value.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/30">
            <p>© 2025 Eonati. All rights reserved.</p>
            <p className="mt-2 md:mt-0 tracking-widest uppercase text-[10px]">Built for serious entrepreneurs.</p>
          </div>
        </div>
      </footer>

      {/* STICKY CTA PILL */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      >
        <div className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-primary/30 px-6 py-3 rounded-full shadow-[0_10px_40px_rgba(201,168,76,0.2)] flex items-center gap-4">
          <span className="text-sm font-medium text-white/90 hidden sm:inline-block">Ready to elevate your perception?</span>
          <a href="#experts" className="text-primary font-semibold text-sm hover:text-[#FFD700] transition-colors flex items-center gap-1">
            Build Premium Trust <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}