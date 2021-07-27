{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: number;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    protected static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeBeans: number = 0;

    public constructor(coffeBeans: number) {
      this.coffeBeans = coffeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩이 없습니다.');
      }
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    protected abstract extract(shots: number): CoffeeCup;
    // 구현사항을 작성하면 안된다.

    makeCoffee(shots: number, sugar?: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      //한번 설정하면 바뀌지 않는 경우 readonly
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected sugar: number = 0;
    constructor(beans: number, sugar: number) {
      super(beans);
      this.sugar = sugar;
    }
    private putInSugar(e: number): void {
      console.log(`${e}스푼의 설탕을 넣었습니다.`);
    }
    protected extract(shots: number): CoffeeCup {
      this.putInSugar(this.sugar);
      return {
        shots,
        sugar: this.sugar,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16, 3),
  ];

  machines.forEach(machine => {
    console.log('__________________________________');
    machine.makeCoffee(1);
  });
  const latteMachine = new CaffeLatteMachine(23, 'aaaaa');
  const coffee = latteMachine.makeCoffee(1);
  const sugar = new SweetCoffeeMaker(23, 3);
  console.log('__________________________________');
  console.log(sugar);
  console.log('__________________________________');
  console.log(coffee);
}
// 어떤 특정한 기능만 자식 클래스에서 행동이 달라진다면 abstract 클래스를 만들어 볼 수 있습니다.
// abstract를 붙이게 되면 class는 자체적으로 오브젝트를 만들 수 없다.
// abstract클래스를 이용하면 조금 더 안전학게 의도한대로 공통적인 기능들을 수행하고
// 달라져야하는 클래스에게 강조할 수 있습니다.
