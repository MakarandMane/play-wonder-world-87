## Goal

Make the hero section corporate and closer to the reference kindergarten template: a full-bleed photographic band with a colored brand overlay, centered headline and CTA — instead of the current pastel gradient panel.

## What changes

**1. Hero background image**
- Generate a wide (1920x1080) photographic-style background: bright, clean children's play/learning scene with puzzles, wooden toys and flash cards on a light table, soft natural light, plenty of open space in the centre for text.
- Save it as `assets/hero.jpg` in both `public/site/assets/` and `docs/assets/`.

**2. Hero layout (like the reference)**
- Full-bleed background image, `background-size: cover`, centred, min-height around 78vh on desktop.
- Brand-blue gradient overlay on top (`#32409A` at ~72% fading to ~55%), keeping it light and airy rather than the reference's heavy pink — text stays clearly legible.
- Content centred: small uppercase eyebrow "Play. Learn. Grow.", the H1 "The Puzzl Co", the lede paragraph, then the two pill buttons. Copy stays exactly as it is now.
- Buttons: primary becomes a white/yellow pill for contrast on the photo; secondary becomes an outlined white pill.
- Header: transparent over the hero at the top of the page, turning solid white on scroll (small addition to the existing scroll handler in `script.js`); logo switches to a white version while transparent.
- Soft-white curved divider at the bottom of the hero so the product cards still lift over it.
- Floating puzzle-piece decorations kept, but at low white opacity so they read as texture rather than clip art.

**3. Responsive**
- On mobile the hero reduces to ~64vh, type scales down, buttons stack full-width.

## Technical notes

- Files touched: `public/site/index.html`, `public/site/styles.css`, `public/site/script.js`, plus a new `public/site/assets/hero.jpg`; the whole folder is then mirrored to `docs/` as before.
- No content text is changed, and no other section is touched.
- Verified with a headless browser screenshot at desktop and mobile widths before handing back.
