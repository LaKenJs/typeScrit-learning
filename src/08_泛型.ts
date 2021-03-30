/*function fn(a: any): any {
    return a;
}*/

/*
*   在定义函数或是类的时候，如果遇到类型不明确的时候，可以使用泛型
*
* */

function fn<A>(a: A):A {
    return a
}

let result = fn(89) // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hhhh') // 指定泛型，<string> 就指定了result2 返回的a 时string类型

// 可以指定多个泛型 function fn<A,B,C,D,...>
function fn2<A,B,C>(a:A,b:B,c:C): A { // 提示：返回的类型是什么，你就得返回该类型的值
    console.log(b)
    return a;
}
let result3 = fn2<string,number,boolean>('hello',23,true) // 多个泛型指定

// 如果想限制泛型的范围
interface Inter {
    length: number
}
// fn3<T extends Inter> : 表示T这个泛型，必须要实现Inter这个接口，就是说你传的值里面必须有length这个属性
function fn3<T extends Inter>(a: T): number {
    return a.length
}

// 指定类中的泛型
class MyClass<T> {
    name: T

    constructor(name: T) {
        this.name = name
    }
}

const myClass = new MyClass<string>('苏苏')
