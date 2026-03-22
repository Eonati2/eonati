import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink } from "lucide-react";

const BLOG_POSTS_CONTENT = {
  "minimalist-logo-for-real-estate-agents": {
    title: "Minimalist Logo for Real Estate Agents: How to Build a Luxury Brand on a Budget",
    date: "March 22, 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          In the competitive world of real estate, your brand identity is often the first point of contact with potential clients. A minimalist logo isn't just a design choice; it's a strategic move to convey luxury, professionalism, and trust.
        </p>
        
        <h2 className="text-2xl font-bold mt-12 mb-6">Why Real Estate Agents are Choosing Minimalist Logos in 2026</h2>
        <p className="mb-6">
          The shift from literal "house icons" to abstract brand identity is more than just a trend. Modern homebuyers, especially high-net-worth individuals, are drawn to clean, sophisticated aesthetics. A minimalist logo suggests that you are organized, modern, and focused on the details.
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Top 3 Minimalist Real Estate Logo Designers on Fiverr</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-card border border-border p-6 rounded-lg">
            <h4 className="font-bold mb-2">Luxury & Modern</h4>
            <p className="text-sm text-muted-foreground mb-4">Best for high-end residential properties.</p>
            <Button className="w-full btn-primary text-xs" onClick={() => window.open("https://pro.fiverr.com/freelancers/shailene_george?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y_bus-y&afp=&cxd_token=1139651_44771587&show_join=true", "_blank")}>
              View Designer <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
          <div className="bg-card border border-border p-6 rounded-lg">
            <h4 className="font-bold mb-2">Geometric & Professional</h4>
            <p className="text-sm text-muted-foreground mb-4">Perfect for commercial real estate firms.</p>
            <Button className="w-full btn-primary text-xs" onClick={() => window.open("https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true", "_blank")}>
              View Designer <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
          <div className="bg-card border border-border p-6 rounded-lg">
            <h4 className="font-bold mb-2">Budget-Friendly & Fast</h4>
            <p className="text-sm text-muted-foreground mb-4">Great for new agents starting out.</p>
            <Button className="w-full btn-primary text-xs" onClick={() => window.open("https://pro.fiverr.com/freelancers/hamzadeswali?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=&afp=&cxd_token=1139651_44793031&show_join=true", "_blank")}>
              View Designer <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">What to Look for in a Real Estate Logo Designer</h2>
        <p className="mb-6">
          When browsing Fiverr, don't just look at the price. Check the designer's portfolio for consistency. Do they have experience with minimalist styles? Do they provide vector source files? These are crucial for your signage, business cards, and digital marketing.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">How to Brief Your Designer for the Best Results</h2>
        <p className="mb-6">
          To get the best minimalist logo, you need to provide a clear brief. Mention your preferred color palette (navy and gold are classic real estate choices), the "vibe" of your brand (e.g., "approachable luxury"), and any specific fonts you like.
        </p>

        <div className="bg-primary/10 border border-primary/30 p-8 rounded-2xl my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Brand?</h3>
          <p className="mb-6">Get a professional minimalist logo designed by experts on Fiverr starting at just $13.</p>
          <Button className="btn-primary px-8 py-6 text-lg" onClick={() => window.open("https://pro.fiverr.com/freelancers/hamzadeswali?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=&afp=&cxd_token=1139651_44793031&show_join=true", "_blank")}>
            Get Your Logo Now
          </Button>
        </div>
      </div>
    )
  },
  "retro-logo-for-coffee-shops-and-cafes": {
    title: "Retro Logo for Coffee Shops and Cafes: Give Your Brand a Classic Feel",
    date: "March 21, 2026",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          In the world of specialty coffee, authenticity is everything. A retro logo can instantly communicate a sense of history, craftsmanship, and artisanal quality that modern, flat designs often lack.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6">Why Retro Branding Works for Modern Coffee Shops</h2>
        <p className="mb-6">
          Nostalgia is a powerful tool. By using vintage-inspired badges, hand-drawn typography, and warm color palettes, you create an inviting atmosphere before a customer even steps through your door.
        </p>
        <div className="bg-primary/10 border border-primary/30 p-8 rounded-2xl my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Find Your Perfect Retro Designer</h3>
          <p className="mb-6">Explore top-rated vintage logo artists on Fiverr who specialize in coffee shop branding.</p>
          <Button className="btn-primary px-8 py-6 text-lg" onClick={() => window.open("https://pro.fiverr.com/freelancers/shailene_george?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y_bus-y&afp=&cxd_token=1139651_44771587&show_join=true", "_blank")}>
            Browse Retro Designers
          </Button>
        </div>
      </div>
    )
  },
  "hand-drawn-logo-for-handmade-soap-business": {
    title: "Hand-Drawn Logo for Handmade Soap Business: Artisanal Branding for Your Etsy Shop",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=1200",
    content: (
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          If your products are handmade, your branding should be too. A hand-drawn logo tells your customers that there is a real person behind the brand, valuing quality and craftsmanship over mass production.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6">Connecting with Your Audience</h2>
        <p className="mb-6">
          Etsy shoppers are looking for something unique. A botanical illustration or a whimsical hand-lettered logo can make your soap business feel more personal and high-end.
        </p>
        <div className="bg-primary/10 border border-primary/30 p-8 rounded-2xl my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Hire an Artisanal Illustrator</h3>
          <p className="mb-6">Connect with talented illustrators on Fiverr who can bring your handmade brand to life.</p>
          <Button className="btn-primary px-8 py-6 text-lg" onClick={() => window.open("https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true", "_blank")}>
            Find Your Illustrator
          </Button>
        </div>
      </div>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS_CONTENT[slug as keyof typeof BLOG_POSTS_CONTENT];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/blog" className="text-sm hover:text-primary transition-colors flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary font-medium mb-4">{post.date}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{post.title}</h1>
            <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
          </div>
          
          {post.content}
        </div>
      </article>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Eonati. All rights reserved. Powered by Fiverr affiliate partnerships.</p>
        </div>
      </footer>
    </div>
  );
}
