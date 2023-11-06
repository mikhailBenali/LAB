const fs = require('fs');

// Using readFileSync
const fileContentSync = fs.readFileSync('../LAB/test.txt', 'utf-8');
console.log(fileContentSync);

// Using readFile
fs.readFile('../LAB/test.txt', 'utf-8', (err, fileContent) => {
    if (err) throw err;
    console.log(fileContent);
});

