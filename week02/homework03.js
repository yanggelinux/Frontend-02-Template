// 写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。
const strToUTF8 = (str) => {
  const resBytes = []
  const code = encodeURIComponent(str)
  for (let i = 0; i < code.length; i++) {
    const c = code.charAt(i)
    if (c === "%") {
      const hex = code.charAt(i + 1) + code.charAt(i + 2)
      const hexVal = parseInt(hex, 16)
      resBytes.push(hexVal)
      i += 2
    } else resBytes.push(c.charCodeAt(0))
  }
  return resBytes
}
