// either: a or b
interface Either<L, R> {
  left: () => L; //left를 호출하면 L이라는 타입을 리턴
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
  // 어떤 특정한 임의의 유연한 타입을 받으려면 제네릭을 사용하면 된다.
}
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5
const best = new SimpleEither({ name: 'ellie' }, 'hello');
