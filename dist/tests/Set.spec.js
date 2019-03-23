"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Set_1 = require("../ts/datastructures/Set");
describe('set.add()/set.delete() Add and remove items', () => {
    let set = new Set_1.Set();
    set.add('michele');
    it('set.add(): Add a new item to the set', () => {
        expect(set.add('lee')).toBeTruthy();
    });
    it('set.delete(): Delete an item from the set', () => {
        expect(set.delete('michele')).toBeTruthy();
    });
});
describe('set.add() Create a Set with 4 items', () => {
    let set = new Set_1.Set();
    set.add('lee');
    set.add('michele');
    set.add('Lee');
    set.add('michele');
    it('set.size(): Set has 3 items, skip the duplicates', () => {
        expect(set.size()).toBe(3);
    });
});
describe('set.union(otherSet) Return the union (combined) set from 2 sets', () => {
    let set = new Set_1.Set();
    let otherSet = new Set_1.Set();
    set.add('lee');
    set.add('michele');
    otherSet.add('sander');
    otherSet.add('jake');
    otherSet.add('lee');
    let union = set.union(otherSet);
    it('union.size(): The union set should have 4 items, skipped the 5th', () => {
        expect(union.size()).toBe(4);
    });
});
describe('set.intersection(otherSet) Return the intersection, a new set with values that exist in both)', () => {
    let set = new Set_1.Set();
    let otherSet = new Set_1.Set();
    set.add('lee');
    set.add('michele');
    set.add('jake');
    otherSet.add('sander');
    otherSet.add('jake');
    otherSet.add('lee');
    otherSet.add('maarten');
    let intersection = set.intersection(otherSet);
    it('intersection.size(): The intersection set should have 2 the same items', () => {
        expect(intersection.size()).toBe(2);
    });
});
describe('set.difference(otherSet) Return the difference, a set with values that do not exist in the other set.', () => {
    let set = new Set_1.Set();
    let otherSet = new Set_1.Set();
    set.add('lee');
    set.add('michele');
    set.add('jake');
    otherSet.add('sander');
    otherSet.add('jake');
    otherSet.add('lee');
    otherSet.add('maarten');
    let difference = set.difference(otherSet);
    it('difference.size(): The difference set should contain 1 item', () => {
        expect(difference.size()).toBe(1);
    });
});
describe('set.isSubset(otherSet) Is the otherset a subset of this Set?', () => {
    let set = new Set_1.Set();
    let otherSet = new Set_1.Set();
    set.add('lee');
    set.add('michele');
    set.add('jake');
    otherSet.add('michele');
    otherSet.add('jake');
    otherSet.add('lee');
    otherSet.add('maarten');
    let isSubset = set.isSubset(otherSet);
    it('set.isSubset(otherSet): this set is a subset', () => {
        expect(set.isSubset(otherSet)).toBeTruthy();
    });
});
//# sourceMappingURL=Set.spec.js.map