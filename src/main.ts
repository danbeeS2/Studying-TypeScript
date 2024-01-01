// 인터페이스 (interface)
// 확장(상속)

interface UserA {
  name: string;
  age: number;
}
interface UserB extends UserA {
  isValid: boolean;
}

const heropy: UserA = {
  name: "Heropy",
  age: 85,
  // isValid: true,
};
const neo: UserB = {
  name: "Neo",
  age: 102,
  isValid: true,
};

// ----------------------------------------------

interface FullName {
  firstName: string;
  lastName: string;
}
// 중복되는 인터페이스에서
interface FullName {
  middleName: string; // 어떤 특정 속성의 타입을 추가로 작성 가능
  lastName: string; // 기존에 존재하는 속성의 이름을 작성했다면! 기존의 속성 타입을 그대로 명시해줘야만 문제가 발생하지 않는다
}

const fullName: FullName = {
  firstName: "Tomas",
  middleName: "Sean",
  lastName: "Connery",
};
