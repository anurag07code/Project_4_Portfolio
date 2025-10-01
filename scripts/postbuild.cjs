// Create a SPA fallback for GitHub Pages by copying index.html to 404.html
const { copyFileSync, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");

const projectRoot = process.cwd();
const distDir = resolve(projectRoot, "dist");
const indexHtml = resolve(distDir, "index.html");
const notFoundHtml = resolve(distDir, "404.html");

try {
  mkdirSync(distDir, { recursive: true });
  if (existsSync(indexHtml)) {
    copyFileSync(indexHtml, notFoundHtml);
    console.log("[postbuild] Created dist/404.html for SPA fallback");
  } else {
    console.warn("[postbuild] dist/index.html not found; skipping 404 copy");
  }
} catch (error) {
  console.error("[postbuild] Failed to create 404.html:", error);
  process.exitCode = 1;
}


