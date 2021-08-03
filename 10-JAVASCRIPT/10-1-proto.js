const x = {};
const y = {};
console.log(x);
console.log(y);
// 자바스크립트에서 오브젝트는 프로토를 상속합니다.
console.log(x.__proto__ === y.__proto__); //true
// x와 y는 동일한 오브젝트를 상속하고 있기 때문

const array = [];
console.log(array);
// 이 프로토 타입이 있기 때문에 array에 아무것도 주지 않았으메도
// 불구하고 contact이나 length가은 함수들을 이용할 수 있습니다.
// array는 Array(concat, find, filter,...)등을 상속하고 Array는 Object
// (toString(), valuseOf(), watch(), ...)를 상속합니다.

function CoffeeMachine(beans) {
  this.beans = beans;
  // this.makeCoffee = shots => {
  //   console.log('making...');
  // };
}
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('make');
};
// CoffeeMachine의 prototype에 접근하여 makeCoffee를 선언한다.
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
// LateeMachine의 prototype을 CoffeeMachine을 연결해줍니다.
LatteMachine.makeCoffee();
// LatteMachine에서도 makeCoffee를 사용할 수 있습니다.

const LatteMachine = new LatteMachine(123);
console.log(latteMachine);
