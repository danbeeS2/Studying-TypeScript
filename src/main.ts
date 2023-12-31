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
const add1_2: number = add(1, 2);

// const hello: () => void = function () {
//   console.log("Hello world!");
// };
const hello = function (): void {
  console.log("Hello world!");
};
const h: void = hello();

// Any (어떤 데이터든 할당해도 상관 없다)=> 사용하지 않는 것을 권장
let hi: any = "Hi!";
hi = 123;
hi = false;
hi = null;
hi = {};
hi = [];
hi = function () {};

// Unknown (정확하게 어떤 데이터가 할당될지 알수 없으니까 일단은 알수없음의 상태로 두겠다)
const a: any = 123;
const u: unknown = 123;

const any1: any = a;
const boo1: boolean = a;
const num1: number = a;
const arr1: string[] = a;
const obj1: { x: string; y: string } = a;

const any2: any = u;
// const boo2: boolean = u;
// const num2: number = u;
// const arr2: string[] = u;
// const obj2: { x: string; y: string } = u;

// Tuple => 아이템의 타입, 개수와 순서까지 명시
const tuple: [string, number, boolean] = ["a", 1, false];
const users: [number, string, boolean][] = [
  [1, "Neo", true],
  [2, "Evan", false],
  [3, "Lewis", true],
];

// Void => return 키워드를 작성하지 않는 함수 안에서 반환되는 데이터의 타입
function sayHello(msg: string): void {
  console.log(`Hello ${msg}`);
}
const greeting: void = sayHello("danbi");

// Never => 절대 발생하지 않을 값
// const nev: [] = []; 아무런 데이터를 넣을 수 없음 => 타입스크립트는 이렇게 만들어진 배열의 타입에 절대 발생할 수 없는 값이라는 never 타입을 자동으로 지정함
const nev: number[] = [];
nev.push(1);
// 만약 에러 메시지에서 never 타입을 만나게 되면 타입 지정이 잘못되지 않았는지 검토해보자!

// Union => 동시에 여러 개의 타입을 지정하고 싶을 때 유용
let union2: string | number | boolean;
union2 = "Hello type!";
union2 = 123;
union2 = false;

// Intersection
interface User2 {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const heropy: User2 & Validation = {
  name: "Neo",
  age: 85,
  isValid: true,
};
