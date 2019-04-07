import { Searchers } from '../ts/algorithms/Searchers';

describe('Linear Search', () => {
    let searcher = new Searchers();
    let array1 = ["lee", "michele", "appello"];
    let array = ["1", "2", "3", "4", "5"];
    it('searcher.linear(array, s) - Find a value in an array.', () => {
        expect(searcher.linear(array1, 'lee')).toEqual(0);
    });
    it('searcher.linear(array, s) -Find a value in an array.', () => {
        expect(searcher.linear(array, '3')).toEqual(2);
    });
    it('searcher.linear(array, s) -Can not find a value in an array.', () => {
        expect(searcher.linear(array, '6')).toEqual(-1);
    });
});

describe('Binary Search', () => {
    let searcher = new Searchers();
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    it('searcher.binary(array, s) - Find a value in an array.', () => {
        expect(searcher.binary(array, 2)).toEqual(1);
    });
    it('searcher.binary(array, s) - Find a value in an array.', () => {
        expect(searcher.binary(array, 1)).toEqual(0);
    });
    it('searcher.binary(array, s) - Find a value in an array.', () => {
        expect(searcher.binary(array, 5)).toEqual(4);
    });
    it('Find a value in an array.', () => {
        expect(searcher.binary(array, 8)).toEqual(7);
    });
    it('searcher.binary(array, s) - Find a value in an array.', () => {
        expect(searcher.binary(array, 10)).toEqual(9);
    });
    it('searcher.binary(array, s) - Can not find a value in an array.', () => {
        expect(searcher.binary(array, 11)).toEqual(-1);
    });
});