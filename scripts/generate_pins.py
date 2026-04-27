#!/usr/bin/env python3
"""
Eonati Pin Image Generator
Creates 10 Pinterest-optimized pin images (1080x1920) for logo design promotion
Uses Pillow for image generation - no external APIs needed
"""

from PIL import Image, ImageDraw, ImageFont
import os
from datetime import datetime

# Output directory
OUTPUT_DIR = '/Users/bmoni/eonati/pins'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Pinterest dimensions
PIN_WIDTH = 1080
PIN_HEIGHT = 1920

# Color palette
COLORS = {
    'bg_dark': '#0B1020',
    'bg_gradient_1': '#1E3A5F',
    'bg_gradient_2': '#0B1020',
    'primary': '#2563EB',
    'accent': '#60A5FA',
    'white': '#FFFFFF',
    'text_gray': '#94A3B8',
    'gold': '#F59E0B',
    'rose': '#F43F5E',
}

# Pin content templates
PINS = [
    {
        'filename': 'pin_001_trust.jpg',
        'headline': 'Your Logo Might Be\nLosing Customers',
        'subtext': '75% of consumers judge credibility\nby design alone',
        'cta': 'Find Your Designer',
        'designer': 'Alestra',
        'color': 'primary',
    },
    {
        'filename': 'pin_002_startup.jpg',
        'headline': 'Startup Logo Design\nFrom €23',
        'subtext': '24hr delivery • 9,300+ reviews\nMinimalist • Modern • Clean',
        'cta': 'Hire Juhi',
        'designer': 'Juhi',
        'color': 'accent',
    },
    {
        'filename': 'pin_003_luxury.jpg',
        'headline': 'Luxury Branding\nfor Premium Brands',
        'subtext': 'Beauty • Fashion • High-End Products\n10+ years experience',
        'cta': 'Hire Valeriia',
        'designer': 'Valeriia',
        'color': 'gold',
    },
    {
        'filename': 'pin_004_before_after.jpg',
        'headline': 'Before vs After\nLogo Redesign',
        'subtext': 'See the transformation a pro\ndesigner can make',
        'cta': 'View Examples',
        'designer': 'All',
        'color': 'primary',
    },
    {
        'filename': 'pin_005_cheap_vs_premium.jpg',
        'headline': 'Cheap Logo vs\nPremium Logo',
        'subtext': 'We tested both. The results\nmight surprise you.',
        'cta': 'Read the Study',
        'designer': 'All',
        'color': 'rose',
    },
    {
        'filename': 'pin_006_first_impressions.jpg',
        'headline': 'Customers Judge\nYour Business in Seconds',
        'subtext': 'Make it count with professional\nbranding',
        'cta': 'Start Now',
        'designer': 'Alestra',
        'color': 'primary',
    },
    {
        'filename': 'pin_007_minimalist.jpg',
        'headline': 'Minimalist Logo\nTrends 2026',
        'subtext': 'Clean • Simple • Scalable\nWhat works for startups',
        'cta': 'See Trends',
        'designer': 'Juhi',
        'color': 'accent',
    },
    {
        'filename': 'pin_008_trust.jpg',
        'headline': 'How Better Branding\nBuilds Trust',
        'subtext': 'Professional design can increase\nconversions by 33%',
        'cta': 'Learn More',
        'designer': 'All',
        'color': 'primary',
    },
    {
        'filename': 'pin_009_fiverr_pro.jpg',
        'headline': 'Best Fiverr Pro\nLogo Designers 2026',
        'subtext': 'We analyzed 500+ designers\nto find the top 3',
        'cta': 'See the List',
        'designer': 'All',
        'color': 'gold',
    },
    {
        'filename': 'pin_010_24hr.jpg',
        'headline': 'Logo in 24 Hours.\nSeriously.',
        'subtext': 'Fast delivery without sacrificing\nquality',
        'cta': 'Get Started',
        'designer': 'Juhi',
        'color': 'accent',
    },
]


