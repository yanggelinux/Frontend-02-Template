//不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”


const findStr = (str) =>{
  const length = str.length
  for (let i=0;i<length;i++){
    if (str[i]==="a" && str[i+1]==='b'){
      return true
    }
  }
  return false
}

console.log(findStr("helloa"))