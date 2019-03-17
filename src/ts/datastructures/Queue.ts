/*
 * Queue DataStructure
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
export class Queue {
    private items: Array<any>;
    private total: number; // total items in the queue
    private count: number; // item count who will be served first

    constructor() {
        // Based on an Array
        this.items = [];
        // Set the total to 0
        this.total = 0;
        // Set the count to 0
        // Compared to Stacks, this is what makes this class different!
        this.count = 0;
    }

    /*
     * Add a new item to the back of the queue.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @param item any
     */
    add(item: any) {
        this.items[this.total] = item;
        this.total++;
    }

    /*
     * Retrieves and removes the head of this queue.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return removed item
     */
    remove() {
        let item = undefined;
        if (!this.isEmpty()) {
            // which item will be first in the queue
            // is is based on the counting system
            item = this.items[this.count];
            // remove this item from the queue
            delete this.items[this.count];
            // the queue size is now shorter
            this.total--;
            // but the number counter goes up
            this.count++;
        }
        return item;
    }

    /*
    * Return the the head of the queue
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return removed item
    */
    peek() {
        if (this.isEmpty()) return undefined;

        return this.items[this.count];
    }

    /*
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return Boolean
    */
    isEmpty() {
        return (this.total === 0);
    }

    /*
    * Removes all the items from the Stack
    * Take O(1) time. We do not run any loop in any of these operations.
    */
    clear() {
        if (!this.isEmpty()) {
            this.items = [];
            this.total = 0;
            this.count = 0; // reset counter
        }
    }

    /*
    * Return the total number of items from the stack
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return number
    */
    size() {
        // Note: in this example this.items.length would be wrong
        // since we are removing values from the array
        // the array is not shifting.

        return this.total;
    }

    /*
     * Print stack
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return items
     */
    values() {
        return this.items;
    }
}
