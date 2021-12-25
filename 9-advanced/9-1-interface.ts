{
  type PositionType = {
    x: number
    y: number
  }
  interface PositionInterface {
    x: number
    y: number
  }

  // object *
  const obj1: PositionType = {
    x: 1,
    y: 1,
  }

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  }

  // class *
  class Pos1 implements PositionType {
    x: number
    y: number
  }
  class Pos2 implements PositionInterface {
    x: number
    y: number
    z: 1
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    // 기존의 Interface에 확장하고 싶을 때 사용
    z: number
  }
  type ZPositionType = PositionType & { z: number }
  // 기존의 타입에 Z값을 더할 수 있습니다.

  // only interface can be merge
  interface PositionInterface {
    z: number
  }

  // Type aliases can use computed properties
  type Person = {
    name: string
    age: number
  }
  type Name = Person['name']
  // person에 있는 name이라는 키가 가지고 있는 타입을 쓰게 되어 string타입이 됩니다.
  type Age = Person['age']
  // person에 있는 age이라는 키가 가지고 있는 타입을 쓰게 되어 number타입이 됩니다.
}
