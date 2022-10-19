/*Двусвязный список


Реализовать класс, который позволяет хранить информацию в двусвязном нецикличном списке.
У класса должны быть методы позволяющие:
Получить информацию из списка по индексу.
Добавить информацию в список в конец списка и по индексу.
Отредактировать элемент списка по индексу.
Удалить элемент списка по индексу.*/
class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    add(value){
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
          } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
          }
        this.length++;
        return this;
    }
    insert (index, value) {
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index === this.length) {
            this.append(value);
            return this;
        }
        let newNode = new Node(value);
        let currentNode = this.head;
        for (let k = 0; k < index - 1; k++) {
            currentNode = currentNode.next;
        }
        let nextNode = currentNode.next;
        newNode.next = nextNode;
        currentNode.next = newNode;
        newNode.previous = currentNode;
        nextNode.previous = newNode;
        this.length++;
        this.printList();
    }
    append(value) {
        let newNode = new Node(value);
    
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    
        this.length++;
        this.printList();
    }
    getByIndex(index){
        if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }
        var currentNode = this.head;
        let currentCount = 0;
        while(currentCount !== index){
            currentNode = currentNode.next;
            currentCount++;
        }
        return currentNode;
    }
    editElement(index, value){
        var foundNode = this.getByIndex(index);
        if(foundNode){
            foundNode.value = value;
            return foundNode;
        }
        else return null;
    }
    remove (index) {
        if (!Number.isInteger(index) || index < 0 || index > this.length) {
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }
        // Remove head
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            this.printList();
            return this;
        }
        // Remove tail
        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            this.printList();
            return this;
        }
        // Remove node at an index
        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        this.printList();
        return this;
    }
}
