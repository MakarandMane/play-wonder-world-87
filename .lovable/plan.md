## The Puzzl Co — one-page landing site

A single scrolling page at `/` with sticky nav. All copy used verbatim from the Word document — no edits, no invented content.

### Brand system

From the supplied color spec, added as tokens in `src/styles.css`:

- Primary: Blue (Pigment) `#32409A`
- Secondary accents: Light Medium Orchid `#DC94C0`, Mikado Yellow `#FFC20E`, Emerald `#5DBC68`, Halloween Orange `#F26529`
- Soft off-white background, generous rounded corners, chunky friendly type (playful but not childish — roughly a 7/10 on the play scale)
- Subtle puzzle-piece motifs echoing the logo mark as section accents

### Sections (in document order)

1. **Header** — logo (uploaded PNG, via CDN asset), nav links to each section, "Shop on Amazon" button
2. **Hero** — "The Puzzl Co / Play. Learn. Grow." + the intro sentence, Amazon CTA
3. **Who We Are** — the three paragraphs, with 2024 and brand name emphasised as written
4. **Our Products** — three alternating rows, each with its photo from the document:
  - Jigsaw Puzzles (Paris puzzle set photo)
  - Talking Flash Cards (card reader photo)
  - Wooden Toys (wooden board photo)
   Each keeps its exact description text; the doc's image captions become alt text.
5. **Why Parents Choose The Puzzl Co** — the five bullets as accent-coloured cards
6. **Customer Speak** — the three testimonials with attributions, as quote cards
7. **Shop Our Collection** — the line about the Amazon Store plus the button linking to the Amazon store
8. **Contact Us** — no form, just the details block: The Puzzl Co / PMH Consultancy, the Gurgaon address, phone (tel: link), email (mailto: link), CML number
9. **Footer** — logo mark + copyright

### Technical notes

- Logo and the three product photos uploaded as CDN assets (`.asset.json` pointers) rather than committed binaries.
- Brand colours registered as semantic tokens in `@theme inline`; no hardcoded colour classes in components.
- Sections split into small components under `src/components/`.
- SEO head on the index route: title, description, og/twitter tags for The Puzzl Co.
- Fully responsive; light mode only.
- Genarate HTML CSS & JS instead of react components so I can host it on git hub pages

### Open item

The Amazon Store URL wasn't provided, so the CTA will point to a clearly marked placeholder — send me the link and I'll swap it in.