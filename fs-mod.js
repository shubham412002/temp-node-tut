const fs = require('fs');

const file1 = fs.readFileSync('./content/first.txt', 'utf-8');
const file2 = fs.readFileSync('./content/second.txt', 'utf-8');
console.log(file1);
console.log(file2);

// fs.writeFileSync('./content/first.txt', file2  + '\n' + 'welome to the second file');

fs.writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${file1}, ${file2}`,
    {flag: 'a'}
);