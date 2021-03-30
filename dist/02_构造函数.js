"use strict";
class Dog {
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中，当前的对象就是新建的那个对象
        // 我们可以通过使用this向新建的对象中添加属性
        this.name = name;
        this.age = age;
        // console.log("我被调用了");
    }
    shout() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog('小黑', 18);
dog.shout();
// console.log(dog);
