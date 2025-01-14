const http = require("http")

// Create Server Object
http.createServer((req, res) => {
    // Write Response 
    res.write("Hello World!!")
    res.end()
}).listen(4000, () =>console.log("Server running"))