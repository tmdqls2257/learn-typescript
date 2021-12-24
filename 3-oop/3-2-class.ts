{
  type CoffeeCup = {
    shots: number
  }

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7 // class level : 클래스와 연결되어져 있기 때문에
    // object마다 만들어지지 않습니다.
    // 오브젝트마다 새로 만들어줘야하는 데이터가 있다면 멤버변수를 사용하고
    // 클래스에서 공유되어 사용되는 변수들은 중복적으로 데이터가 생성되고
    // 메모리에 낭비가 될 수 있다. 그렇기 때문에 앞에 static을 붙여주어야 한다.
    // 단 this.를 제외하고 클래스의 이름을 붙여주어야한다.
    coffeBeans: number = 0 //instance (object) level

    constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans
    }

    // constructor를 이용하지 않고 커피를 만들고 싶을때
    // 클래스 내부에 있는 어떠한 속성 값도 가지지 않기 때문에 static 사용가능
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans')
      }
      this.coffeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
      return {
        shots,
      }
    }
  }
  const maker = new CoffeeMaker(40) //new:클래스의 인스턴스를 만든다.

  // 단 static을 쓰지 않으면 이렇게 사용할 수 없다.
  const maker2 = CoffeeMaker.makeMachine(40)
}
