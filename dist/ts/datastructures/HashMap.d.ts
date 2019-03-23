/**
 * HashMap Data Structure
 * @class HashMap
 * @author Lee Boonstra
 *
 *      # What do we know about HashMap?
 *
 */
export declare class HashMap {
    private items;
    private total;
    constructor();
    /**
     * Check if the key exist. If not, add a key value pair
     *
     * @param  {string} key - String name key will be used as key and value
     * @param  {string} value - String name value will be used as key and value
     */
    set(key: string, value: string): boolean;
    /**
     * Remove value from the set
     *
     * @param  {string} key - String name key will be used as key and value
     */
    remove(key: string): boolean;
    /**
     * Check if the key exist.
     * Returns a boolean asserting whether a key is present in the Map.
     *
     * @param {string} key - the key
     * @return {boolean} isExisting - Boolean, returns true if value exists in Map.
     */
    hasKey(key: string): Boolean;
    /**
     * Get the value from a specific key
     *
     * @param {string} key - the key
     * @return {string} value - the value from the key
     */
    get(key: string): String;
    /**
     * Returns an array with all the keys of the Set
     *
     * @return {array} keys - Array with all the keys of the set
     */
    keys(): string[];
    /**
     * Returns an array with all the values of the Set
     *
     * @return {array} values - Array with all the values of the set
     */
    values(): any[];
    /**
    * Removes all elements from the Set object.
    */
    clear(): void;
    /**
    * Returns the number of values in the Set object.
    *
    * @return {number} total - Total amount of items in Set
    */
    size(): number;
    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @returns {boolean} isEmpty - if the Stack is empty or not
    */
    isEmpty(): Boolean;
    /**
     * Executes the callback function, for each item in the Set.
     *
     * @param {function} callback(key, val, set) - Callback function with 3 args key, value and set.
     */
    forEach(callback: Function): void;
    hash(): string;
}
