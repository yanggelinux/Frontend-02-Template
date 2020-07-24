// 用 Node.js 写一个小的服务端

const http = require("http")

http
  .createServer((request, response) => {
    let body = []
    request
      .on("error", (err) => {
        console.log(err)
      })
      .on("data", (chunk) => {
        console.log("chunk.toString()", chunk.toString())
        body.push(chunk.toString())
      })
      .on("end", () => {
        // body = Buffer.concat(body).toString()
        body = body.join("")
        console.log("body", body)
        response.writeHead(200, { "Content-Tyoe": "text/html" })
        response.end(`<html></html>`)
      })
  })
  .listen(8088)

console.log("server started")
