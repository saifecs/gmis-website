# GREENMARK Integrated Services – Website

Official website for **GREENMARK Integrated Services** (شركة جرينمارك إنتجريتد سيرفيسز). Built from the Company Profile 2026, Commercial Registration, and brand kit.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fonts:** Montserrat (headings), Inter (body)

## Brand

- **Primary green:** `#1F5D3B`
- **Dark green:** `#123524`
- **Concrete gray:** `#5A5A5A`
- **Sand accent:** `#C8A96A`
- **Tagline:** Building the Future of Outdoor Environments

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Sitemap

- Home  
- About (Vision, Mission, Founder, Timeline, Values)  
- Services (overview + Landscaping, Concrete & Hardscape, Irrigation, Maintenance)  
- Projects (case studies)  
- Sectors  
- HSEQ  
- Sustainability  
- Contact (KSA + Canada, contact form)  
- Privacy (placeholder)

## SEO

- Meta title and description on all pages
- `sitemap.xml` at `/sitemap.xml` (set `base` in `src/app/sitemap.ts` to your production domain)
- English keywords as per brand kit; Arabic keywords can be added in meta or `ar` locale later

## Arabic / RTL

Design tokens include `font-heading-ar` (Cairo) and `body-ar` (IBM Plex Sans Arabic). To add Arabic:

1. Add Cairo and IBM Plex Sans Arabic in `layout.tsx`
2. Use `[locale]` dynamic segment and serve `en` / `ar` with `dir` and `lang` set per locale
3. Duplicate or translate content in `src/lib/content.ts` and page files

## Contact (from spec)

- **KSA:** Riyadh · +966 54 292 2256 · info@gmis.sa  
- **Canada:** Calgary · +1 403-614-8476 · www.easylandscape.ca  

Commercial Registration: 7053403460
