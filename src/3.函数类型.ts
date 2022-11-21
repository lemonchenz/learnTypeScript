// function 关键字
function sum(a: string, b: string): string {
    // function关键字 不涉及到变量类型的标注
    return a + b
  }
  sum('a', 'b')
  
  // 通过表达式来声明
  type Sum = (x: string, y: string) => string
  // type Sum = {(x:string,y:string):string}
  let sum1: Sum = function (a: string, b: string): string {
    return a + b
  }
  sum1("a","b")
  
  // 可选参数
  type Sum1 = (x: string, y?: string) => string
  let sum2: Sum1 = function (a, b) {
    return a+b
  }
  sum2("a")
  
  // 默认参数
  let sum3 = function (a: string, b = "123") {
    // 可选和默认值，都要放在最后面
    return a + b
  }
  sum3("a")
  
  // 剩余参数
  let sum4 = function (a: string, ...args: string[]) {
    // 剩余参数
    // 不需要arguments
    return args.reduce((memo,current) => memo + current,a)
  }
  let r = sum4("a", "b", "c", "d")
  console.log(r) // abcd
  
  // this问题
  const person = { name: "jw", age: 30 }
  type Person = typeof person
  /*
    type Person = {
      name: string;
      age: number;
  }
  */
  type PersonKey = keyof Person
  // type PersonKey = "name" | "age"
  function getName(this: Person, key: PersonKey) {
    return this[key]
  }
  getName.call(person,"name")
  
  // 函数的重载
  function toArray(value: number): number[];
  function toArray(value: string): string[];
  function toArray(value: string|number): string[] | number[] {
    // 只有一个具体的实现
    if(typeof value === "string") {
        return value.split("");
    } else {
        return value.toString().split("").map(Number)
    }
  }
  let arr1 = toArray(1);
  let arr2 = toArray("123")
  // string -> number[] 错误
  // number -> string[] 错误

  // 'abc' -> [a,b,c]
  //123 -> [1,2,3]