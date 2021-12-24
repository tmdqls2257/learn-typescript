{
  type CoffeeCup = {
    shots:number;
    hasMilk?:boolean;
    sugar?:number;
  };

  interface CoffeeMaker{
    makeCoffee(shots:number): CoffeeCup;
    fillCoffeeBeans(beans:number): void;
  } 

  class CoffeeMachine implements CoffeeMaker{
    protected static BEANS_GRAMM_PER_SHOT:number = 7;
    protected coffeBeans: number = 0;
    
    public constructor(coffeBeans:number){
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
      return {shots, hasMilk:false}
    }

      makeCoffee(shots:number, sugar?:number):CoffeeCup{
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    
    }
// 상속 하고자 하는 클래스가 선언된 다음에 해야한다.
    class CaffeLatteMachine extends CoffeeMachine {
      //자식에서 constructor를 따로 구현하는 경우는 super를 사용해야한다.
      // 부모의 데이터도 받아와야한다.
      constructor(beans:number, public readonly serialNumber: string) {//한번 설정하면 바뀌지 않는 경우 readonly
        super(beans);
      }
      private steamMilk():void{
        console.log('Steaming some milk...');
      }
      makeCoffee(shots:number): CoffeeCup{
        //자식에서 부모에 있는 함수를 이용하고 싶다면 super을 사용하면 된다.
        const coffee = super.makeCoffee(shots);
        this.steamMilk();
        return{
          ...coffee,//부모에서 사용한 커피를 그대로 사용
          hasMilk:true,
        }
      }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
      protected sugar: number = 0;
      constructor(beans:number, sugar:number){
        super(beans);
        this.sugar = sugar
      }
      private putInSugar(e: number):void{
        console.log(`${e}스푼의 설탕을 넣었습니다.`)
      }
      makeCoffee(shots:number): CoffeeCup{
        const coffee = super.makeCoffee(shots);
        this.putInSugar(this.sugar);
        return{
          ...coffee,//부모에서 사용한 커피를 그대로 사용
        }
      }
    }

    const machines: CoffeeMaker[] = [
      new CoffeeMachine(16),
      new CaffeLatteMachine(16, '1'),
      new SweetCoffeeMaker(16, 1),
    ];
// interface의 배열로 만들 수도 있습니다.
    machines.forEach(machine =>{
      console.log('__________________________________');
      machine.makeCoffee(1);
    });
    //다양성의 장점은 내부적으로 구현된 다양한 클래스들이 한가지의
    // 인터페이스를 구현하거나 동일한 부모를 상속했을 때 클래스를 구분하지 않고
    // 공통된 api를 호출할 수 있다는 장점이 있습니다.
    const latteMachine = new CaffeLatteMachine(23, 'aaaaa');
    const coffee = latteMachine.makeCoffee(1);
    const sugar = new SweetCoffeeMaker(23, 3);
console.log(sugar);
console.log(coffee);
  }