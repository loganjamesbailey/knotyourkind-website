# Knot Your Kind — Official Website

**weareknotyourkind.com**

A Slipknot Experience. Experience the (sic)ness.

---

## Design system

Restyled in place from the existing Knot Your Kind website kit:

- Visual direction: late-90s/2000s nu-metal poster, cleaned up — black canvas, white type, blood-red hits
- Colors: `#000` / `#FFF` / `#D2232A` plus deep `#8E1D21`, pure `#FF0000`, nav hover `#FF3900`, nav active `#F00000`, read-more hover `#A50000`
- Surfaces: dropdown `#1B1B1B`, popup `#2A2A2A`, chip `#333`
- Type: **Anybody 700**, uppercase labels/headlines, H1 line-height 1; Arial only on email fields
- Radius: **0**. No drop shadow. Logo / wordmark / nonagram are image assets only
- Tagline: **A Slipknot Experience** — never Tribute, never Kinda
- Rhythm: bumper hero (`#home`) → charcoal About → logotype drawing → crow bleed → Tribal S drawing → charcoal Members → vignetted promo → Iowa bleed → join → footer
- Footer legal (exact): `© 2024 KNOT YOUR KIND, LLC. ALL RIGHTS RESERVED.`
- UI kit: `ui_kits/website/` — one James media hit per section (plate / bumper / promo / Iowa bleed)
- Stills: `assets/james-site/` · motion: `media/`
- Tokens: `tokens/` · components: `components/` · runtime: `_ds_bundle.js`
- Audition form: `form.config.js` → FormSubmit.co → `jbaile07@me.com`

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
# http://localhost:8080/
# #home bumper · #about charcoal · #logotype · #mark crow · #tribal-s · #the-one · #reel · #territory · #join
```

### 4. Audition form email (required before live delivery)
The join form is wired to **FormSubmit.co** (`form.config.js`). No API key.

1. Open http://localhost:8080/#join
2. Submit a small test clip (mp4/mov/webm/mp3/wav/m4a, **max 10 MB**).
3. FormSubmit emails **jbaile07@me.com** a one-time activation link. James must click it.
4. After activation, later submissions (name, position, message, file) arrive at that inbox.

Until that confirmation, the form posts but **does not deliver**. That is FormSubmit’s activation step, not a silent success.

To use another relay instead, edit `form.config.js`:
- **Formspree:** `provider: 'formspree'`, `endpoint: 'https://formspree.io/f/YOUR_FORM_ID'` (file uploads need a paid Formspree plan)
- **Getform:** `provider: 'getform'`, `endpoint: 'https://getform.io/f/YOUR_FORM_ID'`
- **Web3Forms:** `provider: 'web3forms'`, `accessKey: 'YOUR_ACCESS_KEY'`

Do not leave those fields blank and assume email works.

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
