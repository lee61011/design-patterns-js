/**
 * 面向对象的四个特性
 * 抽象
 */

interface IStorage {
  save(key: string, value: any): void;
  read(key: string): any;
}

class UserInfo {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name
  // }
  // public 表示该属性将会成为当前类的一个实例属性；与上面的写法等效
  constructor(public name: string, public storage: IStorage) {

  }
  save() {
    this.storage.save('userInfo', JSON.stringify(this))
  }
  read() {
    return this.storage.read('userInfo')
  }
}

// 实现接口
class LocalStorage implements IStorage {
  save(key: string, value: any): void {
    localStorage.setItem(key, value)
  }
  read(key: string) {
    return localStorage.getItem(key)
  }
}
let local = new LocalStorage()
// let userInfo = new UserInfo('张三', local)

class MysqlStorage implements IStorage {
  save(key: string, value: any): void {
    // mysql.setItem(key, value)
  }
  read(key: string) {
    // return mysql.getItem(key)
  }
}
let mysqlStorage = new MysqlStorage();
let userInfo = new UserInfo('zhangsan', mysqlStorage)
console.log(userInfo.name)
