{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const _result = checkNotNull(123);
  console.log(_result); //이 함수는 숫자만을 return 할 수 있습니다.

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);
  // 타입이 보장 되지 않기 때문에 타입이 안전하지가 않습니다.

  function checkNotNull<T>(arg: T | null): T {
    //제네릭 타입은 어떠한 타입도 쓸 수 있습니다.
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  const string = checkNotNull('test');
}
//제네릭스는 재사용성이 굉장히 높은아이, 유연하면서도 타입이 보장된다.
