export {}
// 继承主要是实线代码逻辑的复用，或者说是属性和方法的复用
// 继承也会导致类的层次过深，类和类之间出现了耦合，如果修改父类，子类也会跟这变
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat`)
  }
}
let animal = new Animal('动物');
animal.eat();

class Dog extends Animal {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  speak() {
    console.log(`${this.name} is barking!`)
  }
}
let dog = new Dog('狗', 5);
dog.eat();
dog.speak();