// 제네릭(Generic)
// 함수

interface Obj {
  x: number;
}
type Arr = [number, number];

// 오버로딩
// function toArray(a: string, b: string): string[];
// function toArray(a: number, b: number): number[];
// function toArray(a: boolean, b: boolean): boolean[];
// function toArray(a: Obj, b: Obj): Obj[];
// function toArray(a: Arr, b: Arr): Arr[];
// function toArray(a: any, b: any) {
//   return [a, b];
// }

// 제네릭 문법
function toArray<T>(a: T, b: T) {
  return [a, b];
}

console.log(
  // 제네릭 함수 호출 시에도 타입이 무엇인지 명시적으로 타입 제공 가능
  toArray<string>("Neo", "Anderson"),
  // 타입스크립트가 타입 추론하도록 해도 됨(권장)
  toArray(1, 2),
  toArray(true, false),
  toArray({ x: 1 }, { x: 2 }),
  // 우리가 의도한 인자를 두개만 가지는 튜플 타입이 아니지만 에러가 안남 => 타입을 명시적으로 제공해야 함
  toArray([1, 2], [3, 4, 5, "문자"]),
  toArray<Arr>([1, 2], [3, 4])
);
