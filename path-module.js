const path = require('path');
// console.log(path);

const filePath = path.join('/content','subfolder','text.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

console.log(__dirname)


// resolve is used to find absolute path
const absolutePath = path.resolve(__dirname, 'content','subfolder','text.txt');
console.log(absolutePath);



