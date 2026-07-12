# Knot Your Kind — Official Website

**weareknotyourkind.com**

A Tribute to Slipknot. Performing across the Carolinas.

---

## Design system

Implemented from the **Knot Your Kind Design System** (Claude Design):

- Source project: [claude.ai/design](https://claude.ai/design/p/e3a90c83-eae4-4aad-8184-0dfaf21ccb30?file=ui_kits%2Fwebsite%2Findex.html)
- Visual direction: **The Fabrication Drawing** — graphite on drafting paper, dimensioned sheets, title blocks, inspection stamps
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
- **Assets**: `/assets/` (graphite sketches used by the live site)
- **Shows / booking sections**: removed per ECO-010 / ECO-011 in the design system

## Tech Stack
- Static HTML + React 18 (CDN) + design-system bundle
- Google Fonts (Share Tech Mono, Oswald)
- GitHub Pages hosting · custom domain `weareknotyourkind.com`
