// 타입 단언 (Assertion)
// "단언" - (개발자가 타입스크립트에게) 주저하지 아니하고 딱 잘라 말함.
// BUT 잘못 사용할 수 있기 때문에 타입 단언을 남발하는 것은 지양

// 단언 키워드 - as (어떤 데이터가 별도의 타입이라고 단언할 때 사용)
// Non-null 단언 연산자 - ! (null 이나 undefined가 아니다라는 것을 명시할 때만 유용)

// 1)
// const el = document.querySelector("body") as HTMLBodyElement;
const el = document.querySelector("body"); // document의 querySelector 메소드를 통해 요소를 찾는데 요소를 찾지 못하면 null 데이터가 반환됨
el!.textContent = "Hello world?!"; // null일 때 textContent 속성을 사용하지 못함 => !을 사용해서 느낌표 앞의 el 변수는 절대 null이 아니다라고 단언

const title = document.querySelector(".title");
// 타입 가드
if (title) {
  title.textContent = "This is Title";
}

// 2)
// function getNumber(x: number | null | undefined) {
//   return Number((x as number).toFixed(2));
// }
// function getNumber(x: number | null | undefined) {
//   return Number(x!.toFixed(2));
// }
// 타입스크립트 코드 상 에러가 발생하지 않지만 getNumber에 null 데이터가 들어갈 수 있는 코드가 실제로 존재하기 때문에 잘못된 타입 단언이다 !

// 타입 가드
function getNumber(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2));
  }
}
getNumber(3.1415926535);
getNumber(null);

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }
  return (x as string).toUpperCase();
}
console.log(getValue("hello world", false)); // "HELLO WORLD"
console.log(getValue(3.1415926535, true)); // 3.14

// 할당 단언 (Assertion)
// "단언" - (개발자가 타입스크립트에게) 주저하지 아니하고 딱 잘라 말함.
// 타입스크립트에게 이 변수가 이미 할당되어져 있는 구조니까 에러를 보여줄 필요가 없다고 딱 잘라 단언함

// 할당 단언 키워드 - !

let num!: number;
console.log(num);
num = 123;
