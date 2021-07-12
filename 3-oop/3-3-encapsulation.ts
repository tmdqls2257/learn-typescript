{

  type CoffeeCup = {
    shots:number;
  };

  // public 따로 저장하지 않으면 public으로 저장 됩니다.
  // private
  // protected: 외부에서 접근할 수 없지만 이 클래스르르 상속한
  // 자식 클래스에서만 접근이 가능
  class CoffeeMaker{
    private static BEANS_GRAMM_PER_SHOT:number = 7;
    protected coffeBeans: number = 0;
    
    protected constructor(coffeBeans:number){
      this.coffeBeans = coffeBeans;
    }

    static makeMachine(coffeBeans:number):CoffeeMaker{
      return new CoffeeMaker(coffeBeans);
    }

    fillCoffeeBeans(beans:number){
      if(beans < 0){
        throw new Error('커피콩이 없습니다.');
      }
    }

      makeCoffe(shots:number):CoffeeCup{
        if(this.coffeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
          throw new Error('Not enough coffee beans');
        }
        this.coffeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return{
          shots,
        };
      }
    
    }
    const maker = CoffeeMaker.makeMachine(40);//new:클래스의 인스턴스를 만든다.
    maker.fillCoffeeBeans(40);
  class User{
    get fullName():string{
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(public firstName: string,private lastName: string){
      //멤버 변수를 설정하지 않아도 생성자에 접근 제어자를 설정해두면 멤버 변수로 설정이된다.
    }
  }
  const user = new User('Ellie', 'Hong');
  console.log(user.fullName);
  user.firstName = 'Seung bin';
  console.log(user.fullName);
}
