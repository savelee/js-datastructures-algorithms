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


describe('tree traversal', () => {
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

    it('tree.traverse(): inorder', () => {
        expect(t.traverse({
            'method': 'inOrder'
          }).toString()).toBe('9,12,14,17,19,23,50,63,77');
    });
    it('tree.traverse(): preorder', () => {
        expect(t.traverse({
            'method': 'preOrder'
          }).toString()).toBe('50,17,12,9,14,23,19,63,77');
    });
    it('tree.traverse(): postorder', () => {
        expect(t.traverse({
            'method': 'postOrder'
          }).toString()).toBe('9,14,12,19,23,17,77,63,50');
    });
    it('tree.traverse(): levelorder', () => {
        expect(t.traverse({
            'method': 'levelOrder'
          }).toString()).toBe('50,17,63,12,23,77,9,14,19');
    });
});