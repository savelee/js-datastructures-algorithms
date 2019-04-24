export class SinlyLinkedListNode {
    public data: String;
    public next: SinlyLinkedListNode;
    constructor(data: String) {
        this.data = data;
        this.next = null; // when you create a new SinlyLinkedListNode there are no references.
    }
}

export class DoublyLinkedListNode {
    public data: String;
    public next: DoublyLinkedListNode;
    public prev: DoublyLinkedListNode;
    constructor(data: String) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    private head: DoublyLinkedListNode;
    private tail: DoublyLinkedListNode;
    public total: number;

    constructor() {
        this.head = null; // when created the linkedlist is empty
        this.tail = null;
        this.total = 0;
    }

    /**
     * Compare String Characters
     * @param {String} a - compare first character
     * @param {String} b - compare second character
     * @param {Number} startPos - startPosition to check (default = 0)
     * @returns {Number} pos -1 (A is first / is smaller), 0 (no change / equals), 1 (B comes first / is bigger)
     */
    compareString(a: any, b: any, startPos: number = 0): number {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        };

        let aUniCode = a.codePointAt(startPos);
        let bUniCode = b.codePointAt(startPos);
        let pos = -1;

        // both strings are the same
        if (a === b) return 0;
        // the 2nd string has a longer length, all other characters
        // are the same, so a comes first
        if (!aUniCode) {
            pos = -1;
        }
        if (!bUniCode) {
            pos = 1;
        }

        // if it's the same character, recursive, check for the next
        // character as long as the startPos is not undefined
        if (aUniCode - bUniCode === 0) {
            let s = startPos + 1;
            this.compareString(a, b, s);
        } else {
            pos = aUniCode - bUniCode;
        }

        return pos;
    }

    /**
     * Reverse a doubly linkedlist
     */
    reverse() {
        let counter = 0;
        let current = this.head;
        this.tail = this.head;

        // so loop through all
        while (
            counter < 10 &&
            current !=  null
        ) {
            counter++;
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;

            if (current.prev) {
                current = current.prev;
            } else {
                this.head = current;
                break;
            }
        }

        return this.tail;
    }

    /**
     * Insert a node in a Doubly Linked List
     * @param {string} data
     * @returns {DoublyLinkedListNode} head - Head node
     */
    insert(data: any): DoublyLinkedListNode {
        let counter = 0; // prevent from crashing
        let newNode = new DoublyLinkedListNode(data);
        let hasCycle = true;

        // 1) If Linked list is empty then make the node as
        // head and return it.
        if (this.head === null) {
            this.head = newNode;
            this.total++;
            return this.head;
        } else {
            // 2 If the new node comes before the head node
            // then insert the new node at start and make it head.

            let order = this.compareString(newNode.data, this.head.data);
            if (order === -1) {
                // if the newNode comes before the head node
                console.log( newNode.data + ' comes before the head ' + this.head.data);
                newNode.next = this.head;
                newNode.prev = null;
                if (hasCycle) newNode.prev = this.head;
                this.head.prev = newNode;
                this.head = newNode;
                this.total++;
                return this.head;
            } else {

                // 3) In a loop, find the appropriate node after
                // which the newNode is to be inserted.
                // To find the appropriate node start from head,
                // keep searching until you reach a node who comes
                // after the newNode. / So the new node should be
                // equal or bigger than the current.next.
                let current = this.head;
                while (counter < 10
                    && current.next !== null
                    && this.compareString(newNode.data, current.next.data) > -1
                    ) {
                        counter++;
                        current = current.next;
                }
                // 4) After we found the node, we can set the prev & next
                // attributes of the newNode.
                newNode.prev = current;
                newNode.next = current.next;

                // insert the new node, to walk into next.
                current.next = newNode;
                this.total++;
                return this.head;
            }
        }
    }
}

export class SinlyLinkedList {
    private head: SinlyLinkedListNode;
    public total: number;
    constructor() {
        this.head = null; // when created the linkedlist is empty
        this.total = 0;
    }

   /**
     * Return true if this list contains a cycle
     */
    hasCycle() {
        let hashmap = {};
        let current = this.head;
        while (current.next != null) {
            if (hashmap['' + current.data]) {
                return true;
            }
            hashmap['' + current.data] = current.data;
            current = current.next;
        }
        return false;
    }

    /**
    * insert a SinglyLinkedListNode in a position of the linkedlist
	* if no position was given, insert in front
	* @param {string} data - the data to put in the list
	* @param {number} position - position zero based, default is 0,
    * begin of the linkedlist
    */
    insert(data: string, position: number = 0): SinlyLinkedListNode {
        let posCounter = 1;
        let current = this.head;
        let newNode = new SinlyLinkedListNode(data);
        let hasCycle = false;
        if (current != null) {
            // we will need to insert the node somewhere
            // because there is already a node before
            if (position === 0) {
                // insert it in the front
                // the newNode will need to point to the current node
                newNode.next = current;
                this.head = newNode;
            } else {
                // the head exists f.e. 1 of - > 2 - > 3
                // keep checking for current.next, until it's null, cause
                // because then it is the last (tail)
                while (current.next !== null) {
                    posCounter++;
                    if (posCounter === position) {
                        // f.e. 1(0) - > 2(1) (current) -> 4 (2) <HERE> - > 3
                        // insert the new node on this position
                        // first store the one that actually will come after
                        let temp = current.next;
                        // this is where the next node will point to
                        newNode.next = temp;
                        current.next = newNode;
                    }
                    current = current.next; // we need this in order to break out
                    // of the while. the while keeps checking if the
                    // current next is finally null (so the last)
                }

                if (hasCycle) {
                    newNode.next = this.head;
                }

            }
        } else {
            // there is no head node, so the newNode will become this one
            this.head = newNode;
        }
        // the next node (so the node after the current) will need to point to the new node
        this.total++;
        return this.head;
    }
}
