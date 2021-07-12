/**
 * Let's make a calculator 🧮
 */
{type arithmetic = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
// function calculate(string:arithmetic,  num1:number, num2:number):any {
//   if(string === 'add'){
//     return num1 + num2;
//   }else if (string === 'substract'){
//     return num1 - num2;
//   }else if (string === 'multiply'){
//     return num1 * num2;
//   }else if (string === 'divide'){
//     return num1 / num2;
//   }else if (string === 'remainder'){
//     return num1 % num2;
//   }
// }

function calculate(comand: arithmetic, a:number, b:number):number{
  switch(comand){
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw new Error('unknown command');
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
}


