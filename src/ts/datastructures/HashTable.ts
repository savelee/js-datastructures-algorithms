import { LinkedList } from "./LinkedList";

/**
 * Simple Associative Array / Dictionary
 * @class SimpleDict
 * @author: Lee Boonstra
 *
 * A simple Associative Array / Matrix
 * Slow O(n)
*/
export class SimpleDict {
    private keys: any[];
    private values: any[];
    private total: number;

    constructor() {
        this.keys = [];
        this.values = [];
        this.total = 0;
    }

    /**
    * Set key value pair in SimpleDict
    * O(1)
    * @param {string} key - the key value
    * @param {string} value - the value
    * @returns {Boolean} true if succesful created
    */
    set(key: string, value: string): Boolean {
        this.keys.push(key);
        this.values.push(value);
        this.total++;

        return true;
    }

    /**
    * Remove key value pair in SimpleDict
    * O(n)
    * @param {string} key - the key value
    * @returns {Boolean} true if succesful removed
    */
    remove(key: string): Boolean {
        let isRemoved = false;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] === key) {
                delete this.keys[i];
                delete this.values[i];
                this.total--;
                isRemoved = true;
            }
        }
        return isRemoved;
    }

    /**
    * Get value from SimpleDict
    * O(n)
    * @param {string} key - the key value
    * @returns {string} value - the value that belongs to the key
    */
    get(key: string): string {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] === key) {
                return this.values[i];
            }
        }
    }

    /**
    * Get total size from SimpleDict
    * O(1)
    * @returns {number} total - the size of the SimpleDict
    */
    size(): number {
        return this.total;
    }

    /**
    * Checks if SimpleDict is empty
    * O(1)
    * @returns {boolean} isEmpty
    */
    isEmpty(): boolean {
        return this.total === 0;
    }

    /**
    * Clear the SimpleDict
    * O(1)
    * @returns {number} total - the size of the SimpleDict
    */
    clear(): number {
        this.keys = [];
        this.values = [];
        this.total = 0;
        return this.total;
    }
}

/**
 * HashTable Data Structure
 * @class HashTable
 * @author Lee Boonstra
 *
 *      # What do we know about HashMap?
 *      Very similar to Maps/Associative Arrays, for storing
 *      key value pairs. You can find a stored value in the shortest
 *      time possible, O(1), rather than looping though each
 *      array value O(n) or using a sorted binary array
 *      or Tree O(log n).
 *
 *      Think about a student is assigned a student number
 *      that can be used to find information about him.
 *
 *      To make sure all key values in a HashTable are short
 *      as possible, and are integers to do fast lookup,
 *      we will need a hashing function.
 *      You will need to find a good hashing function, one
 *      that doesn't take too long to create a hash (when inserting/
 *      getting or removing). But you also don't want to make it
 *      to simple so you create collisions.
 *
 *      Although hash tables provide fast insertion, deletion, and retrieval,
 *      they perform poorly for operations that involve searching, such as finding the
 *      minimum and maximum values in a data set. For these operations, other data structures
 *      such as the binary search tree are more appropriate. Access and Deletion in worst case O(n)
 *
 *      ## Real world examples in Software Engineering?
 *      Browser vendors use hashtables a lot.
 *      But also when you use a database, you would set indexes to allow faster searching
 *
 */
export class HashTable {
    private table: any[];
    private total: number;
    public bucketSize: number;
    private probe: boolean;
    private uniqueKeys: boolean;

    /**
     * @param {Object} opt - (optional)
     * @param {boolean} opt.probe - enable probing default false
     * @param {number} opt.bucketSize - if bucketSize set, create max HashTable buckets total. Less buckets is higher chance on collisions. Default 0, use good hashing function.
     * @param {boolean} opt.uniqueKeys - skip duplicate key names so keys are unique default true
     */
    constructor(opt: any) {
        this.table = [];
        this.total = 0;
        this.bucketSize = (opt.bucketSize || 0);
        this.probe = (opt.probe || false);
        this.uniqueKeys = (opt.uniqueKeys || true)
    }

