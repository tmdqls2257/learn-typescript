{
  // Array
  const fruits = ['🍓', '🍒', '🍑']
  const scores: Array<number> = [1, 2, 3]
  // 차이점은 주어진 데이터를 변경하거나 업데이트 할 수가 없을 수도 있습니다.
  // 이때 readonly를 사용합니다.
  function printArray(fruits: readonly string[]) {
    //이제 fruits는 절대로 변경할 수 없습니다.
    // fruits.push
  }

  // Tuple -> interface, type alias, class로 대체하여 씁니다.
  // 서로 다른 타입을 가질 수 있는 배열
  let student: [string, number]
  student = ['name', 123]
  student[0]
  student[1]
}
