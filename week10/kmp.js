function kmp(source, pattern) {
  //计算table
  let table = new Array(pattern.length).fill(0)
  {
    let i = 1
    let j = 0
    while (i < pattern.length) {
      console.log(pattern[i], pattern[j], pattern[i] === pattern[j])
      if (pattern[i] === pattern[j]) {
        ++j
        ++i
        table[i] = j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
      console.log(i, j, table)
    }
    console.log(table)
  }
  {
    let i = 0
    let j = 0
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++j
        ++i
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
      if (j === pattern.length) {
        return true
      }
    }
    return false
  }
}

console.log(kmp("aasababcda", "abab"))
