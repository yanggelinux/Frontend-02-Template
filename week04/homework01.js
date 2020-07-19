//在一个字符串中找到字符a
const findChar = (str) =>{
  for (let c of str){
    if (c === 'a'){
      return true
    }
  }
  return false
}

const findChar2 = (str) =>{
  return str.includes('a')
} 

console.log(findChar("abc"))
console.log(findChar2("bc"))