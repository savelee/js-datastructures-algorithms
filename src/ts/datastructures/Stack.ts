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
        // Set the size to 0;
        this.total = 0;
    }

    /*
     * Add a new item to the top of the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @param item any
     */
    push(item: any) {
        this.items.push(item);
    }

    /*
     * Pops / Removes the top item from the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return removed item
     */
    pop() {
        if (this.size() > 0)
            return this.items.pop();
    }

    /*
    * Return the top item from the stack.
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return removed item
    */
    peek() {
        let i = this.size() - 1;
        return this.items[i];
    }

    /*
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    * @returns Boolean
    */
    isEmpty() {
        return (this.size() === 0);
    }

    /*
    * Removes all the items from the Stack
    * Take O(1) time. We do not run any loop in any of these operations.
    */
    clear() {
        if (this.size() > 0)
            this.items = [];
    }

    /*
    * Return the total number of items from the stack
    * @return number
    */
    size() {
        this.total = this.items.length;

        return this.total;
    }

    /*
     * Print stack
     * @return items
     */
    values() {
        return this.items;
    }
}
