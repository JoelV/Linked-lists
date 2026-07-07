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
        (subject as any).head = new ListNode(1);
        expect(subject.peakLast()).toEqual(1);
      });
    });
    describe('when linked list has two element', () => {
      it('should return the last element', () => {
        const subject = new LinkedList();
        (subject as any).head = new ListNode(1, null, new ListNode(2));
        expect(subject.peakLast()).toEqual(2);
      });
    });
    describe('when linked list has three element', () => {
      it('should return the last element', () => {
        const subject = new LinkedList();
        (subject as any).head = new ListNode(1, null, new ListNode(2, null, new ListNode(3)));
        expect(subject.peakLast()).toEqual(3);
      });
    });
  });
  describe('add', () => {
    describe('when the linked list is empty', () => {
      it('should add a new node to the linked list', () => {
        const subject = new LinkedList();
        const result = subject.add(1);
        expect(subject.peakLast()).toEqual(1);
        expect(result).toEqual(true);
      });
    });
    describe('when the linked list has one element', () => {
      it('should add a new node to the linked list', () => {
        const subject = new LinkedList<number>();
        const result1 = subject.add(1);
        const result2 = subject.add(2);

        expect(subject.peakLast()).toEqual(2);
        expect((subject as any).head.value).toEqual(1);
        const secondNode = (subject as any).head.next;
        expect(secondNode.previous.value).toEqual(1);
        expect(result1).toEqual(true);
        expect(result2).toEqual(true);
      });

      describe('when linked list already has the same element', () => {
        it('should return false', () => {
          const subject = new LinkedList<number>();
          const result1 = subject.add(1);
          const result2 = subject.add(1);

          expect(subject.peakLast()).toEqual(1);
          expect((subject as any).head.value).toEqual(1);
          expect((subject as any).head.next).toBeNull();
          expect((subject as any).head.previous).toBeNull();
          expect(result1).toEqual(true);
          expect(result2).toEqual(false);
        });
        describe('when the linked list has two element', () => {
          it('should add a new node to the linked list', () => {
            const subject = new LinkedList<number>();
            subject.add(1);
            subject.add(2);
            subject.add(3);
            expect(subject.peakLast()).toEqual(3);
            expect((subject as any).head.value).toEqual(1);
            const secondNode = (subject as any).head.next;
            expect(secondNode.previous.value).toEqual(1);
            expect(secondNode.value).toEqual(2);
            expect(secondNode.next.value).toEqual(3);
          });
        });
        describe('when index is provided', () => {
          describe('when there is no element in the list', () => {
            describe('when index is 0', () => {
              it('should add element', () => {
                const subject = new LinkedList<number>();
                subject.add(0, 1); 
                const firstNode = (subject as any).head
                expect(firstNode.value).toEqual(1)
                expect(firstNode.next).toBeNull();
                expect(firstNode.previous).toBeNull();
              });  
            });
            describe('when index is is out of range', () => {
              it('should throw and index out of bounds exception', () => {
                const subject = new LinkedList<number>();
                expect(() => subject.add(1, 1)).toThrow('IndexOutOfBoundsException');
              })
            })
          })
          describe.todo('when there is one element in the list')
          describe.todo('when there is two elements in the list')
          describe.todo('when there is three elements in the list')
        })
      });
    });
  });
});
