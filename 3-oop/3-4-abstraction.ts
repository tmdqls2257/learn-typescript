{
  type CoffeeCup = {
    shots:number;
  };

  interface CoffeeMaker{
    makeCoffee(shots:number): CoffeeCup;
    fillCoffeeBeans(beans:number): void;
  } //지켜야하는 규칙을 명시

  interface CommercialCoffeeMaker{
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans:number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker{
    private static BEANS_GRAMM_PER_SHOT:number = 7;
    protected coffeBeans: number = 0;
    
    protected constructor(coffeBeans:number){
      this.coffeBeans = coffeBeans;
    }

    static makeMachine(coffeBeans:number):CoffeeMachine{
      return new CoffeeMachine(coffeBeans);
    }

    fillCoffeeBeans(beans:number){
      if(beans < 0){
        throw new Error('커피콩이 없습니다.');
      }
    }

    clean(){
      console.log('cleaning the machine...');
    }

    private grindBeans(shots:number){
      console.log(`grinding beans for ${shots}`);
      if (this.coffeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }
      this.coffeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat():void{
      console.log('heating up...');
    }

    private extract(shots:number): CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      return {shots}
    }

      makeCoffee(shots:number):CoffeeCup{
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
        // if(this.coffeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
        //   throw new Error('Not enough coffee beans');
        // }
        // this.coffeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        // return{
        //   shots,
        // };
      }
    
    }
    const maker:CoffeeMachine = CoffeeMachine.makeMachine(40);//new:클래스의 인스턴스를 만든다.
    maker.fillCoffeeBeans(40);
    maker.makeCoffee(2);

    const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(40);//new:클래스의 인스턴스를 만든다.
    maker2.fillCoffeeBeans(40);
    maker2.makeCoffee(2);
    maker2.clean();

    class AmateurUser{
      constructor(private machine: CoffeeMaker){}
      makeCoffee(){
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
      }
    }

    class ProBarista{
      constructor(private machine: CommercialCoffeeMaker){}
      makeCoffee(){
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
        this.machine.fillCoffeeBeans(45);
        this.machine.clean();
      }
    }

    const Amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
  }