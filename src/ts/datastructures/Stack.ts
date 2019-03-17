/*
 * Stack DataStructure
 * @author Lee Boonstra
 *
 *      # What do we know about Stacks?
 *      It's a sequential data structure with LIFO. Last In - First Out principle.
 *      (and FILO First in - Last Out)
 *      Compare this to a deck of cards. The last card on top, is the first
 *      card to be removed from the pile. The base card, will be last.
 *
 *      ## Real world examples in Software Engineering?
 *      The browser history. Clipboard history.
 *      In the Sencha Ext JS framework there was a card layout / animation.
 *      The deck of cards in Hearthstone.
 */
export class Stack {
    private items: Array<any>;
    private total: number;

    constructor() {
        // Based on an Array
        this.items = [];
        // Set the total to 0;
        this.total = 0;
    }

    /*
     * Add a new item to the top of the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @param item any
     */
    push(item: any) {
        // this.items.push(item);
        // We can only add one at a time
        this.items[this.total] = item;
        this.total++;
    }

    /*
     * Pops / Removes the top item from the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return removed item
     */
    pop() {
        let item = undefined;
        if (!this.isEmpty()) {
            this.total--;
            // return this.items.pop();
            // manual remove
            item = this.items[this.total];
            delete this.items[this.total];
        }
        return item;
    }

    /*
    * Return the top item from the stack.
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return removed item
    */
    peek() {
        if (this.isEmpty()) return undefined;

        let i = this.total - 1;
        return this.items[i];
    }

    /*
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    * @returns Boolean
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
