import { LinkedList } from '.';

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
        subject.add(1);
        expect(subject.peakLast()).toEqual(1)
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
  });
});
