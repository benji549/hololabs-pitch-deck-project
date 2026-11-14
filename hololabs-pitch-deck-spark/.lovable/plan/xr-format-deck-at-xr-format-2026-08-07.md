# XR Format Deck at /xr-format

A second presentation deck built from the uploaded "Mixed reality concepting" PDF, styled exactly like the existing Hololabs Services deck — same dark teal-accented palette, Space Grotesk headings, kicker/headline/body rhythm, fade-up animations, and the same navigation shell (arrows, dots, grid overview, fullscreen).

## Deck structure (11 slides)

1. **Showreel** — reuse the existing video-backed opener.
2. **The Format** — "Theme-park quality extended reality, at free roam VR prices." Intro paragraph plus the five pillars (Walk through the story, Touch the virtual world, Impossible but real environments, Built for rotating content, Fit for many venues) with the room-layout diagram alongside.
3. **Why Now** — three market signals: sector growth (USD 7.04B in 2026 to USD 31.71B by 2034), technology inflection point (new standalone processors, Pico Swan micro-OLED), audience response (millions of tickets, hundreds of millions in revenue).
4. **The Challenges** — throughput vs. footprint vs. interactivity, demand for multi-attraction visits, poor VR impressions from uneven quality.
5. **Guest Journey** — Pre-Experience, Experience, Post-Experience as three stages with the supporting detail.
6. **Room Flow** — the 18m x 6m layout: MR entry every 10 min, two 20-min VR rooms, D-BOX 10 min, MR finish. Recreated as a styled diagram rather than a pasted screenshot.
7. **What We Need** — customers to license, venues to host, coproducers to share CapEx and profits.
8. **Three Productions** — Abyss Vault MR, Become the Monster, WalkThruMusic.
9. **Team** — "Hololabs is uniquely positioned for this Mixed Reality format." The founder narrative from the attached slide (Mike Wozniewski built the intelligent systems behind MarioKart: Bowsers Challenge, 1440 guests per hour, ongoing Universal work under NDA; Abyss Vault in 2026; now seeking partners) paired with three leadership cards:
   - Mike Wozniewski — Founder
   - Brett Gaylor, Ph.D. — VP Creative. Peabody Award winning Creative Director with 20 years of immersive media and feature film productions.
   - Jamie Toghill — VP Operations. Executive Producer of more than 20 titles at Electronic Arts, including Tron: Legacy and FIFA 2021.

   Each card uses a circular headshot placeholder (initials on a muted token background) until real photos are supplied.
10. **Together, We Can** — elevate the mixed reality quality bar, prove small spaces deliver, serve markets high-throughput free roam cannot reach.
11. **Contact** — reuse the existing contact slide.


All copy comes verbatim (or lightly tightened) from the PDF. No figures are invented.

## Source citations

Each slide that carries claims from the PDF gets one compact footnote line pinned to the bottom of the slide, listing the source domains (e.g. "Sources: Fortune Business Insights, UploadVR, Sandbox VR, PR Newswire"). Styled as small muted chrome text so it never competes with the slide content.

## Room-layout diagram

Rebuilt in HTML/CSS using the project's design tokens instead of importing the PDF's pink/green screenshot: a dark 18m x 6m frame with labelled VR / MR / D-BOX zones, duration tags, and dimension labels in the deck's teal accent. Used on both the Format slide (small) and the Room Flow slide (large).

## Technical details

- New route `/xr-format` added in `src/App.tsx`, rendering a new page that mounts the existing `Presentation` component.
- `Presentation` is generalized to accept a `slides` prop, defaulting to the current deck so `/` is unchanged. `ScaledSlide`, keyboard nav, grid view, and fullscreen are reused as-is.
- New `src/components/slides/xr/` folder with one component per slide, each wrapping the existing `SlideLayout`, plus a shared `RoomDiagram` component and a `SourceNote` footnote component.
- New `src/components/slides/xrSlideData.ts` registry mirroring the shape of `slideData.ts`.
- No new colors or fonts; everything uses existing semantic tokens from `index.css`.
- No backend, no new dependencies.

## Open item

The PDF slides have no photography of their own. Slides will use existing project background imagery and the video assets already in `public/videos/`. Leadership headshots on the Team slide render as initial-based placeholders until you upload real photos. If you have concept art for Abyss Vault MR, Become the Monster, or WalkThruMusic, upload it and it will replace the placeholder treatment on the productions slide.
