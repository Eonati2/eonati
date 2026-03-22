import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Minimalist Logo for Real Estate Agents: How to Build a Luxury Brand on a Budget",
    excerpt: "Discover why minimalism is the secret to a high-end real estate brand and find the best Fiverr designers to help you stand out.",
    date: "March 22, 2026",
    slug: "minimalist-logo-for-real-estate-agents",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Retro Logo for Coffee Shops and Cafes: Give Your Brand a Classic Feel",
    excerpt: "The power of nostalgia in the coffee industry. Learn how retro branding can create an artisanal and authentic atmosphere for your cafe.",
    date: "March 21, 2026",
    slug: "retro-logo-for-coffee-shops-and-cafes",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Hand-Drawn Logo for Handmade Soap Business: Artisanal Branding for Your Etsy Shop",
    excerpt: "Why your handmade products need a handmade-style logo. Connect with customers who value craftsmanship and stand out on Etsy.",
    date: "March 20, 2026",
    slug: "hand-drawn-logo-for-handmade-soap-business",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline">Eonati</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/#pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link>
            <Link href="/#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link>
            <Link href="/blog" className="text-sm text-primary font-medium">Blog</Link>
          </div>
        </div>
      </nav>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips on branding, design trends, and how to grow your business with professional identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="card-hover bg-card border-border overflow-hidden flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-xs text-primary font-medium mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto">
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-accent transition-colors">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Eonati. All rights reserved. Powered by Fiverr affiliate partnerships.</p>
        </div>
      </footer>
    </div>
  );
}
