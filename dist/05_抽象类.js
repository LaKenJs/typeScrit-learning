"use strict";
(function () {
    // Animal 这个类就是用来被继承的，不希望被创建，
    // abstract 加在类的前面  就可以防止类被调用  抽象类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // 如果子类不是抽象类，但是继承了抽象类，还没有重写抽象类中的抽象方法，就会报以下错误
    // Non-abstract class 'Dog' does not implement inherited abstract member 'sayHi' from class 'Animal'.
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        // 重写抽象类的抽象方法
        sayHi() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 4);
    console.log(dog.age);
})();
