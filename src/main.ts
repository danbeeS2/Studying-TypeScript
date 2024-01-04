// 제네릭(Generic) - 클래스

class User<P> {
  // public payload: P;
  // constructor(payload: P) {
  //   this.payload = payload;
  // }
  // getPayload() {
  //   return this.payload;
  // }

  // 중복 코드 제거
  constructor(public payload: P) {}
  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}
interface UserBType {
  name: string;
  age: number;
  emails: string[];
}

const heropy = new User<UserAType>({
  name: "Heropy",
  age: 23,
  isValid: false,
  // emails: [], // ?!
});

const neo = new User<UserBType>({
  name: "Neo",
  // ?!
  emails: ["neo@gmail.com"],
  age: 22,
});
