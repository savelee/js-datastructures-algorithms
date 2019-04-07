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
export class Node {
    public node: Node;
    public next: Node; // pointer
    constructor(item: any) {
        this.node = item;
        this.next = undefined;
    }
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
export class LinkedList {
    private head: Node;
    private total: number;

    constructor() {
        // when you create a LinkedList the head is empty
        this.head = null;
        this.total = 0;
    }

    /**
    * Add new item to the end of the LinkedList
    * Take O(n) time. Loop to figure out the last node.
    *
    * @param item: any
    * @return isAdded Boolean
    */
    push(item: any): Boolean {
        const node = new Node(item);
        let last_node;

        if (this.getHead() == null) {
            // the list is empty, adding a new item
            this.setHead(node);
        } else {
            // the list is not empty, append items
            last_node = this.getHead();
            // start from the head, keep iterating, till
            // you find the last node (tail, which is the node with next = null)
            while (last_node.next != null) {
                last_node = last_node.next;
            }

            last_node.next = node;
        }
        this.total++;

        return true;
    }

    /**
    * Insert a new item at a specified position in the
    * LinkedList.
    * Take O(n) time. To find the previous node, we will need to loop.
    *
    * @param index: number
    * @param item: any
    * @return isInserted Boolean
    */
    insert(index: number, item: any): Boolean {
        let isInserted = false;
        if (index >= 0 && index <= this.size()) {
            const newNode = new Node(item);

            if (index === 0) {
                // This will be the head node.
                this.setHead(newNode);
                // update all the references
            } else {
                // iterate through all the nodes before the to be added node.
                // and set a pointer to the next node
                let previous = this.getNodeAt(index - 1);
                let current = previous.next;
                newNode.next = current;
                previous.next = newNode;
            }

            // console.log(this.values());
            this.total++;
        } else {
            isInserted = false;
        }

        return isInserted;
    }

   /**
    * Get the very first item in the LinkedList
    *
    * @return head: Node
    */
    getHead(): Node {
        return this.head;
    }

  /**
    * Set the very first item in the LinkedList
    *
    * @param node: Node
    */
    setHead(node: Node): void {
        this.head = node;
    }

   /**
    * Get the index of a specific node in the
    * LinkedList. Returns -1 if it doesn't exist.
    * Take O(n) time. To find the item, you will need to visit all the nodes
    *
    * @param node
    * @return index: number | -1
    */
    indexOf(item: any): number {
        let index = -1;
        let node = this.getHead();
        // keep iterating through the total amount of nodes
        // till you reach the end (node = null and total)
        for (let i = 0; i < this.total && node != null; i++) {
            // this should be the one
            if (item === node.node) {
                index = i;
            }
            node = node.next;
        }

        return index;
    }

    /**
    * Get the item of a specific index in the
    * LinkedList. Returns undefined if it doesn't exist.
    * Take O(n) time. To find the item, you will need to visit all the nodes
    *
    * @param index: number
    * @return node: Node | undefined
    */
    getNodeAt(index: number): Node {
        let node = undefined;

        if (index >= 0 && index <= this.total) {
            node = this.getHead();

            // keep iterating till you reach the index
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }

        }

        return node;
    }

    /**
     * Removes an item from the LinkedList.
     * Take O(n) time. To find the item to be removed, you will need to visit all the nodes
     *
     * @param item: any
     * @return isRemoved Boolean
     */
    remove(item: any): Boolean {
        let index = this.indexOf(item);
        let result = this.removeAt(index);

        return result;
    }

    /**
     * Removes item from a specified index in the LinkedList.
     * Take O(n) time. To find the item to be removed, you will need to visit all the nodes.
     *
     * @param position: number
     * @return isRemoved Boolean
     */
    removeAt(index: number): Boolean {
        let isRemoved = false;
        if (index < 0) {
            // throw "Can't remove, because item is not in the LinkedList.";
            // console.error("Can't remove, because item is not in the LinkedList.");
        } else {
            let current = this.getHead();

            if (index === 0 ) {
                // this is the very first node
                // remove (and update all positions)
                this.setHead(current.next);
            } else {
                // iterate through all the nodes before the to be removed node.
                // and set a pointer to the next node
                let previous;
                for (let i = 0; i < index; i++) {
                    // temp store the one before
                    previous = current;
                    // go to the next node
                    current = current.next;
                }
                // now let remove the reference of the previous node
                // to skip it, and go to the next one.
                previous.next = current.next;
            }

            this.total--;
            isRemoved = true;
        }
        return isRemoved;
    }

    /**
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

    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    * @returns Boolean
    */
    isEmpty() {
        return (this.total === 0);
    }

    /**
    * Helper function to return an array
    * of the LinkedList values.
    *
    * @return arr: Array
    */
    values(): any[] {
        let arr = [];
        if (this.getHead != null) {
            let node = this.getHead();
            for (let i = 0; i < this.size() && node != null; i++) {
                arr.push(node);
                // go to next node
                node = node.next;
            }
        }
        return arr;
    }
}
