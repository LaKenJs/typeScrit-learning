(function () {

    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        shout () {
            console.log("hahahahha");
        }
    }

    /*
    * extends后子类就会拥有父类所有的属性和方法
    *   - 此时Animal是父类 dog和cat是子类
    *   - 通过继承可以将多个类中所有的子类都拥有父类的方法
    *   - 如果子类添加了父类相同的方法，则子类的方法就会覆盖父类的方法，成为子类重写了父类的方法
    * */
    class Dog extends Animal{
        shout () {
            console.log('汪汪汪')
        }

    }

    class Cat extends Animal{
        shout () {
            console.log('喵喵喵')
        }
    }

    const dog = new Dog("旺财", 4)
    const cat = new Cat('福福', 3)
    console.log(dog);
    console.log(cat);

})()
