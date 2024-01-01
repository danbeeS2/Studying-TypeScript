// 타입 별칭(Alias)
// 부여된 별칭(이름)을 통해서 재사용하는 용도로 사용
type TypeA = string;
type TypeB = string | number | boolean;
type User =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

const userA: User = {
  name: "Neo",
  age: 85,
  isValid: true,
};
const userB: User = ["Evan", 36, false];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param.toFixed(2);
    default:
      return "Boolean!";
  }
}

// 인터페이스를 대신해서 작성할 수 있음
// 인터페이스와 타입 별칭의 기능적 차이는 없으나, 인터페이스 방식을 더 권장함!
// 타입 별칭은 객체 데이터의 타입을 만드는 구조라기 보다는 다양한 타입의 별칭을 지정하는 용도라서 사용 범위가 조금 더 넓은데
// 인터페이스는 함수나 배열 데이터의 타입 지정도 가능하지만 기본적으로는 객체 데이터를 전제하므로!
type TypeUser = {
  name: string;
  age: number;
  isValid: boolean;
};
interface IUser {
  name: string;
  age: number;
  isValid: boolean;
}

const heropy: TypeUser = {
  name: "Heropy",
  age: 33,
  isValid: true,
};
