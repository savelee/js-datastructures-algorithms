/*
 * LinkedList DataStructure
 * @author Lee Boonstra
 *
 *      # What do we know about LinkedLists?
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
 *      History and Subversioning? A trial of revisions 
 *      and you can add branches?
 */ 
export class Node {
    constructor(item) {
        this.item = item;
        this.next = undefined;
    }
}

export class LinkedList {
    private head: Node;

    constructor() {
        this.head = null;
    }
    
    /*
    * Add new item to the end of the LinkedList
    *
    * @param item: any 
    */
    push(item: any) {
        const node = new Node(item); 
        let current;
        
        if(this.getHead()){
            // the list is empty, adding a new item
            this.setHead(node);
        } else {
            // the list is not empty, append items
            current = this.getHead();
        }
    }
    
    getHead() {
        return this.head;
    }
    
    setHead(node: Node){
        this.head = node;
    }
    
    /*
    * Insert a new item at a specified position in the
    * LinkedList.
    *
    * @param item: any
    * @param position: number
    */
    insert(item: any, position: number) {
    
    }
    
    /*
    * Get the item of a specific position in the 
    * LinkedList. Returns undefined if it doesn't exist.
    *
    * @param index: number
    * @return item: any | undefined
    */
    getElement(index: number) {
        let item = undefined;
        
        return item;
    }
    
    /*
     * Removes an item from the LinkedList.
     *
     * @param item: any
     */
    remove(item: any) {
    
    }
    
    /*
    * Returns the index of the item in the LinkedList.
    * If the item doesn't exist return -1
    *
    * @param item: any
    * @return position: number
    */
    indexOf(item: any) {
        let position: -1;
        
        return position;
    }
    
    /*
     * Removes item from a specified position in the 
     * LinkedList.
     *
     * @param position: number;
     */
    removeAt(position: number) {
    
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
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    * @returns Boolean
    */
    isEmpty() {
        return (this.total === 0);
    }

    /*
    * Helper function to return a string representation
    * of the LinkedList. It uses a Node Class as an
    * item, we need to overwrite the default toString
    * method, inherited from the JS object class to output
    * only the element values.
    */
    toString() {
    
    }
    
}
