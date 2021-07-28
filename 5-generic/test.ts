{
  interface Either<L, R> {
    _obj: () => L;
    _obj2: () => L;
  }
  const obj = {
    name: 'ellie',
    age: 20,
  };

  const obj2 = {
    animal: '🐕',
  };

  function getValue<L, R extends keyof L>(obj: L, key: R) {
    return obj[key];
  }

  console.log(getValue(obj, 'name')); // ellie
  console.log(getValue(obj, 'age')); // 20
  console.log(getValue(obj2, 'animal')); // 🐕
}
