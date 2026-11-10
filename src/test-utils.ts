import { LinkedList } from '.';
import { ListNode } from './list-node';

export function arrangeLinkedList(numberOfNodes: number): LinkedList<number> {
  const list = new LinkedList<number>();
  for (let i = 0; i < numberOfNodes; i++) {
    const node = new ListNode(i);
    let currentNode = list['head'];
    if (currentNode === null) {
      list['head'] = node;
    } else {
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.previous = currentNode;
    }
  }
  return list;
}
