const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', 'picture');
const destDir = path.resolve(__dirname, '..', 'public', 'picture');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursiveSync(srcDir, destDir);
console.log(`[copy-assets] Copied assets from ${srcDir} to ${destDir}`);



