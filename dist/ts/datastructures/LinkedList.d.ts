/**
 * LinkedList Data Structure
 * @class Node
 * @author Lee Boonstra
 *
 *      # What do we know about LinkedLists?
 *
 *      It's a sequential data structure and has
 *      similarities with an Array (also called a List).
 *      In other languages, an Array has a predefined
 *      size. Inserting and Removing items can be
 *      expensive. Because elements needs to be shifted
 *      over. A LinkedList is a dynamic data structure. We
 *      can add and remove items from it and it will grow
 *      when required. Elements are not placed
 *      contiguously in memory. Each node stores the
 *      element itself and also a reference (pointer
 *      link). Think about this as christmas lights. In
 *      order to find a broken light, you have to visit
 *      each light from beginning (head) to end (tail).
 *
 *      ## Real world examples in Software Engineering?
 *
 *      History and Subversioning? A trial of revisions
 *      and you can add branches?
 */
export declare class Node {
    node: Node;
    next: Node;
    constructor(item: any);
}
/**
 * LinkedList Data Structure
 * @class LinkedList
 * @author Lee Boonstra
 *
 *      # What do we know about LinkedLists?
 *
 *      It's a sequential data structure and has
 *      similarities with an Array (also called a List).
 *      In other languages, an Array has a predefined
 *      size. Inserting and Removing items can be
 *      expensive. Because elements needs to be shifted
 *      over. A LinkedList is a dynamic data structure. We
 *      can add and remove items from it and it will grow
 *      when required. Elements are not placed
 *      contiguously in memory. Each node stores the
 *      element itself and also a reference (pointer
 *      link). Think about this as christmas lights. In
 *      order to find a broken light, you have to visit
 *      each light from beginning (head) to end (tail).
 *
 *      ## Real world examples in Software Engineering?
 *
 *      History and Subversioning? A trial of revisions
 *      and you can add branches?
 */
export declare class LinkedList {
    private head;
    private total;
    constructor();
    /**
    * Add new item to the end of the LinkedList
    * Take O(n) time. Loop to figure out the last node.
    *
    * @param item: any
    * @return isAdded Boolean
    */
    push(item: any): Boolean;
    /**
    * Insert a new item at a specified position in the
    * LinkedList.
    * Take O(n) time. To find the previous node, we will need to loop.
    *
    * @param index: number
    * @param item: any
    * @return isInserted Boolean
    */
    insert(index: number, item: any): Boolean;
    /**
     * Get the very first item in the LinkedList
     *
     * @return head: Node
     */
    getHead(): Node;
    /**
      * Set the very first item in the LinkedList
      *
      * @param node: Node
      */
    setHead(node: Node): void;
    /**
     * Get the index of a specific node in the
     * LinkedList. Returns -1 if it doesn't exist.
     * Take O(n) time. To find the item, you will need to visit all the nodes
     *
     * @param node
     * @return index: number | -1
     */
    indexOf(item: any): number;
    /**
    * Get the item of a specific index in the
    * LinkedList. Returns undefined if it doesn't exist.
    * Take O(n) time. To find the item, you will need to visit all the nodes
    *
    * @param index: number
    * @return node: Node | undefined
    */
    getNodeAt(index: number): Node;
    /**
     * Removes an item from the LinkedList.
     * Take O(n) time. To find the item to be removed, you will need to visit all the nodes
     *
     * @param item: any
     * @return isRemoved Boolean
     */
    remove(item: any): Boolean;
    /**
     * Removes item from a specified index in the LinkedList.
     * Take O(n) time. To find the item to be removed, you will need to visit all the nodes.
     *
     * @param position: number
     * @return isRemoved Boolean
     */
    removeAt(index: number): Boolean;
    /**
    * Return the total number of items from the stack
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @return number
    */
    size(): number;
    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    * @returns Boolean
    */
    isEmpty(): boolean;
    /**
    * Helper function to return an array
    * of the LinkedList values.
    *
    * @return arr: Array
    */
    values(): any[];
}
