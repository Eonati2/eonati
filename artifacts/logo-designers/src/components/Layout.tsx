import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Star } from "lucide-react";
import { AFFILIATE } from "@/lib/affiliates";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        location === href ? "text-primary" : "text-foreground/70"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm" data-testid="site-header">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2" data-testid="nav-logo">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">E</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">Eonati</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <div
                className="relative"
                onMouseEnter={() => setReviewsOpen(true)}
                onMouseLeave={() => setReviewsOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                  Designer Reviews <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {reviewsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                    <Link href="/reviews/alestra" className="block px-4 py-3 hover:bg-muted transition-colors" onClick={() => setReviewsOpen(false)}>
                      <span className="font-semibold text-sm text-foreground block">Alestra Agency</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 fill-chart-4 text-chart-4" /> 4.9 · 31,034 reviews · Top Pick
                      </span>
                    </Link>
                    <Link href="/reviews/juhi" className="block px-4 py-3 hover:bg-muted transition-colors" onClick={() => setReviewsOpen(false)}>
                      <span className="font-semibold text-sm text-foreground block">Juhi (Explorance)</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 fill-chart-4 text-chart-4" /> 4.8 · 9,319 reviews · From $41
                      </span>
                    </Link>
                    <Link href="/reviews/valeriia" className="block px-4 py-3 hover:bg-muted transition-colors" onClick={() => setReviewsOpen(false)}>
                      <span className="font-semibold text-sm text-foreground block">Valeriia T</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 fill-chart-4 text-chart-4" /> 4.8 · 8,045 reviews · Most Versatile
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              {navLink("/compare", "Compare All")}
              {navLink("/guide/how-to-hire-a-logo-designer", "Hiring Guide")}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={AFFILIATE.alestra}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                data-testid="nav-cta"
              >
                Hire a Designer
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-1">Designer Reviews</p>
              {[
                { href: "/reviews/alestra", name: "Alestra Agency", sub: "31,034 reviews · Top Pick" },
                { href: "/reviews/juhi", name: "Juhi (Explorance)", sub: "9,319 reviews · From $41" },
                { href: "/reviews/valeriia", name: "Valeriia T", sub: "8,045 reviews · Most Versatile" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex flex-col px-2 py-2.5 rounded-md hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                  <span className="font-medium text-sm text-foreground">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.sub}</span>
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <Link href="/compare" className="px-2 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>Compare All Three</Link>
              <Link href="/guide/how-to-hire-a-logo-designer" className="px-2 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileOpen(false)}>Free Hiring Guide</Link>
              <a
                href={AFFILIATE.alestra}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center px-4 py-3 rounded-md bg-accent text-accent-foreground text-sm font-semibold"
              >
                Hire a Designer on Fiverr
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1" id="main-content">
        {children}
      </main>

      {/* STICKY BOTTOM CTA — appears after scrolling */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t-2 border-accent shadow-2xl py-3 px-4" data-testid="sticky-cta">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Most hired right now: Alestra Agency</p>
              <p className="text-xs text-primary-foreground/70">31,034 reviews · 4.9★ · 1-hour response time</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Link href="/compare" className="inline-flex items-center px-4 py-2 rounded-md bg-primary-foreground/15 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/25 transition-colors">
                Compare All
              </Link>
              <a href={AFFILIATE.alestra} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                View on Fiverr
              </a>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-border bg-card" style={{ marginBottom: showSticky ? "60px" : "0" }} data-testid="site-footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm">E</span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">Eonati</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-4">
                Independent research on the best freelance logo designers for hire. We analyze thousands of verified reviews so you hire right the first time.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Eonati uses affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you. All reviews are independent and unsponsored.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Designer Reviews</h3>
              <ul className="space-y-2.5">
                <li><Link href="/reviews/alestra" className="text-sm text-muted-foreground hover:text-primary transition-colors">Alestra Agency Review</Link></li>
                <li><Link href="/reviews/juhi" className="text-sm text-muted-foreground hover:text-primary transition-colors">Juhi (Explorance) Review</Link></li>
                <li><Link href="/reviews/valeriia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Valeriia T Review</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2.5 mb-5">
                <li><Link href="/compare" className="text-sm text-muted-foreground hover:text-primary transition-colors">Compare All Designers</Link></li>
                <li><Link href="/guide/how-to-hire-a-logo-designer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Free Hiring Guide</Link></li>
              </ul>
              <a href={AFFILIATE.alestra} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
                Hire on Fiverr
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Eonati. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Not affiliated with Fiverr. Independent research and affiliate disclosures apply.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
