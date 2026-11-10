import { LinkedList } from '.';
import { arrangeLinkedList } from './test-utils';

function renderLinkedList(_list: LinkedList<T>): string {
  return 'undefined';
}
describe('renderLinkedList', () => {
  describe('when list has 0 elements', () => {
    it('should return a string represenation of a linked list', () => {
      const list = arrangeLinkedList(0);
      expect(renderLinkedList(list)).toEqual('undefined');
    });
  });
});
