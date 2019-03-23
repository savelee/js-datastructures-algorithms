/**
 * Stack Data Structure
 * @class Stack
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
export declare class Stack {
    private items;
    private total;
    constructor();
    /**
     * Add a new item to the top of the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @param {any} item - item
     */
    push(item: any): void;
    /**
     * Pops / Removes the top item from the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return {any} item - removed item
     */
    pop(): any;
    /**
    * Return the top item from the stack.
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return {item} item - top item
    */
    peek(): any;
    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @returns {boolean} isEmpty - if the Stack is empty or not
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
    * @return {number} size - total length of Stack
    */
    size(): number;
    /**
     * Print stack
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return {array} - array with items
     */
    values(): any[];
}
