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
export declare class HashTable {
    private table;
    private total;
    bucketSize: number;
    private probe;
    private uniqueKeys;
    /**
     * @param {Object} opt - (optional)
     * @param {boolean} opt.probe - enable probing default false
     * @param {number} opt.bucketSize - if bucketSize set, create max HashTable buckets total. Less buckets is higher chance on collisions. Default 0, use good hashing function.
     * @param {boolean} opt.uniqueKeys - skip duplicate key names so keys are unique default true
     */
    constructor(opt: any);
    /**
     * Check if the key exist. If not, add a key value pair
     *
     * @param  {string} key - String name key will be used as key and value
     * @param  {string} value - String name value will be used as key and value
     */
    put(key: string, value: string): boolean;
    /**
     * Remove key value pair from the HashMap. When Collision with LinkedList is enabled, it will remove all occurences.
     * When not probing best case O(1) worst case O(n).
     *
     * @param  {string} key - String name key will be used as key and value
     */
    remove(key: string): boolean;
    /**
     * Check if the hash exist.
     * Returns a boolean asserting whether a key is present in the Map.
     *
     * @param {number} hash - the hash
     * @return {boolean} isExisting - Boolean, returns true if value exists in Map.
     */
    hasHash(hash: number): boolean;
    /**
     * Get the KeyValue Object pair from a specific key
     * When not probing best case O(1) worst case O(n)
     *
     * @param {string} key - the key
     * @return {Object | Array } return KeyValue Object or incase of LinkedList collision, an array with multiples.
     */
    get(key: string): any;
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
    hashCode(key: string): number;
}
