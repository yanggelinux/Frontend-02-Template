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
        response.end(
          `<html lang="cn"><head><style>#container{display:flex; width:500px;height:300px;background-color:rgb(0,255,255);}#myid{width:200px;height:100px;background-color:rgb(255,0,0);}.c1{flex:1;background-color:rgb(0,255,0);}</style></head><body><div id="container"><div id="myid"></div><div class="c1"></div></div></body></html>`
        )
      })
  })
  .listen(8088)
console.log("server started")
