{
  // Array
  const fruits = ['π', 'π', 'π']
  const scores: Array<number> = [1, 2, 3]
  // μ°¨μ΄μ μ μ£Όμ΄μ§ λ°μ΄ν°λ₯Ό λ³κ²½νκ±°λ μλ°μ΄νΈ ν  μκ° μμ μλ μμ΅λλ€.
  // μ΄λ readonlyλ₯Ό μ¬μ©ν©λλ€.
  function printArray(fruits: readonly string[]) {
    //μ΄μ  fruitsλ μ λλ‘ λ³κ²½ν  μ μμ΅λλ€.
    // fruits.push
  }

  // Tuple -> interface, type alias, classλ‘ λμ²΄νμ¬ μλλ€.
  // μλ‘ λ€λ₯Έ νμμ κ°μ§ μ μλ λ°°μ΄
  let student: [string, number]
  student = ['name', 123]
  student[0]
  student[1]
}
