import { Componet, createElement } from "./framework.js"
import { Carousel } from "./carousel"
import { Timeline, Animation } from "./animation"

let d = [
  {
    img:
      "https://static001.geekbang.org/resource/image/40/b1/40da5d89c59262711beaa206c48e67b1.jpg",
    url: "www.baidu.com",
  },
  {
    img:
      "https://static001.geekbang.org/resource/image/50/fe/5022c19ab75d3b0215a276167a69b2fe.jpg",
    url: "www.baidu.com",
  },
  {
    img:
      "https://static001.geekbang.org/resource/image/a6/f1/a691e6b628ceb9d7c2ca9780126301f1.jpg",
    url: "www.baidu.com",
  },
  {
    img:
      "https://static001.geekbang.org/resource/image/ee/1c/ee5415f97405929ec61a586991e2111c.jpg",
    url: "www.baidu.com",
  },
]

let a = (
  <Carousel
    src={d}
    onChange={(event) => console.log(event.detail.position)}
    onClick={(event) => (window.location.href = event.detail.data.url)}
  />
)
// document.body.appendChild(a)
a.mountTo(document.body)
// let tl = new Timeline()
// window.tl = tl
// window.animation = new Animation(
//   {
//     set a(v) {
//       console.log(v)
//     },
//   },
//   "a",
//   0,
//   100,
//   1000,
//   null
// )
// tl.add(
//   new Animation(
//     {
//       set a(v) {
//         console.log(v)
//       },
//     },
//     "a",
//     0,
//     100,
//     1000,
//     null
//   )
// )
// tl.start()
