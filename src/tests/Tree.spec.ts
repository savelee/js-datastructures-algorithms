import { BinarySearchTree } from '../ts/datastructures/Tree';

describe('tree.insert() Add keys to a BST', () => {
    let t = new BinarySearchTree();
    t.insert(50);
    t.insert(17);
    t.insert(12);
    t.insert(9);
    t.insert(14);
    t.insert(63);
    t.insert(23);
    t.insert(19);

    it('tree.contains(): Found a value in the left side of the tree', () => {
        expect(t.contains(14)).toBeTruthy();
    });
    it('tree.contains(): Found a value in the right side of the tree', () => {
        expect(t.contains(63)).toBeTruthy();
    });
    it('tree.contains(): Value is not in the tree', () => {
        expect(t.contains(62)).toBeFalsy();
    });
    it('tree.min(): Find the min value in the tree', () => {
        expect(t.min()).toBe(9);
    });
    it('tree.max(): Find the max value in the tree', () => {
        expect(t.max()).toBe(63);
    });
    it('tree.getRootNode(): Find the root node', () => {
        expect(t.getRootNodeValue()).toBe(50);
    });

});

describe('tree.remove() Remove keys from a BST', () => {
    let t = new BinarySearchTree();
    t.insert(50);
    t.insert(17);
    t.insert(12);
    t.insert(9);
    t.insert(14);
    t.insert(63);
    t.insert(77);
    t.insert(23);
    t.insert(19);

    it('tree.min(): Find the min value in the tree', () => {
        t.remove(9);
        expect(t.min()).toBe(12);
    });
    it('tree.max(): Find the max value in the tree', () => {
        t.remove(77);
        expect(t.max()).toBe(63);
    });
    it('tree.getRootNode(): Find the root node', () => {
        t.remove(50);
        expect(t.getRootNodeValue()).toBe(63);
    });

});
