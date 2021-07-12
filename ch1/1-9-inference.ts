{/**
 * Type Inference
 */
 let text = 'hello';
 function print(message = 'hello') {
   console.log(message);
 }
 print('hello');
 
 function add(x: number, y: number): number {
   return x + y;
 }
 const result = add(1, 2);
//text = 1; 먼저 'hello'라는 문자열을 선언하였기 때문에 text가 string이라는 것을 유추
}