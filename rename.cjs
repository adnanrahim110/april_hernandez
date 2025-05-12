/**
 * Batch rename files in a directory to sequential numbers (1, 2, 3, ...)
 * Usage:
 *   1. Place this script at the root of your project.
 *   2. Adjust the `dirPath` if necessary.
 *   3. Run: `node rename-card-deck.js`
 */

const fs = require('fs');
const path = require('path');

// Path to your card images folder
const dirPath = path.join(__dirname, 'src/assets/cards/card_deck');

// Read all items in the directory
fs.readdir(dirPath, (err, items) => {
  if (err) {
    console.error('Failed to read directory:', err);
    process.exit(1);
  }

  // Filter to include only files (not subdirectories)
  const files = items.filter(item => {
    const fullPath = path.join(dirPath, item);
    return fs.statSync(fullPath).isFile();
  });

  // Sort files (alphabetically) so numbering follows this order
  files.sort();

  // Rename each file to its index + 1, preserving the original extension
  files.forEach((file, idx) => {
    const oldPath = path.join(dirPath, file);
    const ext = path.extname(file);
    const newName = `${idx + 1}${ext}`;
    const newPath = path.join(dirPath, newName);

    fs.rename(oldPath, newPath, err => {
      if (err) console.error(`Error renaming ${file}:`, err);
      else console.log(`Renamed: ${file} → ${newName}`);
    });
  });
});
