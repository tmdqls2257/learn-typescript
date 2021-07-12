{type SuccessState = {
  result: 'success';
  response:{
    body:string;
  };
};

type FailedState = {
  result: 'fail';
  reason: string;
};
type LoginState = SuccessState | FailedState;
  function login(): LoginState{
    return{
      result: 'success',
      response:{
        body:'logged in!',
      },
    };
  };

  function printLoginState(state: LoginState){
    if(state.result === 'success'){
      console.log(`${state.response.body}`);
    }else{
      console.log(`${state.reason}`);
    }
  }
}
