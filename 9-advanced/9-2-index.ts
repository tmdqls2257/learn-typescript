{
  const obj = {
    name: 'ellie',
  };
  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; //string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  //Animal에 있는 모든 키를 할당
  const key: Keys = 'gender';
}
