"use strict";
(function () {
    // 定义一个类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const person = new Person('孙悟空', 20);
    /*
    * 由于属性实在对象中设置的，然后属性也可以任意被修改
    *   属性可以任意被修改，这样的操作是非常不安全的
    *
    * */
    person.name = '猪八戒';
    person.age = -38; // 由于年龄是不能用复数来表示的
    class Animal {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this._gender = gender;
        }
        // 获取属性值
        getName() {
            return this.name;
        }
        // 设置set方法修改属性值
        setName(value) {
            this.name = value;
        }
        // 更加方便的获取属性方法
        get gender() {
            return this._gender;
        }
        //set方法同上
        set gender(value) {
            this._gender = value;
        }
    }
    const pig = new Animal('猪八戒', 800, '男');
    // 不可以直接修改属性
    // pig.name = 'sends'
    // pig.age = 90
    // 通过set方法设置name值
    pig.setName('猪猪');
    console.log(pig.getName());
    // gender 就直接可以读取，和设置
    pig.gender = '女';
    console.log(pig.gender);
    //----------------------------
    class A {
        constructor(number) {
            this.number = number;
        }
    }
    class B extends A {
        test() {
            console.log(this.number);
        }
    }
    const b = new B(99999);
    b.test();
    class C {
        // 这样的写法可直接定义在构造函数中，这么写会更加方便一些
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('high', 90);
    console.log(c);
})();
