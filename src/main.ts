// 타입 종류
// 문자
let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}`;
let yourColor: string = "My color is" + green;

// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// 불린
let isBoolean: boolean;
let isDone: boolean = false;

// Null / undefined
let nul: null; // 명시적으로 아무것도 아닌 값을 지정
let und: undefined; // 직접 사용하기 보다는 자동으로 들어가서 암시적으로 데이터가 만들어짐
nul = null;
console.log(nul);
console.log(und);

// 배열
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3];
// const array:[] = [1,2 3]

// 객체
// typeof DATA === 'object
const obj: object = {};
const arr: object = [];
const func: object = function () {};
// => 엄격하지 않기 떄문에 거의 사용 X
interface User {
  name: string;
  age: number;
  isValid: boolean;
}
const userA: User = {
  name: "Harry",
  age: 13,
  isValid: true,
};

const userB: User = {
  name: "Neo",
  age: 22,
  isValid: false,
};

// 함수
// const add: (x: number, y: number) => number = function (x, y) {
//   return x + y;
// };
const add = function (x: number, y: number): number {
  return x + y;
};
const a: number = add(1, 2);

// const hello: () => void = function () {
//   console.log("Hello world!");
// };
const hello = function (): void {
  console.log("Hello world!");
};
const h: void = hello();

// Any

// Unknown

// Tuple
// Void
// Never
// Union
// Intersection
