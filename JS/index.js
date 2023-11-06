const fs = require('fs');

try {
  // Using readFileSync
  const fileContentSync = fs.readFileSync('test.txt', 'utf-8');
  console.log('File Content (Sync):\n', fileContentSync);
} catch (err) {
  console.error('Error reading file synchronously:', err);
}

// Using readFile with try and catch
fs.readFile('test.txt', 'utf-8', (err, fileContent) => {
  try {
    console.log('File Content (Async):\n', fileContent);
  } catch (err) {
    console.error('Error reading file asynchronously:', err);
  }
});
