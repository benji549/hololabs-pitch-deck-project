import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const srcDir = path.resolve(__dirname, "./src");
const POINTER_SUFFIX = ".asset.json";
const VIRTUAL_PREFIX = "\0asset-pointer:";
/**
 * Files that only exist on Lovable's servers (currently only the 2026 showreel)
 * are loaded from the live Lovable site. If that site is moved or taken down,
 * save the file next to its pointer instead, or host it elsewhere.
 */
const LOVABLE_ASSET_ORIGIN = "https://atrium.hololabs.studio";
const LOCAL_EXTENSIONS =[".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".mp4", ".webm"];

/** Finds "name.png", or the same name saved with another extension (e.g. "name.jpg"). */
function findLocalCopy(expectedPath: string): string | null {
  if (fs.existsSync(expectedPath)) return expectedPath;
  const ext = path.extname(expectedPath);
  const base = expectedPath.slice(0, expectedPath.length - ext.length);
  for (const candidateExt of LOCAL_EXTENSIONS) {
    if (fs.existsSync(base + candidateExt)) return base + candidateExt;
  }
  return null;
}

/**
 * Lovable stores some images and videos on its own servers and leaves a small
 * "*.asset.json" pointer file in the project instead. This plugin checks for a
 * real file saved next to the pointer (e.g. "logo.png" beside
 * "logo.png.asset.json") and, if it exists, bundles that local file instead.
 * Without a local file, the original Lovable URL is used as before.
 */
function localAssetPointers(): Plugin {
  return {
    name: "local-asset-pointers",
    enforce: "pre",
    async resolveId(source, importer) {
      if (!source.endsWith(POINTER_SUFFIX)) return null;
      const resolved = await this.resolve(source, importer, { skipSelf: true });
      if (!resolved) return null;
      // The ".js" ending keeps Vite's built-in JSON loader from claiming this module.
      return VIRTUAL_PREFIX + resolved.id + ".js";
    },
    load(id) {
      if (!id.startsWith(VIRTUAL_PREFIX)) return null;
      const pointerPath = id.slice(VIRTUAL_PREFIX.length, -".js".length);
      this.addWatchFile(pointerPath);
      const meta = JSON.parse(fs.readFileSync(pointerPath, "utf8"));
      const localPath = findLocalCopy(pointerPath.slice(0, -POINTER_SUFFIX.length));
      if (localPath) {
        this.addWatchFile(localPath);
        const importPath =
          "@/" + path.relative(srcDir, localPath).split(path.sep).join("/");
        const { url: _lovableUrl, ...rest } = meta;
        return `import url from ${JSON.stringify(importPath)};\nexport default { ...${JSON.stringify(rest)}, url };`;
      }
      const remoteUrl = meta.url?.startsWith("/") ? LOVABLE_ASSET_ORIGIN + meta.url : meta.url;
      return `export default ${JSON.stringify({ ...meta, url: remoteUrl })};`;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    localAssetPointers(),
    react(),
    mode === "development" && componentTagger(),
    // Compresses images in the finished build only; the originals in src/ are untouched.
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|webp)$/i,
      png: { quality: 80 },
      jpeg: { quality: 80, mozjpeg: true },
      jpg: { quality: 80, mozjpeg: true },
      webp: { quality: 80 },
      gif: {},
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
}));
