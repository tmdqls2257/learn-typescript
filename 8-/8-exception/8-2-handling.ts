{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {//에러 처리를 할 때에는 조금 더 의미 있는 처리를 할 수 있는 곳에서 하는 것이 좋다.
        // 가령 8-2-handling 오브젝트의 경우 NetworkClient에서 에러가 발생하는데
        // log in에서 error를 잡아도 어떻게 처리할 수 가 없습니다.
        // 그렇기 때문에 dialog로 보여줄 수 있는 App에 넣어주는게 좋습니다.
        this.userService.login();
      } catch (error) {
        // show dialog to use
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
