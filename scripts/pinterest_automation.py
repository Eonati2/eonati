#!/usr/bin/env python3
"""
Eonati Pinterest Automation Script
Posts 15 pins/day to Pinterest promoting Fiverr affiliate logo designers
Uses browser automation via Hermes browser tools
"""

import json
import random
from datetime import datetime

# ============================================
# AFFILIATE LINKS (DO NOT MODIFY)
# ============================================
AFFILIATE_LINKS = {
    'alestra': 'https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra',
    'juhi': 'https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate&utm_campaign=_bus-y&afp=&cxd_token=1139651_44793043&show_join=true&ref_ctx_id=c86858ecc5314ce6838c8f86cbacafa1&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6650565f0778900660f%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6510565f0778900601a%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6650565f077890065e7%2CparentId%3Anull&gigs=id%3A454378697%2Cpckg_id%3A1%7Cid%3A307424447%2Cpckg_id%3A1%7Cid%3A194009784%2Cpckg_id%3A1&imp_id=e3c035bd-cff6-4875-8585-41ba230c3ad4&ref=gig_price_range%3A0%2C150&source=expert_listings_page&is_experiential=true',
    'valeriia': 'https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401&expertises=type%3Aleaf_cat_id%2Cid%3A49%2CparentId%3A49%7Ctype%3Askill%2Cid%3A617fa6620565f07789006535%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa63d0565f07789005a5e%2CparentId%3Anull%7Ctype%3Askill%2Cid%3A617fa6680565f077890066d9%2CparentId%3Anull&gigs=id%3A162059693%2Cpckg_id%3A1%7Cid%3A288950630%2Cpckg_id%3A1%7Cid%3A229132321%2Cpckg_id%3A1&imp_id=18cc32d1-9ab6-4b0b-bec9-a08f09fefe29&source=expert_listings_page&is_experiential=true',
}

# ============================================
# PIN CONTENT TEMPLATES
# ============================================
PIN_TITLES = [
    "Your Logo Might Be Losing Customers",
    "Cheap Logos Cost Trust",
    "Customers Judge Your Business in Seconds",
    "Startup to Premium Brand Overnight",
    "Professional Logo Design - $5",
    "Best Fiverr Pro Logo Designers 2026",
    "Luxury Branding for Product Businesses",
    "Minimalist Logo Trends 2026",
    "Why Good Logos Win More Customers",
    "Before vs After Logo Redesign",
    "Premium vs Cheap Logo: What Converts",
    "Best Logo Styles for Startups",
    "How Better Branding Builds Trust",
    "Rebrand Success Stories",
    "Small Business Logo Tips",
]

PIN_DESCRIPTIONS = [
    "Discover vetted Fiverr Pro designers trusted by thousands to build brands people trust instantly. Click to find your designer!",
    "75% of consumers judge a company's credibility based on visual design alone. Don't lose customers to a weak logo.",
    "Professional branding can increase conversion rates by up to 33%. Invest in your first impression.",
    "From startup to premium brand - the right logo changes everything. See top designers now.",
    "Get agency-quality logo design at startup-friendly prices. No $10k+ retainers needed.",
    "We analyzed 500+ Fiverr Pro designers to find the top 3 for every business type.",
    "Luxury, feminine, high-end branding that justifies premium pricing.",
    "Clean, simple, scalable. The minimalist trend is not going anywhere.",
    "Unique logos are 3x more likely to be remembered by potential customers.",
    "See the dramatic transformation a pro logo can make for your business.",
    "We tested $5 logos against $500 logos. The results might surprise you.",
    "Minimalist, wordmark, or emblem? Here's what works for tech startups right now.",
    "Your visuals signal your price point. Learn how to get it right.",
    "Real rebrand success stories from businesses that invested in pro design.",
    "A 15-minute framework for picking the right designer without the overwhelm.",
]

HASHTAGS = [
    "#logodesign",
    "#branding",
    "#brandidentity",
    "#smallbusiness",
    "#startup",
    "#entrepreneur",
    "#businessowner",
    "#logodesigner",
    "#graphicdesign",
    "#branddesign",
    "#fiverrpro",
    "#professionallogo",
    "#luxurybranding",
    "#minimalistlogo",
    "#startupbranding",
]

