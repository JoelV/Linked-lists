import { ListNode } from './list-node';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  public add(v: T): boolean;
  public add(index: number, v: T): void;
  public add(vOrIndex: T | number, v?: T): boolean | void {
    let index: number | undefined = undefined;
    if(arguments.length === 1) {
      v = vOrIndex as T;
    } else {
      index = vOrIndex as number;
      v = v as T
    }

    if(index !== undefined) {
      if(index !== 0  && this.head === null) {
        throw new Error('IndexOutOfBoundsException');
      }
      if(!this.head) {
        this.head = new ListNode(v)
        return ;
      }

      const firstNode = this.head;
      firstNode.previous = new ListNode(v);
      firstNode.previous.next = firstNode;
      this.head = firstNode.previous;

      return ;
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

  public peakLast(): T | null {
    let currentNode = this.head;
    if (!currentNode) return currentNode;

    while (currentNode?.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}
