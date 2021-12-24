{
  /*
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefind
   * Object: function, array.....
   */

  // number
  const num: number = -6

  // string
  let name: string = 'hello'

  //boolean
  const boal: boolean = true
  // const boal:boolean = false;

  // undefined 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let age: number | undefined
  age = undefined
  age = 1

  // 단독적으로 undefined으로 쓰지 않고 option처럼 사용하는 경우 사용합니다.
  // 보편적으로 undefined나 null중 undefined를 많이 사용합니다.

  // null : 조금 더 명확하게 여기는 텅텅 비어져 있다고 나타내 주는 것
  // 가능하면 사용X
  let person: string | null

  // unknown: 어떤 종류의 데이터가 담길지 알 수 없는 타입
  // 가능하면 사용X
  let notSure: unknown = 0
  notSure = 'hello'

  // any: 어떤 것이든 담을 수 있는 변수
  // 가능하면 사용X
  let anything: any = 0
  anything = 'hello'

  // void: 아무것도 리턴하지 않으면 return이 생략되어있는 건데 이떄 void를 사용해줍니다.
  function print(): void {
    console.log('hello')
  }
  // 변수로 선언하는 경우는 극히 드물다

  // never: 핸들링할 수 없는 에러가 발생했을 때 호출하는 함수, 오직 에러만을 리턴할 수 있다
  function throwError(message: string): never {
    // message를 string으로 받아와서 never를 리턴헤 준다.
    // message -> server(log)
    // message를 서버에 보내고 로그를 남기고 다시 object에 로그를 남긴 다음
    // 어플리 케이샨에서 에러를 던질 수 있습니다.
    throw new Error(message)
  }

  // object: 어떠한 오브젝트도 전달 할 수 있습니다.
  // 가능한 사용X
  let obj: object = [1, 4] //배열도 전달 할 수 있습니다.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' })
  acceptSomeObject({ animal: 'dog' })
  acceptSomeObject({ age: 1 })
}
