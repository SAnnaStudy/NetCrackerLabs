/*Реализовать стек


Реализовать коллекцию, элементы которой получают по принципу «последний вошел, первый вышел» (Last-In-First-Out или LIFO).
У класса должны быть методы позволяющие:
Добавить элемент на вершину стека.
Удалить элемент с вершины стека и вернуть его.
Вернуть верхний элемент стека, но не удалять его.
Вернуть количество элементов в стеке.*/

class Node {
    constructor(newValue) {
      this.newValue = newValue;
      this.prev = null;
    }
}
class Stack {
    constructor() {
      this.tail = null;
      this.length = 0;
    }
    push(value){
        var node = new Node(value);
        node.prev = this.tail;
        this.tail = node;
        this.length += 1;
    }
    pop(){
        let last = this.tail;
        this.tail = this.tail.prev;
        this.length -= 1;
        return last;
    }
    seeTheLast(){
        return this.tail;
    }
    checkSize(){
        return this.length;
    }
}
let stack = new Stack();
stack = [1,2,3,4,5,6,7,8,9];
console.log('Стек');
console.log(stack);
console.log('Добавление элемента на вершину стека');
stack.push(10);
console.log(stack);
console.log('Удаление элемента с вершины стека и его возвращение');
const lastElementWithDelete = stack.pop();
console.log(stack);
console.log(lastElementWithDelete);
console.log('Возвращение верхнего элемента стека, без удаления');
const lastElementWithoutDelete = stack.seeTheLast();
console.log(lastElementWithoutDelete);
console.log(stack);
console.log('Количество элементов в стеке');
stack.checkSize();