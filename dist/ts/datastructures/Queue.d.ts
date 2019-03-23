/**
 * Queue Data Structure
 * @class Queue
 * @author Lee Boonstra
 *
 *      # What do we know about Queues?
 *      It's a sequential data structure with FIFO. First In - First Out principle.
 *      (and LILO Last in - Last Out)
 *      Compare this to the line in at the bakery. First person in the line, takes
 *      a ticket from the counting machine, and will be served first, based on the counter.
 *
 *      ## Real world examples in Software Engineering?
 *      Printer Queue.
 */
export declare class Queue {
    private items;
    private total;
    private count;
    constructor();
    /**
     * Add a new item to the back of the queue.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @param item any
     */
    add(item: any): void;
    /**
     * Retrieves and removes the head of this queue.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return removed item
     */
    remove(): any;
    /**
    * Return the the head of the queue
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return removed item
    */
    peek(): any;
    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return Boolean
    */
    isEmpty(): Boolean;
    /**
    * Removes all the items from the Stack
    * Take O(1) time. We do not run any loop in any of these operations.
    */
    clear(): void;
    /**
    * Return the total number of items from the stack
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return number
    */
    size(): number;
    /**
     * Print stack
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return items
     */
    values(): any[];
}
