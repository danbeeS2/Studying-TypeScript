// 인터페이스 (interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User {
  name: string;
  readonly age: number;
  isValid?: boolean;
}

const heropy: User = {
  name: "Heropy",
  age: 85,
  isValid: true,
};
heropy.isValid = false;
// heropy.age = 22

const neo: User = {
  name: "Neo",
  age: 22,
};

// 함수 타입 - 호출 시그니처(Call Signature)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature) => 대괄호 표기법으로 속성 조회(인덱싱)할 때, 인터페이스에는 인덱스 가능 타입이 지정되어 있어야 함!
// 확장(상속)
