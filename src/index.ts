import { ListNode } from './list-node';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

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
      }
      if (index === 1) {
        const firstNode = this.head;
        const nextNode = firstNode.next;
        firstNode.next = new ListNode(v);
        if (nextNode === null) {
          firstNode.next.previous = firstNode;
        } else {
          nextNode.previous = firstNode.next;
          firstNode.next.next = nextNode;
          firstNode.next.previous = firstNode;
        }
      }
      return;
    }

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
