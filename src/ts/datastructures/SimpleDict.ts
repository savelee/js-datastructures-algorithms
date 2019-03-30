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
    * @param {any} value - the value
    * @returns {Boolean} true if succesful created
    */
    set(key: string, value: any): Boolean {
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
    * @returns {any} value - the value that belongs to the key
    */
    get(key: string): any {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] === key) {
                return this.values[i];
            }
        }
    }

   /**
     * Check if the key exist.
     * Returns a boolean asserting whether a key is present in the Map.
     *
     * @param {string} key - the key
     * @return {boolean} isExisting - Boolean, returns true if value exists in Map.
     */
    hasKey(key: string): Boolean {
        return (this.get(key) ? true : false);
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