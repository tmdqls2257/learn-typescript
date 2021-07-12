{

  type CoffeeCup = {
    shots:number;
  };

const BEANS_GRAMM_PER_SHOT:number = 7;

let coffeBeans: number = 0;

  function makeCoffe(shots:number):CoffeeCup{
    if(coffeBeans < shots * BEANS_GRAMM_PER_SHOT){
      throw new Error('Not enough coffee beans');
    }
    coffeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return{
      shots,
    };
  }

  coffeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffe(2);
  console.log(coffee);
}