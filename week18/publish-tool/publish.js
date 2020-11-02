let http = require("http")
let fs = require("fs")
let archiver = require("archiver")

let request = http.request(
  {
    hostname: "127.0.0.1",
    port: 8082,
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
  },
  (response) => {
    console.log(response)
  }
)
// let file = fs.createReadStream("./sample.html")

let archive = archiver("zip", {
  zlib: { level: 9 },
})
archive.directory("./sample/", false)
archive.finalize()
archive.pipe(request)

// file.pipe(request)
// file.on("end", () => request.end())
// file.on("data", (chunk) => {
//   console.log(chunk.toString())
//   request.write(chunk)
// })

// file.on("end", (chunk) => {
//   console.log("read finshed")
//   request.end(chunk)
// })
