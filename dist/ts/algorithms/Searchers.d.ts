/**
 * Array Searchers
 * @class Searchers
 * @author Lee Boonstra
 */
export declare class Searchers {
    /**
     * Linear Search a search algorithm that works with sorted and unsorted data.
     * It's basically an interation over the array with a for loop.
     *
     * O(n)
     * @param {Array<any>} array - array with values
     * @param {string} search - string to be found
     * @returns {number} position - position of the value in the sorted array.
     */
    linear(array: Array<any>, search: string): number;
    /**
     * Binary Search a search algorithm that only works on sorted data.
     * The idea is to get the middle as a pivot. See if the desired number
     * is smaller or greater than the middle. If it's smaller look in the
     * smaller part. Repeat this proccess till the value is found.
     * Just create a while loop with the condition start <= end. Keep modifying
     * the start and end variables with the value of middle.
     *
     * O(log(n))
     * @param {Array<number>} sortedArray - sorted array with numbers
     * @param {number} value - number to be found
     * @returns {number} position - position of the value in the sorted array.
     */
    binary(sortedArray: Array<number>, value: number): number;
}
