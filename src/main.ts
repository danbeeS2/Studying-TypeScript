// 인터페이스 (interface)
// 함수 타입 - 호출 시그니처(Call Signature) for 재사용

interface GetUser {
  // (함수 매개변수 : 타입): 함수가 호출되고 나서 반환하는 타입
  (param: string): string;
}

interface User {
  name: string;
  age: number;
  getName: GetUser;
}

const heropy: User = {
  name: "Heropy",
  age: 85,
  // 함수 데이터
  getName(message: string) {
    console.log(message);
    return this.name; // 화살표 함수가 아니고 알반함수이므로 this는 호출될 때 결정됨
  },
};
heropy.getName("Hello~~");
