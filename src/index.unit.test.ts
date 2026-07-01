import { LinkedList } from '.';
import { ListNode } from './list-node';

describe('LinkedList', () => {
  describe('constructor', () => {
    it('should create an instance of LinkedList', () => {
      const subject = new LinkedList();
      expect(subject).toBeInstanceOf(LinkedList);
    });
  });

  describe('peakLast', () => {
    describe('when linked list has one element', () => {
      it('should return the element', () => {
        const subject = new LinkedList();
        (subject as any).head = new ListNode(1)
        expect(subject.peakLast()).toEqual(1);
      });
    });
    describe('when linked list has two element', () => {
      it('should return the last element', () => {
        const subject = new LinkedList();
        (subject as any).head = new ListNode(1, null, new ListNode(2))
        expect(subject.peakLast()).toEqual(2);
      });
    });
    describe('when linked list has three element', () => {
      it('should return the last element', () => {
        const subject = new LinkedList();
        (subject as any).head = new ListNode(1, null, new ListNode(2, null, new ListNode(3)))
        expect(subject.peakLast()).toEqual(3);
      });
    });
  });
  describe('add', () => {
    describe('when the linked list is empty', () => {
      it('should add a new node to the linked list', () => {
        const subject = new LinkedList();
        subject.add(1);
        expect(subject.peakLast()).toEqual(1);
      });
    });
    describe('when the linked list has one element', () => {
      it('should add a new node to the linked list', () => {
        const subject = new LinkedList();
        subject.add(1);
        subject.add(2);
        expect(subject.peakLast()).toEqual(2);
        expect((subject as any).head.value).toEqual(1)
        const secondNode = (subject as any).head.next;
        expect(secondNode.previous.value).toEqual(1)
      });
    });
    describe('when the linked list has two element', () => {
      it('should add a new node to the linked list', () => {
        const subject = new LinkedList();
        subject.add(1);
        subject.add(2);
        subject.add(3);
        expect(subject.peakLast()).toEqual(3);
        expect((subject as any).head.value).toEqual(1)
        const secondNode = (subject as any).head.next;
        expect(secondNode.previous.value).toEqual(1)
        expect(secondNode.value).toEqual(2)
        expect(secondNode.next.value).toEqual(3)
      });
    });
  });
});
