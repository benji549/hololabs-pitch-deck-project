# Hololabs Studio pitch decks

Website with the Hololabs pitch decks, originally built in Lovable.
Working on it with Claude? Start with `CLAUDE.md`, which has the full project context.

| Page | Deck |
| --- | --- |
| `/` and `/xr-format` | Atrium mixed reality format deck |
| `/services` | Hololabs services deck |

Built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer).

```sh
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:8080
```

## Publish it

```sh
npm run build    # creates the finished site in the "dist" folder
```

Upload the contents of `dist` to any static host. With Netlify Drop, drag the
`dist` folder onto https://app.netlify.com/drop. The `public/_redirects` file
makes links like `/services` work on Netlify.

## Images and videos

- Images live in `src/assets`, and downloadable PDFs and the two short videos in `public`.
- Files named `*.asset.json` are leftovers from Lovable: small notes pointing to
  files Lovable stored on its own servers. If a real file with the same name sits
  next to the note (for example `motion-seats.png` beside
  `motion-seats.png.asset.json`), the site uses the real file. Otherwise it loads
  the file from the live Lovable site (see `LOVABLE_ASSET_ORIGIN` in `vite.config.ts`).
  Right now that applies only to the 2026 showreel video.
- Images are compressed automatically when the site is built.
