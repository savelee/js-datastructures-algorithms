/**
 * Simple Associative Array / Dictionary
 * @class SimpleDict
 * @author: Lee Boonstra
 *
 * A simple Associative Array / Matrix
 * Slow O(n)
*/
export declare class SimpleDict {
    private keys;
    private values;
    private total;
    constructor();
    /**
    * Set key value pair in SimpleDict
    * O(1)
    * @param {string} key - the key value
    * @param {any} value - the value
    * @returns {Boolean} true if succesful created
    */
    set(key: string, value: any): Boolean;
    /**
    * Remove key value pair in SimpleDict
    * O(n)
    * @param {string} key - the key value
    * @returns {Boolean} true if succesful removed
    */
    remove(key: string): Boolean;
    /**
    * Get value from SimpleDict
    * O(n)
    * @param {string} key - the key value
    * @returns {any} value - the value that belongs to the key
    */
    get(key: string): any;
    /**
      * Check if the key exist.
      * Returns a boolean asserting whether a key is present in the Map.
      *
      * @param {string} key - the key
      * @return {boolean} isExisting - Boolean, returns true if value exists in Map.
      */
    hasKey(key: string): Boolean;
    /**
    * Get total size from SimpleDict
    * O(1)
    * @returns {number} total - the size of the SimpleDict
    */
    size(): number;
    /**
    * Checks if SimpleDict is empty
    * O(1)
    * @returns {boolean} isEmpty
    */
    isEmpty(): boolean;
    /**
    * Clear the SimpleDict
    * O(1)
    * @returns {number} total - the size of the SimpleDict
    */
    clear(): number;
}
