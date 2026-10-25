import { LinkedList } from '.';
import { Collection } from './collection';
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
        it('should return true', () => {
          const subject = new LinkedList<number>();
          const result1 = subject.add(1);
          const result2 = subject.add(1);

          const firstNode = (subject as any).head;
          expect(firstNode.value).toEqual(1);
          expect(firstNode.previous).toBeNull();
          expect(firstNode.next.value).toEqual(1);
          expect(firstNode.next.previous.value).toEqual(1);
          expect(firstNode.next.next).toBeNull();
          expect(result1).toEqual(true);
          expect(result2).toEqual(true);
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
    describe('when list is empty', () => {
      it('should add all of the elements in the collection', () => {
        const vector = arrangeTestVector();
        const subject = arrangeLinkedList(0);
        const result = subject.addAll(vector);
        expect(result).toEqual(true);
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
    describe('when list has one element', () => {
      it('should all the elements in the collection', () => {
        const vector = arrangeTestVector();
        const subject = arrangeLinkedList(1);
        const result = subject.addAll(vector);
        expect(result).toEqual(true);
        const firstNode = (subject as any).head;
        expect(firstNode.value).toEqual(0);
        expect(firstNode.previous).toBeNull();
        expect(firstNode.next.value).toEqual(0);
        expect(firstNode.next.previous.value).toEqual(0);
        expect(firstNode.next.next.value).toEqual(1);
        expect(firstNode.next.next.previous.value).toEqual(0);
        expect(firstNode.next.next.next.value).toEqual(2);
        expect(firstNode.next.next.next.previous.value).toEqual(1);
        expect(firstNode.next.next.next.next).toBeNull();
      });
    });
    describe('when list has two elements', () => {
      it('should all the elements in the collection', () => {
        const vector = arrangeTestVector();
        const subject = arrangeLinkedList(2);
        const result = subject.addAll(vector);
        expect(result).toEqual(true);
        const firstNode = (subject as any).head;
        expect(firstNode.value).toEqual(0);
        expect(firstNode.previous).toBeNull();
        expect(firstNode.next.value).toEqual(1);
        expect(firstNode.next.previous.value).toEqual(0);
        expect(firstNode.next.next.value).toEqual(0);
        expect(firstNode.next.next.previous.value).toEqual(1);
        expect(firstNode.next.next.next.value).toEqual(1);
        expect(firstNode.next.next.next.previous.value).toEqual(0);
        expect(firstNode.next.next.next.next.value).toEqual(2);
        expect(firstNode.next.next.next.next.previous.value).toEqual(1);
        expect(firstNode.next.next.next.next.next).toBeNull();
      });
    });
    describe('when index is specified', () => {
      describe('when list is empty', () => {
        describe('when index is 0', () => {
          it('should add all elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(0);
            const result = subject.addAll(0, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(2, subject).value).toEqual(2);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).next).toBeNull();
          });
        });

        describe('when index is 1', () => {
          it('should should throw', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(0);
            expect(() => subject.addAll(1, vector)).toThrow('IndexOutOfBoundsException');
          });
        });
      });
      describe('when list has one element', () => {
        describe('when index is 0', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(1);
            const result = subject.addAll(0, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).value).toEqual(2);
            expect(getNodeAt(3, subject).previous?.value).toEqual(2);
            expect(getNodeAt(3, subject).value).toEqual(0);
            expect(getNodeAt(3, subject).next).toBeNull();
          });
        });
      });
      describe('when list has two elements', () => {
        describe('when index is 0', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(2);
            const result = subject.addAll(0, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).value).toEqual(2);
            expect(getNodeAt(3, subject).previous?.value).toEqual(2);
            expect(getNodeAt(3, subject).value).toEqual(0);
            expect(getNodeAt(4, subject).previous?.value).toEqual(0);
            expect(getNodeAt(4, subject).value).toEqual(1);
            expect(getNodeAt(4, subject).next).toBeNull();
          });
        });
        describe('when index is 1', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(2);
            const result = subject.addAll(1, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(0);
            expect(getNodeAt(2, subject).previous?.value).toEqual(0);
            expect(getNodeAt(2, subject).value).toEqual(1);
            expect(getNodeAt(3, subject).previous?.value).toEqual(1);
            expect(getNodeAt(3, subject).value).toEqual(2);
            expect(getNodeAt(4, subject).previous?.value).toEqual(2);
            expect(getNodeAt(4, subject).value).toEqual(1);
            expect(getNodeAt(4, subject).next).toBeNull();
          });
        });

        describe('when index is 2', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(2);
            const result = subject.addAll(2, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).value).toEqual(0);
            expect(getNodeAt(3, subject).previous?.value).toEqual(0);
            expect(getNodeAt(3, subject).value).toEqual(1);
            expect(getNodeAt(4, subject).previous?.value).toEqual(1);
            expect(getNodeAt(4, subject).value).toEqual(2);
            expect(getNodeAt(4, subject).next).toBeNull();
          });
        });
      });
      describe('when list has 3 elements', () => {
        describe('when index is 0', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(3);
            const result = subject.addAll(0, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).value).toEqual(2);
            expect(getNodeAt(3, subject).previous?.value).toEqual(2);
            expect(getNodeAt(3, subject).value).toEqual(0);
            expect(getNodeAt(4, subject).previous?.value).toEqual(0);
            expect(getNodeAt(4, subject).value).toEqual(1);
            expect(getNodeAt(5, subject).previous?.value).toEqual(1);
            expect(getNodeAt(5, subject).value).toEqual(2);
            expect(getNodeAt(5, subject).next).toBeNull();
          });
        });
        describe('when index is 1', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(3);
            const result = subject.addAll(1, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(0);
            expect(getNodeAt(2, subject).previous?.value).toEqual(0);
            expect(getNodeAt(2, subject).value).toEqual(1);
            expect(getNodeAt(3, subject).previous?.value).toEqual(1);
            expect(getNodeAt(3, subject).value).toEqual(2);
            expect(getNodeAt(4, subject).previous?.value).toEqual(2);
            expect(getNodeAt(4, subject).value).toEqual(1);
            expect(getNodeAt(5, subject).previous?.value).toEqual(1);
            expect(getNodeAt(5, subject).value).toEqual(2);
            expect(getNodeAt(5, subject).next).toBeNull();
          });
        });
        describe('when index is 3', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(3);
            const result = subject.addAll(3, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).value).toEqual(2);
            expect(getNodeAt(3, subject).previous?.value).toEqual(2);
            expect(getNodeAt(3, subject).value).toEqual(0);
            expect(getNodeAt(4, subject).previous?.value).toEqual(0);
            expect(getNodeAt(4, subject).value).toEqual(1);
            expect(getNodeAt(5, subject).previous?.value).toEqual(1);
            expect(getNodeAt(5, subject).value).toEqual(2);
            expect(getNodeAt(5, subject).next).toBeNull();
          });
        });
        describe('when index is 2', () => {
          it('should add all the elements', () => {
            const vector = arrangeTestVector();
            const subject = arrangeLinkedList(3);
            const result = subject.addAll(2, vector);
            expect(result).toEqual(true);
            expect(getNodeAt(0, subject).previous).toBeNull();
            expect(getNodeAt(0, subject).value).toEqual(0);
            expect(getNodeAt(1, subject).previous?.value).toEqual(0);
            expect(getNodeAt(1, subject).value).toEqual(1);
            expect(getNodeAt(2, subject).previous?.value).toEqual(1);
            expect(getNodeAt(2, subject).value).toEqual(0);
            expect(getNodeAt(3, subject).previous?.value).toEqual(0);
            expect(getNodeAt(3, subject).value).toEqual(1);
            expect(getNodeAt(4, subject).previous?.value).toEqual(1);
            expect(getNodeAt(4, subject).value).toEqual(2);
            expect(getNodeAt(5, subject).previous?.value).toEqual(2);
            expect(getNodeAt(5, subject).value).toEqual(2);
            expect(getNodeAt(5, subject).next).toBeNull();
          });
        });
      });
      describe('when collection has no elements', () => {
        it('should not change the list', () => {
          const subject = arrangeLinkedList(3);
          const vector = new TestVector<number>();
          subject.addAll(0, vector);
          expect(getNodeAt(0, subject).value).toEqual(0);
          expect(getNodeAt(1, subject).value).toEqual(1);
          expect(getNodeAt(2, subject).value).toEqual(2);
        });
      });
      describe.todo('when index bigger than the bound of the linked list size');
    });
  });
});

