{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // video의 optional이라는 title과 author가 있어도 되고 없어도
  // 되는 기능을 만들고 싶다면 타입을 다시 만들어 줘야하고 나중에
  // description을 추가하려면 수동적으로 추가해야한다. 이런거 굉장히 불편핟.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'Hello World',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    // 부분적으로 타입을 가져올 수 있다.
    age: 1,
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: 'seung',
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify <T> = {
    [P in keyof T]: Proxy<T[P]>;
    // 오브젝트를 돌면서 전달되는 타입을 Proxy라는 타입으로 만드는 역할
  };

  const obj3:
}
