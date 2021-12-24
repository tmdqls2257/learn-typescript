{
  /**
   * Type Assertions 똥
   */

  function jsStrFunc(): any {
    return 'hello'
  }
  const result = jsStrFunc()
  // jsStrFunc()은 string을 리턴하지만 any타입이기 때문에
  // 문자열 타입에서 이용 가능한 API를 사용할 수가 없습니다.
  // 이때 Type Assertions
  console.log((result as string).length)
  console.log((<string>result).length)
  //만약 string으로 Type Assertion을 썼는데 실제로 number을 리턴한다면 error가 발생할 수 있다.

  function findNumbers(): number[] | undefined {
    return undefined
  }

  const numbers = findNumbers()
  // 100% 확신할때만 사용
  // numbers!.push(2)

  // 자바스크립트에서 동적으로 querySelector할때 사용
  const button = document.querySelector('class')!
}
