// 用 JavaScript 去设计狗咬人的代码
class Animal {
  constructor() {
    this.health = 100
  }
}

class Human extends Animal {
  constructor() {
    super()
    // this.health = 100
  }
  hurt(damage) {
    this.health -= damage
    console.log(`人受到${damage}的伤害，健康值为${this.health}`)
  }
}

class Dog extends Animal {
  constructor() {
    super()
    // this.health = 100
  }
  bite() {
    const damage = 10
    console.log(`狗咬会产生${damage}的伤害`)
    return damage
  }
}

dog = new Dog()
human = new Human()
// damage = d.bite()
human.hurt(dog.bite())
