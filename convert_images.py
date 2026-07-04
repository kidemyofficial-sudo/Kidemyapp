import os
from PIL import Image

def convert_to_webp(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".png"):
            png_path = os.path.join(directory, filename)
            webp_path = os.path.join(directory, filename.rsplit('.', 1)[0] + ".webp")
            
            with Image.open(png_path) as img:
                img.save(webp_path, "webp")
            print(f"Converted {filename} to {os.path.basename(webp_path)}")

if __name__ == "__main__":
    assets_dir = r"c:\Users\HP\Documents\kidemyweb\src\assets"
    convert_to_webp(assets_dir)
