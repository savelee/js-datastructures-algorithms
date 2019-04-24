export class SubStringSet {
    private items: Object;
    private total: number;

    constructor() {
        this.items = {};
        this.total = 0;
    }

    /**
     * Add a string to the set, can not be duplicate
	 * @param {string} value - a string character
	 * returns {Boolean} isAdded - if value has been added to the set.
     */
    add(value: string): Boolean {
        let isExist = false;
        // TODO do a check on space.
        if (!this.has(value)) {
            this.items[value] = 1;
            this.total++;
        } else {
            this.items[value]++;
        }
        return isExist;
    }

    /**
     * Check if value exist in the Set
     * @param {string} value - a string character
     * returns {Boolean} exists - true if value exists in Set
     */
    has(value: string): Boolean {
        let exists = false;
        if (this.items.hasOwnProperty(value)) {
            exists = true;
        }
        return exists;
    }

    /**
     * Get Size
     * returns {number} size - total of items in set
     */
    size(): number {
        return this.total;
    }

    /**
      * Return a new set with all the common values
      * @param {Set} otherSet - the otherSet to check on
      * @returns {Set} newSet - set with similarities
      */
      intersection(otherSet: SubStringSet): SubStringSet {
        let newSet = new SubStringSet();

        for (let myVal in otherSet.items) {
            if (this.has(myVal)) {
                // we need the lowest count
                if (otherSet.items[myVal] > this.items[myVal]) {
                    newSet.items[myVal] = this.items[myVal]
                } else {
                    newSet.items[myVal] = otherSet.items[myVal]
                }
                newSet.total++;
            }
        }

        return newSet;
      }
}
