import { ListNode } from './list-node';

describe('ListNode', () => {
  describe('constructor', () => {
    it('should create an instance', () => {
      const subject = new ListNode(1);
      expect(subject).toBeInstanceOf(ListNode);
    });
    it('should set value to 1', () => {
      const subject = new ListNode(1);
      expect(subject.value).toEqual(1);
    });
    describe('when created with previous', () => {
      it('should set value to previous', () => {
        const subject = new ListNode(1, new ListNode(2));
        expect(subject.previous?.value).toEqual(2);
      });
    });
    describe('when created with next', () => {
      it('should set value to previous', () => {
        const subject = new ListNode(1, null, new ListNode(-1));
        expect(subject.next?.value).toEqual(-1);
      });
    });
  });
});
