{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): void;
  }

  type rule = {
    value: string;
    next?: rule;
  };

  class simple implements Stack {
    _size: number = 0;
    first?: rule;
    last?: rule;

    get size() {
      return this._size;
    }

    push(value: string) {
      const node: rule = { value, next: this.first };
      this.first = node;
      this._size++;
    }

    pop() {
      if (!this.first) throw new Error('스택이 존재하지 않습니다.');
      if (this.first.value === this.last?.value) {
        this.last = undefined;
      }
      const next = this.first;
      this.first = next.next;
      this._size--;
      return next?.value;
    }
  }

  const stack = new simple();
  stack.push('a');
  console.log(stack);
  console.log('__________________________');
  stack.push('b');
  console.log(stack);
  console.log('__________________________');
  stack.push('c');
  console.log(stack);
  console.log('__________________________');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  console.log('__________________________');
}
