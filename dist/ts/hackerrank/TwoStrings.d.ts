export declare class SubStringSet {
    private items;
    private total;
    constructor();
    /**
     * Add a string to the set, can not be duplicate
     * @param {string} value - a string character
     * returns {Boolean} isAdded - if value has been added to the set.
     */
    add(value: string): Boolean;
    /**
     * Check if value exist in the Set
     * @param {string} value - a string character
     * returns {Boolean} exists - true if value exists in Set
     */
    has(value: string): Boolean;
    /**
     * Get Size
     * returns {number} size - total of items in set
     */
    size(): number;
    /**
      * Return a new set with all the common values
      * @param {Set} otherSet - the otherSet to check on
      * @returns {Set} newSet - set with similarities
      */
    intersection(otherSet: SubStringSet): SubStringSet;
}
