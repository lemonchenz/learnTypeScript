(function () {
  'use strict';

  // 函数中的类型， 对于函数来说我们主要关心的是 函数的入参类型 和 函数的返回值类型
  // let sum: Sum = function (a, b = "123") {
  //   return a + b;
  // };
  // let sum = function (a: string, b = "123") { // 可选和默认值 都要放在最后面
  //   return a + b;
  // };
  // let sum = function (a?: string, ...args: string[]) {
  //   // 剩余参数
  //   // 不需要arguments
  //   return args.reduce((memo, current) => memo + current, a);
  // };
  // let r = sum("a", "b", "c", "d");
  // console.log(r);
  // TS中的  typeof 取变量的类型 返回的是类型  keyof 取的是类型的key的集合
  // this 导致的问题是不方便类型推导，用起来麻烦。
  function getName(key) {
      return this[key];
  }
  const person = { name: "jw", age: 30 };
  getName.call(person, "name");
  function toArray(value) {
      // 只有一个具体的实现
      if (typeof value === "string") {
          return value.split("");
      }
      else {
          return value.toString().split("").map(Number);
      }
  }
  toArray(1);
  toArray("2");
  // string -> number[]
  // number -> string[]
  // 'abc' -> [a,b,c]
  // 123 -> [1,2,3]
  var USER_ROLE;
  (function (USER_ROLE) {
      USER_ROLE[USER_ROLE["USER"] = 0] = "USER";
      USER_ROLE[USER_ROLE["ADMIN"] = 1] = "ADMIN";
      USER_ROLE[USER_ROLE["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
  })(USER_ROLE || (USER_ROLE = {}));

})();
//# sourceMappingURL=bundle.js.map
