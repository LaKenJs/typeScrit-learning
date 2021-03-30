<h1>TypeScript</h1>

<h4>TS声明变量的语法</h4>

```
let 变量名: 变量的类型 = 值
```

<h4>为什么要用TypeScript</h4>

```
js: 在编译的过程中不会报错，运行的时候才会报错，导致维护成本极高，属于动态类型

ts：在编译的过程中可以报错，节省维护成本，属于静态类型
```

<h4>TypeScript的类型</h4>

```
1. number
let a: number = 1;
若 let a: 1;
a: 1;(这样不会报错，但是会限制 a的值只会是 1)
a: 2;(这里就会报错)

2. string
let b: string;
b = 'hi' | 'hello' | '你好';  其中 '|' 表示b可以是三个值里面任意的一个,'&' 表示同时满足所有条件
'|'不仅限制在取值，也可以链接多个类型
如: let b1: number | string;(联合类型)
b1 = 1; b1 = "hello"; 

3. boolean
let c: boolean;
c = true;
c = flase;

4. null
5. undefind

6. any(使用TS时不建议使用该类型)
any: 就是变量可以是任意类型，与原本的js一样；
let d: any;与let d;(隐式的any类型)
最恶心的地方，看如下代码：
let s: string;
s = d;(此时不会报错，因为默认d 为any类型变量，不仅霍霍自己，还霍霍别人)

7. unknown
let e: unknown;(表示e的类型是未知的，此时e 可以是任意类型的值)
unknown与any的区别
unknown是一个类型安全的any，不能直接赋值给其他变量，使用typeOf进行类型判断可以赋值给其他变量

e = 'hello';(此时e 是string类型)
// s = e;(此时会报错)
if (type e === 'string') {
   s = e;
}

或者： s = e as string;(类型断言) 也可以  s = <string> e
as 和 <string> 都表示 确定变量e 是string类型

8. void(空值，用来设置函数的返回值)
function fn() {}(此时该函数的类型就是 void)
若 function fn(): void {} 函数fn 中如果有返回值  就会报错 

9. never(表示永远没有返回值， 可以用来报错，当程序运行的时候报错了，需要提示一下)
function fn2(): never {
 throw new Error('报错了')
}

10. object (使用{} 来定义对象类型 更加准确)
let g: {};
g = {name: 'hi', age: 18};

let h: {name: string, age: number, gander: string};
// 设置h的值必须符合 声明的h对象 也不可添加h对象里面没有的属性
let j: {name: string, age?: number} // age 后面加的？代表可选值 可以有 也可以没有
let k: {name: string, [propName: string]: any};// propName 表示 属性名，[]中表示属性名是string，any表示任意类型
k = {name: 'hah', age: 15, gender: '男'};

// 函数声明语法
let l = function (a: number,b:number): number {}
// 或者
let l = (a: number, b:number) => number;


11. tuple(元组：固定长度的数组)
let o: [string, string];// o 必须是两个

12. enum(枚举，将所有可能的结果罗列出来)
// 枚举类
enum Gender {
	male = 0,
	female = 1
}

let i: {name: string, gender: Gender};
i = {
	name: 'hello',
	gender: Gender.male
}

13. array
// 数组声明语法
let m: string[]; 
// 或者
let m: Array<string>

let n: number[];
// 或者
let n: Array<number>


// 扩充
let omg： 1 | 2 |3 |4; // 这样写太麻烦了  
// 我们可以 使用类型的别名 去简化代码
// 例如
type myType: 1 | 2 | 3 | 4;
omg: myType;

```

