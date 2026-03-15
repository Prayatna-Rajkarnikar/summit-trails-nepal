# Summit Trails Nepal — CLAUDE.md

## Project Overview

A portfolio landing page for a fictional Nepali trekking agency called **Summit Trails Nepal**.
This is a freelance showcase project — the goal is to impress international clients (US, UK, AU)
with design quality, smooth animations, and professional structure.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Language**: TypeScript

## Project Structure

```
/app
  layout.tsx          ← root layout, fonts, metadata
  page.tsx            ← main landing page (imports all sections)
  /components
    Navbar.tsx
    Hero.tsx
    Tours.tsx
    WhyUs.tsx
    Testimonials.tsx
    Gallery.tsx
    Contact.tsx
    Footer.tsx
  /lib
    tours.ts          ← tour data (name, price, duration, image, difficulty)
    testimonials.ts   ← fake testimonial data
```

## Design Direction

- **Aesthetic**: Luxury mountain / editorial travel — dark, dramatic, premium feel
- **Colors**:
  - Background: `#0a0a0a` (near black)
  - Primary accent: `#C9A84C` (golden / mountain sun)
  - Text: `#F5F0E8` (warm white)
  - Muted: `#6B6B6B`
- **Fonts**:
  - Display/headings: `Playfair Display` (serif, elegant)
  - Body: `DM Sans` (clean, modern)
- **Tone**: Aspirational, adventurous, trustworthy

## Sections (Build in This Order)

1. **Navbar** — sticky, transparent → solid on scroll, logo + links + "Book Now" CTA
2. **Hero** — fullscreen, Nepal mountain background image (Unsplash), large headline, scroll CTA
3. **Tours** — 3 featured trek cards (Everest Base Camp, Annapurna Circuit, Langtang Valley)
4. **WhyUs** — 4 trust icons (Licensed Guides, Small Groups, Safety First, Custom Itineraries)
5. **Testimonials** — 3 cards with name, country, star rating, short review
6. **Gallery** — masonry or grid layout, 6–8 Nepal photos from Unsplash
7. **Contact** — simple form (name, email, message, desired trek) + WhatsApp CTA
8. **Footer** — logo, nav links, socials, copyright

## Animation Guidelines (Framer Motion)

- Use `fadeInUp` variant for all section entries
- Stagger children in card grids (Tours, WhyUs, Testimonials)
- Hero text: staggered word/line reveal on load
- Navbar: blur + shadow transition on scroll
- Keep animations subtle — this is a luxury brand, not a game

### Reusable Variants

```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
```

## Tour Data (use in Tours.tsx)

```ts
export const tours = [
  {
    name: "Everest Base Camp",
    duration: "14 Days",
    difficulty: "Challenging",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    description:
      "Trek to the foot of the world's highest mountain through Sherpa villages and breathtaking Himalayan scenery.",
  },
  {
    name: "Annapurna Circuit",
    duration: "12 Days",
    difficulty: "Moderate",
    price: "$999",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    description:
      "A classic loop through diverse landscapes — from subtropical forests to high-altitude desert plateaus.",
  },
  {
    name: "Langtang Valley",
    duration: "9 Days",
    difficulty: "Moderate",
    price: "$799",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    description:
      "Nepal's closest trek from Kathmandu — lush valleys, glaciers, and the warm hospitality of Tamang culture.",
  },
];
```

## Testimonials (use in Testimonials.tsx)

```ts
export const testimonials = [
  {
    name: "James Carter",
    country: "United Kingdom",
    rating: 5,
    text: "Absolutely life-changing experience. The guides were professional, the itinerary was perfect, and the views were beyond anything I imagined.",
  },
  {
    name: "Sarah Mitchell",
    country: "United States",
    rating: 5,
    text: "Summit Trails made everything seamless. I was nervous as a solo traveler but felt completely safe and supported the whole time.",
  },
  {
    name: "Lena Hoffmann",
    country: "Germany",
    rating: 5,
    text: "The Annapurna Circuit was a dream. Small group, expert guide, and they handled every detail. Already planning my next trek with them!",
  },
];
```

## Image Sources (Unsplash — free, no attribution required)

Use these search terms on unsplash.com:

- Hero: `nepal himalayas dramatic`
- Gallery: `everest base camp trek`, `annapurna nepal`, `nepal mountain village`, `sherpa nepal`

## Key Rules

- Mobile-first — design for mobile, scale up to desktop
- All images must have `alt` text
- Contact form does NOT need to actually submit — just UI for now
- No auth, no database, no CMS needed
- Keep bundle size lean — no heavy libraries beyond Framer Motion

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # lint check
```

## Goal

When complete, this site should look good enough that a real trekking agency
would pay $500–$1,500 USD to have it built for them. Every section should feel
intentional, polished, and premium.
