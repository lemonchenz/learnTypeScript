// 1) 布尔、数字、字符串类型
let name: string = "jiang"
let age: number = 30;
let male: boolean = true

let s1: string = "abc"

let s2: String = "abc"
let s3: String = new String("abc")

"abc".charAt 

class Room { }

let room: Room = new Room()

// 2) 数组类型

let arr1: number[] = [1, 2, 3, 4]
let arr2: string[] = ["a", "b", "c", "d"]
let arr3: (string | number)[] = [1, 2, 3, 4, "a", "b", "c", "d"] // 联合类型
let arr4: Array<string> = ["a", "b", "c"] // 采用泛型来声明数组

// 3) 元祖类型

let tuple: [string, number, boolean] = ["jw", 30, true]


// tuple.push("xxxx")
// let username = tuple[3] // 报错

// 4) 枚举类型

enum USER_ROLE {
  USER, // 默认从0开始
  ADMIN,
  SUPER_ADMIN
}
console.log(USER_ROLE.USER) // 0
console.log(USER_ROLE[0]) // USER
// {0: "USER", 1: "ADMIN", 2: "SUPER_ADMIN", USER: 0, ADMIN: 1, SUPER_ADMIN: 2}

let a: USER_ROLE.USER = 11

// let b: USER_ROLE.ADMIN = "xxx"

// 异构枚举
enum USER_ROLE_1 {
  USER = "a",
  ADMIN = 10,
  SUPER_ADMIN // 11
}

// 常量枚举
const enum USER_ROLE_2 { // 像代码中的常量可以全部采用枚举类型，提示友好，使用方便
  USER = "a",
  ADMIN = 10,
  SUPER_ADMIN
}
console.log(USER_ROLE_2.USER) // a

// 5) null undefined

// const 常量不可更改
const n: null = null;
const u: undefined = undefined

// 6) void类型

function fn1() { } // void
function fn2() { // void
  return
}
function fn3(): void | null {
  // undefined 可以赋予给void
  return null
}

let m: void
m = undefined

// 7) never类型


// 1. 函数无法到达终点

function whileTrue(): never {
  while(true) {}
}

function throwError(): never {
  throw new Error()
}

function fn() {
  throwError()
  let a = 1 // 无法运行
}

// 2. 校验逻辑的完整性，可以利用never特性，实现完整性保护
function validateCheck(v: never) { }
function getResult(strOrBooleanOrNum: string | number | boolean) {
  // 在内部写js逻辑的时候，要对每种类型做处理
  // 如果是字符串"abc" -> ['a','b','c']
  // 123 -> [1,2,3]
  // true -> [t,r,u,e]
  if (typeof strOrBooleanOrNum === "string") {
    return strOrBooleanOrNum.split("")
  } else if (typeof strOrBooleanOrNum === "number") {
    return strOrBooleanOrNum.toString().split("")
  } else if (typeof strOrBooleanOrNum === "boolean") {
    return strOrBooleanOrNum.toString().split("")
  } else {
    // 如果达不到never，则可以正常的运行
    // let n: never = strOrBooleanOrNum
    validateCheck(strOrBooleanOrNum)
    return []
  }
}

// 8) 对象类型
function create(target: object) { } // new Proxy()
create(function () { })
create([])
create({})
// create(123) // 报错

// 9) Symbol类型
const s4: symbol = Symbol()
const s5: symbol = Symbol()
console.log(s4 === s5) // false

// 10) bigInt类型
const big: bigint = BigInt(Number.MAX_SAFE_INTEGER + 100)
// bigint 不能赋予给number

// 11) any类型
let arr = [] // any
let arry: any = [] // 能不写any,就不写any，写多了，变成anyScript
arry();
arry.xxx;
arry = []










export {}