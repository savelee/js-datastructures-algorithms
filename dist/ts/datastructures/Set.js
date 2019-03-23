"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Set {
    constructor() {
        this.items = {}; // note it's an object, so you can store only one key.
        this.total = 0;
    }
    /**
     * Check if the value exist. If not, add it to the set.
     *
     * @param  {string} element - String name value will be used as key and value
     */
    add(value) {
        let isCreated = false;
        if (!this.has(value)) {
            this.items[this.total] = value;
            isCreated = true;
            this.total++;
        }
        return isCreated;
    }
    /**
     * Remove value from the set
     *
     * @param {string} value - String name value will be used as key and value
     */
    delete(value) {
        let isRemoved = false;
        if (this.has(value)) {
            delete this.items[value];
            isRemoved = true;
            this.total--;
        }
        return isRemoved;
    }
    /**
     * Check if the value exist.
     * Returns a boolean asserting whether an element is present with the given value in the Set object or not.
     *
     * @param {string} value - the value
     * @return {boolean} isExisting - Boolean, returns true if value exists in Set.
     */
    has(value) {
        let isExisting = false;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                if (this.items[key] === value) {
                    if (parseInt(key) <= this.size()) {
                        isExisting = true;
                    }
                }
            }
        }
        return isExisting;
    }
    /**
     * Returns an array with all the keys of the Set
     *
     * @return {array} keys - Array with all the keys of the set
     */
    keys() {
        let arr = [];
        for (let item in this.items) {
            arr.push(item);
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
    clear() {
        this.items = {};
        this.total = 0;
    }
    /**
    * Returns the number of values in the Set object.
    *
    * @return {number} total - Total amount of items in Set
    */
    size() {
        return this.total;
    }
    /**
     * Executes the callback function, for each item in the Set.
     *
     * @param {function} callback(key, val, set) - Callback function with 3 args key, value and set.
     */
    forEach(callback) {
        for (let key in this.items) {
            callback(key, this.items[key], this.items);
        }
    }
    /**
    * Check if the Stack is empty. Returns true if the stack has no items
    * Take O(1) time. We do not run any loop in any of these operations.
    *
    * @returns {boolean} isEmpty - if the Stack is empty or not
    */
    isEmpty() {
        return (this.total === 0);
    }
    /**
     * Given two sets, this returns a new set of elements from both of the given sets.
     *
     * @param {Set} otherSet - Another Set
     * @return {Set} unionSet - Return a combined set.
     */
    union(otherSet) {
        let unionSet = new Set();
        this.forEach(function (key, val, set) {
            unionSet.add(val);
        });
        otherSet.forEach(function (key, val, set) {
            unionSet.add(val);
        });
        return unionSet;
    }
    /**
     * Given two sets, this returns a new set from elements that exist in both sets.
     *
     * @param {Set} otherSet - Another Set
     * @return {Set} intersection - Return a intersection set.
     */
    intersection(otherSet) {
        let intersection = new Set();
        this.forEach(function (key, val, set) {
            if (otherSet.has(val)) {
                intersection.add(val);
            }
        });
        return intersection;
    }
    /**
     * Given two sets, this returns a new set with all the elements that
     * exist in your set but not in the other set.
     *
     * @param {Set} otherSet - Another Set
     * @return {Set} difference - Return a difference set.
     */
    difference(otherSet) {
        let difference = new Set();
        this.forEach(function (key, val, set) {
            if (!otherSet.has(val)) {
                difference.add(val);
            }
        });
        return difference;
    }
    /**
     * Given two sets, confirm with a boolean if this is a subset of another set.
     *
     * @param {Set} otherSet - Another Set
     * @return {boolean} isSubset - Return boolean true if this is a subset.
     */
    isSubset(otherSet) {
        let isSubset = false;
        let counter = 0;
        // if this set is bigger than the other set, it can't be a subset
        if (this.size() <= otherSet.size()) {
            // loop through all items, and check if my values
            // also exist in the other set.
            // all values will need to exist.
            this.forEach(function (key, val, set) {
                if (otherSet.has(val)) {
                    counter++;
                }
            });
        }
        if (counter === this.size()) {
            isSubset = true;
        }
        return isSubset;
    }
}
exports.Set = Set;
//# sourceMappingURL=Set.js.map