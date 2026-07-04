import os
from PIL import Image

def trim_image(image_path):
    print(f"Processing {image_path}...")
    img = Image.open(image_path)
    
    # Handle transparency
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
        
    # Get bounding box of non-transparent pixels
    bbox = img.getbbox()
    
    if bbox:
        # Add a small margin (e.g., 2 pixels)
        margin = 2
        left = max(0, bbox[0] - margin)
        top = max(0, bbox[1] - margin)
        right = min(img.width, bbox[2] + margin)
        bottom = min(img.height, bbox[3] + margin)
        
        trimmed_img = img.crop((left, top, right, bottom))
        trimmed_img.save(image_path, "webp")
        print(f"Successfully trimmed {image_path}")
    else:
        print(f"No content found in {image_path}, skipping.")

if __name__ == "__main__":
    base_dir = r"c:\Users\HP\Documents\kidemyweb\src\assets"
    files_to_trim = ["logo-kidemy.webp", "faviconkidemy.webp"]
    
    for filename in files_to_trim:
        path = os.path.join(base_dir, filename)
        if os.path.exists(path):
            trim_image(path)
        else:
            print(f"File not found: {path}")
