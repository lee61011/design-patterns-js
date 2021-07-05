// 简单工厂

abstract class Coffee {
  constructor(public name: string) {
    
  }
}

class AmericanoCoffee extends Coffee {
  // constructor(public name: string) {
  //   super()
  // }
}

class LatteCoffee extends Coffee {
  
}

class CappuccinoCoffee extends Coffee {
  
}

class CafeFactory {
  static order(name: string) {
    switch(name) {
      case 'AmericanoCoffee':
        return new AmericanoCoffee('美式咖啡');
      case 'LatteCoffee':
        return new LatteCoffee('拿铁咖啡');
      case 'CappuccinoCoffee':
        return new CappuccinoCoffee('卡布奇诺咖啡');
      default:
        throw new Error('您点的咖啡品种我们不支持');
    }
  }
}

console.log(CafeFactory.order('AmericanoCoffee'));
console.log(CafeFactory.order('LatteCoffee'));
console.log(CafeFactory.order('CappuccinoCoffee'));


// 简单工厂模式缺点：
//  1. 添加方法后需要修改 CafeFactory 函数，违反封闭原则
