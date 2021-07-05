export {}

abstract class Coffee {
  constructor(public name: string) {
    
  }
}

class AmericanoCoffee extends Coffee {
}
class LatteCoffee extends Coffee {
}
class CappuccinoCoffee extends Coffee {
}

abstract class CateFactory {
  abstract createCoffee(): Coffee;
}
class LatteCoffeeFactory extends CateFactory {
  createCoffee() {
    return new LatteCoffee('拿铁咖啡');
  }
}
class CappuccinoCoffeeFactory extends CateFactory {
  createCoffee() {
    return new CappuccinoCoffee('卡布奇诺咖啡');
  }
}
class AmericanoCoffeeFactory extends CateFactory {
  createCoffee() {
    return new AmericanoCoffee('美式咖啡');
  }
}

let americanoFoffeeFactory = new AmericanoCoffeeFactory();
console.log(americanoFoffeeFactory.createCoffee());
let latteCoffeeFactory = new LatteCoffeeFactory();
console.log(latteCoffeeFactory.createCoffee());
let cappuccinoCoffeeFactory = new CappuccinoCoffeeFactory();
console.log(cappuccinoCoffeeFactory.createCoffee())
