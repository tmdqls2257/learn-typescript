{
  // Type aliases

  type Text = string
  const name: Text = 'ellie'
  type Num = number

  // 타입을 오브젝트 형태로 전달해줄 수 있습니다.
  type Student = {
    name: string
    age: number
  }
  const student: Student = {
    name: 'apple',
    age: 12,
  }

  // string literal types
  type Name = 'name'
  let appleName: Name
  // appleName에는 어떠한 다른 문자열도 할당할 수 없고 'name'만 적어야한다.
  appleName = 'name'
}
