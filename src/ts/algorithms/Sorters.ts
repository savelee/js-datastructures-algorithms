/**
 * Array Sorters
 * @class Sorters
 * @author Lee Boonstra
 */
export class Sorters {

    public quicksort(array: Array<number>): Array<number> {
        return this._quicksort(array, 0, array.length - 1);
    }

    private _quicksort(array: Array<number>, leftPos: number, rightPos: number): Array<number> {
        if (leftPos === rightPos) {
            console.log(array);
            return array;
        }
        // let pivot = array[Math.ceil(array.length / 2)];
        let pivot = rightPos;
        let index = this._partition(array, leftPos, rightPos, pivot);

        this._quicksort(array, leftPos, index - 1);
        this._quicksort(array, index, rightPos);
    }

    private _partition(array: Array<number>, leftPos: number, rightPos: number, pivot: number): number {
        console.log(array);
        while (leftPos <= rightPos) {
         // we will loop through all the items, bringing the
         // leftPos and the rightPos closer

            while (array[leftPos] < array[pivot]) {
                leftPos++;
            }

            while (array[rightPos] > array[pivot]) {
                rightPos--;
            }

            if (leftPos < rightPos) {
                this._swap(array, leftPos, rightPos);
                leftPos++;
                rightPos--;
            } else {
                return leftPos;
            }

        }

        return leftPos;
    }

    private _swap(array: Array<number>, leftPos: number, rightPos: number) {
        let temp = array[leftPos];
        array[leftPos] = array[rightPos];
        array[rightPos] = temp;
    }
}