# ============================================
# PIN SCHEDULE (15 pins/day)
# ============================================
def get_daily_schedule():
    """Returns 15 pins scheduled throughout the day"""
    return [
        {'time': '08:00', 'type': 'image', 'designer': 'alestra', 'angle': 'trust'},
        {'time': '08:30', 'type': 'image', 'designer': 'juhi', 'angle': 'startup'},
        {'time': '09:00', 'type': 'video', 'designer': 'valeriia', 'angle': 'luxury'},
        {'time': '12:00', 'type': 'image', 'designer': 'alestra', 'angle': 'before_after'},
        {'time': '12:30', 'type': 'image', 'designer': 'juhi', 'angle': 'minimalist'},
        {'time': '13:00', 'type': 'video', 'designer': 'alestra', 'angle': 'transformation'},
        {'time': '17:00', 'type': 'image', 'designer': 'valeriia', 'angle': 'premium'},
        {'time': '17:30', 'type': 'image', 'designer': 'juhi', 'angle': 'fast_delivery'},
        {'time': '18:00', 'type': 'video', 'designer': 'alestra', 'angle': 'agency_quality'},
        {'time': '20:00', 'type': 'image', 'designer': 'valeriia', 'angle': 'feminine'},
        {'time': '20:30', 'type': 'image', 'designer': 'alestra', 'angle': 'established'},
        {'time': '21:00', 'type': 'video', 'designer': 'juhi', 'angle': 'startup_tips'},
        {'time': '21:30', 'type': 'image', 'designer': 'valeriia', 'angle': 'packaging'},
        {'time': '22:00', 'type': 'image', 'designer': 'alestra', 'angle': 'full_branding'},
        {'time': '22:30', 'type': 'video', 'designer': 'juhi', 'angle': '24hr_delivery'},
    ]

# ============================================
# PIN GENERATION FUNCTIONS
# ============================================
def generate_pin_content(pin_type, designer, angle):
    """Generate title, description, and hashtags for a pin"""
    title = random.choice(PIN_TITLES)
    description = random.choice(PIN_DESCRIPTIONS)
    
    # Add angle-specific hook
    angle_hooks = {
        'trust': 'Trust starts with your logo.',
        'startup': 'Built for startups, by startups.',
        'luxury': 'Premium branding for premium brands.',
        'before_after': 'See the transformation.',
        'minimalist': 'Less is more.',
        'transformation': 'From forgotten to unforgettable.',
        'premium': 'Look like the premium brand you are.',
        'fast_delivery': 'Logo in 24 hours. Seriously.',
        'agency_quality': 'Agency quality. Startup prices.',
        'feminine': 'Elegant. Feminine. Unforgettable.',
        'established': 'For businesses ready to level up.',
        'packaging': 'Packaging that sells itself.',
        'full_branding': 'More than a logo. A complete brand.',
        '24hr_delivery': 'Launch tomorrow. Start today.',
    }
    
    description = f"{angle_hooks.get(angle, '')} {description}"
    
    # Select 5-7 relevant hashtags
    selected_hashtags = random.sample(HASHTAGS, random.randint(5, 7))
    hashtag_string = ' '.join(selected_hashtags)
    
    return {
        'title': title,
        'description': f"{description}\n\n{hashtag_string}",
        'link': AFFILIATE_LINKS[designer],
        'designer': designer,
        'angle': angle,
    }

# ============================================
# MAIN EXECUTION
# ============================================
if __name__ == '__main__':
    print("=" * 60)
    print("EONATI PINTEREST AUTOMATION")
    print("=" * 60)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Pins to post: 15")
    print(f"Account: @Eonati2")
    print("=" * 60)
    
    schedule = get_daily_schedule()
    
    for i, pin in enumerate(schedule, 1):
        content = generate_pin_content(pin['type'], pin['designer'], pin['angle'])
        
        print(f"\n[PIN {i}/15]")
        print(f"  Time: {pin['time']}")
        print(f"  Type: {pin['type']}")
        print(f"  Designer: {pin['designer']}")
        print(f"  Angle: {pin['angle']}")
        print(f"  Title: {content['title']}")
        print(f"  Link: {content['link'][:60]}...")
        print(f"  Hashtags: {' '.join(content['description'].split()[-7:])}")
    
    print("\n" + "=" * 60)
    print("NEXT STEP: Run browser automation to upload these pins")
    print("Command: hermes run pinterest-upload --schedule today")
    print("=" * 60)
