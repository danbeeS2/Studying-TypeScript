// 인터페이스 (interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// 배열
interface Fruits {
  [item: number]: string;
}
const fruits: Fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);

// 객체
interface User {
  [key: string]: unknown;
  name: string;
  age: number;
}
const heropy: User = {
  name: "Heropy",
  age: 85,
};
heropy["isValid"] = true;
heropy["emails"] = ["thesecon@gamil.com", "test@gamil.com"];
console.log(heropy);
