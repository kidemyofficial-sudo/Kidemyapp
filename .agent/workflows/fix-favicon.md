---
description: How to fix and optimize favicon scaling issues
---

# Fix Favicon Scaling

This workflow explains how to fix favicons that appear too small due to excessive padding and how to optimize them for modern browsers.

## Steps

1. **Verify Image Padding**
   Open the favicon image (e.g., `src/assets/faviconkidemy.webp`) in the browser or an editor to see if there is large empty space around the icon.

2. **Crop the Image**
   Run the cropping script to remove invisible padding:
   // turbo
   ```powershell
   python remove_padding.py
   ```

3. **Update index.html**
   Ensure the favicon link uses `sizes="any"` and the correct MIME type:
   ```html
   <link rel="icon" type="image/webp" sizes="any" href="/src/assets/faviconkidemy.webp" />
   ```

4. **Clear Browser Cache**
   Favicons are heavily cached. Hard-refresh the page (Ctrl+F5) or use an Incognito window to see the changes.
