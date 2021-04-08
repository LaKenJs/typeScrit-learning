(function () {
    // 定义一个类
    class Person {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    const person = new Person('孙悟空', 20)
    /*
    * 由于属性实在对象中设置的，然后属性也可以任意被修改
    *   属性可以任意被修改，这样的操作是非常不安全的
    *
    * */
    person.name = '猪八戒'
    person.age = -38  // 由于年龄是不能用复数来表示的
    class Animal {
        // TS可以在属性前添加属性的修饰符
        /*
        * public 公有的，可以被任意修改默认值
        * private 私有的，只能在类中修改默认值，子类中也无法访问
        *   - 可以通过在类中添加方法去去修改私有属性
        * protected 受包含的属性，只能在当前类和当前的子类中有效
        * */
        private name: string
        // 若年龄只能读不可改，readonly，
        private readonly age: number
        _gender: string

        constructor(name: string, age: number, gender: string) {
            this.name = name
            this.age = age
            this._gender = gender
        }

        // 获取属性值
        getName() {
            return this.name
        }

        // 设置set方法修改属性值
        setName(value: string) {
            this.name = value
        }

        // 更加方便的获取属性方法
        get gender() {
            return this._gender
        }

        //set方法同上
        set gender(value:string) {
            this._gender = value
        }
    }

    const pig = new Animal('猪八戒', 800, '男')
    // 不可以直接修改属性
    // pig.name = 'sends'
    // pig.age = 90
    // 通过set方法设置name值
    pig.setName('猪猪')
    console.log(pig.getName());
    // gender 就直接可以读取，和设置
    pig.gender = '女'
    console.log(pig.gender);

    class A {
        protected number: number;

        constructor(number: number) {
            this.number = number
        }
    }

    class B extends A {
        test () {
            console.log(this.number)
        }
    }

    const b = new B(99999)
    b.test()

    class C {
        // 这样的写法可直接定义在构造函数中，这么写会更加方便一些
        constructor(public name: string, public age: number) {
        }

    }

    const c = new C('high',90)
    console.log(c);
})()
