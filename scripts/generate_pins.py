#!/usr/bin/env python3
"""
Generate 3 Pinterest pin images for Eonati affiliate marketing.
Dimensions: 1000x1500px (2:3 ratio, Pinterest optimal)
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Output directory
OUTPUT_DIR = os.path.expanduser("~/eonati/pins")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Brand colors
NAVY = "#2D3E50"
GREEN = "#1DBF73"
WHITE = "#FFFFFF"
LIGHT_GRAY = "#F4F7F6"
DARK_GRAY = "#1A1A1A"

# Pin dimensions
WIDTH = 1000
HEIGHT = 1500

# Affiliate links
LINKS = {
    "valeriia": "https://pro.fiverr.com/freelancers/valeriiaty?ref_ctx_id=2eb6e0b48e78498a81c78fd6468c0401",
    "alestra": "https://go.fiverr.com/visit/?bta=1139651&brand=fp&landingPage=https%253A%252F%252Fpro.fiverr.com%252Fagencies%252Falestra",
    "juhi": "https://pro.fiverr.com/freelancers/explorance?utm_source=1139651&utm_medium=cx_affiliate",
}

def get_font(size):
    """Load font with fallback."""
    try:
        return ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)
    except:
        try:
            return ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", size)
        except:
            return ImageFont.load_default()

def create_pin(headline, subtext, price, badge, designer, color_scheme):
    """Create a single Pinterest pin."""
    
    # Create background
    img = Image.new('RGB', (WIDTH, HEIGHT), color=LIGHT_GRAY)
    draw = ImageDraw.Draw(img)
    
    # Gradient overlay (top to bottom)
    for y in range(HEIGHT):
        alpha = int(255 * (y / HEIGHT))
        if color_scheme == "luxury":
            color = (45, 62, 80)  # Navy
        elif color_scheme == "value":
            color = (29, 191, 115)  # Green
        else:
            color = (100, 100, 100)  # Gray
        
        # Blend with light gray
        blend_factor = min(0.3, y / HEIGHT)
        r = int(LIGHT_GRAY[1:3], 16) + int((color[0] - int(LIGHT_GRAY[1:3], 16)) * blend_factor)
        g = int(LIGHT_GRAY[3:5], 16) + int((color[1] - int(LIGHT_GRAY[3:5], 16)) * blend_factor)
        b = int(LIGHT_GRAY[5:7], 16) + int((color[2] - int(LIGHT_GRAY[5:7], 16)) * blend_factor)
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))
    
    # Load fonts
    headline_font = get_font(72)
    subtext_font = get_font(42)
    price_font = get_font(120)
    badge_font = get_font(36)
    footer_font = get_font(28)
    
    # Draw badge (top center)
    badge_text = badge
    badge_bbox = draw.textbbox((0, 0), badge_text, font=badge_font)
    badge_width = badge_bbox[2] - badge_bbox[0] + 60
    badge_height = 60
    badge_x = (WIDTH - badge_width) // 2
    badge_y = 60
    
    # Badge background
    badge_color = GREEN if color_scheme == "value" else NAVY
    draw.rounded_rectangle(
        [(badge_x, badge_y), (badge_x + badge_width, badge_y + badge_height)],
        radius=30,
        fill=badge_color
    )
    
    # Badge text
    badge_text_bbox = draw.textbbox((0, 0), badge_text, font=badge_font)
    badge_text_width = badge_text_bbox[2] - badge_text_bbox[0]
    badge_text_x = (WIDTH - badge_text_width) // 2
    badge_text_y = badge_y + 15
    draw.text((badge_text_x, badge_text_y), badge_text, fill=WHITE, font=badge_font)
    
    # Draw headline (centered, upper third)
    headline_y = 200
    headline_bbox = draw.textbbox((0, 0), headline, font=headline_font)
    headline_width = headline_bbox[2] - headline_bbox[0]
    headline_x = (WIDTH - headline_width) // 2
    draw.text((headline_x, headline_y), headline, fill=NAVY, font=headline_font)
    
    # Draw subtext (centered, below headline)
    subtext_y = headline_y + 100
    subtext_bbox = draw.textbbox((0, 0), subtext, font=subtext_font)
    subtext_width = subtext_bbox[2] - subtext_bbox[0]
    subtext_x = (WIDTH - subtext_width) // 2
    draw.text((subtext_x, subtext_y), subtext, fill="#666666", font=subtext_font)
    
    # Draw price (centered, middle)
    price_y = 550
    price_text = f"${price}"
    price_bbox = draw.textbbox((0, 0), price_text, font=price_font)
    price_width = price_bbox[2] - price_bbox[0]
    price_x = (WIDTH - price_width) // 2
    draw.text((price_x, price_y), price_text, fill=GREEN, font=price_font)
    
    # Draw "Starting at" label
    label_text = "Starting at"
    label_bbox = draw.textbbox((0, 0), label_text, font=subtext_font)
    label_width = label_bbox[2] - label_bbox[0]
    label_x = (WIDTH - label_width) // 2
    draw.text((label_x, price_y - 50), label_text, fill="#666666", font=subtext_font)
    
    # Draw CTA button (lower third)
    button_width = 500
    button_height = 90
    button_x = (WIDTH - button_width) // 2
    button_y = 800
    
    draw.rounded_rectangle(
        [(button_x, button_y), (button_x + button_width, button_y + button_height)],
        radius=45,
        fill=GREEN
    )
    
    cta_text = "View Portfolio"
    cta_bbox = draw.textbbox((0, 0), cta_text, font=subtext_font)
    cta_width = cta_bbox[2] - cta_bbox[0]
    cta_x = (WIDTH - cta_width) // 2
    cta_y = button_y + 25
    draw.text((cta_x, cta_y), cta_text, fill=WHITE, font=subtext_font)
    
    # Draw designer name
    designer_y = button_y + 150
    designer_bbox = draw.textbbox((0, 0), designer, font=subtext_font)
    designer_width = designer_bbox[2] - designer_bbox[0]
    designer_x = (WIDTH - designer_width) // 2
    draw.text((designer_x, designer_y), designer, fill=NAVY, font=subtext_font)
    
    # Draw footer (bottom)
    footer_y = HEIGHT - 100
    footer_text = "Eonati.com | Hand-Picked Fiverr Pro Designers"
    footer_bbox = draw.textbbox((0, 0), footer_text, font=footer_font)
    footer_width = footer_bbox[2] - footer_bbox[0]
    footer_x = (WIDTH - footer_width) // 2
    draw.text((footer_x, footer_y), footer_text, fill="#999999", font=footer_font)
    
    # Save
    safe_designer = designer.replace(" ", "_").replace("/", "_").lower()
    filename = f"pin_{safe_designer}.png"
    filepath = os.path.join(OUTPUT_DIR, filename)
    img.save(filepath, "PNG")
    print(f"✓ Created: {filename}")
    return filepath

# Generate 3 pins
pins = [
    {
        "headline": "The $175 Secret to a High-End Brand Identity",
        "subtext": "Luxury branding without the agency price tag. Vetted by experts.",
        "price": "175",
        "badge": "Elite / Luxury",
        "designer": "Valeriia T",
        "color_scheme": "luxury"
    },
    {
        "headline": "Professional Custom Logo Design for Just $113",
        "subtext": "Most Popular choice for entrepreneurs. 30,000+ happy clients.",
        "price": "113",
        "badge": "Most Popular",
        "designer": "Alestra Agency",
        "color_scheme": "value"
    },
    {
        "headline": "How to Launch a Brand for Under $25",
        "subtext": "Perfect for startups. Fast delivery. Professional quality.",
        "price": "23",
        "badge": "Best for Startups",
        "designer": "Juhi / Explorance",
        "color_scheme": "startup"
    },
]

print(f"\n📌 Generating Pinterest pins in: {OUTPUT_DIR}\n")

for pin in pins:
    create_pin(**pin)

print(f"\n✅ All pins generated! Upload to Pinterest with these links:")
print(f"\nValeriia T: {LINKS['valeriia']}")
print(f"Alestra Agency: {LINKS['alestra']}")
print(f"Juhi / Explorance: {LINKS['juhi']}")
