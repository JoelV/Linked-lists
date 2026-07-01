import { ListNode } from "./list-node";

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  constructor() {}

  public add(v: T): void {
    const node = new ListNode(v);
    if(!this.head) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while(currentNode?.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node;
    node.previous = currentNode;
  }

  public peakLast(): T | null {
    let currentNode = this.head;
    if(!currentNode) return currentNode;

    while(currentNode?.next) {
      currentNode = currentNode.next
    }
    return currentNode.value;
  }
}
