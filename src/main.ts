/// <reference path="loadsh.d.ts" />
// 파일 이름이 패키지 이름과 일치하지 않을 시 참조 경로를 명시해줘야 함
// 삼중 슬래시 지시자(Triple-slash directive), 참조 태그(Reference Tag)
import _ from "lodash";

const str = "the brown lfox jumps over the lazy dog.";
console.log(_.camelCase(str));
console.log(_.snakeCase(str));
console.log(_.kebabCase(str));
