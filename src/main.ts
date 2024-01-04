// 클래스

// 접근 제어자(Access Modifiers)
// public - 어디에서나 자유롭게 접근 가능, 클래스 바디에서 생략 (명시적으로 작성해주자)
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능

class UserA {
  // this로 접근할 수 있는 각각의 속성들은
  // constructor 함수 이전에 클래스 바디부분에 타입이 지정되어 있어야 함
  // 속성에 타입을 붙일 때는 접근 제어자를 작성해줘야 함
  // public first: string = "";
  // protected last: string = "";
  // private age: number = 0;

  // constructor(first: string, last: string, age: number) {
  //   this.first = first;
  //   this.last = last;
  //   this.age = age;
  // }

  // 중복 코드 제거 (매개변수에서 public 사용시 생략 불가능!)
  constructor(
    public first: string = "",
    public last: string = "",
    public age: number = 0
  ) {
    // ...
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}!`;
  }
}

class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}!!`;
  }
}

// 인스턴스
const neo = new UserA("Neo", "Anderson", 102);
console.log(neo.first);
console.log(neo.last);
console.log(neo.age);
neo.getAge();
