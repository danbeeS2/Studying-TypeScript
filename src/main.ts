// 함수 - 오버로딩(Overloading)
// 함수를 여러개 만들지 않더라도 함수의 타입 선언부를 구현부 위에 여러개 만들어주면 같은 함수라도 타입을 사용하는 방법을 여러개로 관리할 수 있음!

// 1)
function add1(a: string, b: string) {
  return a + b;
}
function add2(a: number, b: number) {
  return a + b;
}
add1("hello ", "world!"); // 'hello world!'
add2(1, 2); // 3
add1("hello ", 2);
add2("hello ", 2);

// 2)
function add(a: string, b: string): string; // 첫번째 타입 선언
function add(a: number, b: number): number; // 두번째 타입 선언
// 함수 구현(any: 실제 타입이라기 보다는 타입 선언의 내용이 어떤 방식으로든 할당될 수 있다는 의미!)
function add(a: any, b: any) {
  return a + b;
}
add("hello ", "world!"); // 'hello world!'
add(1, 2); // 3
add("hello ", 2);
add(1, "world");
