const {readFile, writeFile} = require("fs")

const content =  readFile("./content/subfolder/test.txt", "utf8", (err, result)=>{
    if (err) {
        console.log(`Error found: ${err}`)
        return
    }
    console.log(`This is result ${result}`);
})