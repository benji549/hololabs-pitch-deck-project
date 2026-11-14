# Project context for Claude

Hololabs Studio's pitch-deck website. It was built in Lovable and moved out of Lovable
on 2026-11-13 so the team can keep working on it with Claude and host it anywhere.
The people working on it are not developers: explain things in plain language, give
click-by-click steps, and show screenshots or previews of changes.

## What the site is

A React + Vite + TypeScript + Tailwind (shadcn/ui) app with two slide decks:

| Route | Deck | Slide list |
| --- | --- | --- |
| `/` and `/xr-format` | Atrium mixed-reality format deck (13 slides) | `src/components/slides/xrSlideData.ts` |
| `/services` | Hololabs services deck (9 slides) | `src/components/slides/slideData.ts` |

Each slide is one component in `src/components/slides/` (Atrium slides are in `xr/`).
`AGENTS.md` has the architecture notes Lovable kept. Keep `.lovable/` as it is.

## Commands

```sh
npm install
npm run dev          # http://localhost:8080 (if "::" fails in a sandbox: npx vite --host 127.0.0.1)
npm run build        # production site in dist/
npx vitest run       # 15 tests, all passing at handoff
```

## How images and videos work (important)

- Lovable kept some files on its own servers and left `*.asset.json` pointer files in
  the project. The `localAssetPointers` plugin in `vite.config.ts` uses a real file
  saved next to the pointer (e.g. `motion-seats.png` beside `motion-seats.png.asset.json`,
  any image/video extension). If there is no local copy, it falls back to the live Lovable
  site (`LOVABLE_ASSET_ORIGIN = https://atrium.hololabs.studio`).
- Every image the decks use now has a local copy. Pointers without local copies are unused
  leftovers, except the one below.
- **Still missing locally: `src/assets/hololabs-showreel-2026.mp4` (about 25 MB)**, used as the
  background of slide 1 in both decks. It currently streams from the Lovable site, which
  stops working once that domain moves. Ask the team for the file and save it next to
  its pointer.
- `src/assets/slides/abyss-vault-flythrough-v2.mp4` (30 MB) and `atrium-iaapa-europe.mp4` (60 MB)
  are web-compressed versions of the 162 MB and 84 MB originals (visually near-identical).
- Slide 13 (Abyss Vault trailer) embeds Vimeo; `hololabs-demo.mp4` is not used anywhere.
- Images are compressed at build time by `vite-plugin-image-optimizer`; sources are untouched.
- Team slide photos (Mike, Brett, Jamie, Rob) were checked and confirmed correct by the team.

## Private preview (Claude artifact)

A private preview was published as a Claude artifact owned by Benji:
https://claude.ai/artifact/Y8VvSn2PvMChUdGfDu3TAm

Preview builds differ from the real site because artifacts run in a sandbox:

```sh
VITE_PREVIEW=true npx vite build --base ./ --outDir dist-preview
```

- `VITE_PREVIEW=true` swaps in `src/PreviewRouter.tsx`: decks switch with `#atrium` /
  `#services` plus a small deck switcher, because artifacts cannot use page paths.
- Artifact limits: 20 MiB per file, 64 MiB total, no PDFs, no external hosts or iframes.
  Before publishing, delete `dist-preview/*.pdf`, `_redirects` and `placeholder.svg`, and
  replace each video in `dist-preview` with a smaller copy (720p-1600px wide, H.264, CRF 25-26)
  under the same file name. Vimeo and Lovable-hosted media stay blank in previews.

## Publishing (not done yet)

The plan is Netlify (or any static host): `npm run build`, then drag `dist/` onto
https://app.netlify.com/drop and claim the site with a Netlify account.
`public/_redirects` makes `/services` work on Netlify. The live site is still on Lovable at
https://atrium.hololabs.studio. Before pointing that domain at the new host, add the
showreel locally (see above). An older services site also exists at attractions.hololabs.studio.

## Open items at handoff

1. Get `hololabs-showreel-2026.mp4` from the team and add it next to its pointer.
2. Team review of the preview, then content changes the managers want.
3. Publish (Netlify) and move the `atrium.hololabs.studio` domain when ready.
