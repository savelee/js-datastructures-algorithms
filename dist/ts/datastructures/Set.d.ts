/**
 * Set Data Structure
 * @class Set
 * @author Lee Boonstra
 *
 *      # What do we know about Sets?
 *      Set objects are collections of values.
 *      You can iterate through the elements of a set in insertion order.
 *      A value in the Set may only occur once; it is unique in the Set's collection.
 *      Because each value in the Set has to be unique, the value equality will be checked.
 *
 *      Since Set only contains distinct elements, it makes life much easier if we know in advance
 *      we want to avoid saving duplicate data to our structure.
 *      In Mathematics, it has concepts such as union, difference and intersection.
 *
 */
export declare class Set {
    private items;
    private total;
    constructor();
    /**
     * Check if the value exist. If not, add it to the set.
     *
     * @param  {string} element - String name value will be used as key and value
     */
    add(value: string): boolean;
    /**
     * Remove value from the set
     *
     * @param {string} value - String name value will be used as key and value
     */
    delete(value: string): boolean;
    /**
     * Check if the value exist.
     * Returns a boolean asserting whether an element is present with the given value in the Set object or not.
     *
     * @param {string} value - the value
     * @return {boolean} isExisting - Boolean, returns true if value exists in Set.
     */
    has(value: string): Boolean;
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
     * Executes the callback function, for each item in the Set.
     *
     * @param {function} callback(key, val, set) - Callback function with 3 args key, value and set.
     */
    forEach(callback: Function): void;
    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @returns {boolean} isEmpty - if the Stack is empty or not
    */
    isEmpty(): Boolean;
    /**
     * Given two sets, this returns a new set of elements from both of the given sets.
     *
     * @param {Set} otherSet - Another Set
     * @return {Set} unionSet - Return a combined set.
     */
    union(otherSet: Set): Set;
    /**
     * Given two sets, this returns a new set from elements that exist in both sets.
     *
     * @param {Set} otherSet - Another Set
     * @return {Set} intersection - Return a intersection set.
     */
    intersection(otherSet: Set): Set;
    /**
     * Given two sets, this returns a new set with all the elements that
     * exist in your set but not in the other set.
     *
     * @param {Set} otherSet - Another Set
     * @return {Set} difference - Return a difference set.
     */
    difference(otherSet: Set): Set;
    /**
     * Given two sets, confirm with a boolean if this is a subset of another set.
     *
     * @param {Set} otherSet - Another Set
     * @return {boolean} isSubset - Return boolean true if this is a subset.
     */
    isSubset(otherSet: Set): boolean;
}
