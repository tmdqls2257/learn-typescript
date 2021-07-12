{
  // // JavaScript
  // function jsAdd(num1, num2){
  //   return num1 + num2;
  // }

  // // TypeScript
  // function Add(num1: number, num2: number):number{
  //   return num1 + num2;
  // }

  // JavaScript
  // function jsFetchNum(id){
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

    // typeScript
  //   function FetchNum(id:string):Promise<number>{
  //     // code ...

  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  // }

  // 타입이 더해진 함수

  // Optional parameter
  function printName(firstName: string, lastName?: string){//  lastName을 입력 받을 수 도 받지 않을 수 도 있도록하기 위해 '?'를 사용합니다.
    // lastName: string | undefined
    console.log(firstName);
    console.log(lastName);
  }
  printName('steve', 'jobs');
  printName('seung');
  printName('bin', undefined);

  // Default parameter
  function printMessage(message: string = 'nothing message'){
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(num1:number, ...num2: number[]):number{
    num2.forEach((elem) => {
      num1 += elem;
    });
    return num1;
  };
  const num4 = addNumbers(1,2,3,4,5,6);
  console.log(num4);

  //solution
  function Sum(...numbers:number[]):number{
    return numbers.reduce((a, b) => a + b);
  }
  console.log(Sum(12,3,4));
}