{
  type CoffeeCup = {
    shots:number;
    hasMilk:boolean;
  };

  interface CoffeeMaker{
    makeCoffee(shots:number): CoffeeCup;
    fillCoffeeBeans(beans:number): void;
  } //지켜야하는 규칙을 명시

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

      makeCoffee(shots:number,):CoffeeCup{
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

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'aaaaa');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);
  }