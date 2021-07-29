{
  interface Either<L, R> {
    _obj: () => L;
    _obj2: () => R;
  }
  const obj = {
    name: 'ellie',
    age: 20,
  };

  const obj2 = {
    animal: '🐕',
  };

  function getValue<L, R extends keyof L>(obj: L, key: R): L[R] {
    //K를 상속하는데 object:T에있는
    return obj[key];
  }

  console.log(getValue(obj, 'name')); // ellie
  console.log(getValue(obj, 'age')); // 20
  console.log(getValue(obj2, 'animal')); // 🐕
}
