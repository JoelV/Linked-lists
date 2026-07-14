import { Collection } from './collection';
import { ListNode } from './list-node';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  private addNodeAt(index: number, v: T): void {
    if (index < 0 || index > this.size()) {
      throw new Error('IndexOutOfBoundsException');
    }

    if (!this.head) {
      this.head = new ListNode(v);
      return;
    }
    if (index === 0) {
      const firstNode = this.head;
      firstNode.previous = new ListNode(v);
      firstNode.previous.next = firstNode;
      this.head = firstNode.previous;
      return;
    }
    const firstNode = this.head;
    this.insertNodeAtIndexGreaterThanZero(index, v, firstNode);
  }

  private insertNodeAtIndexGreaterThanZero(index: number, v: T, firstNode: ListNode<T>): void {
    const { previousNode, currentNode } = this.findPreviousAndCurrentNode(firstNode, index);
    if (currentNode === null) {
      previousNode.next = new ListNode(v, previousNode);
    } else {
      const newNode = new ListNode(v, previousNode, currentNode);
      previousNode.next = newNode;
      currentNode.previous = newNode;
    }
  }

  private findPreviousAndCurrentNode(
    firstNode: ListNode<T>,
    index: number,
  ): { previousNode: ListNode<T>; currentNode: ListNode<T> | null } {
    let currentNode = firstNode.next;
    let previousNode = firstNode;
    let currentIndex = 1;
    while (currentNode !== null) {
      if (currentIndex === index) {
        break;
      }
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return { previousNode, currentNode };
  }

  private addToEnd(v: T): boolean {
    const node = new ListNode(v);
    if (!this.head) {
      this.head = node;
      return true;
    }
    let currentNode = this.head;

    while (currentNode?.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    node.previous = currentNode;
    return true;
  }

  public add(v: T): boolean;
  public add(index: number, v: T): void;
  public add(vOrIndex: T | number, v?: T): boolean | void {
    let index: number | undefined = undefined;
    if (arguments.length === 1) {
      v = vOrIndex as T;
    } else {
      index = vOrIndex as number;
      v = v as T;
    }

    if (index !== undefined) {
      this.addNodeAt(index, v);
      return;
    }

    return this.addToEnd(v);
  }

  public addAll(collection: Collection<T>): boolean;
  public addAll(index: number, collection: Collection<T>): boolean;
  public addAll(collectionOrIndex: number | Collection<T>, collection?: Collection<T>): boolean {
    let index: number | undefined = undefined;
    if (arguments.length === 1) {
      collection = collectionOrIndex as Collection<T>;
    } else {
      index = collectionOrIndex as number;
      collection = collection as Collection<T>;
    }

    if (index !== undefined) {
      if (index < 0 || index > this.size()) {
        throw new Error('IndexOutOfBoundsException');
      }

      const firstNode = this.head;
      if (firstNode === null) {
        let firstNode: ListNode<T> | null = null;
        let currentNode: ListNode<T> | null = null;
        collection.forEach((v) => {
          if (firstNode === null) {
            firstNode = new ListNode(v);
            currentNode = firstNode;
          } else {
            if (currentNode === null) throw new Error('can not end up here fix this at refactor');
            currentNode.next = new ListNode(v, currentNode, null);
            currentNode = currentNode.next;
          }
        });
        this.head = firstNode;
        return true;
      }

      if (index === 0) {
        let currentNode: ListNode<T> | null = null;
        let firstNodeOfVectorLinkedList: ListNode<T> | null = null;
        collection.forEach((v) => {
          if (currentNode === null) {
            currentNode = new ListNode(v);
            firstNodeOfVectorLinkedList = currentNode;
          } else {
            if (currentNode === null) throw new Error('can not end up here fix this at refactor');
            currentNode.next = new ListNode(v, currentNode, null);
            currentNode = currentNode.next;
          }
        });
        if(currentNode === null) throw new Error('impossible refactor later')
        firstNode.previous = currentNode;
        (currentNode as ListNode<T>).next = firstNode;
        this.head = firstNodeOfVectorLinkedList;
        return true;
      }
      return true;
    }

    collection.forEach((v) => {
      this.addToEnd(v);
    });
    return true;
  }

  private size(): number {
    let size = 0;
    let node = this.head;
    while (node !== null) {
      size++;
      node = node.next;
    }
    return size;
  }

  public peakLast(): T | null {
    let currentNode = this.head;
    if (!currentNode) return currentNode;

    while (currentNode?.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
