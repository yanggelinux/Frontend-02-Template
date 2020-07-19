//使用状态机完成”abababx”的处理
const findStr = (str) => {
  let state = start
  for (let c of str) {
    state = state(c)
  }
  return state === end
}

const start = (c) => {
  console.log("stert", c)
  if (c === "a") {
    return foundA
  } else {
    return start
  }
}

const end = (c) => {
  return end
}

const foundA = (c) => {
  console.log("foundA", c)
  if (c === "b") {
    return foundB
  } else {
    return start(c)
  }
}

const foundB = (c) => {
  console.log("foundB", c)
  if (c === "a") {
    return foundA2
  } else {
    return start(c)
  }
}

const foundA2 = (c) => {
  console.log("foundA2", c)
  if (c === "b") {
    return foundB2
  } else {
    return start(c)
  }
}

const foundB2 = (c) => {
  console.log("foundB2", c)
  if (c === "x") {
    return end
  } else {
    return foundA2
  }
}

console.log(findStr("abababx"))
