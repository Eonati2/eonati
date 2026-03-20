import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Check, ChevronRight, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Sophisticated Depth
 * - Dark navy background (#0F172A) with crisp white text
 * - Cyan accents (#06B6D4) for CTAs and highlights
 * - Warm gold (#FBBF24) for secondary accents
 * - Poppins for display, Inter for body
 * - Smooth animations and micro-interactions
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Eonati</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</a>
            <a href="#cta" className="text-sm hover:text-primary transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663448069360/DYRaga9HfF7mVQkTtMnjgP/hero-abstract-geometric-ZFHv54KrcX3wzLZQaPpGQG.webp"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                <span className="text-primary text-sm font-medium">Professional Logo Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Get Your <span className="gradient-text">Professional Logo</span> in 24 Hours
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Stop overpaying for branding. Get stunning, custom logo designs from expert designers starting at just $13. Fast turnaround, unlimited revisions, and full vector files included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-primary">
                  Get Your Logo Now <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-border hover:bg-muted">
                  View Pricing
                </Button>
              </div>
              <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>1000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>24-Hour Delivery</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663448069360/DYRaga9HfF7mVQkTtMnjgP/pricing-section-bg-W2FRq9BkkQVvZWnPnA7hva.webp"
            alt="Pricing background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your branding needs. All packages include unlimited revisions and full vector files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Budget Tier */}
            <Card className="card-hover bg-card border-border p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">Budget-Friendly</h3>
                  <p className="text-muted-foreground text-sm">Quick turnaround, basic concepts</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$13<span className="text-lg text-muted-foreground font-normal">+</span></span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multiple unique concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full vector & source files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quick 24-hour delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited revisions</span>
                  </li>
                </ul>
                <Button className="w-full btn-primary">Get Started</Button>
              </div>
            </Card>

            {/* Premium Tier (Featured) */}
            <Card className="card-hover bg-card border-primary p-8 relative overflow-hidden group md:scale-105 md:shadow-2xl">
              <div className="absolute top-0 right-0 px-4 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10 pt-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">Best Premium</h3>
                  <p className="text-muted-foreground text-sm">Multiple concepts, full brand identity</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$40<span className="text-lg text-muted-foreground font-normal">–$99+</span></span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multiple unique concepts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full brand identity & files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited revisions</span>
                  </li>
                </ul>
                <Button className="w-full btn-primary">Get Started</Button>
              </div>
            </Card>

            {/* VIP Tier */}
            <Card className="card-hover bg-card border-border p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">VIP Premium</h3>
                  <p className="text-muted-foreground text-sm">Full brand identity, dedicated support</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$111<span className="text-lg text-muted-foreground font-normal">–$150+</span></span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Industry-leading experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Full brand identity kit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Social media & stationery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1-on-1 VIP support</span>
                  </li>
                </ul>
                <Button className="w-full btn-secondary">Get Started</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Comparison Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recommended Platforms</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the best platforms to bring you quality designers and reliable service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Fiverr", desc: "Affordable, vetted designers", icon: "🎨" },
              { name: "99designs", desc: "Premium design marketplace", icon: "✨" },
              { name: "Looka", desc: "AI-powered logo generation", icon: "🤖" },
              { name: "Tailor Brands", desc: "Quick & easy branding", icon: "⚡" },
            ].map((platform, idx) => (
              <Card key={idx} className="card-hover bg-background border-border p-6 text-center">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your professional logo in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Vision",
                desc: "Tell us about your brand, style preferences, and any specific requirements. The more details, the better!",
              },
              {
                step: "2",
                title: "Expert Design",
                desc: "Our hand-picked designers create multiple unique concepts tailored to your brand identity.",
              },
              {
                step: "3",
                title: "Revise & Download",
                desc: "Get unlimited revisions until you're 100% happy. Download full vector files and source files.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663448069360/DYRaga9HfF7mVQkTtMnjgP/testimonial-section-bg-9UNEbT2xayKUu9yWXQ8Jfi.webp"
            alt="Testimonials background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join over 1,000 happy businesses that transformed their brand with Eonati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "E-commerce Owner",
                text: "The logo design exceeded my expectations! Fast turnaround and the designer was very responsive to feedback.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Startup Founder",
                text: "Best value for money. Got 5 different concepts and unlimited revisions. Highly recommend!",
                rating: 5,
              },
              {
                name: "Emma Davis",
                role: "Marketing Manager",
                text: "Professional quality at an affordable price. Our new branding looks premium and modern.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="card-hover bg-card border-border p-8">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-accent text-lg">★</span>
                    ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663448069360/DYRaga9HfF7mVQkTtMnjgP/cta-section-bg-MDhErgiiMQ3FXPLbW9DJY6.webp"
            alt="CTA background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Branding Guide</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn the secrets to creating a memorable brand identity. Get our free guide delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-3 mb-6 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/50 border-border"
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>

            {subscribed && (
              <p className="text-primary text-sm">✓ Check your email for the guide!</p>
            )}

            <div className="mt-12">
              <Button className="btn-primary text-lg px-8 py-6">
                Start Your Logo Design Now <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources Placeholder */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources & Blog</h2>
            <p className="text-muted-foreground mb-8">
              Branding tips, design trends, and industry insights coming soon
            </p>
            <div className="inline-block px-6 py-3 bg-card border border-border rounded-lg text-muted-foreground">
              📚 Blog section coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">E</span>
                </div>
                <span className="font-bold">Eonati</span>
              </div>
              <p className="text-sm text-muted-foreground">Professional logo design services for your brand.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#cta" className="hover:text-primary transition-colors">Get Started</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Design Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Eonati. All rights reserved. | Affiliate partnerships with Fiverr, 99designs, Looka, and Tailor Brands</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
