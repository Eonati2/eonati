#!/usr/bin/env python3
"""
Eonati Video Pin Generator
Creates 5 Pinterest video pins (1080x1920, 15-30 seconds) using FFmpeg + Edge TTS
Zero budget, unlimited, local generation
"""

import os
import subprocess
from datetime import datetime

OUTPUT_DIR = '/Users/bmoni/eonati/pins/videos'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Video scripts for 5 video pins
VIDEO_SCRIPTS = [
    {
        'filename': 'video_001_no_one_bought.mp4',
        'script': 'No one bought... until this logo changed.',
        'duration': 15,
        'angle': 'transformation',
        'designer': 'alestra',
    },
    {
        'filename': 'video_002_cheap_logos.mp4',
        'script': 'Cheap logos cost trust. Invest in your first impression.',
        'duration': 15,
        'angle': 'trust',
        'designer': 'alestra',
    },
    {
        'filename': 'video_003_judge_seconds.mp4',
        'script': 'Customers judge your business in seconds. Make it count.',
        'duration': 15,
        'angle': 'first_impression',
        'designer': 'juhi',
    },
    {
        'filename': 'video_004_startup_premium.mp4',
        'script': 'Startup to premium brand overnight. Professional logo design from 23 euros.',
        'duration': 20,
        'angle': 'startup',
        'designer': 'juhi',
    },
    {
        'filename': 'video_005_pushing_away.mp4',
        'script': 'Your logo may be pushing buyers away. Find out if yours is.',
        'duration': 15,
        'angle': 'warning',
        'designer': 'valeriia',
    },
]


def generate_voiceover(script, output_path, voice='en-US-ChristopherNeural'):
    """Generate voiceover using Edge TTS"""
    print(f"    Generating voiceover...")
    
    cmd = [
        'edge-tts',
        '--text', script,
        '--voice', voice,
        '--write-media', output_path,
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"    ✓ Voiceover saved: {output_path}")
        return True
    else:
        print(f"    ✗ Voiceover failed: {result.stderr}")
        return False


def create_video_pin(video_data):
    """Create a single video pin"""
    print(f"  Creating {video_data['filename']}...")
    
    audio_path = os.path.join(OUTPUT_DIR, f"audio_{video_data['filename'].replace('.mp4', '.mp3')}")
    output_path = os.path.join(OUTPUT_DIR, video_data['filename'])
    
    # Step 1: Generate voiceover
    if not generate_voiceover(video_data['script'], audio_path):
        return None
    
    # Step 2: Create solid color background image using Pillow
    bg_path = os.path.join(OUTPUT_DIR, f"bg_{video_data['filename'].replace('.mp4', '.png')}")
    
    from PIL import Image, ImageDraw, ImageFont
    
    # Get color based on designer
    colors = {
        'alestra': '#2563EB',
        'juhi': '#60A5FA',
        'valeriia': '#F59E0B',
    }
    bg_color = colors.get(video_data['designer'], '#0B1020')
    
    # Create background image
    img = Image.new('RGB', (1080, 1920), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Add text
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 56)
    except:
        font = ImageFont.load_default()
    
    # Text wrapping
    text = video_data['script']
    lines = []
    words = text.split()
    current_line = ""
    for word in words:
        test_line = f"{current_line} {word}".strip()
        bbox = draw.textbbox((0, 0), test_line, font=font)
        if bbox[2] - bbox[0] < 900:
            current_line = test_line
        else:
            if current_line:
                lines.append(current_line)
            current_line = word
    if current_line:
        lines.append(current_line)
    
    # Draw text centered
    total_height = len(lines) * 70
    y = (1920 - total_height) // 2
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        text_width = bbox[2] - bbox[0]
        x = (1080 - text_width) // 2
        draw.text((x, y), line, fill='#FFFFFF', font=font)
        y += 70
    
    img.save(bg_path)
    
    # Step 3: Combine image + audio into video
    cmd = [
        'ffmpeg', '-y',
        '-loop', '1',
        '-i', bg_path,
        '-i', audio_path,
        '-c:v', 'libx264',
        '-tune', 'stillimage',
        '-c:a', 'aac',
        '-b:a', '192k',
        '-pix_fmt', 'yuv420p',
        '-shortest',
        output_path,
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"  ✓ Video saved: {output_path}")
        
        # Cleanup temp files
        if os.path.exists(audio_path):
            os.remove(audio_path)
        if os.path.exists(bg_path):
            os.remove(bg_path)
        
        return output_path
    else:
        print(f"  ✗ Video failed: {result.stderr}")
        return None


def main():
    print("=" * 60)
    print("EONATI VIDEO PIN GENERATOR")
    print("=" * 60)
    print(f"Output: {OUTPUT_DIR}")
    print(f"Videos to create: {len(VIDEO_SCRIPTS)}")
    print(f"Dimensions: 1080x1920px (9:16 vertical)")
    print("=" * 60)
    print()
    
    # Check for required tools
    try:
        subprocess.run(['edge-tts', '--version'], capture_output=True, check=True)
        print("✓ Edge TTS found")
    except:
        print("✗ Edge TTS not found. Install with: pip install edge-tts")
        return []
    
    try:
        subprocess.run(['ffmpeg', '-version'], capture_output=True, check=True)
        print("✓ FFmpeg found")
    except:
        print("✗ FFmpeg not found. Install with: brew install ffmpeg")
        return []
    
    print()
    
    created = []
    for video in VIDEO_SCRIPTS:
        path = create_video_pin(video)
        if path:
            created.append(path)
        print()
    
    print("=" * 60)
    print("COMPLETE")
    print(f"Created: {len(created)}/{len(VIDEO_SCRIPTS)} video pins")
    print(f"Location: {OUTPUT_DIR}")
    print("=" * 60)
    
    return created


if __name__ == '__main__':
    main()
