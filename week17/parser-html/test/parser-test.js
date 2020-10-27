var assert = require("assert")

import { parseHTML } from "../src/parser.js"

describe("parser html", function () {
  it("<a></a>", function () {
    let tree = parseHTML("<a></a>")
    assert.equal(tree.children[0].tagName, "a")
    assert.equal(tree.children[0].children.length, 0)
  })
  it("<a href></a>", function () {
    let tree = parseHTML("<a href></a>")
    assert.equal(tree.children[0].tagName, "a")
    assert.equal(tree.children[0].children.length, 0)
  })
})
