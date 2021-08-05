import add, { print as printMessage } from './10-3-module1';
// default가 아닌 얘들은 {}를 이용해서 호출
// as를 붙이면 print를 printMessage로 호출할 수 있다.
import * as calculator from './10-3-module1';
// 모든 함수를 calculate롤 호출할 수 있습니다.

console.log(add(1, 2));
console.log(printMessage('1'));
