"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log("它们在叫");
        }
    }
    class Dog extends Animal {
        sayHi() {
            // 如果在子类中想调用父类中的方法，可以使用super关键字
            super.sayHi(); // 这里super就是当前类的父类
        }
    }
    class Cat extends Animal {
        // 如果在子类中写了构造函数，就必须对父类的构造函数进行调用
        constructor(name, age) {
            // 这里的super就是指调用了父类的构造函数
            // 如果父类中有子类中没有的属性，子类必须要将父类中的属性添加进去
            super(name);
            this.age = age;
        }
    }
    const dog = new Dog('旺财');
    console.log(dog.sayHi());
    const cat = new Cat('福福', 2);
    console.log(cat.sayHi());
})();
