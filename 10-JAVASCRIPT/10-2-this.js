console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  counter = 0;
  increase = function () {
    console.log(this);
    // 이때의 this는 Counter을 가르킨다.
  };
}
// const와 let은 local이지만
// var과 함수는 global window에 등록됩니다.
const counter = new Counter();
counter.increase();
// 오브젝트와 this의 관계를 묶어주려면 bind를 사용하면 된다.
// const caller = counter.increase.bind(counter);
// 이렇게 하면 this는 Bob을 가르킨다.
// 또한 arrow function을 이용하면 됩니다.
const caller = counter.increase;
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase();
bob.run;
// 이때의 this는 Bod을 가르킨다.
