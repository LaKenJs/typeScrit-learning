(function () {
    // Animal 这个类就是用来被继承的，不希望被创建，
    // abstract 加在类的前面  就可以防止类被调用  抽象类
    abstract class Animal {
        name: string;

        protected constructor(name: string) {
            this.name = name
        }

        /*
        * 抽象方法：
        *  - 使用abstract 开头的方法，只能添加在抽象类中;
        *  - 抽象方法不可能被实现，没有方法体，也不会有返回值，只能通过子类去实现；
        *  - 如果父类被继承，子类必须调用并重写父类的抽象方法
        * */
        abstract sayHi ():void;
    }


    // 如果子类不是抽象类，但是继承了抽象类，还没有重写抽象类中的抽象方法，就会报以下错误
    // Non-abstract class 'Dog' does not implement inherited abstract member 'sayHi' from class 'Animal'.
    class Dog extends Animal {
        age: number;
        constructor(name: string, age: number) {
            super(name);
            this.age = age
        }
        // 重写抽象类的抽象方法
        sayHi() {
            console.log('汪汪汪')
        }

    }

    const dog = new Dog('旺财', 4);
    console.log(dog.age);
})()
