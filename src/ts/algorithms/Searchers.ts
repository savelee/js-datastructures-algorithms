/**
 * Array Searchers
 * @class Searchers
 * @author Lee Boonstra
 */
export class Searchers {

    /**
     * Linear Search a search algorithm that works with sorted and unsorted data.
     * It's basically an interation over the array with a for loop.
     *
     * O(n)
     * @param {Array<any>} array - array with values
     * @param {string} search - string to be found
     * @returns {number} position - position of the value in the sorted array.
     */
    public linear(array: Array<any>, search: string): number {
        let position = -1;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === search) {
                return i;
            }
        }

        return position;
    }

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
    public binary(sortedArray: Array<number>, value: number): number {
        let start = 0;
        let end = sortedArray.length - 1;

        // the value doesn't exist in the array, so don't search
        if (value > sortedArray[end]) return -1;
        // the value is the same as the last value, so return end
        if (value === sortedArray[end]) return end;
        // the value is the same as the first value, so return first
        if (value === sortedArray[start]) return start;

        while (start < end) {
            let middle = Math.floor((start + end) / 2);
            if (sortedArray[middle] === value) {
                // the value is the same as sortedArray[middle]
                // so found, set the position.
                return middle;
            } else if (value > sortedArray[middle]) {
                // the value can be found in the right side array
                start = middle;
            } else {
                // the value can be found in the left side of the array
                end = middle;
            }
        }
    }

}