import { arrangeLinkedList, renderLinkedList } from './test-utils';

describe('renderLinkedList', () => {
  describe('when list has 0 elements', () => {
    it('should return a string represenation of a linked list', () => {
      const list = arrangeLinkedList(0);
      expect(renderLinkedList(list)).toEqual('undefined');
    });
  });
});
