import { ListNode } from './list-node';

describe('ListNode', () => {
  describe('constructor', () => {
    it('should create an instance', () => {
      const listNode = new ListNode();
      expect(listNode).toBeInstanceOf(ListNode);
    });
  });
});
