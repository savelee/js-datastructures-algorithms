import { Sorters } from '../ts/algorithms/Sorters';

describe('Count Sort', () => {
    let sorters = new Sorters();
    let array = [1, 3, 3, 8, 6, 1, 0, 9];
    let sorted = [0, 1, 1, 3, 3, 6, 8, 9];

    it('sorter.countsort(array) - Sort a number array.', () => {
        expect(sorters.countsort(array)).toEqual(sorted);
    });
});

describe('Quick Sort', () => {
    let sorters = new Sorters();
    let array = [1, 3, 3, 8, 6, 1, 0, 9];
    let sorted = [0, 1, 1, 3, 3, 6, 8, 9];

    it('sorter.quicksort(array) - Sort a number array.', () => {
        expect(sorters.quicksort(array)).toEqual(sorted);
    });
});


describe('Merge Sort', () => {
    let sorters = new Sorters();
    let array = [1, 3, 3, 8, 6, 1, 0, 9];
    let sorted = [0, 1, 1, 3, 3, 6, 8, 9];

    it('sorter.mergesort(array) - Sort a number array.', () => {
        expect(sorters.mergesort(array)).toEqual(sorted);
    });
});

describe('Bubble Sort', () => {
    let sorters = new Sorters();
    let array = [1, 3, 3, 8, 6, 1, 0, 9];
    let sorted = [0, 1, 1, 3, 3, 6, 8, 9];

    it('sorter.bubblesort(array) - Sort a number array.', () => {
        expect(sorters.bubblesort(array)).toEqual(sorted);
    });
});