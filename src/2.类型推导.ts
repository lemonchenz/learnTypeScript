// 1) 类型推导

// 声明一个变量没有给类型的时候 默认类型是any
// let name; // any

const name = "jw"
// 等号左边的类型，可以通过右边自动推导，此时就不用添加类型了


// 2) 联合类型
let strOrNum: string | number

strOrNum = "abc"
strOrNum.toLowerCase()

strOrNum = 13
strOrNum.toFixed()

// 3) 断言

// 1. 非空断言
let ele = document.getElementById("root");

ele!.style.background = "red"
// ele?.style.background  = "red" // 报错 赋值表达式的左侧不能是可选属性访问


// 2. 类型断言
let strOrNum1: string | number;

(strOrNum1! as string).toLocaleLowerCase(); // 类型断言
(<number>strOrNum1!).toFixed(2) // 下面这种不推荐使用

// 双重断言
strOrNum1! as any as boolean // 缺点就是 会破坏原有的类型，不建议使用
(strOrNum1! as any) as boolean

// 4) 字面量类型
const username: "jw" = "jw"
const password: 123456 = 123456

// type关键字 和 enum 都是ts提供的，和js没关系
type Direction = "up" | "down" | "left" | "right"
let direction: Direction = "down"
// 字面量类型就是限定了值 和 枚举类似




export {}


