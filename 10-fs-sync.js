const {readFileSync, writeFileSync} = require("fs")
const path = require("path")
const testPath = path.join("content", "subfolder","test.txt")
const firstPath = path.join("content", "first.txt")


const content = readFileSync(testPath, "utf8")
writeFileSync(firstPath, content)