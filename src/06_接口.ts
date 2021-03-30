(function () {

    // 这个写法  就是为了描述一个对象的类型和属性
    type myTpe = {
        name: string;
        age: number;
        // [propName: string]: any;
    }

    // 在创建对象时，我们发现myType类型限制了创建的obj对象的属性和类型
    // 就是说多一个或者少一个 都会报错
    const obj: myTpe = {
        name: 'sends',
        age: 2
    }


    // ---------------------------------------
    // 这样我们就可以使用接口类型定义一个类结构, 这样和类型的别名定义一样，限制了对象的属性和方法
    // 但是interface 类型可以重复定义，但是 以类型的别名定义只能定义一个同名的类型
    // 如果定义了多个interface类型，会默认把所有的interface类型的对象合并到一块生效
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string
    }

    const ooj: myInterface = {
        name: 'sends',
        age: 9,
        gender: '男'
    }

    /*
    * 类的定义
    *   接口可以在定义类的时候去限制类的结构
    *       - 接口类型中的所有属性都不能有实际值
    *       - 在接口中所有的方法都是抽象方法
    * */

    // 定义类时，可以使类去实现一个接口
    // 实现接口就是使类满足接口的要求
    class MyClass implements myInterface{
        age: number;
        gender: string;
        name: string;

        constructor(name: string, age: number, gender: string) {
            this.name = name
            this.age = age
            this.gender = gender
        }
    }
})()
