{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    sugar?: number
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillCoffeeBeans(beans: number): void
  } //지켜야하는 규칙을 명시

  class CoffeeMachine implements CoffeeMaker {
    protected static BEANS_GRAMM_PER_SHOT: number = 7
    protected coffeBeans: number = 0

    public constructor(
      coffeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeBeans = coffeBeans
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩이 없습니다.')
      }
    }

    clean() {
      console.log('cleaning the machine...')
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
    }

    private preheat(): void {
      console.log('heating up...')
    }

    private extract(shots: number): CoffeeCup {
      this.grindBeans(shots)
      this.preheat()
      return { shots, hasMilk: false }
    }

    makeCoffee(shots: number, sugar?: number): CoffeeCup {
      this.grindBeans(shots)
      this.preheat()
      const coffee = this.extract(shots)
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded)
    }
  }
  // 상속 하고자 하는 클래스가 선언된 다음에 해야한다.

  // 우유 거품기
  class CheapMilkStreamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk...')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class FancyMilkStreamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class coldMilkStreamer implements MilkFrother {
    private steamMilk(): void {
      console.log('cold Steaming some milk...')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class noMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  //설탕제조
  class candySugarMixer implements SugarProvider {
    protected sugar: number = 0
    constructor(sugar: number) {
      this.sugar = sugar
    }
    private getSugar(sugar) {
      console.log(`${sugar}개의 사탕을 부셔 넣었습니다.`)
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.sugar
      this.getSugar(this.sugar)
      return {
        ...cup,
        sugar: sugar,
      }
    }
  }

  class SugarMixer implements SugarProvider {
    protected sugar: number = 0
    constructor(sugar: number) {
      this.sugar = sugar
    }
    private getSugar(sugar) {
      console.log(`${sugar}스푼의 설탕을 넣었습니다.`)
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.sugar
      this.getSugar(this.sugar)
      return {
        ...cup,
        sugar: sugar,
      }
    }
  }

  class noSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  // 필요한 지식을 외부에서 받아옴으로써 필요한 기능을 재사용할 수 있다.

  // Milk
  // 싼 우유를 만들어준다.
  const cheapMilkMaker = new CheapMilkStreamer()
  // 비싼 우유를 만들어준다.
  const fancyMilkMaker = new FancyMilkStreamer()
  // 차가운 우유를 만들어준다.
  const coldMilkMaker = new coldMilkStreamer()
  const NoMilk = new noMilk()

  // Sugar
  // 사탕을 설탕으로 만들어준다.
  const candySugar = new candySugarMixer(1)
  // 설탕을 섞어준다.
  const sugar = new SugarMixer(2)
  // 설탕을 넣지 않는다.
  const NoSugar = new noSugar()

  // 설탕만 들어간 커피머신
  const sweetCandyMachine = new CoffeeMachine(12, NoMilk, candySugar)

  // 우유와 설탕이 들어가지 않은 커피머신
  const sweetmachine = new CoffeeMachine(12, NoMilk, NoSugar)

  // 라떼를 만들어주는 라떼 머신을 만들어준다.
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, sugar)
  // 시원한 라뗴 머신을 만들어준다.
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, sugar)
  // 달콤한 라떼 머신을 만들어준다.
  const SweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker, candySugar)
}