def create_pin(pin_data):
    """Create a single pin image"""
    print(f"  Creating {pin_data['filename']}...")
    
    # Create base image with gradient
    img = Image.new('RGB', (PIN_WIDTH, PIN_HEIGHT), COLORS['bg_dark'])
    draw = ImageDraw.Draw(img)
    
    # Draw gradient background
    for y in range(PIN_HEIGHT):
        ratio = y / PIN_HEIGHT
        r = int(COLORS['bg_gradient_1'][1:3], 16) * (1 - ratio) + int(COLORS['bg_gradient_2'][1:3], 16) * ratio
        g = int(COLORS['bg_gradient_1'][3:5], 16) * (1 - ratio) + int(COLORS['bg_gradient_2'][3:5], 16) * ratio
        b = int(COLORS['bg_gradient_1'][5:7], 16) * (1 - ratio) + int(COLORS['bg_gradient_2'][5:7], 16) * ratio
        draw.line([(0, y), (PIN_WIDTH, y)], fill=(int(r), int(g), int(b)))
    
    # Add accent circle/shape
    accent_color = COLORS.get(pin_data['color'], COLORS['primary'])
    draw.ellipse([PIN_WIDTH - 300, -100, PIN_WIDTH + 100, 300], fill=accent_color + '20')
    
    # Try to load fonts (fallback to default if not available)
    try:
        font_headline = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
        font_subtext = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)
        font_cta = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 42)
        font_brand = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 32)
    except:
        font_headline = ImageFont.load_default()
        font_subtext = ImageFont.load_default()
        font_cta = ImageFont.load_default()
        font_brand = ImageFont.load_default()
    
    # Calculate text positions (centered)
    headline_lines = pin_data['headline'].split('\n')
    subtext_lines = pin_data['subtext'].split('\n')
    
    # Draw headline
    y_pos = 400
    for line in headline_lines:
        bbox = draw.textbbox((0, 0), line, font=font_headline)
        text_width = bbox[2] - bbox[0]
        x = (PIN_WIDTH - text_width) // 2
        draw.text((x, y_pos), line, fill=COLORS['white'], font=font_headline)
        y_pos += 90
    
    # Draw subtext
    y_pos += 80
    for line in subtext_lines:
        bbox = draw.textbbox((0, 0), line, font=font_subtext)
        text_width = bbox[2] - bbox[0]
        x = (PIN_WIDTH - text_width) // 2
        draw.text((x, y_pos), line, fill=COLORS['text_gray'], font=font_subtext)
        y_pos += 50
    
    # Draw CTA button
    y_pos += 120
    button_width = 500
    button_height = 80
    button_x = (PIN_WIDTH - button_width) // 2
    
    # Button background
    draw.rounded_rectangle(
        [button_x, y_pos, button_x + button_width, y_pos + button_height],
        radius=12,
        fill=accent_color
    )
    
    # Button text
    bbox = draw.textbbox((0, 0), pin_data['cta'], font=font_cta)
    text_width = bbox[2] - bbox[0]
    text_x = (PIN_WIDTH - text_width) // 2
    text_y = y_pos + (button_height - 50) // 2
    draw.text((text_x, text_y), pin_data['cta'], fill=COLORS['white'], font=font_cta)
    
    # Draw Eonati branding at bottom
    brand_y = PIN_HEIGHT - 150
    bbox = draw.textbbox((0, 0), 'Eonati', font=font_brand)
    text_width = bbox[2] - bbox[0]
    brand_x = (PIN_WIDTH - text_width) // 2
    draw.text((brand_x, brand_y), 'Eonati', fill=COLORS['white'], font=font_brand)
    
    # Tagline
    tagline = 'Find elite Fiverr Pro designers'
    bbox = draw.textbbox((0, 0), tagline, font=font_subtext)
    text_width = bbox[2] - bbox[0]
    tagline_x = (PIN_WIDTH - text_width) // 2
    draw.text((tagline_x, brand_y + 45), tagline, fill=COLORS['text_gray'], font=font_subtext)
    
    # Save
    output_path = os.path.join(OUTPUT_DIR, pin_data['filename'])
    img.save(output_path, 'JPEG', quality=90)
    print(f"  ✓ Saved: {output_path}")
    
    return output_path


def main():
    print("=" * 60)
    print("EONATI PIN IMAGE GENERATOR")
    print("=" * 60)
    print(f"Output: {OUTPUT_DIR}")
    print(f"Pins to create: {len(PINS)}")
    print(f"Dimensions: {PIN_WIDTH}x{PIN_HEIGHT}px")
    print("=" * 60)
    print()
    
    created = []
    for pin in PINS:
        path = create_pin(pin)
        created.append(path)
        print()
    
    print("=" * 60)
    print("COMPLETE")
    print(f"Created: {len(created)} pin images")
    print(f"Location: {OUTPUT_DIR}")
    print("=" * 60)
    
    return created


if __name__ == '__main__':
    main()
