// 모듈 패키지 타입 선언
// 구현 관련 코드가 아닌 타입 선언에 관련된 코드만 들어있음
declare module "loadsh" {
  interface Lodash {
    camelCase: (str: string) => string;
    snakeCase: (str: string) => string;
    kebabCase: (str: string) => string;
  }
  const _: Lodash;
  export default _;
}

// <definitely types>
// npm info @types/lodash : 패키지 정보 확인
// npm i @types/lodash -D : 개발 의존성 패키지로 설치
