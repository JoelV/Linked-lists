import { ListNode } from './list-node';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  private addNodeAt(index: number, v: T): void {
    let size = this.size();
    if (index < 0 || index > size) {
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

  private insertNodeAtIndexGreaterThanZero(index: number, v: T, firstNode): void {
    const { previousNode, currentNode } = this.findPreviousAndCurrentNode(firstNode, index);
    if (currentNode === null) {
      previousNode.next = new ListNode(v, previousNode);
    } else {
      const newNode = new ListNode(v, previousNode, currentNode);
      previousNode.next = newNode;
      currentNode.previous = newNode;
    }
  }

  private findPreviousAndCurrentNode(firstNode: ListNode<T>, index: number): { previousNode: ListNode<T>; currentNode: ListNode<T> | null; } {
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
    if (currentNode.value === v) {
      return false;
    }
    while (currentNode?.next) {
      if (currentNode.value === v) {
        return false;
      }
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
