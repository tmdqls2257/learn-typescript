{
  type CoffeeCup = {
    shots: number;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    // 클래스에서 공유되어 사용되는 변수들은 중복적으로 데이터가 생성되고
    // 메모리에 낭비가 될 수 있다. 그렇기 때문에 앞에 static을 붙여주어야 한다.
    // 단 this.를 제외하고 클래스의 이름을 붙여주어야한다.
    coffeBeans: number = 0; //instance (object) level

    constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans;
    }

    makeCoffe(shots: number): CoffeeCup {
      if (this.coffeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }
      this.coffeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
      };
    }
  }
  const maker = new CoffeeMaker(40); //new:클래스의 인스턴스를 만든다.
}
