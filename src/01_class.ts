class person {
    // 实例属性，需要创建一个实例去访问类的属性
    name: string = 'hello';

    // 在属性前添加static 可以定义静态属性
    // 若想静态属性 变为只读的 可以在 static 后面添加 readonly
    // static readonly age: number = 23;
    static age: number = 23;

    // 此时weight 为只读的属性 不可进行更改
    readonly weight: number = 50;

    // 方法
    // 如果加 static  就变为一个静态方法，可以直接通过类去调用
    static sayHi () {
        console.log('hi! everyone')
    }
}

// 这就是创建了person类的一个实例
const per = new person();
// 需要创建实例去访问
console.log(per.name); // hello
per.name = 'tom'
console.log(per.name); // tom
// 静态属性 直接可以使用类访问
console.log(person.age); // 23
person.age = 20
console.log(person.age); // 20

person.sayHi();
