class BinaryHeap {
  //二叉堆,小顶堆，从堆顶拿最小的元素
  constructor(data, compare) {
    data = [[0, 0], ...data]
    this.data = data.slice()
    this.compare = compare || ((a, b) => a - b)
    this.build()
    console.log(this.data)
  }
  heapify(n, i) {
    //从上倒下堆化
    while (true) {
      let maxPos = i
      if (i * 2 <= n && this.compare(this.data[i], this.data[i * 2]) > 0) {
        maxPos = i * 2
      }
      if (
        i * 2 + 1 <= n &&
        this.compare(this.data[maxPos], this.data[i * 2 + 1]) > 0
      ) {
        maxPos = i * 2 + 1
      }
      if (maxPos === i) {
        break
      }
      ;[this.data[i], this.data[maxPos]] = [this.data[maxPos], this.data[i]]
      i = maxPos
    }
  }
  build() {
    //初始化堆
    let n = this.data.length - 1
    for (let i = Math.floor(n / 2); i > 0; i--) {
      this.heapify(n, i)
    }
  }
  removeTop() {
    //从堆顶拿到最小元素
    if (this.data.length === 1) {
      return false
    }
    this.data[1] = this.data[this.data.length - 1]
    let i = 1
    let n = this.data.length - 1
    this.heapify(n, i)
    return true
  }
  take() {
    if (this.data.length === 1) {
      return
    }
    let min = this.data[1]
    this.removeTop()
    this.data.pop()
    return min
  }
  give(v) {
    //往堆顶添加元素
    if (this.data.length < 1) {
      this.datas.push([0, 0])
    }
    this.data.push(v)
    let i = this.data.length - 1
    while (
      Math.floor(i / 2) > 0 &&
      this.compare(this.data[i], this.data[Math.floor(i / 2)]) < 0
    ) {
      ;[this.data[i], this.data[Math.floor(i / 2)]] = [
        this.data[Math.floor(i / 2)],
        this.data[i],
      ]
      i = Math.floor(i / 2)
    }
  }
  get length() {
    return this.data.length
  }
  get datas() {
    return this.data
  }
}

heap = new BinaryHeap([1, 3, 4, 2, 5])
console.log(heap.data)
heap.take()
console.log(heap.data)
heap.take()
console.log(heap.data)
