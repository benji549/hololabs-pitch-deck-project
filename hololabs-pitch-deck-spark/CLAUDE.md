Project context for Claude

Hololabs Studio's pitch-deck website. It was built in Lovable and moved out of Lovable on 2026-11-13. The people working on it are not developers: use plain language, give click-by-click steps, show a preview after every change, and never publish, delete or overwrite anything they did not ask for.

How the team works with you (read this first)

The team works in Claude chats in the browser (Cowork), not on their own computers and not through GitHub. Every chat works on its own copy of the project:

Start: clone https://github.com/benji549/hololabs-pitch-deck-project (public). It is the starting copy and is read-only in this workflow: these chats cannot push to GitHub. The site lives in the hololabs-pitch-deck-spark/ folder of the clone; run project commands there.
Restore saved work: if the user attached a changes file (hololabs-changes-*.zip, or its .part-aa, .part-ab… pieces), apply it before anything else (commands below) and tell the user in one line what it contained.
Set up: npm install, then show a private preview of both decks (see Private previews).
Work: make the changes asked for, one at a time, and update the preview after each.
Save: when the user says "save my changes", make a changes file and send it to them as a download. Offer this after any big change and whenever they seem to be wrapping up. The file always holds every change since the GitHub copy, so they only ever need the newest one. Before saving, add a line to the Change log at the end of this file.
Host: when they ask for "the finished site", build it and send hololabs-site.zip (see Publishing).

A chat's workspace can be reset after a period of inactivity. If the project is missing in a chat that already had it, say so plainly, clone it again, and ask for their latest changes file.

Save and restore commands

Run these from the clone's root, the folder that contains hololabs-pitch-deck-spark/.

Save (every change since the GitHub copy, including deleted files):

sh
OUT=../hololabs-changes-$(date +%Y-%m-%d).zip; rm -f "$OUT"
git add -A
git diff --cached --name-only --diff-filter=D > CHANGES-DELETED.txt
git diff --cached --name-only -z --diff-filter=ACMRT | xargs -0 -r zip -q "$OUT"
[ -s CHANGES-DELETED.txt ] && zip -q "$OUT" CHANGES-DELETED.txt
rm -f CHANGES-DELETED.txt; git reset -q

The user must be able to attach the file to a chat later, so keep it under 25 MB. A large file is almost always a new video: compress it first (see Videos). If it is still too big, split it with split -b 24m <file>.zip <file>.zip.part- and ask the user to keep and attach every piece.

Restore (unzip into an empty folder first and check every path stays inside the project):

sh
# pieces: join them in order of their .part-aa, .part-ab ... endings with cat, then continue
rm -rf /tmp/changes-in && mkdir -p /tmp/changes-in && unzip -q <changes.zip> -d /tmp/changes-in
if [ -f /tmp/changes-in/CHANGES-DELETED.txt ]; then
  xargs -a /tmp/changes-in/CHANGES-DELETED.txt -d '\n' rm -f --
  rm /tmp/changes-in/CHANGES-DELETED.txt
fi
cp -a /tmp/changes-in/. .
What the site is

A React + Vite + TypeScript + Tailwind (shadcn/ui) app with two slide decks:

Route	Deck	Slide list
/ and /xr-format	Atrium mixed-reality format deck (13 slides)	src/components/slides/xrSlideData.ts
/services	Hololabs services deck (9 slides)	src/components/slides/slideData.ts

Each slide is one component in src/components/slides/ (Atrium slides are in xr/). AGENTS.md has the architecture notes Lovable kept. Keep .lovable/ as it is.

Commands
sh
npm install
npm run dev          # in a sandbox, "::" can fail: npx vite --host 127.0.0.1
npm run build        # production site in dist/
npx vitest run       # 15 tests, all passing at handoff
Images and videos
Lovable kept some files on its own servers and left *.asset.json pointer files in the project. The localAssetPointers plugin in vite.config.ts uses a real file saved next to the pointer (e.g. motion-seats.png beside motion-seats.png.asset.json, any image or video extension). Without a local copy it falls back to the live Lovable site (LOVABLE_ASSET_ORIGIN = https://atrium.hololabs.studio).
Every image the decks use has a local copy. Pointers without local copies are unused leftovers, except the showreel below.
Missing: src/assets/hololabs-showreel-2026.mp4 (about 25 MB), the background of slide 1 in both decks. It still streams from the Lovable site, which stops working once that site is switched off. If the user provides the file, compress it (Videos) and save it next to its pointer.
New images go in src/assets/ and are imported in the slide component. Images are compressed automatically at build time (vite-plugin-image-optimizer); the source files are untouched.
Slide 13 (Abyss Vault trailer) embeds Vimeo. hololabs-demo.mp4 is not used anywhere.
Team slide photos (Mike, Brett, Jamie, Rob) were checked and confirmed correct.
Videos

Make web versions before adding a video (drop audio with -an for muted background videos):

sh
ffmpeg -i in.mp4 -c:v libx264 -preset medium -crf 23 -maxrate 4M -bufsize 8M \
  -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart out.mp4
Private previews

Publish previews as a private Claude artifact in the user's own account, and republish the same artifact for later changes in that chat. Artifacts run in a sandbox, so build a preview version:

sh
VITE_PREVIEW=true npx vite build --base ./ --outDir dist-preview
VITE_PREVIEW=true swaps in src/PreviewRouter.tsx: decks switch with #atrium / #services plus a small deck switcher, because artifacts cannot use page paths.
Artifact limits: 20 MiB per file, 64 MiB total, no PDFs, no external hosts or iframes. Before publishing, delete dist-preview/*.pdf, _redirects and placeholder.svg, and replace each video in dist-preview with a smaller copy (1280-1600 px wide, H.264, CRF 25-26) under the same file name. Vimeo and Lovable-hosted media stay blank in previews: say so.
Publishing

The team hosts the site themselves with Netlify Drop. When asked for the finished site:

npm run build, then put the contents of dist/ in a folder named hololabs-site, zip it as hololabs-site.zip, and send it as a download.
Tell them: unzip it, drag the hololabs-site folder onto https://app.netlify.com/drop, create a free Netlify account and claim the site, then check the .netlify.app test address. To update later, drop a new folder on the same site.
public/_redirects makes /services work on Netlify.

Recommend adding the showreel first. The live site is still on Lovable at https://atrium.hololabs.studio; moving that domain means adding it in Netlify's domain settings and updating the DNS record where hololabs.studio is managed. Walk them through it step by step. An older services site also runs on Lovable at attractions.hololabs.studio.

Open items
Add the showreel video (see Images and videos).
Content changes from the team.
Publish on Netlify, then move the atrium.hololabs.studio domain.
Change log

Add one line per save: date, who asked, what changed.

2026-11-13: Moved out of Lovable. All images restored, web versions of the Abyss Vault and IAAPA Europe videos added, image compression and preview mode added (Benji).