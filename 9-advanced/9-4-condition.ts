{
  type Check<T> = T extends string ? boolean : number
  // 기존에 주어진 타입이 문자열을 상속한다면 booleam 타입으로 결정
  // 아니라면 number타입으로 결정
  type Type = Check<string> // boolean

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object'

  type T0 = TypeName<string> // 'string'
  type T1 = TypeName<'a'> // 'string'
  type T2 = TypeName<() => void> // 'function'
}
