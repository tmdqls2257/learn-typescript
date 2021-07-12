{
  /**
   * Union Types: OR
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {};

  type LoginState = SuccessState | FailState;



  function Login(): LoginState{
    return {
      response: {
        body: 'logged in!',
      },
    }//이처럼 다양한 케이스 중에 하나만 정하고 싶을 때 이렇게 사용
  }

  function PrintLoginState(state: LoginState){
    if('response' in state){
      console.log(state.response.body);
    }else{
    }
  }
}