{
  type ToDo = {
    title: string
    description: string
  }

  function display(todo: Readonly<ToDo>) {
    // 수정이 가능한 타입의 오브젝트를 전달하는 것은 굉장히 위험하다.
    // 항상 불변성을 보장하는 것이 좋다.
    // todo.title = 'jajaja';
    // ?:는 있어도 되고 없어도 되는 옵셔널이고
    // -?:는 절대적으로 있어야 하는 것입니다.
  }
}
