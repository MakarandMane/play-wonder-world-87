import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Puzzl Co — Puzzles & Educational Toys for Kids" },
      {
        name: "description",
        content:
          "Thoughtfully designed puzzles and educational toys that inspire curiosity, creativity, and confident learning. Play. Learn. Grow.",
      },
      { property: "og:title", content: "The Puzzl Co — Play. Learn. Grow." },
      {
        property: "og:description",
        content:
          "Thoughtfully designed puzzles and educational toys that inspire curiosity, creativity, and confident learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The site is authored as plain HTML/CSS/JS in `public/site/` so it can be
// hosted directly on GitHub Pages. It is embedded here for the preview.
function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="The Puzzl Co"
      style={{ border: 0, width: "100%", height: "100vh", display: "block" }}
    />
  );
}
