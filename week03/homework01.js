// 完成 StringToNumber 和 NumberToString 两个函数
// StringToNumber 可以解析 二、八、十、十六 四个进制的字符串，转换成number
// NumberToString 是StringToNumber的逆向，根据传的第二个参数，来确定转换成什么字符串

const StringToNumber = (str) => {
  if (isNaN(Number(str))) {
    //不是数字类型的字符串
    if (str.startsWith("0b") || str.startsWith("0B")) {
      return parseInt(str, 2)
    }
    if (str.startsWith("0o") || str.startsWith("0O)")) {
      return parseInt(str, 8)
    }
    if (str.startsWith("0x") || str.startsWith("0X")) {
      return parseInt(str, 16)
    }
  } else {
    //是数字类型的字符串
    return Number(str)
  }
}
const NumberToString = (num, hex) => {
  return parseInt(num).toString(hex)
}
