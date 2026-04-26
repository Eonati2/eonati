#!/usr/bin/env python3
"""
EONATI Video Pin Generator
Creates 9:16 vertical videos for Pinterest using FFmpeg + Edge TTS
Generates 5 video pins per day
"""

import os
import subprocess
import random
from pathlib import Path

# Video scripts
SCRIPTS = [
    {
        "hook": "No one bought… until this logo changed.",
        "body": "A professional logo isn't just pretty. It's trust. It's credibility. It's the difference between scroll and stop.",
        "cta": "Find your designer at Eonati",
    },
    {
        "hook": "Cheap logos cost trust.",
        "body": "That $5 logo? Customers see it and think cheap. Unprofessional. Unreliable. Your logo is your first impression. Make it count.",
        "cta": "Get pro design at Eonati",
    },
    {
        "hook": "Customers judge your business in seconds.",
        "body": "75% of people judge your credibility based on design alone. Seconds. That's all you get. What does your logo say?",
        "cta": "Upgrade your brand today",
    },
    {
        "hook": "Startup to premium brand overnight.",
        "body": "The right designer transforms everything. From amateur to authority. From unknown to unforgettable. Your turn.",
        "cta": "Start your transformation",
    },
    {
        "hook": "Your logo may be pushing buyers away.",
        "body": "Bad design screams amateur. Good design whispers premium. Which one is yours? Time to find out.",
        "cta": "See pro designers at Eonati",
    },
]

# Color palettes for backgrounds
COLORS = [
    ("#0B1020", "#FFFFFF"),  # Dark blue bg, white text
    ("#1a1a2e", "#FFFFFF"),  # Navy bg, white text
    ("#16213e", "#FFFFFF"),  # Deep blue bg, white text
    ("#0f3460", "#FFFFFF"),  # Blue bg, white text
    ("#1B262C", "#FFFFFF"),  # Charcoal bg, white text
]

def generate_voiceover(text, output_path):
    """Generate voiceover using Edge TTS"""
    voice = "en-US-ChristopherNeural"
    cmd = [
        "edge-tts",
        "--text", text,
        "--write-media", output_path,
        "--voice", voice,
    ]
    subprocess.run(cmd, check=True)
    return output_path

def create_background_image(width, height, bg_color, output_path):
    """Create solid color background image using Pillow"""
    from PIL import Image, ImageDraw, ImageFont
    
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Save image
    img.save(output_path)
    return output_path

def create_text_overlay(text, width, height, output_path, font_size=48):
    """Create text overlay image"""
    from PIL import Image, ImageDraw, ImageFont
    
    # Create transparent image
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Try to use system font
    try:
        font = ImageFont.truetype("/System/Fonts/Helvetica.ttc", font_size)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Center text
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text with shadow
    draw.text((x+2, y+2), text, fill=(0, 0, 0, 128), font=font)
    draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)
    
    img.save(output_path)
    return output_path

def create_video_pin(script_index, output_dir="./pins/videos"):
    """Create a complete video pin"""
    os.makedirs(output_dir, exist_ok=True)
    
    script = SCRIPTS[script_index]
    bg_color, text_color = COLORS[script_index % len(COLORS)]
    
    print(f"🎬 Creating video {script_index + 1}: {script['hook']}")
    
    # Generate voiceover
    full_text = f"{script['hook']} {script['body']} {script['cta']}"
    voiceover_path = f"{output_dir}/voice_{script_index + 1}.mp3"
    generate_voiceover(full_text, voiceover_path)
    
    # Get audio duration
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", voiceover_path],
        capture_output=True, text=True, check=True
    )
    duration = float(result.stdout.strip())
    
    # Create background image
    bg_path = f"{output_dir}/bg_{script_index + 1}.png"
    create_background_image(1080, 1920, bg_color, bg_path)
    
    # Create text overlays
    hook_path = f"{output_dir}/hook_{script_index + 1}.png"
    create_text_overlay(script['hook'], 1080, 1920, hook_path, font_size=72)
    
    cta_path = f"{output_dir}/cta_{script_index + 1}.png"
    create_text_overlay(script['cta'], 1080, 1920, cta_path, font_size=56)
    
    # Create video with FFmpeg
    output_path = f"{output_dir}/video_{script_index + 1}.mp4"
    
    # Build FFmpeg command
    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", bg_path,
        "-i", voiceover_path,
        "-vf", f"drawtext=text='{script['hook']}':fontsize=72:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2+200",
        "-t", str(duration),
        "-c:v", "libx264",
        "-c:a", "aac",
        "-shortest",
        "-pix_fmt", "yuv420p",
        output_path,
    ]
    
    # Simplified version without complex text rendering
    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", bg_path,
        "-i", voiceover_path,
        "-t", str(duration),
        "-c:v", "libx264",
        "-c:a", "aac",
        "-shortest",
        "-pix_fmt", "yuv420p",
        output_path,
    ]
    
    subprocess.run(ffmpeg_cmd, check=True)
    
    print(f"✅ Video created: {output_path}")
    return output_path

def main():
    print("=" * 60)
    print("EONATI Video Pin Generator")
    print("=" * 60)
    
    # Generate all 5 video pins
    for i in range(5):
        create_video_pin(i)
    
    print("\n✅ All 5 video pins generated!")
    print("📁 Location: ./pins/videos/")
    print("=" * 60)

if __name__ == "__main__":
    main()
