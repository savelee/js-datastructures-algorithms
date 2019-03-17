/*
 * Stack DataStructure
 * @author Lee Boonstra
 * 
 *      # What do we know about Stacks?
 *      It's a sequential data structure with LIFO. Last In - First Out principle.
 *      Compare this to a deck of cards. The last card on top, is the first
 *      card to be removed from the pile. The base card, will be last.
 *
 *      ## Real world examples in Software Engineering?
 *      The browser history. Clipboard history.
 *      In the Sencha Ext JS framework there was a card layout / animation.
 *      The deck of cards in Hearth Stone.
 */
export class Stack {
    private items: any;
    private count: 0;

    constructor() {
        this.items = [];
        this.count = 0;
    }

    /*
     * Add a new item to the top of the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @param item String
     */
    push() {
  
    }

    /*
     * Pops / Removes the top item from the stack.
     * Take O(1) time. We do not run any loop in any of these operations.
     *
     * @return removed item
     */
    pop() {

    }

    /*
    * Return the top item from the stack.
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return removed item
    */
    peek() {

    }

    /*
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    * @returns Boolean
    */
    isEmpty() {

    }

    /*
    * Removes all the items from the Stack
    */
    clear() {

    }

    /*
    * Return the total number of items from the stack
    * @returns number
    */
    size() {

    }

    /*
    * Returns the 1-based position where an object is on this stack.
    * If the object o occurs as an item in this stack, this method returns the distance from the top
    * of the stack of the occurrence nearest the top of the stack; the topmost item on the stack
    * is considered to be at distance 1.
    *
    * @returns number
    */
   search() {

   }
}
