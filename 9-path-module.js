const path = require("path")

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath);

console.log(path.basename(filePath));

const absolut = path.resolve(__dirname, filePath)
console.log(absolut);

console.log(path.join(__dirname,filePath))