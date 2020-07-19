// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”

const findStr = (str) => {
  const length = str.length
  for (let i = 0; i < length; i++) {
    if (
      str[i] === "a" &&
      str[i + 1] === "b" &&
      str[i + 2] === "c" &&
      str[i + 3] === "d" &&
      str[i + 4] === "e" &&
      str[i + 5] === "f"
    ) {
      return true
    }
  }
  return false
}
const findStr2 = (str) => {
  let findA = false
  let findAB = false
  let findABC = false
  let findABCD = false
  let findABCDE = false
  for (c of str) {
    if (c === "a") {
      findA = true
    } else if (findA && c === "b") {
      findAB = true
    } else if (findAB && c === "c") {
      findABC = true
    } else if (findABC && c === "d") {
      findABCD = true
    } else if (findABCD && c === "e") {
      findABCDE = true
    } else if (findABCDE && c === "f") {
      return true
    } else {
      findA = false
      findAB = false
      findABC = false
      findABCD = false
      findABCDE = false
    }
  }
  return false
}

console.log(findStr2("abcadef"))
