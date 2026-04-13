# Verity

Formally verified Ethereum consensus client, built with Lean 4 by [Nyx Foundation](https://github.com/NyxFoundation).

> **Note:** Verity is currently under active development and has not been released.

## About

Verity is an Ethereum Lean Consensus client that uses formal verification (Lean 4) to mathematically prove correctness, eliminating the gap between specification and implementation.

## Site

This repository contains the static website for Verity.

- `index.html` — Single-file static site (HTML + CSS + JS)
- `og-image.png` — Open Graph image for social sharing

### Deploy

The site can be deployed to any static hosting provider (GitHub Pages, Vercel, Netlify, etc.).

**Before deploying**, update the OGP meta tags in `index.html` with your actual domain:

```html
<meta property="og:image" content="https://your-domain.com/og-image.png" />
<meta property="og:url" content="https://your-domain.com/" />
```

### GitHub Pages

1. Go to **Settings → Pages**
2. Set source to **Deploy from a branch**
3. Select **main** branch, root `/`
4. Save

## License

MIT
