export class ListNode<T> {
  public previous: ListNode<T> | null;
  public next: ListNode<T> | null;

  constructor(
    public value: T,
    previous: ListNode<T> | null = null,
    next: ListNode<T> | null = null,
  ) {
    this.previous = previous;
    this.next = next;
  }
}
