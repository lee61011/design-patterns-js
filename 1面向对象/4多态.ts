export {}
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name
  }
  speak() {
    throw new Error('此方法必须由子类实现')
  }
}

class Dog extends Animal {
  private age: number;
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  speak() {
    console.log(`汪汪汪！ 我是${this.name} 今年 ${this.age} 岁啦 `)
  }
}

const d1 = new Dog('哈总', 8)
d1.speak()
const d2 = new Dog('萨摩耶', 3)
d2.speak()