    /**
     * Check if the key exist. If not, add a key value pair
     *
     * @param  {string} key - String name key will be used as key and value
     * @param  {string} value - String name value will be used as key and value
     */
    put(key: string, value: string) {
        let isCreated = false;
        let hash = this.hashCode(key);
        if (!this.hasHash(hash)) {
            this.table[hash] = new SimpleDict();
            this.table[hash].set(key, value);
            isCreated = true;
            this.total++;
        } else {
            if (this.probe) {
                let index = hash + 1;
                while (this.table[index] !== undefined) {
                    index++;
                }
                this.table[index] = new SimpleDict();
                this.table[index].set(key, value);
                isCreated = true;
                this.total++;
            } else {
                // the hash already exists
                if (this.uniqueKeys && this.table[hash].keys[0] === key) {
                    // but the key is not unique
                    // please skip duplicate
                    console.error(key + ' already exists in HashTable, so skipped.');
                } else {
                    // now I want not a SimpleDict but an Array
                    if (this.table[hash].constructor === SimpleDict) {
                        let current = this.table[hash];
                        this.table[hash] = []; // TODO or a LinkedList
                        this.table[hash].push(current);
                    }
                    // its an array, add the new item
                    let newItem = new SimpleDict();
                    newItem.set(key, value);
                    this.table[hash].push(newItem);
                    isCreated = true;
                    this.total++;
                }
            }
        }

        return isCreated;
    }



    /**
     * Remove key value pair from the HashMap. When Collision with LinkedList is enabled, it will remove all occurences.
     * When not probing best case O(1) worst case O(n).
     *
     * @param  {string} key - String name key will be used as key and value
     */
    remove(key: string) {
        let isRemoved = false;
        let hash = this.hashCode(key);
        // when probing is enabled, and the table size doesn't match
        // the bucket size, we will need to probe again to find
        // the key back.
        if (this.probe && (this.table.length !== this.bucketSize)) {
            let index = hash;
            // keep looping through you find the key
            while (this.table[index].keys[0] !== key) {
                index++;
            }
            this.table[index].remove(key);
            isRemoved = true;
            this.total--;
        } else {
            this.table[hash].remove(key);
            isRemoved = true;
            this.total--;
        }

        return isRemoved;
    }

    /**
     * Check if the hash exist.
     * Returns a boolean asserting whether a key is present in the Map.
     *
     * @param {number} hash - the hash
     * @return {boolean} isExisting - Boolean, returns true if value exists in Map.
     */
    hasHash(hash: number): boolean {
        let isExisting = false;
        if (this.table[hash]) {
            isExisting = true;
        }
        return isExisting;
    }

    /**
     * Get the KeyValue Object pair from a specific key
     * When not probing best case O(1) worst case O(n)
     *
     * @param {string} key - the key
     * @return {Object | Array } return KeyValue Object or incase of LinkedList collision, an array with multiples.
     */
    get(key: string) {
        let hash = this.hashCode(key);
        let itemValue = undefined;

        // when probing is enabled, and the table size doesn't match
        // the bucket size, we will need to probe again to find
        // the key back.
        if (this.probe && (this.table.length !== this.bucketSize)) {
            let index = hash;
            // keep looping through you find the key
            while (this.table[index].keys[0] !== key) {
                index++;
            }
            itemValue = this.table[index].get(key);
        } else {
            if (this.table[hash].constructor === SimpleDict) {
                itemValue = this.table[hash].get(key);
            } else {
                // there are multiples with this hash
                // so we have to loop
                let i = 0;
                while (key !== this.table[hash][i].keys[0]) {
                    i++;
                }
                itemValue = this.table[hash][i].get(key);
            }
        }

        return itemValue;
    }

    /**
    * Removes all elements from the Set object.
    */
    clear(): void {
        this.table = [];
        this.total = 0;
    }

    /**
    * Returns the number of values in the Set object.
    *
    * @return {number} total - Total amount of items in Set
    */
    size(): number {
        return this.total;
    }

    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @returns {boolean} isEmpty - if the Stack is empty or not
    */
    isEmpty(): Boolean {
        return (this.total === 0);
    }

   /**
    * Executes the callback function, for each item in the Set.
    *
    * @param {function} callback(key, val, set) - Callback function with 3 args key, value and set.
    */
    forEach(callback: Function) {
        for (let key in this.table) {
            callback(key, this.table[key], this.table);
        }
    }

    /**
     * Create a hash based on a key string
     * The Hash-function takes a key and converts it to a number which will be the index at which to store it.
     * I am computing a hash value by summing the ASCII value of each character of the string
     * , multiplying the ASCII value by a multiplier 'code', which in this case, is an odd prime 37.
     * And the reason to choose 37 being, by some empirical research, if we take over 50,000 English words
     * will produce less than 7 collisions in each case, while creating a hasing function.
     *
     * @param {string} key - the key
     */
    hashCode(key: string): number {
        let hash = 0;
        const code = 37;
        for (let i = 0; i < key.length; i++) {
          hash += code * hash + key.charCodeAt(i);
        }
        if (this.bucketSize !== 0) {
            hash = hash % this.bucketSize;
        }
        return hash;
    }
}
