# Knot Your Kind — Official Website

**weareknotyourkind.com**

A Slipknot Experience. Experience the (sic)ness.

---

## Design system

Restyled in place from the existing Knot Your Kind website kit:

- Visual direction: **locked brand** — black sheet, white ink, red stamp (`#000` / `#FFF` / `#D2232A`)
- Type: **Anybody 700** only
- Radius: **0** on every corner
- Tagline: **A Slipknot Experience** — never Tribute
- UI kit: `ui_kits/website/` (hero sheet, about BOM, Tribal S detail, Part #8 frame assembly)
- Tokens: `tokens/` · components: `components/` · runtime: `_ds_bundle.js`

---

## Deploying to GitHub Pages

### 1. Enable GitHub Pages
- Repository **Settings** → **Pages**
- Source: **Deploy from a branch** → `main` / **/** (root)
- Custom domain: `weareknotyourkind.com` · Enforce HTTPS

### 2. DNS (at your registrar)
**A records** for apex:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
**CNAME** for www → `yourusername.github.io`

### 3. Local preview
```bash
python3 -m http.server 8080
# open http://localhost:8080/
```

---

## Customization

- **Social / booking**: `ui_kits/website/Chrome.jsx` (nav Book Us + footer links) — rebuild is reflected in `_ds_bundle.js` for the live site
- **About BOM copy**: `ui_kits/website/AboutBom.jsx`
- **Hero / Part #8 / Tribal S**: matching files under `ui_kits/website/`
- **Assets**: `/assets/` (sketches invert to white ink on the black sheet)
- **Shows / booking sections**: removed per ECO-010 / ECO-011 in the design system

## Tech Stack
- Static HTML + React 18 (CDN) + design-system bundle
- Google Fonts (Anybody 700)
- GitHub Pages hosting · custom domain `weareknotyourkind.com`
