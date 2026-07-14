export interface Collection<T> {
  add?(element: T): boolean;
  addAll?(collection: Collection<T> | Iterable<T>): boolean;
  clear?(): void;
  contains(value: unknown): boolean;
  containsAll(collection: Collection<unknown> | Iterable<unknown>): boolean;
  equals(other: unknown): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  iterator(): Iterator<T>;
  parallelStream(): Iterable<T>;
  remove?(value: T): boolean;
  removeAll?(collection: Collection<T>): boolean;
  removeIf(filter: (value: T) => boolean): boolean;
  retainAll?(collection: Collection<T> | Iterable<unknown>): boolean;
  size(): number;
  spliterator(): IterableIterator<T>;
  stream(): Iterable<T>;
  toArray(): Array<T>;
  toArray<U>(array: Array<U>): Array<U>;
  forEach(action: (v: T) => void): void
}
