let http = require("http")
let fs = require("fs")
let unzipper = require("unzipper")

http
  .createServer(function (request, response) {
    // let outFile = fs.createWriteStream("../server/public/index.html")
    // request.pipe(outFile)
    request.pipe(unzipper.Extract({ path: "../server/public" }))
    // request.on("data", (chunk) => {
    //   outFile.write(chunk)
    // })
    // request.on("end", (chunk) => {
    //   outFile.end()
    //   response.end("Success")
    // })
  })
  .listen(8082)
