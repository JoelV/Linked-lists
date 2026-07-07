import { ListNode } from './list-node';

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  constructor() {}

  public add(v: T): boolean;
  public add(index: number, v: T): void;
  public add(vOrIndex: T | number, v?: T): boolean {
    let index: number | undefined = undefined;
    if(arguments.length === 1) {
      v = vOrIndex as T;
    } else {
      index = vOrIndex as number;
      v = v as T
    }

    if(index) {
      if(!this.head) {
        this.head = new ListNode(v)
      }
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
