# Knot Your Kind — Official Website

**weareknotyourkind.com**

A Tribute to Slipknot. Performing across the Carolinas.

---

## Deploying to GitHub Pages

### 1. Create the Repository
- Go to [github.com](https://github.com) and create a new repository
- Name it whatever you want (e.g., `knotyourkind-website`)
- Make it **Public**

### 2. Upload Files
- Upload ALL files from this folder to the repository, keeping the folder structure:
  ```
  index.html
  CNAME
  images/
    ├── 0.png through 8.png (member photos)
    ├── 202_sic__poster.PNG
    ├── nonagram_logo.png
    ├── knot_your_logo_smooth_matte.png
    ├── knot_your_logo_jagged.png
    ├── kyk_new_logo.png
    ├── phonto-3.png
    └── atribte_to_slipknot.PNG
  ```

### 3. Enable GitHub Pages
- Go to repository **Settings** → **Pages**
- Under "Source", select **Deploy from a branch**
- Choose **main** branch and **/ (root)** folder
- Click **Save**

### 4. Configure Custom Domain
- In the same Pages settings, under "Custom domain", enter: `weareknotyourkind.com`
- Check "Enforce HTTPS"

### 5. DNS Configuration (at your domain registrar)
Add these DNS records for `weareknotyourkind.com`:

**A Records** (point to GitHub Pages IPs):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (for www subdomain):
```
www → yourusername.github.io
```

### 6. Wait & Verify
- DNS propagation can take up to 24-48 hours
- GitHub will automatically provision an SSL certificate

---

## Customization Notes

- **Shows section**: Edit the `show-list` div in index.html to add upcoming dates
- **Social links**: Update the Facebook, Instagram, YouTube, and TikTok URLs
- **Contact form**: Currently client-side only — consider adding Formspree or Netlify Forms for actual email delivery
- **Images**: All images are in the `/images` directory

## Tech Stack
- Pure HTML/CSS/JS (no build tools needed)
- Google Fonts (Bebas Neue, Oswald, Barlow Condensed)
- Font Awesome 6 icons
- GitHub Pages hosting
