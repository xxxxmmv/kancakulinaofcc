from PIL import Image, ImageDraw, ImageFont
import os

# Create assets directory if it doesn't exist
os.makedirs('assets', exist_ok=True)

# Define images to create
images = [
    ('logo-bulat.png', 200, 200, '#D4A574', 'KC', 30),
    ('kak-kusna.jpg', 450, 300, '#6fa882', 'Kak Kusna\nTumpeng', 24),
    ('dek-ceca.jpg', 450, 300, '#DAA520', 'Dek Ceca\nPecel', 24),
    ('cak-soegi.jpg', 450, 300, '#8B5A2B', 'Cak Soegi\nBakso', 24),
]

try:
    font_large = ImageFont.truetype('/Library/Fonts/Arial.ttf', 30)
    font_medium = ImageFont.truetype('/Library/Fonts/Arial.ttf', 24)
except Exception:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()

for filename, width, height, bg_color, text, font_size in images:
    # Create image with background color
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw text in center
    try:
        font = ImageFont.truetype('/Library/Fonts/Arial.ttf', font_size)
    except:
        font = font_large if font_size >= 24 else font_medium
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    # Center text
    x = (width - text_w) / 2
    y = (height - text_h) / 2
    
    # Draw text
    draw.text((x, y), text, fill='white', font=font)
    
    # Save image
    img_path = os.path.join('assets', filename)
    img.save(img_path)
    print(f'✓ Created: {filename}')

print('\n✓ All placeholder images created successfully!')
print('✓ Website is ready to view!')
