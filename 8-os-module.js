const os = require("os")

console.log(os.userInfo())

const osmethods = {
    name: os.type(),
    hostName: os.hostname(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(osmethods)