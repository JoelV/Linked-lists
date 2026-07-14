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
      });
      describe('when the linked list has two elements', () => {
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
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(1);
              expect(firstNode.next).toBeNull();
              expect(firstNode.previous).toBeNull();
            });
          });
          describe('when index is is out of range', () => {
            it('should throw and index out of bounds exception', () => {
              const subject = new LinkedList<number>();
              expect(() => subject.add(1, 1)).toThrow('IndexOutOfBoundsException');
            });
          });
        });
        describe('when there is one element in the list', () => {
          describe('when index is 0', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(1);
              subject.add(0, 2);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(2);
              expect(firstNode.next.value).toEqual(0);
              expect(firstNode.previous).toBeNull();
              expect(firstNode.next.previous.value).toEqual(2);
              expect(firstNode.next.next).toBeNull();
            });
          });
          describe('when index is 1', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(1);
              subject.add(1, 2);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(0);
              expect(firstNode.next.value).toEqual(2);
              expect(firstNode.previous).toBeNull();
              expect(firstNode.next.previous.value).toEqual(0);
              expect(firstNode.next.next).toBeNull();
            });
          });
          describe('when index is is out of range', () => {
            it('should throw and index out of bounds exception', () => {
              const subject = arrangeLinkedList(1);
              expect(() => subject.add(2, 2)).toThrow('IndexOutOfBoundsException');
            });
          });
        });
        describe('when there is two elements in the list', () => {
          describe('when index is 0', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(2);
              subject.add(0, 2);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(2);
              expect(firstNode.previous).toBeNull();
              expect(firstNode.next.value).toEqual(0);
              expect(firstNode.next.previous.value).toEqual(2);
              expect(firstNode.next.next.value).toEqual(1);
              expect(firstNode.next.next.previous.value).toEqual(0);
              expect(firstNode.next.next.next).toBeNull();
            });
          });
          describe('when index is 1', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(2);
              subject.add(1, 2);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(0);
              expect(firstNode.previous).toBeNull();
              expect(firstNode.next.value).toEqual(2);
              expect(firstNode.next.previous.value).toEqual(0);
              expect(firstNode.next.next.value).toEqual(1);
              expect(firstNode.next.next.previous.value).toEqual(2);
              expect(firstNode.next.next.next).toBeNull();
            });
          });
          describe('when index is 2', () => {
            it('should add element', () => {
              const listNodeZero = new ListNode(0);
              const listNodeOne = new ListNode(1);
              listNodeZero.next = listNodeOne;
              listNodeOne.previous = listNodeZero;
              const subject = new LinkedList<number>();
              (subject as any).head = listNodeZero;
              subject.add(2, 2);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(0);
              expect(firstNode.previous).toBeNull();
              expect(firstNode.next.value).toEqual(1);
              expect(firstNode.next.previous.value).toEqual(0);
              expect(firstNode.next.next.value).toEqual(2);
              expect(firstNode.next.next.previous.value).toEqual(1);
              expect(firstNode.next.next.next).toBeNull();
            });
          });
          describe('when index is out of range', () => {
            it('should throw an index out of bounds exception', () => {
              const subject = arrangeLinkedList(2);
              expect(() => subject.add(5, 5)).toThrow('IndexOutOfBoundsException');
            });
          });
        });
        describe('when there is three elements in the list', () => {
          describe('when index is 0', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(3);
              subject.add(0, 3);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(3);
              expect(firstNode.next.value).toEqual(0);
              expect(firstNode.next.previous.value).toEqual(3);
              expect(firstNode.next.next.value).toEqual(1);
              expect(firstNode.next.next.previous.value).toEqual(0);
              expect(firstNode.next.next.next.value).toEqual(2);
              expect(firstNode.next.next.next.previous.value).toEqual(1);
              expect(firstNode.next.next.next.next).toBeNull();
            });
          });
          describe('when index is 1', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(3);
              subject.add(1, 3);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(0);
              expect(firstNode.next.value).toEqual(3);
              expect(firstNode.next.previous.value).toEqual(0);
              expect(firstNode.next.next.value).toEqual(1);
              expect(firstNode.next.next.previous.value).toEqual(3);
              expect(firstNode.next.next.next.value).toEqual(2);
              expect(firstNode.next.next.next.previous.value).toEqual(1);
              expect(firstNode.next.next.next.next).toBeNull();
            });
          });
          describe('when index is 2', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(3);
              subject.add(2, 3);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(0);
              expect(firstNode.next.value).toEqual(1);
              expect(firstNode.next.previous.value).toEqual(0);
              expect(firstNode.next.next.value).toEqual(3);
              expect(firstNode.next.next.previous.value).toEqual(1);
              expect(firstNode.next.next.next.value).toEqual(2);
              expect(firstNode.next.next.next.previous.value).toEqual(3);
              expect(firstNode.next.next.next.next).toBeNull();
            });
          });
          describe('when index is 3', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(3);
              subject.add(3, 3);
              const firstNode = (subject as any).head;
              expect(firstNode.value).toEqual(0);
              expect(firstNode.next.value).toEqual(1);
              expect(firstNode.next.previous.value).toEqual(0);
              expect(firstNode.next.next.value).toEqual(2);
              expect(firstNode.next.next.previous.value).toEqual(1);
              expect(firstNode.next.next.next.value).toEqual(3);
              expect(firstNode.next.next.next.previous.value).toEqual(2);
              expect(firstNode.next.next.next.next).toBeNull();
            });
          });
          describe('when index is 4', () => {
            it('should add element', () => {
              const subject = arrangeLinkedList(3);
              expect(() => subject.add(4, 3)).toThrow('IndexOutOfBoundsException');
            });
          });
        });
      });
    });
  });

  describe('addAll', () => {
    describe.todo('when list is empty')
    describe.todo('when list has one element')
    describe.todo('when list has two elements')
  })
});

function arrangeLinkedList(numberOfNodes: number) {
  const list = new LinkedList<number>();
  for (let i = 0; i < numberOfNodes; i++) {
    const node = new ListNode(i);
    let currentNode = (list as any).head;
    if (currentNode === null) {
      (list as any).head = node;
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
