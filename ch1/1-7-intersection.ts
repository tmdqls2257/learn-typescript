{
  //모든 케이스를 다 합한 것
  /**
   * Intersection Types: &같은 개념
   */
  type Student = {
    name: string
    score: number
  }

  type Worker = {
    work: () => void //일을 하는 함수 아무런 인자도 받지 않고 아무것도 리턴하지 않는 함
    employeeId: number
  }

  function internWork(person: Student & Worker) {
    //학생이기도 하고 worker이기한 사람
    console.log(person.name, person.employeeId, person.work())
  }
  //함수를 호출할 때는 모든 데이터가 들어 있는 오브젝트를 전달해야 합니다.
  // 무조건 타입을 만족시켜야한다.
  internWork({
    name: 'seung',
    score: 2,
    employeeId: 2134,
    work: () => {},
  })
}
