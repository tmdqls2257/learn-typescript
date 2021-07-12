{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function _printLoginState(LoginState:ResourceLoadState){
    // if(LoginState.state === 'loading'){
    //   console.log('loading...');
    // }else if(LoginState.state === 'success'){
    //   console.log(LoginState.response.body);
    // }else if(LoginState.state === 'fail'){
    //   console.log(LoginState.reason);
    // }
    switch(LoginState.state){
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(LoginState.response.body);
        break;
      case 'fail':
        console.log(LoginState.reason);
        break;
      default:
        throw new Error('Failed');
    }
  }
  

  _printLoginState({ state: 'loading' }); // 👀 loading...
  _printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  _printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
