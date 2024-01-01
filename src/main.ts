// 인터페이스 (interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

interface Payload {
  [key: string]: unknown;
}
function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface User {
  [key: string]: unknown; // 2. 인덱싱 가능한 타입 추가
  name: string;
  age: number;
  isValid: boolean;
}
const heropy: User = {
  name: "Heropy",
  age: 85,
  isValid: true,
};
console.log(heropy);
logValues(heropy); // 1. logValues에서 사용하려면 인덱싱 가능한 타입으로 바꿔줘야 함
