// 타입 가드(Guards)

function logText(el: Element) {
  console.log(el.textContent);
}

const h1El = document.querySelector("h1");
if (h1El instanceof HTMLHeadingElement) {
  logText(h1El);
}

function add(val: string | number | boolean) {
  let res = "Result => ";
  if (typeof val === "number") {
    res += val.toFixed(2);
  }
  if (typeof val === "string") {
    res += val.toUpperCase();
  }
  console.log(res);
}

add(3.141592);
add("hello world!!");
