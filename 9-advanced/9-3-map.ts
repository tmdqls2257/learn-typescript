{
  type Video = {
    title: string
    author: string
    description: string
  }
  // video의 optional이라는 title과 author가 있어도 되고 없어도
  // 되는 기능을 만들고 싶다면 타입을 다시 만들어 줘야하고 나중에
  // description을 추가하려면 수동적으로 추가해야한다. 이런거 굉장히 불편핟.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // map type
  type Optional<T> = {
    // 기존에 있는 T오브젝트의 키를 돌면서 값 P를 타입으로 갖는것
    [P in keyof T]?: T[P] // for...in
  }

  type VideoOptional = Optional<Video>
  const videoOp: VideoOptional = {
    title: 'Hello World',
  }

  type Animal = {
    name: string
    age: number
  }

  const animal: Optional<Animal> = {
    // 부분적으로 타입을 가져올 수 있다.
    age: 1,
  }

  // readonly를 사용하면 안에 있는 데이터들이 변경되지 않는다.
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
  }

  animal.name = 'ellie'

  type Nullable<T> = { [P in keyof T]: T[P] | null }
  const obj2: Nullable<Video> = {
    title: null,
    author: 'seung',
    description: undefined,
  }

  type Proxy<T> = {
    get(): T
    set(value: T): void
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
    // 오브젝트를 돌면서 전달되는 타입을 Proxy라는 타입으로 만드는 역할
  }
}
