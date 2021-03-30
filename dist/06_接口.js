"use strict";
(function () {
    // 在创建对象时，我们发现myType类型限制了创建的obj对象的属性和类型
    // 就是说多一个或者少一个 都会报错
    const obj = {
        name: 'sends',
        age: 2
    };
    const ooj = {
        name: 'sends',
        age: 9,
        gender: '男'
    };
    /*
    * 类的定义
    *   接口可以在定义类的时候去限制类的结构
    *       - 接口类型中的所有属性都不能有实际值
    *       - 在接口中所有的方法都是抽象方法
    * */
    // 定义类时，可以使类去实现一个接口
    // 实现接口就是使类满足接口的要求
    class MyClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
})();
