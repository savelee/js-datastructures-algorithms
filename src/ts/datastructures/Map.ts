/**
 * Map Data Structure
 * @class Map
 * @author Lee Boonstra
 *
 *      # What do we know about Map?
 *      Set objects are collections of key value pairs
 *      The key can be used to find a particular element.
 *      Other names are Dictionary, Symbol table or Associative Arrays
 *
 *      In computer science, maps are often used to store the refefence address of an object.
 *      For example, look in your Developer Tools, Memory tab and look at the Snapshots
 */
export class Map {
    private items: Object;
    private total: number;

    constructor() {
        this.items = {}; // note it's an object, so you can store only one key.
        this.total = 0;
    }

    /**
     * Check if the key exist. If not, add a key value pair
     *
     * @param  {string} key - String name key will be used as key and value
     * @param  {string} value - String name value will be used as key and value
     */
    set(key: string, value: string) {
        let isCreated = false;
        if (!this.hasKey(key.toString())) {
            this.items[key] = value;
            isCreated = true;
            this.total++;
        }
        return isCreated;
    }

    /**
     * Remove value from the set
     *
     * @param  {string} key - String name key will be used as key and value
     */
    remove(key: string) {
        let isRemoved = false;
        if (this.hasKey(key.toString())) {
            delete this.items[key];
            isRemoved = true;
            this.total--;
        }
        return isRemoved;
    }

    /**
     * Check if the key exist.
     * Returns a boolean asserting whether a key is present in the Map.
     *
     * @param {string} key - the key
     * @return {boolean} isExisting - Boolean, returns true if value exists in Map.
     */
    hasKey(key: string): Boolean {
        let isExisting = false;
        if (this.items[key]) {
            isExisting = true;
        }
        return isExisting;
    }

    /**
     * Get the value from a specific key
     *
     * @param {string} key - the key
     * @return {string} value - the value from the key
     */
    get(key: string): String {
        return this.items[key.toString()];
    }

    /**
     * Returns an array with all the keys of the Set
     *
     * @return {array} keys - Array with all the keys of the set
     */
    keys() {
        let arr = [];
        for (let item in this.items) {
            arr.push(item)
        }

        return arr;
    }

    /**
     * Returns an array with all the values of the Set
     *
     * @return {array} values - Array with all the values of the set
     */
    values() {
        let arr = [];
        for (let item in this.items) {
            arr.push(this.items[item]);
        }

        return arr;
    }

    /**
    * Removes all elements from the Set object.
    */
    clear(): void {
        this.items = {};
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
        for (let key in this.items) {
            callback(key, this.items[key], this.items);
        }
    }
}
