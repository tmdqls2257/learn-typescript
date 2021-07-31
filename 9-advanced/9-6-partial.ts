{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    // ToDo 타입의 아이들중 일부만 받을 수 있습니다.
    return { ...todo, ...fieldsToUpdate };
    // todo를 복사하여 fieldsToUpdate를 업데이트하는 기능
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated); // priority만 'low'로 변경됨
}
