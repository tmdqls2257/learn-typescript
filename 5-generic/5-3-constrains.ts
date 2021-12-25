interface Employee {
  pay(): void
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`)
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`)
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay()
  return employee
}

function pay<T extends Employee>(employee: T): T {
  // Employ를 T에 상속하여 인터페이스내의 기능들만 사용할 수 있습니다.
  employee.pay()
  return employee
}

const ellie = new FullTimeEmployee()
const bob = new PartTimeEmployee()
ellie.workFullTime()
bob.workPartTime()

const ellieAfterPay = pay(ellie)
const bobAfterPay = pay(bob)

const obj = {
  name: 'ellie',
  age: 20,
}

const obj2 = {
  animal: '🐕',
}

console.log(_getValue(obj, 'name')) // ellie
console.log(_getValue(obj, 'age')) // 20
console.log(_getValue(obj2, 'animal')) // 🐕

function _getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