function getNodeAt<T>(index: number, list: LinkedList<T>): ListNode<T> {
  let currentNode = list['head'];
  if(currentNode === null) {
    throw new Error('getNodeAt: out of bounds exception')  
  }
  for (let i = 0; i < index; i++) {
    if(currentNode?.next === null)  {
      throw new Error('getNodeAt: out of bounds exception')  
    }
    currentNode = currentNode?.next;
  }
  return currentNode;
}

function arrangeTestVector(): TestVector<number> {
  const vector = new TestVector<number>();
  vector.add(0);
  vector.add(1);
  vector.add(2);
  return vector;
}

function arrangeLinkedList(numberOfNodes: number): LinkedList<number> {
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

class TestVector<T> implements Collection<T> {
  public constructor(private data: Array<T> = []) {}
  add(value: T): boolean {
    this.data.push(value);
    return true;
  }
  contains(_value: unknown): boolean {
    throw new Error('Not implemented');
  }

  containsAll(_collection: Collection<unknown> | Iterable<unknown>): boolean {
    throw new Error('Not implemented');
  }

  equals(_other: unknown): boolean {
    throw new Error('Not implemented');
  }

  hashCode(): number {
    throw new Error('Not implemented');
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  iterator(): Iterator<T> {
    return this[Symbol.iterator]();
  }

  parallelStream(): Iterable<T> {
    throw new Error('Not implemented');
  }

  removeIf(_filter: (value: T) => boolean): boolean {
    throw new Error('Not implemented');
  }

  size(): number {
    throw new Error('Not implemented');
  }

  spliterator(): IterableIterator<T> {
    throw new Error('Not implemented');
  }

  stream(): Iterable<T> {
    throw new Error('Not implemented');
  }

  toArray(): Array<T>;
  toArray<U>(array: Array<U>): Array<U>;
  toArray<U>(_array?: Array<U>): Array<T> | Array<U> {
    if (arguments.length === 0) {
      return this.data;
    }
    throw new Error('Not implemented');
  }
  forEach(action: (value: T) => void): void {
    this.data.forEach(action);
  }

  [Symbol.iterator](): Iterator<T> {
    let index = 0;
    return {
      next: (): IteratorResult<T> => {
        if (index >= this.data.length) {
          return { done: true, value: undefined };
        }
        return { value: this.data[index++], done: false };
      },
    };
  }
}

describe('TestVector', () => {
  describe('toArray', () => {
    it('should return array', () => {
      const vector = arrangeTestVector();
      const result = vector.toArray();
      expect(result).toEqual([0, 1, 2]);
    });
  });
});
