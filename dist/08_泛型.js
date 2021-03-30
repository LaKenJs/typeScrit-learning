"use strict";
/*function fn(a: any): any {
    return a;
}*/
/*
*   在定义函数或是类的时候，如果遇到类型不明确的时候，可以使用泛型
*
* */
function fn(a) {
    return a;
}
let result = fn(89); // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn('hhhh'); // 指定泛型，<string> 就指定了result2 返回的a 时string类型
// 可以指定多个泛型 function fn<A,B,C,D,...>
function fn2(a, b, c) {
    console.log(b);
    return a;
}
let result3 = fn2('hello', 23, true); // 多个泛型指定
// fn3<T extends Inter> : 表示T这个泛型，必须要实现Inter这个接口，就是说你传的值里面必须有length这个属性
function fn3(a) {
    return a.length;
}
// 指定类中的泛型
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const myClass = new MyClass('苏苏');
