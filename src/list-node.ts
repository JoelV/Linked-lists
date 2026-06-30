export class ListNode<T> {
  public previous: ListNode<T> | null;
  public next: ListNode<T> | null;

  constructor(
    public value: T,
    previous?: ListNode<T> | null,
    next?: ListNode<T> | null,
  ) {
    this.previous = previous ?? null;
    this.next = next ?? null;
  }
}
