/**
 * Array Sorters
 * @class Sorters
 * @author Lee Boonstra
 */
export class Sorters {

    /**
     * Sort an array by counting
     * Count each occurance of the number, add it to a hashtable
     * Loop through through all the keys, to return a sorted array
     * @param {Array<number>} unsortedArray
     * @returns {Array<number} sortedArray
     */
    public countsort(unsortedArray: Array<number>): Array<number> {
        return this._countsort(unsortedArray);
    }

    /**
     * Quicksort - O(nlog(n))
     * Quicksort works by creating a pivot somewhere in the array,
     * ideally in the center. The idea is to divide it in partitions
     * until its all sorted. It's a recursive function that uses divide an concor.
     * @param {Array<number} unsortedArray
     * @returns {Array<number} sorted array
     */
    public quicksort(unsortedArray: Array<number>): Array<number> {
        return this._quicksort(unsortedArray, 0, unsortedArray.length - 1);
    }

    /**
     * BubbleSort - O(n^2)
     * Bubble sorting is the simplest sorting algorithm, it simply iterates over
     * the entire array and swaps elements if one is bigger than the other.* @param {Array<number} unsortedArray
     * @returns {Array<number} sorted array
     */
    public bubblesort(array: Array<number>): Array<number> {
        // loop over all items
        for (let i = 0; i < array.length; i++) {
            // loop again to get the next
            for (let j = 0; j <= i; j++) {
                if (array[i] < array[j]) {
                    this._swap(array, i , j);
                }
            }
        }
        return array;
    }


    /**
     * Mergesort - O(nlog(n))
     * Mergesort works by diving the array into subarrays until each array has only
     * one element. Then each subarray concatenates all in a sorter order.
     * To do this the index of each array can be created to keep track of elements already compared.
     * @param {Array<number>} unsortedArray
     * @returns {Array<number} sorted array
     */
    public mergesort(unsortedArray: Array<number>): Array<number> {
        return this._mergesort(unsortedArray);
    }

    private _countsort(array: Array<number>): Array<number> {
        let sorted = new Array();
        let hashtable = {};

        for (let i = 0; i < array.length; i++) {
            let el = array[i];
            if (hashtable[el]) {
                // count occurance
                hashtable[el]++;
            } else {
                // doesn't exist yet so set to 1.
                hashtable[el] = 1;
            }
        }

        // loop to each collected number
        for (let key in hashtable) {
            let total = hashtable[key];
            // loop through all the occarances
            for (let i = 0; i < total; i++) {
                // push to the sorted array
                sorted.push(parseInt(key))
            }
        }

        return sorted;
    }

    private _quicksort(array: Array<number>, leftPos: number, rightPos: number): Array<number> {
        // when there is just one item, just return the array
        if (array.length > 1) {
            let pivotItem = array[Math.floor((leftPos + rightPos) / 2)];
            let index = this._partition(array, leftPos, rightPos, pivotItem);
            // call quicksort on both particitions.
            if (leftPos < index - 1)
                this._quicksort(array, leftPos, index - 1);
            if (index < rightPos)
                this._quicksort(array, index, rightPos);
        }
        return array;
    }

    private _partition(array: Array<number>, leftPos: number, rightPos: number, pivotItem: number): number {
        while (leftPos <= rightPos) {
            // we will loop through all the items, bringing the
            // leftPos and the rightPos closer
            while (array[leftPos] < pivotItem) {
                leftPos++;
            }

            while (array[rightPos] > pivotItem) {
                rightPos--; // move inwards
            }

            if (leftPos <= rightPos) {
                this._swap(array, leftPos, rightPos);
                leftPos++;
                rightPos--;
            }

        }

        // return the dividing point, this is where left currently is.
        return leftPos;
    }

    private _swap(array: Array<number>, leftPos: number, rightPos: number) {
        let temp = array[leftPos];
        array[leftPos] = array[rightPos];
        array[rightPos] = temp;
    }

    private _mergesort(array: Array<number>): Array<number> {
        // return when the array length is just one,
        // because then it's sorted
        if (array.length < 2) {
            return array;
        }

        // this is recurive, so you will keep chopping
        // till you have smaller left and right arrays
        let middle = Math.floor(array.length / 2),
            leftArray = array.slice(0, middle),
            rightArray = array.slice(middle);
        
        // console.log('middle' + middle);
        // console.log('left array: ' + leftArray);
        // console.log('right array: ' + rightArray);

        let result = this._merge(this.mergesort(leftArray), this.mergesort(rightArray));
        // console.log(result);
        return result;
    }

    // merge halves
    // bring all back in the right order
    private _merge(leftArray: Array<number>, rightArray: Array<number>) {
        let results = [], // temp array
            leftIndex = 0,
            rightIndex = 0;
        
        // keep looping as long as the index of both arrays is smaller than
        // the array length.
        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {

            if (leftArray[leftIndex] < rightArray[rightIndex]) {
                // copying over the smaller elements
                results.push(leftArray[leftIndex++]);
                // console.log('push left ' +  results);
            } else {
                results.push(rightArray[rightIndex++]);
                // console.log('push right ' +  results);
            }

        }

        let leftRemains = leftArray.slice(leftIndex),
            rightRemains = rightArray.slice(rightIndex);

        // console.log('leftRemains' + leftRemains);
        // console.log('rightRemains' + rightRemains);
        // console.log(results);
        //console.log(results.concat(leftRemains).concat(rightRemains));

        // add remaining to the resultant array
        return results.concat(leftRemains).concat(rightRemains);

        
    }
}