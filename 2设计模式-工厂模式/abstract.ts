export {}

abstract class AmericanoCoffee {}
abstract class LatteCoffee {}
abstract class CappuccinoCoffee {}

class StarBucksAmericanoCoffee extends AmericanoCoffee {}
class LuckinAmericanoCoffee extends AmericanoCoffee {}
class StarBucksLatteCoffee extends LatteCoffee {}
class LuckinLatteCoffee extends LatteCoffee {}
class StarBucksCappuccinoCoffee extends CappuccinoCoffee {}
class LuckinCappuccinoCoffee extends CappuccinoCoffee {}

// 抽象工厂，抽象工厂里需要三个方法
abstract class CafeFactory {
  // 抽象方法
  abstract createAmericanoCoffee(): AmericanoCoffee;
  abstract createLatteCoffee(): LatteCoffee;
  abstract createCappuccinoCoffee(): CappuccinoCoffee;
}

class StarBucksCafeFactory extends CafeFactory {
  // 具体方法
  createAmericanoCoffee() {
    return new StarBucksAmericanoCoffee();
  }
  createLatteCoffee() {
    return new StarBucksLatteCoffee();
  }
  createCappuccinoCoffee() {
    return new StarBucksCappuccinoCoffee();
  }
}
class LuckinCafeFactory extends CafeFactory {
  // 具体方法
  createAmericanoCoffee() {
    return new LuckinAmericanoCoffee();
  }
  createLatteCoffee() {
    return new LuckinLatteCoffee();
  }
  createCappuccinoCoffee() {
    return new LuckinCappuccinoCoffee();
  }
}

let luckinCafeFactory = new LuckinCafeFactory();
console.log(luckinCafeFactory.createAmericanoCoffee()); // 创建瑞幸美式咖啡
let starBucksCafeFactory = new StarBucksCafeFactory();
console.log(starBucksCafeFactory.createAmericanoCoffee()); // 创建星巴克美式咖啡
