// 함수 - 명시적 this 지정
// this라는 키워드를 사용할 때다자 명시적으로 타입을 지정할 필요는 없음
// BUT this라는 타입이 정확하게 무엇인지 알 수 없는 환경에서 this가 무엇인지 개발자가 타입스크립트에게 알려줄 수 있는 방법이다.

interface Cat {
  name: string;
  age: number;
}
const cat: Cat = {
  name: "Lucky",
  age: 3,
};

function hello(this: Cat, message: string) {
  console.log(`Hello ${this.name}, ${message}`);
  // 일반함수 안에서의 this는 호출되는 위치에서 정의됨 (호출되기 전까지는 this가 무엇인지 알 수 없음)
}

hello.call(cat, "You are pretty awesome!");
// call : 함수나 메소드 뒤에서 바로 사용해서 그 함수나 메소드가 어떤 대상(첫번째 인수)에서 실행될 것인지를 결정
