const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Homepage")
    }
    else if (req.url === "/about") {
        res.end("This is a short history of us")
    } else {
        res.end(`
            <h1> Ooops! </h1>
            <p> It is under maintenance </p>
        `)
    }
})

server.listen(5001)
