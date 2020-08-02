const images = require("images")

function render(viewport, element) {
  if (element.style) {
    // console.log(element.style)
    var img = images(element.style.width, element.style.height)
    if (element.style["background-color"]) {
      let color = element.style["background-color"] || "rgb(0,0,0)"
      color.match(/rgb\((\d+),(\d+),(\d+)\)/)
      // console.log(
      //   "color",
      //   color,
      //   Number(RegExp.$1),
      //   Number(RegExp.$2),
      //   Number(RegExp.$3),
      //   element.style.left,
      //   element.style
      // )
      img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3))
      console.log(element.style.left,element.style.top)
      viewport.draw(img, element.style.left || 0, element.style.top || 0)
    }
  }
  if (element.children) {
    for (let child of element.children) {
      render(viewport, child)
    }
  }
}

module.exports = render
